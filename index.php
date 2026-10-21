<?php
declare(strict_types=1);
require_once __DIR__ . '/lib/course.php';
try {
    $db = course_db();
    $bootstrap = course_bootstrap($db);
    $selected = isset($_GET['topic']) ? course_slug($_GET['topic']) : null;
    if (isset($_GET['topic']) && $selected === null) { http_response_code(400); exit('Ongeldig onderwerp.'); }
    $serverTopic = null;
    foreach ($bootstrap['topics'] as $topic) { if ($topic['id'] === $selected) $serverTopic = $topic; }
    if ($selected !== null && $serverTopic === null) { http_response_code(404); exit('Onderwerp niet gevonden.'); }
    $serverContent = $serverTopic ? course_content($db, $selected) : null;
    $serverHtml = $serverContent['html'] ?? '';
    $knownTopics = array_column($bootstrap['topics'], 'id');
    $serverHtml = preg_replace_callback('/href="#([a-z0-9-]+)"/', static fn(array $m): string => in_array($m[1], $knownTopics, true) ? 'href="index.php?topic=' . $m[1] . '"' : $m[0], $serverHtml);
    $allowedModes = ['kolom','raster','flexibel'];
    $mode = is_string($_GET['compositie'] ?? null) && in_array($_GET['compositie'], $allowedModes, true) ? $_GET['compositie'] : 'kolom';
    $journey = is_string($_GET['reis'] ?? null) && preg_match('/\A[0-7]\z/', $_GET['reis']) ? (int)$_GET['reis'] : 7;
} catch (Throwable $error) {
    error_log('Course index: ' . $error->getMessage());
    http_response_code(503);
    exit('De cursus is tijdelijk niet beschikbaar. Probeer later opnieuw.');
}
header('Cache-Control: no-cache');
?>
<!DOCTYPE html>
<html lang="nl" data-lang="nl" data-stadium="<?= $journey ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= course_e($serverTopic ? $serverTopic["titel"] . " - UI/UX Cursus" : "UI/UX Cursus - Leer interfaces ontwerpen") ?></title>
    <link id="style-bootstrap" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link id="style-icons" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=optional">
    <link id="style-main" rel="stylesheet" href="style.css?v=20261021-leerlijn1">
    <link rel="stylesheet" href="stadia.css?v=20261021-themas">
    <link id="style-composition" rel="stylesheet" href="styles/composition.css?v=instrument1">
    <link id="style-kolom" rel="stylesheet" href="styles/column.css?v=sqlite1">
    <link id="style-raster" rel="stylesheet" href="styles/grid.css?v=sqlite1">
    <link id="style-flexibel" rel="stylesheet" href="styles/flex.css?v=sqlite1">
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
</head>
<body>
    <header>
        <div class="header-main">
            <a href="#" class="site-title-link"><h1>UI/UX Cursus</h1>
            <p class="subtitle">Ontwerpen voor mensen, van schets tot scherm</p></a>
        </div>
        <div class="lang-controls" aria-label="Taal / Language">
            <button class="lang-btn is-active" data-lang="nl" title="Nederlands">NL</button>
            <button class="lang-btn" data-lang="en" title="English">EN</button>
        </div>
        <div class="font-size-controls" aria-label="Lettergrootte">
            <button class="font-size-btn" data-size="klein" title="Kleine letters">A</button>
            <button class="font-size-btn" data-size="medium" title="Normale letters">A</button>
            <button class="font-size-btn" data-size="groot" title="Grote letters">A</button>
        </div>
    </header>

    <nav id="main-nav">
        <h2>Onderwerpen</h2>
        <ul id="nav-list"><?php foreach ($bootstrap['categories'] as $category): ?><li><strong><?= course_e($category) ?></strong><ul><?php foreach ($bootstrap['topics'] as $topic): if ($topic['categorie'] !== $category) continue; ?><li><a href="index.php?topic=<?= course_e($topic['id']) ?>"><?= course_e($topic['titel']) ?></a></li><?php endforeach; ?></ul></li><?php endforeach; ?></ul>
    </nav>

    <div class="search-container">
        <input type="search" id="search-input" aria-label="Zoek in de cursus" aria-controls="search-results" placeholder="Zoek op trefwoord...">
        <div id="search-results"></div>
    </div>

    <main id="content">
        <?php if ($serverTopic): ?>
        <div class="onderwerp-page"><p><a href="index.php">Start</a> · <?= course_e($serverTopic['categorie']) ?></p><h1><?= course_e($serverTopic['titel']) ?></h1><div class="onderwerp-content" data-composition="<?= course_e($mode) ?>"><?= $serverHtml ?></div><p><a href="checks.php?topic=<?= course_e($serverTopic['id']) ?>">Broncontroles en controledatums</a></p></div>
        <?php else: ?><div class="welcome"><h2>Welkom bij de UI/UX Cursus</h2><p>Kies een onderwerp uit het menu om te beginnen.</p></div><?php endif; ?>
        <noscript><p>Je kunt de cursus lezen via het menu. Interactieve demo’s vragen JavaScript.</p></noscript>
    </main>

    <footer>
        <p>UI/UX Cursus - Lab44 - Sebastien Vanblaere</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script>window.COURSE_DATA = <?= json_encode($bootstrap, JSON_THROW_ON_ERROR | JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT) ?>;</script>
    <script src="main.js?v=20261021-leerlijn2"></script>
</body>
</html>
