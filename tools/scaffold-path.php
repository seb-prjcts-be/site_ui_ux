<?php
declare(strict_types=1);
if (PHP_SAPI !== 'cli') { http_response_code(404); exit; }
require_once __DIR__ . '/../lib/manage.php';
$db = course_db(true);
if (course_meta($db, 'learning_path_scaffold')) { echo "Leerlijn bestaat al.\n"; exit; }
$backup = course_backup($db);
$steps = [
    ['herkennen','Herkennen','Recognising'], ['begrijpen','Begrijpen','Understanding'],
    ['orienteren','Oriënteren','Finding your way'], ['handelen','Handelen','Acting'],
    ['afwegen','Afwegen','Weighing choices'], ['onderzoeken','Onderzoeken','Investigating'],
];
$db->beginTransaction();
try {
    $db->exec('UPDATE categories SET position=position+1000');
    $db->exec('UPDATE categories SET position=position-999');
    $q = $db->prepare('UPDATE categories SET title=? WHERE title=?');
    $q->execute(['Eerdere uitwerkingen','Lessen']);
    foreach (course_topics($db) as $topic) {
        if ($topic['categorie'] !== 'Lessen') continue;
        $topic['categorie'] = 'Eerdere uitwerkingen';
        $topic['titel'] = preg_replace('/^Les \d+: /u', '', $topic['titel']);
        $topic['en']['titel'] = preg_replace('/^Lesson \d+: /', '', $topic['en']['titel']);
        $topic['tags'] = array_values(array_filter($topic['tags'], static fn(string $tag): bool => $tag !== 'les'));
        $topic['archive'] = true;
        $q = $db->prepare('UPDATE topics SET metadata_json=? WHERE id=?');
        $q->execute([course_json($topic), $topic['id']]);
    }
    $db->exec('UPDATE topics SET position=position+1000');
    $db->exec('UPDATE topics SET position=position-994');
    $q = $db->prepare('INSERT INTO categories(title,position) VALUES(?,0)');
    $q->execute(['Leerlijn']);
    $category = $db->lastInsertId();
    foreach ($steps as $position => [$id,$title,$english]) {
        $topic = ['id'=>$id,'titel'=>$title,'samenvatting'=>'Nog niet uitgewerkt.','en'=>['titel'=>$english,'samenvatting'=>'Not developed yet.'],'tags'=>[],'categorie'=>'Leerlijn','placeholder'=>true];
        $q = $db->prepare('INSERT INTO topics(id,position,category_id,stadium,metadata_json) VALUES(?,?,?,NULL,?)');
        $q->execute([$id,$position,$category,course_json($topic)]);
        foreach (['nl'=>'<p class="empty-step">Nog niet uitgewerkt.</p>', 'en'=>'<p class="empty-step">Not developed yet.</p>'] as $lang => $html) {
            $hash = hash('sha256',$html);
            $q = $db->prepare('INSERT INTO contents VALUES(?,?,?,?,?)');
            $q->execute([$id,$lang,$html,$hash,course_now()]);
            $q = $db->prepare('INSERT INTO content_versions(topic_id,lang,html,content_hash,changed_at,reason) VALUES(?,?,?,?,?,?)');
            $q->execute([$id,$lang,$html,$hash,course_now(),'Leeg item op uitdrukkelijk verzoek; geen inhoudelijke uitwerking.']);
        }
        $review = ['id'=>$id,'review_status'=>'open','review_scope'=>'Lege structuur; inhoud, doelen, activiteiten en beoordeling nog uit te werken. Geen inhoudelijke controle uitgevoerd.','criteria'=>[],'claims'=>[]];
        $q = $db->prepare('INSERT INTO page_reviews VALUES(?,?,NULL,?)');
        $q->execute([$id,course_json($review),'']);
        for ($i=1;$i<=12;$i++) {
            $q = $db->prepare('INSERT INTO criterion_checks VALUES(?,?,?,?,NULL,?)');
            $q->execute([$id,sprintf('K%02d',$i),'open','Nog niet uitgewerkt of beoordeeld.','']);
        }
        course_event($db,$id,'page',$id,'scaffold','open','Leeg item aangemaakt; geen nieuwe inhoudelijke beoordeling.','CLI-redactie',null,null);
    }
    $q = $db->prepare('INSERT INTO metadata VALUES(?,?)');
    $q->execute(['learning_path_scaffold',course_json(['created_at'=>course_now(),'steps'=>array_column($steps,0),'archive'=>'Bestaande 53 onderwerpen behouden, inclusief inhoud en oorspronkelijke reviews.'])]);
    $db->commit();
    echo course_json(['steps'=>6,'archive'=>53,'backup'=>$backup]) . PHP_EOL;
} catch (Throwable $error) { $db->rollBack(); throw $error; }
