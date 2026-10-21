<?php
declare(strict_types=1);

const COURSE_ROOT = __DIR__ . '/..';

function course_db_path(): string
{
    return getenv('COURSE_DB_PATH') ?: COURSE_ROOT . '/data/private/course.sqlite';
}

function course_db(bool $write = false): PDO
{
    $path = course_db_path();
    if (!is_file($path)) {
        throw new RuntimeException('De cursusdatabase ontbreekt. Voer de expliciete CLI-migratie uit.');
    }
    $db = new PDO('sqlite:' . $path, null, null, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
    $db->exec('PRAGMA foreign_keys = ON');
    $db->exec('PRAGMA busy_timeout = 5000');
    if (!$write) {
        $db->exec('PRAGMA query_only = ON');
    }
    return $db;
}

function course_json(mixed $value): string
{
    return json_encode($value, JSON_THROW_ON_ERROR | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
}

function course_decode(string $value): array
{
    return json_decode($value, true, 512, JSON_THROW_ON_ERROR);
}

function course_meta(PDO $db, string $key): array
{
    $q = $db->prepare('SELECT value FROM metadata WHERE key = ?');
    $q->execute([$key]);
    $value = $q->fetchColumn();
    return $value === false ? [] : course_decode($value);
}

function course_topics(PDO $db): array
{
    $q = $db->prepare('SELECT id, metadata_json FROM topics ORDER BY position');
    $q->execute();
    return array_map(static function (array $row): array {
        $topic = course_decode($row['metadata_json']);
        $topic['contentFile'] = 'api.php?resource=content&id=' . rawurlencode($row['id']) . '&lang=nl';
        return $topic;
    }, $q->fetchAll());
}

function course_bootstrap(PDO $db): array
{
    $q = $db->prepare('SELECT title FROM categories ORDER BY position');
    $q->execute();
    return ['topics' => course_topics($db), 'categories' => $q->fetchAll(PDO::FETCH_COLUMN)];
}

function course_content(PDO $db, string $id, string $lang = 'nl'): ?array
{
    $q = $db->prepare('SELECT * FROM contents WHERE topic_id = ? AND lang = ?');
    $q->execute([$id, $lang]);
    return $q->fetch() ?: null;
}

function course_review(PDO $db, string $id): ?array
{
    $q = $db->prepare('SELECT p.*, c.content_hash FROM page_reviews p JOIN contents c ON c.topic_id=p.topic_id AND c.lang=? WHERE p.topic_id=?');
    $q->execute(['nl', $id]);
    $row = $q->fetch();
    if (!$row) {
        return null;
    }
    $review = course_decode($row['review_json']);
    $review['review_language'] = 'nl';
    $review['last_checked_at'] = $row['last_checked_at'];
    $review['checked_hash'] = $row['checked_hash'];
    $review['current_hash'] = $row['content_hash'];
    $review['needs_content_review'] = $row['checked_hash'] !== $row['content_hash'];
    $q = $db->prepare('SELECT * FROM criterion_checks WHERE topic_id=? ORDER BY criterion');
    $q->execute([$id]);
    foreach ($q as $item) {
        $review['criteria'][$item['criterion']] = [
            'status' => $item['status'], 'evidence' => $item['evidence'],
            'last_checked_at' => $item['last_checked_at'], 'checked_hash' => $item['checked_hash'],
            'needs_review' => $item['checked_hash'] !== $row['content_hash'],
        ];
    }
    $q = $db->prepare('SELECT * FROM claims WHERE topic_id=? ORDER BY id');
    $q->execute([$id]);
    $review['claims'] = [];
    foreach ($q as $item) {
        $claim = course_decode($item['claim_json']);
        $claim['verification'] = $item['verification'];
        $claim['last_attempted_at'] = $item['last_attempted_at'];
        $claim['last_checked_at'] = $item['last_checked_at'];
        $claim['checked_hash'] = $item['checked_hash'];
        $claim['needs_review'] = $item['last_checked_at'] === null || $item['checked_hash'] !== $row['content_hash'];
        $review['claims'][] = $claim;
    }
    return $review;
}

function course_dependencies(PDO $db): array
{
    $expected = course_meta($db, 'audit')['dependency_hashes'] ?? [];
    $result = [];
    foreach ($expected as $file => $hash) {
        $path = COURSE_ROOT . '/' . $file;
        $current = is_file($path) ? hash_file('sha256', $path) : null;
        $result[] = ['file' => $file, 'checked_hash' => $hash, 'current_hash' => $current, 'needs_review' => $current !== $hash];
    }
    return $result;
}

function course_reviews(PDO $db): array
{
    $audit = course_meta($db, 'audit');
    $audit['records'] = [];
    $audit['claim_status_counts'] = [];
    foreach (course_topics($db) as $topic) {
        $review = course_review($db, $topic['id']);
        if ($review === null) {
            continue;
        }
        foreach ($review['claims'] as $claim) {
            $status = $claim['verification'];
            $audit['claim_status_counts'][$status] = ($audit['claim_status_counts'][$status] ?? 0) + 1;
        }
        $audit['records'][] = $review;
    }
    $audit['dependency_review'] = course_dependencies($db);
    $audit['original_audit_counts'] = ['pages' => $audit['page_count'] ?? null, 'criteria' => $audit['criterion_record_count'] ?? null];
    $audit['page_count'] = count($audit['records']);
    $audit['criterion_record_count'] = array_sum(array_map(static fn(array $record): int => count($record['criteria']), $audit['records']));
    $audit['unreviewed_page_count'] = count(array_filter($audit['records'], static fn(array $record): bool => $record['last_checked_at'] === null));
    $audit['scope_note'] = 'De oorspronkelijke auditscope betreft het archief van 53 pagina’s. Nieuw aangemaakte lege stappen zijn niet inhoudelijk beoordeeld.';
    $audit['technical_validation'] = course_meta($db, 'technical_validation');
    $audit['storage'] = 'SQLite; oorspronkelijke reviewdata blijven behouden bij migratie';
    return $audit;
}

function course_e(mixed $text): string
{
    return htmlspecialchars((string)$text, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function course_slug(mixed $value): ?string
{
    return is_string($value) && preg_match('/\A[a-z0-9]+(?:-[a-z0-9]+)*\z/D', $value) ? $value : null;
}
