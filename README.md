# UI/UX - audiovisueel onderzoeksatelier

Een leeromgeving voor kunststudenten die zelf onderzoeken en maken. De site
vertrekt vanuit beeld, kleur, tijd, montage en geluid. Praktijk biedt een concrete
ingang; theorie blijft ook zelfstandig toegankelijk als denkoefening en inspiratie.

## Inhoud

Zes maakproeven met werkvlak, variant A bewaren/terughalen, beginstand, opdracht,
observeerbaar doel, beoordelingsbewijs, zelfcontrole en gerichte onderzoekslinks:

- Beeld en kadering: uitsnede wijzigen, eventueel met een eigen lokaal beeld.
- Kleur en contrast: kleur, tekst en teken vergelijken.
- Tijd en beweging: lokale wachttijd en tussenstaat onderzoeken.
- Montage en volgorde: drie kaders herordenen met knoppen.
- Geluid en reactie: zichtbare feedback, met een bewust ingeschakelde korte toon.
- Beeld wordt interface: een aanwijzing vergelijken en een beeldvergroting openen.

Alle 53 bestaande onderzoeksinhouden blijven behouden, inclusief bronnen,
kanttekeningen en controlehistoriek. Nieuwe tekst, code en schematische beelden
zijn voor dit project gemaakt; er is geen materiaal van de referentiesites gekopieerd.

Eigen PNG/JPEG/WebP-beelden tot 10 MB blijven lokaal; geen upload, opname of
antwoordenregistratie. Variant A vervalt bij het verlaten van het onderwerp.

## Interface

Wit, Instrument Sans, donkere hoofdkleur en roze accent. De publicatieopening
verbindt zes praktijkingangen met vrij verkennen. Contextbediening werkt met
muis, toetsenbord en aanraking. Op een smal scherm is het menu inklapbaar;
een onderwerpkeuze verplaatst de focus naar de inhoud.

De diagonale pijl rechts opent Weergave. Compositie, kleuren, typografie en ruimte
zijn live aanpasbaar. Persoonlijke CSS-proeven worden lokaal bewaard, zijn te
herstellen en te exporteren. De standaard en cursusinhoud worden niet gewijzigd.
De schuifbeweging van 350 ms respecteert de voorkeur voor minder beweging.

Bestaande hashadressen, index.html en reis=0..7 blijven werken. De zes
praktijkonderwerpen behouden hun eerdere stapadressen. Historische
interfacecondities en tekstweergaven blijven beschikbaar als onderzoeksmateriaal.

## Starten en beheren

Start Apache met PHP 8.2+ en PDO SQLite en open:
http://localhost/cursus_UI_UX/?stadium=alles

Gebruik de meegeleverde actieve database. Init is geen normale startstap.
Apache verwerkt .htaccess en mod_rewrite; database en beheerbestanden zijn
via HTTP afgeschermd. Geen buildstap of nieuwe frameworkinstallatie.
Bootstrap 5.3.3 verzorgt het weergavepaneel.

De actieve inhoudsbron is data/private/course.sqlite. PHP levert inhoud en reviews;
main.js verzorgt navigatie en practice.js de lokale maakproeven.
Zie [SQLite-beheer](docs/sqlite-beheer.md) voor beheer, back-ups en herstel.

## Kwaliteit

checks.php toont beoordeelde versies, datums, scope en open werk. De zes
praktijkpagina's hebben een begrensde AI-review. Onafhankelijke vakreview,
volledige toegankelijkheidsconformiteit en leerwinst zijn niet vastgesteld.
Technische controles vernieuwen geen inhoudelijke controledatums.

Controles vanuit de projectmap: node tests/practice.cjs, PHP tests/migration.php
en PHP tools/validate.php. Gebruik lokaal C:/server/php/php.exe als runtime.
De migratietest gebruikt een tijdelijke database; de HTTP-controle verifieert
alle 59 onderwerpen. Browserproeven en beperkingen staan in docs/ai-log.md.

De inhoudelijke richting en historische voorstellen staan in leerplan.md.
