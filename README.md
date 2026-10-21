# UI/UX Cursus Website

Een website met PHP en SQLite die begint als onderzoekscentrum over UI/UX en uitgroeit tot een cursus voor hogeschoolstudenten in een kunstopleiding.
Gebouwd met PHP, SQLite, HTML, CSS en JavaScript. Het menu, de styling en het systeem (router, zoekfunctie, trefwoordenkolom,
NL/EN, lettergrootte) zijn overgenomen van de p5.js Cursus-site.

Het inhoudsoverzicht, de voorgestelde leerlijn en de open bespreekpunten staan in [leerplan.md](leerplan.md).

Vanaf de vormgegeven interface staan boven de inhoud de standen Kolom, Raster en Flexibel.
[Open de vergelijking](http://localhost/cursus_UI_UX/index.html?reis=4&compositie=raster#esthetiek-en-bruikbaarheid).
De standen gebruiken dezelfde inhoud en beschikbare breedte. Flexibel heeft twee verdelingen;
het raster kan zichtbaar worden gemaakt. Onder Regels staan de uitgangspunten en boekverwijzingen.

## Inhoud

De startpagina toont zes bestaande, nog lege stappen onder Leerlijn: Herkennen,
Begrijpen, Oriënteren, Handelen, Afwegen en Onderzoeken. De oorspronkelijke 53
onderwerpen blijven als archief beschikbaar. De vroegere categorie Lessen heet
Eerdere uitwerkingen; oude adressen blijven behouden. Voor de nieuwe stappen
staan de inhoudelijke beoordeling en alle criteria open, zonder controledatum.


Dertien groepen: Lessen, Introductie, zes historische thema’s, Kennis als UX,
Proefschriften, Bronnen, Werkplaats en Overzicht. De actuele titels en toewijzing
staan in SQLite (`topics` en `categories`). Twee lessen zijn uitgewerkt; de andere pagina’s zijn een
bronnenarchief en losse onderzoeksoefeningen. De periodes zijn zwaartepunten,
geen gesloten tijdvakken. De selectie proefschriften bevat ook sleutelstudies;
niet elk bronrecord is al rechtstreeks gelinkt.

## Interfaceweergaven

`index.html?reis=0#les-de-link` opent de eenvoudige tekstweergave.
De bestaande parameter `reis=0..7` blijft behouden voor opgeslagen adressen.
Vorige en volgende verbinden de onderwerpen in een vaste volgorde. Onder
“Dezelfde pagina, andere weergave” zijn alle acht weergaven bereikbaar.

Een wissel wordt binnen het huidige document uitgevoerd. De tekst blijft gelijk,
de leespositie wordt aan een bestaande sectie gekoppeld en open onderdelen blijven
open. Terug en vooruit in de browser werken ook tussen weergaven. Proefkeuzes van
linkteksten en indexordening gelden voor dezelfde pagina in alle weergaven en
blijven tijdelijk in het tabblad bewaard. Antwoorden worden niet opgeslagen.

Bij de onderwerpen staan verwijzingen naar Olia Lialina, JODI en Nutshell.
In de eerste vier weergaven zijn dat tekstlinks. Vanaf de vormgegeven weergave
verschijnen de bestaande schermafbeeldingen uit `assets/referentie/`, met maker
en bron. De uitvoerige referentiepagina wordt niet met dezelfde beelden aangevuld.
De oorspronkelijke bestanden in `content/` zijn voor deze aanpassing niet gewijzigd.

## Stadia: een interface per les

De vastgelegde leerlijn staat in `docs/decisions.md` onder "Leerlijn voor hogeschoolstudenten".
Elke fase vertrekt van een ervaren ontwerpprobleem, gevolgd door onderzoek, theorie,
een ontwerpinterventie en een beargumenteerde reflectie. De acht fasen zijn het
programma; de eerste twee lespagina's zijn uitgewerkt op hogeschoolniveau met
onderzoeksopdrachten op de cursuswebsite zelf. Lessen voor stadia 2-7 zijn nog
werkvoorraad. De technische stadia zijn experimentele condities, geen rangorde
van betere websites. Essentiële toegankelijkheid en een betrouwbare terugweg zijn
voorwaarden voor de verdere uitwerking.

Elke les heeft een `stadium` (0 Tekst, 1 Lijst, 2 Navigatie, 3 Zoeken, 4 Stijl, 5 Verwantschap, 6 Voorkeuren, 7 Kennis als UX).
In lesmodus ziet een leerling alleen de interface van zijn stadium en alleen lessen tot en met zijn voortgang.

- Start lesmodus: `index.html?stadium=0` (de voortgang wordt in `localStorage` bewaard en groeit mee met de lessen).
- Terug naar de volledige site: `index.html?stadium=alles`.
- Zichtbaarheid per stadium: `stadia.css`. De huisstijl en Bootstrap worden pas vanaf stadium 4 geladen.
- Onderzoekspagina's zonder `stadium` staan op 7.

Het navigatiesysteem (kruimelpad, stapteller, vorige/volgende, `link rel="prev/next"`, pijltoetsen) werkt in elk stadium.
Zie de pagina Pad en stap (`content/pad-en-stap.html`).

De regels voor nieuw materiaal staan op de pagina Ordeningsprincipes (`content/ordeningsprincipes.html`).
Brondocumenten staan in `data/bronnen/`.

## Installatie onder XAMPP

1. Zorg dat deze map onder `htdocs` staat (bv. `C:\server\htdocs\cursus_UI_UX`).
2. Start Apache in het XAMPP Control Panel.
3. Open `http://localhost/cursus_UI_UX/`.

PHP 8.2+ met PDO SQLite is vereist. Er is geen buildstap, Node.js of bundler nodig. Apache verwerkt de meegeleverde .htaccess-regels. De actieve database is al opgenomen; voer init niet uit bij normaal gebruik.

## Structuur

De actieve bron is `data/private/course.sqlite`. `index.php` levert de shell,
`api.php` levert inhoud en reviews, `checks.php` toont controledatums. De oude
HTML-bestanden blijven herstel-/imports snapshots. Zie [SQLite-beheer](docs/sqlite-beheer.md)
voor structuur, CLI-opdrachten, tests en herstel.


## Functionaliteiten

- **Navigatie**: sidebar met uitklapbare categorieën, hash-based routing (`#voorbeeld-onderwerp`).
- **Zoekfunctie**: client-side zoeken in titels, samenvattingen en tags, met highlights.
- **Trefwoordenkolom**: rechterkolom met de tags van het onderwerp; klik op een tag voor gerelateerde secties en onderwerpen.
- **Tweetalig**: NL/EN-knop in de header; EN-content komt uit SQLite, met terugval op NL.
- **Lettergrootte**: drie standen, bewaard in `localStorage`.
- **Vorige/volgende**: onderaan elke onderwerppagina, in de onderwerpvolgorde uit SQLite.
- **Animaties**: GSAP voor het zacht binnenkomen van pagina's, menu-items en zoekresultaten. Valt stil terug zonder GSAP of bij `prefers-reduced-motion`.
- **Demo's**: een contentblok met `data-demo="naam"` wordt na het renderen geactiveerd door `demos[naam]` in `main.js`. Zo blijft content statische HTML en staat gedrag op één plek.

## Nieuw onderwerp toevoegen

1. Maak `content/mijn-onderwerp.html` aan. Kopieer `content/voorbeeld-onderwerp.html` als vertrekpunt.
2. Maak eventueel `content/en/mijn-onderwerp.html` aan voor de Engelse versie.
3. Voeg het onderwerp toe aan de `onderwerpen`-array in `main.js`:

```javascript
{
    id: "mijn-onderwerp",
    titel: "Mijn onderwerp",
    samenvatting: "Korte beschrijving voor zoekresultaten en navigatie.",
    en: {
        titel: "My topic",
        samenvatting: "Short description for search results and navigation."
    },
    tags: ["tag1", "tag2", "tag3"],
    contentFile: "content/mijn-onderwerp.html",
    categorie: "Introductie"
}
```

4. Gebruik je een nieuwe categorie, voeg ze dan toe aan `navCategories` én aan `i18n.nl.categories` en `i18n.en.categories`.
5. Nieuwe NL-tags die een Engelse vertaling nodig hebben, komen in `tagTranslations`.

## Visuele ankers in content

```html
<div class="intro"><p>Korte inleiding...</p></div>

<div class="kernpunten">
    <span class="kernpunten-label">Kernpunten</span>
    <ul><li>...</li></ul>
</div>

<section>
    <h2>Sectietitel</h2>
    <p>...</p>
</section>

<aside class="callout callout--tip">       <!-- ook: callout--weetje, callout--let-op -->
    <span class="callout-label">Tip</span>
    <p>...</p>
</aside>

<ol class="stappen"><li>...</li></ol>

<div class="voorbeeld"><h3>Voorbeeld</h3><p>...</p></div>

<hr class="sectie-scheider">
```

Een onderwerp kan ook uit JSON komen via `dataFile` in plaats van `contentFile`; `renderTopicFromJson` in `main.js`
rendert dan secties, leerdoelen en oefeningen per niveau (Nabootsen, Variëren, Creëren).

## Huisstijl

Witte standaardinterface met Instrument Sans voor tekst, koppen en bediening.
Donkere tekst, subtiele grijze lijnen, onderstreepte tekstlinks en zichtbare toetsenbordfocus.
Geen decoratieve entreeanimaties; onderwijsdemo’s behouden hun werking. De browser gebruikt
zo nodig het systeemlettertype zonder te wachten op de webfont (`display=optional`).

## Licentie

Deze cursus website is gemaakt voor educatieve doeleinden.


## Wetenschappelijke en didactische kwaliteitscontrole

Het gepubliceerde kader staat op `index.html#ordeningsprincipes` (versie 1.0).
`project.json` verwijst naar het kader en het reviewregister; `AI_RULES.md`
verplicht de controle bij inhoudelijke wijzigingen. Het register bevat per
onderwerppagina de status, bevindingen en SHA-256 van de beoordeelde versie.
Een andere hash betekent dat de eerdere dekking opnieuw moet worden bekeken.
De status is geen keurmerk. De actuele inhoudsronde omvat alle 53 pagina’s; gerichte bronpassages zijn gecontroleerd, niet iedere claim. Onafhankelijke vakreview, volledige claimdekking, menselijke toegankelijkheidstests en leeronderzoek blijven open. Bronnotities en de historische nulmeting staan in `data/bronnen/`.


Actuele versieverschillen en open controles staan op [checks.php](http://localhost/cursus_UI_UX/checks.php)
en in `tools/course.php status`. Beheercommando's bewaren afzonderlijke datums,
beoordeelde hashes, reviewer, onderbouwing en historie. Zie [SQLite-beheer](docs/sqlite-beheer.md).
De migratie heeft bestaande controledatums behouden. Technische tests zijn geen
nieuwe wetenschappelijke broncontrole; de drie aangepaste beheerpagina's staan
terecht als gewijzigd sinds de inhoudelijke review geregistreerd.

## Weergavepaneel

De knop Weergave opent rechts de bestaande Bootstrap Offcanvas-component.
Compositie, rasterlijnen en uitleg staan hier, buiten het leesvlak. Zes schuiven
regelen lettergrootte, regelafstand, tekstbreedte, bovenruimte, paginamarge en
sectieafstand via CSS-variabelen. Persoonlijke proefwaarden worden in localStorage
bewaard. Herstel standaard wist deze waarden en herstelt Kolom zonder rasterlijnen.
Exporteer CSS downloadt de aangepaste variabelen; het bestand is bedoeld om naast
de site-stylesheets te gebruiken. De gepubliceerde standaard en SQLite-inhoud
worden niet gewijzigd. Bootstrap blijft op de bestaande versie 5.3.3.
Op brede schermen blijft de pagina bedienbaar; onder 1100px gebruikt het paneel
een achtergrond en modale toetsenbordbediening. Escape sluit het paneel.
