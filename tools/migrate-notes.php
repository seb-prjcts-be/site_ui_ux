<?php
declare(strict_types=1);
if (PHP_SAPI !== 'cli') { http_response_code(404); exit; }
require_once __DIR__ . '/../lib/manage.php';
$db = course_db(true);
$changes = [
    'ordeningsprincipes' => [
        'Elke pagina hoort bij precies één groep in <code>main.js</code>.' => 'Elke pagina hoort bij precies één groep in de SQLite-database. PHP levert die gegevens aan het menu.',
        'Elke pagina krijgt vijf tot tien tags in <code>main.js</code>.' => 'Elke pagina krijgt tags bij haar onderwerpgegevens in de database.',
    ],
    'over-dit-onderzoekscentrum' => [],
    'breakdown-bij-ontbrekende-content' => [
        'De eerste melding spreekt de beheerder aan, niet de lezer; dat is in strijd met de schrijfregels van de site zelf' => 'De ontbrekende-inhoudmelding spreekt sinds de migratie de lezer aan; een concrete herstelroute blijft van belang',
        'De eerste melding zegt dat de inhoud niet gevonden is. Dat is juist en duidelijk: de lezer weet dat het niet aan hem ligt. Dan volgt een opdracht: maak een HTML-bestand aan in een map op de server. Die zin is voor één persoon bedoeld, en dat is niet de lezer. Wie de site bezoekt, kan geen bestanden aanmaken. De melding geeft dus een handeling die onuitvoerbaar is, en zwijgt over de handelingen die wel kunnen: terug naar het overzicht, een andere pagina kiezen, zoeken.' => 'Vóór de PHP/SQLite-migratie vroeg de ontbrekende-inhoudmelding de bezoeker een HTML-bestand aan te maken. Dat was een onuitvoerbare beheerdersopdracht. De huidige melding zegt dat de inhoud niet beschikbaar is en stelt voor een ander onderwerp te kiezen of later opnieuw te proberen. De live demo hierboven gebruikt de actuele vertaaltabel; de oude tekst is hier als historische vergelijking bewaard.',
        'De eerste foutmelding doet dat wel. Ze stamt uit de tijd dat de site een sjabloon was zonder lezers. Deze pagina stelt een betere melding voor, maar verandert de bestaande niet, zodat de demo blijft tonen wat de site werkelijk doet.' => 'De eerdere foutmelding deed dat wel. Bij de migratie is die beheerdersopdracht vervangen. De demo toont de actuele tekst; beoordeel opnieuw welke herstelroute die werkelijk aanbiedt.',
        'Het verschil met de huidige tekst is klein in woorden en groot in houding. De huidige melding is een notitie van de bouwer aan zichzelf. De betere melding spreekt met de lezer die er op dat moment staat.' => 'Vergelijk de actuele melding met dit voorstel. De beheerdersopdracht is inmiddels weg; een bruikbare, rechtstreeks bereikbare terugweg blijft een afzonderlijke ontwerpkeuze.',
    ],
];
foreach ($changes as $id => $replacements) {
    $row = course_content($db, $id);
    if (str_contains($row['html'], 'data-migration-note="sqlite-1"')) continue;
    $html = str_replace(array_keys($replacements), array_values($replacements), $row['html']);
    $html = '<aside data-migration-note="sqlite-1" class="callout callout--let-op"><span class="callout-label">Implementatie bijgewerkt, 21 oktober 2026</span><p>Inhoud, onderwerpgegevens en controlehistoriek komen nu uit SQLite via PHP. De inhoudelijke audit hieronder bewaart haar oorspronkelijke datum en scope; migreren telt niet als nieuwe broncontrole. <a href="checks.php?topic=' . $id . '">Bekijk de actuele controles en datums</a>. De oude bestanden en auditexports zijn herstelbare momentopnamen.</p></aside>' . $html;
    if ($id === 'ordeningsprincipes') {
        $html .= '<section><h2>Actueel beheer en hercontrole</h2><p>De database is de actieve inhoudsbron. De historische HTML-fragmenten en JSON-audits blijven bewaard; hun adressen leveren via PHP de actuele inhoud en het actuele register. Nieuwe inhoud wordt met het CLI-beheer in SQLite opgeslagen. Een inhoudswijziging verandert de versiehash, maar vernieuwt geen controledatum. Bronpoging, geslaagde broncontrole, criteriumbeoordeling en paginareview hebben afzonderlijke datums. Voorbeelden en beheerafspraken staan in de README van het project.</p></section>';
    }
    echo course_json(course_set_content($db, $id, 'nl', $html, 'Implementatiebeschrijving bijwerken voor SQLite/PHP; geen nieuwe broncontrole.')) . PHP_EOL;
}
