# SQLite en PHP - beheer

Sinds 21 oktober 2026 is `data/private/course.sqlite` de actieve bron voor alle
53 onderwerpen, categorieën, taalversies, bronclaims en kwaliteitscontroles.
PHP 8.2+ met PDO SQLite is vereist; geen Composer of buildstap. Apache moet
`.htaccess` en mod_rewrite toestaan. De lokale XAMPP-installatie voldoet.

`index.php` levert de pagina en onderwerpmetadata; `main.js` verzorgt de bestaande
interactie. `api.php` accepteert alleen GET/HEAD. `checks.php` toont het actuele
register. De oude index.html-, hash- en content/*.html-adressen blijven via Apache
werken. Zonder JavaScript werkt `index.php?topic=les-de-link` met gewone links.

`styles/column.css`, `styles/grid.css` en `styles/flex.css` tonen dezelfde inhoud
in dezelfde leesvolgorde. Flexibel gebruikt Flexbox. De gedeelde bediening staat
in `styles/composition.css`; de bestaande huisstijl en acht stadia blijven bestaan.

## Inhoud en controles bijwerken

Gebruik vanuit de projectmap de lokale PHP-runtime:

```powershell
& C:\server\php\php.exe tools/course.php status
& C:\server\php\php.exe tools/course.php set-content --topic=les-de-link --file=C:\pad\les.html --reason="Onderbouwde correctie"
& C:\server\php\php.exe tools/course.php check-claim --id=CLAIM-ID --status=gecontroleerd --reviewer="Naam" --evidence="Bron, vindplaats, bevinding en beperking"
& C:\server\php\php.exe tools/course.php check-criterion --topic=les-de-link --criterion=K03 --status=deels --reviewer="Naam" --evidence="Concrete bevinding"
& C:\server\php\php.exe tools/course.php check-page --topic=les-de-link --scope="Werkelijk onderzocht bereik" --reviewer="Naam" --evidence="Bevindingen en beperkingen"
& C:\server\php\php.exe tools/course.php export --file=data/course-export.json
```

Gebruik bestaande claim-ID's uit checks.php. Bronstatus: gecontroleerd,
gedeeltelijk, niet_bereikbaar of open. Criteriumstatus: voldoet, deels, open of
niet_van_toepassing. Een controle vereist een reviewer en onderbouwing.
Een paginareview keurt niet automatisch alle criteria of bronclaims goed.

`updated_at` betreft inhoud; `last_attempted_at` betreft een bronpoging;
`last_checked_at` betreft een daadwerkelijk vastgelegde controle. Een mislukte
bronpoging bewaart de laatste geslaagde controledatum. UTC-tijdstippen en de
beoordeelde SHA-256 blijven bewaard. Inhoudswijzigingen maken eerdere reviews
herkenbaar als verouderd. Importeren of lezen vernieuwt nooit controledatums.
Historiek staat in content_versions en review_events. De technische migratie
geeft geen nieuwe wetenschappelijke goedkeuring of bewijs van leerwinst.

## Controle en herstel

```powershell
& C:\server\php\php.exe tests/migration.php
& C:\server\php\php.exe tools/validate.php
& C:\server\php\php.exe tools/validate.php --record
node --check main.js
```

De eerste test gebruikt een tijdelijke database. De tweede controleert de actieve
database en alle 53 lokale HTTP-pagina's; Apache moet draaien.
Met --record wordt uitsluitend de geslaagde technische controle met bestandshashes
in SQLite vastgelegd en op checks.php getoond; inhoudelijke datums blijven gelijk.
De JSON-export is
een leesbaar overzicht, geen volledige historieback-up. Elke beheerschrijfactie
maakt vooraf een consistente SQLite-back-up onder data/private/backups (niet in
Git). Bewaar deze map afzonderlijk. Herstel een gekozen back-up eerst als aparte
database, controleer integriteit en versies en vervang de actieve database pas
tijdens een schrijfpauze met een bewaarde kopie van de huidige toestand.

De oorspronkelijke HTML-fragmenten, index.html, composition-snapshot.css en het
gedateerde audit-JSON blijven migratiesnapshots. Ze zijn geen tweede actieve
inhoudsbron. `init` weigert een bestaande database en is uitsluitend voor een
nieuwe herstel-/testdatabase; start de site nooit met een automatische import.
Een nieuwe lege import bevat de oorspronkelijke auditversie; actuele aanvullingen
en historie komen uit de actieve SQLite-database of haar back-up.

De databank en beheerbestanden zijn via Apache afgeschermd. Schrijven gebeurt via
CLI, niet via een onbeveiligd webformulier. Voor een andere server moet dezelfde
afscherming expliciet worden ingesteld. PHP's ingebouwde webserver verwerkt de
Apache-regels niet en is daarom niet de ondersteunde publieke serverconfiguratie.
