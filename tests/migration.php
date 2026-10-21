<?php
declare(strict_types=1);
if (PHP_SAPI !== 'cli') { http_response_code(404); exit; }
require_once __DIR__ . '/../lib/manage.php';

function expect(bool $condition, string $message): void
{
    if (!$condition) throw new RuntimeException($message);
}

$directory = sys_get_temp_dir() . '/cursus-sqlite-test-' . bin2hex(random_bytes(6));
mkdir($directory);
$path = $directory . '/test.sqlite';
putenv('COURSE_DB_PATH=' . $path);
try {
    course_initialize($path);
    $db = course_db(true);
    expect((int)$db->query('SELECT COUNT(*) FROM topics')->fetchColumn() === 53, 'Onderwerpaantal');
    expect((int)$db->query('SELECT COUNT(*) FROM claims')->fetchColumn() === 113, 'Annotatieaantal');
    expect((int)$db->query('SELECT COUNT(*) FROM criterion_checks')->fetchColumn() === 636, 'Criteriumaantal');
    expect((int)$db->query('SELECT COUNT(*) FROM contents')->fetchColumn() === 54, '53 NL en bestaande EN-versie');
    foreach (course_topics($db) as $topic) {
        $content = course_content($db, $topic['id']);
        expect($content !== null && $content['html'] === file_get_contents(COURSE_ROOT . '/content/' . $topic['id'] . '.html'), 'Bytegelijke inhoud: ' . $topic['id']);
        expect(!course_review($db, $topic['id'])['needs_content_review'], 'Import mag geen inhoud vervormen');
    }
    expect(course_content($db, "' OR 1=1 --") === null, 'Prepared statement onderwerp');
    expect(course_slug(['bad']) === null && course_slug('../test') === null, 'Ongeldige slug');
    $ro = course_db();
    try {
        $ro->exec('DELETE FROM topics');
        throw new RuntimeException('Read-only verbinding kon schrijven');
    } catch (PDOException $expected) { /* PRAGMA query_only rejects this. */ }
    $ro = null;
    try { course_initialize($path); throw new RuntimeException('Bestaande database overschreven'); }
    catch (RuntimeException $expected) { expect(str_contains($expected->getMessage(), 'overschrijft'), 'Bestaande database weigeren'); }

    $id = 'les-de-link';
    $before = course_review($db, $id);
    $original = course_content($db, $id)['html'];
    $changed = course_set_content($db, $id, 'nl', $original . '\n<p>Testwijziging</p>', 'Geisoleerde test');
    expect(is_file($changed['backup']), 'Consistente back-up voor mutatie');
    $after = course_review($db, $id);
    expect($after['needs_content_review'], 'Gewijzigde inhoud heropent review');
    expect($after['last_checked_at'] === $before['last_checked_at'], 'Geen nieuwe paginacontroledatum door edit');
    expect($after['criteria']['K03']['needs_review'], 'Criteria horen bij oude inhoud');
    $claimId = $after['claims'][0]['id'];
    $otherBefore = $after['claims'][1];
    course_record_check($db, 'claim', $claimId, null, 'gecontroleerd', 'Specifieke bronpassage in test gecontroleerd.', 'Testreviewer');
    $afterCheck = course_review($db, $id);
    $claim = array_values(array_filter($afterCheck['claims'], static fn(array $c): bool => $c['id'] === $claimId))[0];
    expect(!$claim['needs_review'] && $claim['last_checked_at'] !== $before['last_checked_at'], 'Expliciete claimcontrole dateert deze versie');
    $checkedDate = $claim['last_checked_at'];
    course_record_check($db, 'claim', $claimId, null, 'niet_bereikbaar', 'Nieuwe poging in test geblokkeerd.', 'Testreviewer');
    $latest = course_review($db, $id);
    $claim = array_values(array_filter($latest['claims'], static fn(array $c): bool => $c['id'] === $claimId))[0];
    expect($claim['last_checked_at'] === $checkedDate, 'Mislukte poging wist geslaagde controledatum niet');
    expect($latest['claims'][1]['last_checked_at'] === $otherBefore['last_checked_at'], 'Andere claim blijft onaangeraakt');
    expect($latest['last_checked_at'] === $before['last_checked_at'], 'Geen impliciete paginagoedkeuring');
    course_record_check($db, 'criterion', $id, 'K03', 'deels', 'Nieuwe afgebakende beoordeling.', 'Testreviewer');
    expect(!course_review($db, $id)['criteria']['K03']['needs_review'], 'Afzonderlijk criterium bijgewerkt');
    expect(course_review($db, $id)['criteria']['K04']['needs_review'], 'Andere criteria blijven verouderd');
    $claimDate = course_review($db, $id)['claims'][1]['last_checked_at'];
    course_record_page_check($db, $id, 'Alleen lesstructuur, niet alle bronclaims.', 'Lesstructuur opnieuw bekeken in test.', 'Testreviewer');
    expect(!course_review($db, $id)['needs_content_review'], 'Expliciete paginareview bindt huidige versie');
    expect(course_review($db, $id)['claims'][1]['last_checked_at'] === $claimDate, 'Paginareview vernieuwt geen bronclaims');
    expect(course_review($db, $id)['criteria']['K04']['needs_review'], 'Paginareview vernieuwt geen criteria');
    $backup = new PDO('sqlite:' . $changed['backup']);
    expect($backup->query("SELECT html FROM contents WHERE topic_id='les-de-link' AND lang='nl'")->fetchColumn() === $original, 'Back-up bewaart toestand voor wijziging');
    $backup = null;
    expect($db->query('PRAGMA integrity_check')->fetchColumn() === 'ok', 'SQLite-integriteit');
    echo "OK: inhoudspariteit, datums, afzonderlijke controles, veroudering, historie, back-up en read-only toegang.\n";
} finally {
    $db = null;
    foreach (glob($directory . '/backups/*.sqlite') ?: [] as $file) unlink($file);
    if (is_dir($directory . '/backups')) rmdir($directory . '/backups');
    if (is_file($path)) unlink($path);
    rmdir($directory);
    putenv('COURSE_DB_PATH');
}
