<?php
declare(strict_types=1);
require_once __DIR__ . '/lib/course.php';

header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-cache, must-revalidate');
if (!in_array($_SERVER['REQUEST_METHOD'], ['GET','HEAD'], true)) {
    http_response_code(405);
    header('Allow: GET, HEAD');
    exit;
}
$resource = $_GET['resource'] ?? 'bootstrap';
$id = course_slug($_GET['id'] ?? null);
$lang = $_GET['lang'] ?? 'nl';
if (!is_string($resource) || !in_array($resource, ['content','bootstrap','review','reviews','history'], true) || !is_string($lang) || !in_array($lang, ['nl','en'], true)) {
    http_response_code(400);
    exit('Ongeldige aanvraag.');
}
if (in_array($resource, ['content','review','history'], true) && $id === null) {
    http_response_code(400);
    exit('Ongeldig onderwerp.');
}
try {
    $db = course_db();
    if ($resource === 'content') {
        $row = course_content($db, $id, $lang);
        if ($row === null) {
            http_response_code(404);
            exit('Deze taalversie of dit onderwerp is niet beschikbaar.');
        }
        header('Content-Type: text/html; charset=utf-8');
        header('X-Content-SHA256: ' . $row['content_hash']);
        if ($_SERVER['REQUEST_METHOD'] !== 'HEAD') {
            echo $row['html'];
        }
        exit;
    }
    header('Content-Type: application/json; charset=utf-8');
    if ($resource === 'bootstrap') {
        $result = course_bootstrap($db);
    } elseif ($resource === 'reviews') {
        $result = course_reviews($db);
    } elseif ($resource === 'review') {
        $result = course_review($db, $id);
    } else {
        $q = $db->prepare('SELECT entity_type,entity_id,event_kind,status,evidence,reviewer,content_hash,checked_at,recorded_at FROM review_events WHERE topic_id=? ORDER BY id DESC');
        $q->execute([$id]);
        $result = $q->fetchAll();
        if (course_content($db, $id) === null) {
            $result = null;
        }
    }
    if ($result === null) {
        http_response_code(404);
        $result = ['error' => 'Onderwerp niet gevonden.'];
    }
    if ($_SERVER['REQUEST_METHOD'] !== 'HEAD') {
        echo course_json($result);
    }
} catch (Throwable $error) {
    error_log('Course API: ' . $error->getMessage());
    http_response_code(503);
    header('Content-Type: application/json; charset=utf-8');
    echo course_json(['error' => 'De cursusgegevens zijn tijdelijk niet beschikbaar. Probeer later opnieuw.']);
}
