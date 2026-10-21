<?php
declare(strict_types=1);
if (PHP_SAPI !== 'cli') {
    http_response_code(404);
    exit;
}
require_once __DIR__ . '/../lib/manage.php';

try {
    $command = $argv[1] ?? 'help';
    $args = [];
    foreach (array_slice($argv, 2) as $argument) {
        if (!preg_match('/\A--([a-z-]+)=(.*)\z/s', $argument, $match)) {
            throw new InvalidArgumentException('Gebruik --naam=waarde.');
        }
        $args[$match[1]] = $match[2];
    }
    $required = static fn(string $key): string => isset($args[$key]) && trim($args[$key]) !== '' ? $args[$key] : throw new InvalidArgumentException('Ontbreekt: --' . $key);
    if ($command === 'init') {
        $result = course_initialize(course_db_path());
    } elseif ($command === 'export') {
        $db = course_db();
        $result = ['schema' => 1, 'topics' => course_bootstrap($db), 'contents' => $db->query('SELECT * FROM contents ORDER BY topic_id,lang')->fetchAll(), 'reviews' => course_reviews($db)];
        if (isset($args['file'])) {
            if (realpath($args['file']) === realpath(course_db_path())) {
                throw new InvalidArgumentException('Export mag de database niet overschrijven.');
            }
            $json = json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR) . PHP_EOL;
            if (file_put_contents($args['file'], $json) === false) throw new RuntimeException('Export schrijven mislukt.');
            $result = ['export' => $args['file'], 'topics' => count($result['topics']['topics']), 'note' => 'Leesbare inhouds- en reviewexport; gebruik SQLite-back-ups voor volledige historie.'];
        }
    } elseif ($command === 'status') {
        $db = course_db();
        $reviews = course_reviews($db);
        $result = ['topics' => count($reviews['records']), 'claims' => array_sum($reviews['claim_status_counts']), 'stale_pages' => array_column(array_values(array_filter($reviews['records'], static fn(array $r): bool => $r['needs_content_review'])), 'id'), 'dependencies' => $reviews['dependency_review']];
    } elseif ($command === 'set-content') {
        $file = $required('file');
        if (!is_file($file)) {
            throw new InvalidArgumentException('Invoerbestand ontbreekt.');
        }
        $result = course_set_content(course_db(true), $required('topic'), $args['lang'] ?? 'nl', (string)file_get_contents($file), $required('reason'));
    } elseif ($command === 'check-claim' || $command === 'check-criterion') {
        $result = course_record_check(course_db(true), $command === 'check-claim' ? 'claim' : 'criterion', $required($command === 'check-claim' ? 'id' : 'topic'), $args['criterion'] ?? null, $required('status'), $required('evidence'), $required('reviewer'));
    } elseif ($command === 'check-page') {
        $result = course_record_page_check(course_db(true), $required('topic'), $required('scope'), $required('evidence'), $required('reviewer'));
    } else {
        $result = ['commands' => [
            'init (weigert bestaande database)', 'status', 'export (JSON naar stdout)',
            'set-content --topic=ID --file=PAD --reason=REDEN [--lang=nl]',
            'check-claim --id=CLAIM --status=gecontroleerd --reviewer=NAAM --evidence=ONDERBOUWING',
            'check-criterion --topic=ID --criterion=K03 --status=deels --reviewer=NAAM --evidence=ONDERBOUWING',
            'check-page --topic=ID --scope=BEREIK --reviewer=NAAM --evidence=ONDERBOUWING',
        ]];
    }
    echo json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR) . PHP_EOL;
} catch (Throwable $error) {
    fwrite(STDERR, $error->getMessage() . PHP_EOL);
    exit(1);
}
