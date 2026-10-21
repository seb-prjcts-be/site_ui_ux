<?php
declare(strict_types=1);
require_once __DIR__ . '/lib/course.php';
try {
    $db = course_db();
    $topics = course_topics($db);
    $selected = isset($_GET['topic']) ? course_slug($_GET['topic']) : null;
    if (isset($_GET['topic']) && $selected === null) {
        http_response_code(400);
        exit('Ongeldig onderwerp.');
    }
    $review = $selected !== null ? course_review($db, $selected) : null;
    if ($selected !== null && $review === null) {
        http_response_code(404);
        exit('Onderwerp niet gevonden.');
    }
    $reviews = $selected === null ? course_reviews($db)['records'] : [$review];
} catch (Throwable $error) {
    error_log('Course checks: ' . $error->getMessage());
    http_response_code(503);
    exit('De controles zijn tijdelijk niet beschikbaar.');
}
header('Cache-Control: no-cache');
?>
<!doctype html>
<html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=optional">
<title>Bron- en kwaliteitscontroles - UI/UX Cursus</title><link rel="stylesheet" href="styles/checks.css?v=instrument1"></head>
<body><header><a href="index.php">UI/UX Cursus</a><h1>Bron- en kwaliteitscontroles</h1></header><main>
<p>Een controledatum zegt wanneer de genoemde versie en scope zijn bekeken. Ze bewijst geen juistheid of leerwinst. Een mislukte bronpoging krijgt een eigen datum en overschrijft de laatste geslaagde controle niet. Importeren of een pagina openen telt niet als nieuwe controle.</p>
<p><a href="api.php?resource=reviews">Volledig actueel reviewregister (JSON)</a> · <a href="checks.php">Alle onderwerpen</a></p>
<?php $technical = course_meta($db, 'technical_validation'); if ($technical): ?>
<p>Laatste geautomatiseerde technische controle: <strong><?= course_e($technical['validated_at']) ?></strong>. <?= course_e($technical['scope']) ?></p>
<?php $technicalChanged = array_filter($technical['file_hashes'], static fn(string $hash, string $file): bool => !is_file(COURSE_ROOT . '/' . $file) || hash_file('sha256', COURSE_ROOT . '/' . $file) !== $hash, ARRAY_FILTER_USE_BOTH); if ($technicalChanged): ?><p>Implementatie gewijzigd sinds deze technische controle: opnieuw testen nodig.</p><?php endif; ?>
<?php endif; ?>
<?php $changed = array_filter(course_dependencies($db), static fn(array $r): bool => $r['needs_review']); ?>
<?php if ($changed): ?><aside><strong>Technische hercontrole</strong><p>De serverlaag en stylesheets zijn veranderd sinds de vorige audit. De migratie wordt technisch getest; eerdere bron- en leerclaims krijgen daardoor geen nieuwe inhoudelijke goedkeuring. Bewaar broncontrole en technische controle afzonderlijk.</p></aside><?php endif; ?>
<?php foreach ($reviews as $item): ?>
<section><h2><a href="index.php?topic=<?= course_e($item['id']) ?>#<?= course_e($item['id']) ?>"><?= course_e(array_values(array_filter($topics, static fn(array $t): bool => $t['id'] === $item['id']))[0]['titel']) ?></a></h2>
<p>Laatste paginareview (Nederlandse bron): <strong><?= course_e($item['last_checked_at'] ?? 'nog niet gecontroleerd') ?></strong>. <?= $item['needs_content_review'] ? 'Inhoud gewijzigd sinds deze review: hercontrole nodig.' : 'De inhoud komt overeen met de beoordeelde versie.' ?></p>
<p><?= course_e($item['review_scope'] ?? '') ?></p>
<?php if ($selected === null): ?><p><a href="checks.php?topic=<?= course_e($item['id']) ?>">Bekijk criteria, bronclaims en controledatums</a></p><?php else: ?>
<h3>Criteria</h3><div class="table-scroll"><table><thead><tr><th>Criterium</th><th>Status</th><th>Laatst beoordeeld</th><th>Onderbouwing</th></tr></thead><tbody>
<?php foreach ($item['criteria'] as $key => $criterion): ?><tr><th><?= course_e($key) ?></th><td><?= course_e($criterion['status']) ?><?= $criterion['needs_review'] ? ' · versie gewijzigd' : '' ?></td><td><?= course_e($criterion['last_checked_at'] ?? 'onbekend') ?></td><td><?= course_e($criterion['evidence']) ?></td></tr><?php endforeach; ?>
</tbody></table></div><h3>Bronclaims</h3>
<?php foreach ($item['claims'] as $claim): ?><article><h4><?= course_e($claim['id']) ?></h4><p><?= course_e($claim['passage'] ?? $claim['supports'] ?? '') ?></p><p>Status: <?= course_e($claim['verification']) ?><?= $claim['needs_review'] ? ' · controle open of inhoud gewijzigd' : '' ?>. Laatst gecontroleerd: <?= course_e($claim['last_checked_at'] ?? 'niet vastgelegd') ?>. Laatste poging: <?= course_e($claim['last_attempted_at'] ?? 'niet vastgelegd') ?>.</p><p>Vindplaats: <?= course_e($claim['locator'] ?? '') ?></p><p>Beperking: <?= course_e($claim['limitations'] ?? '') ?></p></article><?php endforeach; ?>
<details><summary>Controlehistoriek</summary><p>Importregels bewaren de oorspronkelijke datum; een nieuwe controle staat als afzonderlijke gebeurtenis geregistreerd.</p><a href="api.php?resource=history&amp;id=<?= course_e($item['id']) ?>">Bekijk de gebeurtenissen (JSON)</a></details>
<?php endif; ?></section>
<?php endforeach; ?>
</main></body></html>
