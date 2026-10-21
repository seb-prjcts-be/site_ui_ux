<?php
declare(strict_types=1);
require_once __DIR__ . '/course.php';

function course_now(): string
{
    return gmdate('Y-m-d\TH:i:s\Z');
}

function course_event(PDO $db, string $topic, string $type, string $id, string $kind, string $status, string $evidence, string $reviewer, ?string $hash, ?string $checked): void
{
    $q = $db->prepare('INSERT INTO review_events(topic_id,entity_type,entity_id,event_kind,status,evidence,reviewer,content_hash,checked_at,recorded_at) VALUES(?,?,?,?,?,?,?,?,?,?)');
    $q->execute([$topic ?: null, $type, $id, $kind, $status, $evidence, $reviewer, $hash, $checked, course_now()]);
}

function course_initialize(string $destination): array
{
    if (file_exists($destination)) {
        throw new RuntimeException('Initialisatie overschrijft nooit een bestaande database.');
    }
    $seed = course_decode((string)file_get_contents(COURSE_ROOT . '/data/migration-topics.json'));
    $audit = course_decode((string)file_get_contents(COURSE_ROOT . '/data/bronnen/kwaliteitskader-audit-53-20261021.json'));
    $reviews = array_column($audit['records'], null, 'id');
    $db = new PDO('sqlite:' . $destination, null, null, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    $db->exec((string)file_get_contents(COURSE_ROOT . '/database/schema.sql'));
    $db->beginTransaction();
    try {
        $q = $db->prepare('INSERT INTO categories(title,position) VALUES(?,?)');
        foreach ($seed['categories'] as $position => $title) {
            $q->execute([$title, $position]);
        }
        $category = $db->prepare('SELECT id FROM categories WHERE title=?');
        $topicInsert = $db->prepare('INSERT INTO topics(id,position,category_id,stadium,metadata_json) VALUES(?,?,?,?,?)');
        $contentInsert = $db->prepare('INSERT INTO contents(topic_id,lang,html,content_hash,updated_at) VALUES(?,?,?,?,?)');
        $versionInsert = $db->prepare('INSERT INTO content_versions(topic_id,lang,html,content_hash,changed_at,reason) VALUES(?,?,?,?,?,?)');
        $pageInsert = $db->prepare('INSERT INTO page_reviews VALUES(?,?,?,?)');
        $criterionInsert = $db->prepare('INSERT INTO criterion_checks VALUES(?,?,?,?,?,?)');
        $claimInsert = $db->prepare('INSERT INTO claims VALUES(?,?,?,?,?,?,?)');
        foreach ($seed['topics'] as $position => $topic) {
            $id = $topic['id'];
            $record = $reviews[$id] ?? throw new RuntimeException('Ontbrekende review voor ' . $id);
            $html = file_get_contents(COURSE_ROOT . '/' . $topic['contentFile']);
            if ($html === false || hash('sha256', $html) !== $record['sha256']) {
                throw new RuntimeException('Importbron wijkt af van de beoordeelde momentopname: ' . $id);
            }
            $category->execute([$topic['categorie']]);
            $topicInsert->execute([$id, $position, $category->fetchColumn(), $topic['stadium'] ?? null, course_json($topic)]);
            foreach (['nl', 'en'] as $lang) {
                $path = $lang === 'nl' ? $topic['contentFile'] : str_replace('content/', 'content/en/', $topic['contentFile']);
                if (!is_file(COURSE_ROOT . '/' . $path)) {
                    continue;
                }
                $text = (string)file_get_contents(COURSE_ROOT . '/' . $path);
                $hash = hash('sha256', $text);
                $contentInsert->execute([$id, $lang, $text, $hash, course_now()]);
                $versionInsert->execute([$id, $lang, $text, $hash, course_now(), 'Import uit gecontroleerde bestandsmomentopname; geen nieuwe broncontrole']);
            }
            $checked = $record['review_date'] ?? $audit['review_date'];
            $pageInsert->execute([$id, course_json($record), $checked, $record['sha256']]);
            foreach ($record['criteria'] as $criterion => $item) {
                $criterionInsert->execute([$id, $criterion, $item['status'], $item['evidence'], $checked, $record['sha256']]);
            }
            foreach ($record['claims'] as $claim) {
                $verified = in_array($claim['verification'], ['gecontroleerd', 'gedeeltelijk'], true);
                $attempted = $claim['verification'] !== 'open';
                $claimInsert->execute([$claim['id'], $id, course_json($claim), $claim['verification'], $attempted ? $checked : null, $verified ? $checked : null, $record['sha256']]);
                course_event($db, $id, 'claim', $claim['id'], 'import', $claim['verification'], 'Bestaande audit overgenomen; geen nieuwe controle.', $record['reviewer'], $record['sha256'], $verified ? $checked : null);
            }
            course_event($db, $id, 'page', $id, 'import', $record['review_status'], $record['review_scope'], $record['reviewer'], $record['sha256'], $checked);
        }
        unset($audit['records']);
        $meta = $db->prepare('INSERT INTO metadata(key,value) VALUES(?,?)');
        $meta->execute(['audit', course_json($audit)]);
        $meta->execute(['migration', course_json(['schema' => 1, 'imported_at' => course_now(), 'source_commit' => $seed['snapshot'], 'note' => 'Migratie verandert geen inhoudelijke controledatums.'])]);
        $db->commit();
    } catch (Throwable $error) {
        $db->rollBack();
        $db = null;
        // Only the new, explicitly requested destination created by this call.
        unlink($destination);
        throw $error;
    }
    return ['topics' => count($seed['topics']), 'claims' => $audit['claim_annotation_count'], 'database' => $destination];
}

function course_backup(PDO $db): string
{
    $folder = dirname(course_db_path()) . '/backups';
    if (!is_dir($folder) && !mkdir($folder, 0770, true) && !is_dir($folder)) {
        throw new RuntimeException('Back-upmap kon niet worden gemaakt.');
    }
    $path = $folder . '/course-' . gmdate('Ymd-His') . '-' . bin2hex(random_bytes(4)) . '.sqlite';
    $q = $db->prepare('VACUUM INTO ?');
    $q->execute([$path]);
    return $path;
}

function course_set_content(PDO $db, string $id, string $lang, string $html, string $reason): array
{
    if (course_slug($id) === null || !in_array($lang, ['nl','en'], true) || trim($reason) === '' || trim($html) === '' || !preg_match('//u', $html)) {
        throw new InvalidArgumentException('Geldig onderwerp, taal, UTF-8-inhoud en reden zijn vereist.');
    }
    $q = $db->prepare('SELECT id FROM topics WHERE id=?');
    $q->execute([$id]);
    if (!$q->fetchColumn()) {
        throw new InvalidArgumentException('Onbekend onderwerp.');
    }
    $q->closeCursor();
    $current = course_content($db, $id, $lang);
    $hash = hash('sha256', $html);
    if ($current && $current['content_hash'] === $hash) {
        return ['changed' => false, 'hash' => $hash];
    }
    $backup = course_backup($db);
    $db->beginTransaction();
    try {
        $q = $db->prepare('INSERT INTO contents VALUES(?,?,?,?,?) ON CONFLICT(topic_id,lang) DO UPDATE SET html=excluded.html,content_hash=excluded.content_hash,updated_at=excluded.updated_at');
        $q->execute([$id, $lang, $html, $hash, course_now()]);
        $q = $db->prepare('INSERT INTO content_versions(topic_id,lang,html,content_hash,changed_at,reason) VALUES(?,?,?,?,?,?)');
        $q->execute([$id, $lang, $html, $hash, course_now(), $reason]);
        course_event($db, $id, 'content', $id . ':' . $lang, 'content_update', 'hercontrole_nodig', $reason, 'CLI-redactie', $hash, null);
        $db->commit();
    } catch (Throwable $error) {
        $db->rollBack();
        throw $error;
    }
    return ['changed' => true, 'hash' => $hash, 'backup' => $backup, 'note' => 'Bestaande controledatums en beoordeelde hashes zijn niet bijgewerkt.'];
}

function course_record_check(PDO $db, string $type, string $id, ?string $criterion, string $status, string $evidence, string $reviewer): array
{
    if (trim($evidence) === '' || trim($reviewer) === '') {
        throw new InvalidArgumentException('Een controle vraagt een reviewer en inhoudelijke onderbouwing.');
    }
    if ($type === 'claim') {
        if (!in_array($status, ['gecontroleerd','gedeeltelijk','niet_bereikbaar','open'], true)) {
            throw new InvalidArgumentException('Onbekende bronstatus.');
        }
        $q = $db->prepare('SELECT * FROM claims WHERE id=?');
        $q->execute([$id]);
        $item = $q->fetch() ?: throw new InvalidArgumentException('Onbekende claim.');
        $q->closeCursor();
        $topic = $item['topic_id'];
    } elseif ($type === 'criterion') {
        if (!preg_match('/\AK(?:0[1-9]|1[0-2])\z/', $criterion ?? '') || !in_array($status, ['voldoet','deels','open','niet_van_toepassing'], true)) {
            throw new InvalidArgumentException('Ongeldig criterium of status.');
        }
        $q = $db->prepare('SELECT * FROM criterion_checks WHERE topic_id=? AND criterion=?');
        $q->execute([$id, $criterion]);
        $item = $q->fetch() ?: throw new InvalidArgumentException('Onbekende criteriumcontrole.');
        $q->closeCursor();
        $topic = $id;
    } else {
        throw new InvalidArgumentException('Gebruik claim of criterion.');
    }
    $content = course_content($db, $topic) ?? throw new RuntimeException('Inhoud ontbreekt.');
    $backup = course_backup($db);
    $now = course_now();
    $db->beginTransaction();
    try {
        if ($type === 'claim') {
            $verified = in_array($status, ['gecontroleerd','gedeeltelijk'], true);
            $json = course_decode($item['claim_json']);
            $json['last_review_evidence'] = $evidence;
            $json['last_reviewer'] = $reviewer;
            $q = $db->prepare('UPDATE claims SET verification=?,claim_json=?,last_attempted_at=?,last_checked_at=?,checked_hash=? WHERE id=?');
            $q->execute([$status, course_json($json), $now, $verified ? $now : $item['last_checked_at'], $verified ? $content['content_hash'] : $item['checked_hash'], $id]);
        } else {
            $q = $db->prepare('UPDATE criterion_checks SET status=?,evidence=?,last_checked_at=?,checked_hash=? WHERE topic_id=? AND criterion=?');
            $q->execute([$status, $evidence, $now, $content['content_hash'], $topic, $criterion]);
        }
        course_event($db, $topic, $type, $type === 'claim' ? $id : $criterion, 'check', $status, $evidence, $reviewer, $content['content_hash'], $now);
        $db->commit();
    } catch (Throwable $error) {
        $db->rollBack();
        throw $error;
    }
    return ['type' => $type, 'id' => $id, 'status' => $status, 'recorded_at' => $now, 'backup' => $backup, 'note' => 'Alleen deze controle bijgewerkt; overige criteria en pagina-review behouden hun datum.'];
}

function course_record_page_check(PDO $db, string $id, string $scope, string $evidence, string $reviewer): array
{
    if (trim($scope) === '' || trim($evidence) === '' || trim($reviewer) === '') {
        throw new InvalidArgumentException('Een paginareview vraagt scope, bewijs en reviewer.');
    }
    $review = course_review($db, $id) ?? throw new InvalidArgumentException('Onbekend onderwerp.');
    $content = course_content($db, $id);
    $backup = course_backup($db);
    $now = course_now();
    $db->beginTransaction();
    try {
        $review['review_scope'] = $scope;
        $review['reviewer'] = $reviewer;
        $review['review_date'] = $now;
        $review['last_page_review_evidence'] = $evidence;
        $q = $db->prepare('UPDATE page_reviews SET review_json=?,last_checked_at=?,checked_hash=? WHERE topic_id=?');
        $q->execute([course_json($review), $now, $content['content_hash'], $id]);
        course_event($db, $id, 'page', $id, 'check', 'beoordeeld_binnen_scope', $scope . ' ' . $evidence, $reviewer, $content['content_hash'], $now);
        $db->commit();
    } catch (Throwable $error) {
        $db->rollBack();
        throw $error;
    }
    return ['topic' => $id, 'last_checked_at' => $now, 'scope' => $scope, 'backup' => $backup, 'note' => 'Bronclaims en afzonderlijke criteriumcontroles zijn niet vernieuwd.'];
}
