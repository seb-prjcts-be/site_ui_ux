<?php
declare(strict_types=1);
if (PHP_SAPI !== 'cli') { http_response_code(404); exit; }
require_once __DIR__ . '/../lib/course.php';
try {
    $db = course_db();
    if ($db->query('PRAGMA integrity_check')->fetchColumn() !== 'ok') throw new RuntimeException('SQLite integrity');
    $count = 0;
    foreach ($db->query('SELECT * FROM contents') as $row) {
        if (hash('sha256', $row['html']) !== $row['content_hash']) throw new RuntimeException('Inhoudshash: ' . $row['topic_id']);
        $count++;
    }
    $base = 'http://localhost/cursus_UI_UX/';
    $get = static function (string $path, int $expected = 200) use ($base): string {
        $context = stream_context_create(['http' => ['ignore_errors' => true, 'timeout' => 15]]);
        $body = file_get_contents($base . $path, false, $context);
        if (!preg_match('~HTTP/\S+ ' . $expected . '\b~', $http_response_header[0] ?? '')) throw new RuntimeException('HTTP: ' . $path);
        return (string)$body;
    };
    foreach (course_topics($db) as $topic) {
        $content = course_content($db, $topic['id'], 'nl');
        foreach (['api.php?resource=content&id=' . $topic['id'], 'content/' . $topic['id'] . '.html'] as $path) {
            if ($get($path) !== $content['html']) throw new RuntimeException('HTTP inhoud: ' . $path);
        }
        $get('checks.php?topic=' . $topic['id']);
    }
    foreach (['', 'index.html?reis=0', 'index.php?topic=les-de-link', 'api.php?resource=reviews'] as $path) $get($path);
    foreach (['data/private/course.sqlite', 'lib/course.php', 'tools/course.php', 'database/schema.sql', 'tests/migration.php'] as $path) $get($path, 403);
    $get('api.php?resource=content&id[]=x', 400);
    $get('api.php?resource=content&id=missing-topic', 404);
    $get('api.php?resource=content&id=les-de-link&lang=en', 404);
    $result = ['validated_at' => gmdate('c'), 'scope' => 'Technisch: SQLite-integriteit, inhoudshashes, alle 53 API- en legacyadressen, reviewpagina\'s, afgeschermde bestanden en foutafhandeling. Geen nieuwe inhoudelijke broncontrole.', 'contents' => $count, 'topics' => count(course_topics($db))];
    $result['file_hashes'] = [];
    foreach (['index.php','api.php','checks.php','lib/course.php','lib/manage.php','main.js','stadia.css','style.css','.htaccess','styles/composition.css','styles/column.css','styles/grid.css','styles/flex.css','styles/checks.css','tools/validate.php'] as $file) $result['file_hashes'][$file] = hash_file('sha256', COURSE_ROOT . '/' . $file);
    if (in_array('--record', $argv, true)) {
        require_once __DIR__ . '/../lib/manage.php';
        $write = course_db(true);
        course_backup($write);
        $q = $write->prepare('INSERT INTO metadata(key,value) VALUES(?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value');
        $q->execute(['technical_validation', course_json($result)]);
        course_event($write, '', 'technical', 'migration', 'validation', 'geslaagd', $result['scope'], 'Geautomatiseerde technische controle', null, $result['validated_at']);
    }
    echo json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) . PHP_EOL;
} catch (Throwable $error) { fwrite(STDERR, $error->getMessage() . PHP_EOL); exit(1); }
