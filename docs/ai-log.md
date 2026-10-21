# AI Log

Use this file for short notes about AI-assisted changes.

## Format

### YYYY-MM-DD - Change title

Changed:
Reason:
Files:

### 2026-10-21 - Vijf pagina's Kennis als UX met live demo's

Changed:
Vijf nieuwe pagina's in de categorie "Kennis als UX", na "Klik hier, en
waarom niet", elk met een demo die het principe op de site zelf laat
ervaren:
- fitts-op-deze-site: meetveld met tien doelen (drie breedtes, drie
  afstanden), tabel met tijd per poging en een rechte lijn (ms per bit).
- hick-hyman-in-het-menu: zoek een pagina in het gewone menu en daarna in
  een ongesorteerde lijst zonder categorieen; klik op het menu navigeert
  niet zolang de meting loopt; menu wordt hersteld via buildNav/initNavGroups
  (ook bij verlaten van de pagina).
- f-patroon-en-koppen: knop verbergt koppen, kernpuntenkader, callout-labels
  en vet op de pagina (klasse demo-zonder-ankers op .onderwerp-content).
- toestand-versus-opdracht: twee knoppen; links verandert meteen, rechts na
  een nagebootste bevestiging van 1,5 s; elke derde opdracht wordt geweigerd.
- breakdown-bij-ontbrekende-content: toont de meldingen contentNotFound en
  loadError uit i18n in een kader en toetst ze (woorden, link, bestandspad).
Demo-functies staan in het demos-object in main.js (plus hulpfunctie
demoShuffle); nieuwe tags in tagTranslations; stijlen onder "Kennis als UX"
onderaan style.css.

Reason:
Vervolg op de beslissing van 2026-10-21 (Kennis als UX): de kandidaten uit
docs/decisions.md uitgewerkt.

Files:
content/fitts-op-deze-site.html, content/hick-hyman-in-het-menu.html,
content/f-patroon-en-koppen.html, content/toestand-versus-opdracht.html,
content/breakdown-bij-ontbrekende-content.html, main.js, style.css

Opmerkingen:
- De pagina breakdown-bij-ontbrekende-content stelt vast dat de melding
  contentNotFound de beheerder aanspreekt ("Maak een HTML bestand aan in de
  content/ map") en geen link terug biedt. De melding is niet aangepast,
  zodat de demo blijft tonen wat de site werkelijk doet. Voorstel voor een
  betere tekst staat op de pagina.
- Tegelijk werd in een andere sessie het stadia-mechanisme gebouwd
  (stadia.css verbergt [data-demo] buiten stadium 7). De vijf nieuwe
  onderwerpen hebben nog geen veld `stadium`; als dat veld verplicht wordt,
  horen ze op 7.

### 2026-10-21 - Originelen en principeverzamelingen ingebouwd

Changed:
Secties "Bekijk het origineel" met bronkaarten (links naar live of
geemuleerde bronnen, geen gekopieerde beelden) op de pagina's eerste
webpagina, Gopher, Xerox PARC, Apple, Therac-25, Three Mile Island,
creative coding, Mother of All Demos (Verder kijken) en een sectie
Principeverzamelingen op Overzicht van psychologische principes.
Oefeningen in de emulatoren toegevoegd aan les 1 (line-mode browser) en
les 2 (OldWeb.today, Yahoo 1996).
Reason:
Seb keurde het voorstel in docs/inbox.md goed (werkvoorraad originelen).
Files:
content/*.html (9 pagina's), content/les-de-link.html,
content/les-de-lijst.html, style.css (.bron-kaart)

### 2026-10-21 - De eerste webpagina opent in het NeXT-venster

Changed:
Links met data-venster="1120x832" openen in een apart venster van die
grootte (initVensterLinks in main.js; valt terug op een nieuw tabblad als
de browser geen venster toelaat). Toegepast op de links naar
info.cern.ch op de pagina De eerste webpagina en in Les 1. Nieuwe sectie
"Het scherm van 1991" met het NeXT MegaPixel Display (17 inch, 1120 x 832,
vier grijswaarden) en de terminal van de line-mode browser (80 x 24).
Reason:
Vraag van Seb: de schermresolutie van toen nagaan en de pagina in die
grootte openen.
Files:
main.js, content/eerste-webpagina.html, content/les-de-link.html

### 2026-10-21 - Yahoo 1994 en Google 1998 op de schermgrootte van toen

Changed:
Nieuwe anekdotepagina "Yahoo 1994 en Google 1998: lijst en zoekveld" met
de oudste bewaarde versies in het Internet Archive (Yahoo 17 oktober 1996,
Google 11 november 1998), die openen in een venster van 640 x 480 en
800 x 600, plus de schermafbeeldingen uit 1994 en 1998 van het Web Design
Museum. Les 2 verwijst naar de Yahoo-snapshot in 640 x 480.
Reason:
Vraag van Seb: hetzelfde doen als voor de CERN-pagina. Bronnen voor de
resoluties: GVU-enquete oktober 1997 (800x600 19%, 1024x768 14%, 640x480
12%, weet niet 40%), W3Schools januari 2000 (800x600 56%). Voor 1994 is
640x480 de ontwerpstandaard, geen meting; dat staat als "let op" op de
pagina. Yahoo 1994 zelf is niet gearchiveerd.
Files:
content/yahoo-en-google.html, content/les-de-lijst.html, main.js

### 2026-10-21 - Afsluitende pagina: tijdlijn van de interface

Changed:
Nieuwe categorie Overzicht (laatste in het menu) met de pagina Tijdlijn
van de interface: 33 regels van 1910 tot 2026, elk met jaar, inzicht,
link naar de uitwerking en een eigen SVG-pictogram (sprite met 23 symbolen
bovenaan de pagina, zwart met roze accent). Stijl .tijdlijn in style.css.
Reason:
Vraag van Seb: in een laatste pagina alle UI/UX-inzichten chronologisch
ordenen en illustreren. Eigen tekeningen, geen historische beelden, zodat
er geen rechtenvraag is.
Files:
content/tijdlijn.html, style.css, main.js, README.md,
content/over-dit-onderzoekscentrum.html, content/ordeningsprincipes.html

### 2026-10-21 - Stappenlijst: inline links liepen uit de tekst

Changed:
ol.stappen > li was een grid met twee kolommen, waardoor elke link of
code-element in een stap een eigen gridcel kreeg en als smalle kolom
onder elkaar viel. Nu: position relative met padding-left, het nummer
absoluut links. Inline inhoud loopt weer gewoon door.
Reason:
Seb meldde de fout met een schermafbeelding van Les 2.
Files:
style.css

### 2026-10-21 - Sectieknoppen in de trefwoordenkolom sprongen niet

Changed:
De knoppen die vanuit de trefwoordenkolom naar een sectie op de pagina
springen gebruikten scrollIntoView met behavior smooth; die scroll werd
afgebroken en de pagina bleef staan. Nu springNaarSectie(): instant
scrollen, scroll-margin-top op secties, en een korte roze markering links
van de sectie (animatie is-aangesprongen) zodat de sprong zichtbaar is.
Ook gebruikt voor de sprong naar een categorie in de inhoud (#index-...).
Reason:
Seb meldde dat de hyperlinks van de trefwoorden niet werkten. De
trefwoordknoppen zelf en de links naar gerelateerde onderwerpen werkten;
de sectiesprong niet.
Files:
main.js, style.css

### 2026-10-21 - Beeld dat klikt: GIF, JPEG en het icoon als link

Changed:
Nieuwe anekdotepagina over de geschiedenis van beeld als klikbaar element:
GIF87a (15 juni 1987), JPEG T.81 en JFIF (1992), Andreessens img-tag
(25 februari 1993, Mosaic 0.10 op 12 maart), ISMAP en USEMAP (Seidman,
Spyglass, augustus 1995; RFC 1980, 1996), Netscape 1.0 inline JPEG
(december 1994), Netscape 2.0 progressieve JPEG en herhalende GIF (1995),
88x31-badges, de eerste banner (HotWired, 27 oktober 1994) en de favicon
(IE5, maart 1999). Vijf regels op de tijdlijn met twee nieuwe pictogrammen.
Niet geverifieerd en zo gemarkeerd: jaar van GIF89a, herkomst van de
Netscape Now-knop, auteur van de server-side image map.
Reason:
Vraag van Seb: de start van GIF, JPG en iconen als klikbare elementen
onderzoeken en in de geschiedenis integreren.
Files:
content/beeld-dat-klikt.html, content/tijdlijn.html, main.js

### 2026-10-21 - Ongebruikelijke interfaces: visueel referentieoverzicht

Changed:
Nieuwe pagina in Kunst en code met vijftien sites, gegroepeerd op acht
navigatieprincipes, elk met naam, maker, jaar, link, beeld, handeling,
principe en wat vandaag bruikbaar is, plus vijf eigen interface-ideeen.
Status per voorbeeld: live getest (JODI, Superbad, Lialina-origineel,
Zoomquilt, Bruno Simon, WINDOWS93, Cameron's World, Radio Garden, Nutshell,
Ishkur), preservatie (Lialina bij Rhizome; de emulator kon hier niet
geopend worden), video en beeld (Soulbath, WHITEvoid), beeld (Dontclick.it,
We Feel Fine, Universe). Eigen schermafbeeldingen in assets/referentie/;
archiefbeelden worden van hun bron geladen met referrerpolicy no-referrer.
Stijl .referentie en .ref-status in style.css. Een regel op de tijdlijn.
Reason:
Opdracht van Seb met een onderzochte selectie van vijftien sites.
Files:
content/ongebruikelijke-interfaces.html, assets/referentie/*.jpg,
content/tijdlijn.html, main.js, style.css

### 2026-10-21 - Leerlijn en doelgroep vastgelegd

Changed:
De bevestigde leerlijn met acht onderzoeksfasen, vaste lescyclus,
leerresultaten, eindopdracht, randvoorwaarden en open werk vastgelegd in
decisions.md. README en de introductie richten zich op hogeschoolstudenten
en maken onderscheid tussen het vastgelegde programma en bestaande lessen.
Reason:
Seb bevestigde het voorstel om ontwerpprincipes via opeenvolgende
ervaringen, onderzoek en beargumenteerde ontwerpkeuzes te laten ontdekken.
Files:
docs/decisions.md, docs/ai-log.md, README.md,
content/over-dit-onderzoekscentrum.html

### 2026-10-21 - Les 1 en 2 uitgewerkt als onderzoek aan de cursuswebsite

Changed:
Beide bestaande lespagina's herwerkt op hogeschoolniveau met de cyclus
ervaren, formuleren, theoretiseren, ontwerpen en toetsen, en positioneren.
Les 1 onderzoekt linktekst, verwachting en context. Les 2 gebruikt acht
bestaande cursuspagina's voor twee classificaties met dezelfde inhoud.
Elke les bevat leerdoelen, uitvoerbare taken, observatievelden, brongebruik,
methodische beperkingen, inleverproduct en beoordelingscriteria.
Stadiumlinks, terugkeer en de beperkte index worden expliciet uitgelegd.
Prototypes worden door studenten op papier of in eigen HTML gemaakt;
de gedeelde website wordt niet gewijzigd door de oefening.
Samenvattingen en voortgangsteksten bijgewerkt. De historische vergelijking
is verdieping; de experimenten zijn onafhankelijk van externe archieven.
Reason:
Expliciete opdracht van Seb om beide lessen uit te werken volgens de
vastgelegde onderzoekscyclus, met de website zelf als experiment.
Sources checked:
W3C Understanding SC 2.4.4; W3C WAI Headings; Budiu (NN/G, 2020),
Information Scent. De relevante verwijzingen staan in de lespagina's.
Files:
content/les-de-link.html, content/les-de-lijst.html, main.js, README.md,
content/over-dit-onderzoekscentrum.html, docs/decisions.md, docs/ai-log.md

### 2026-10-21 - Les 1 en 2: speelse kernroute, docentkaart en HTML

Changed:
Beide lessen herwerkt met een korte kernroute, speelse opening, uitklapbare
docentkaart, theorie vanuit de ervaring, volledige HTML-voorbeelden,
foutenhulp en drie afsluitende reflectiezinnen. Uitgebreidere onderzoeksopdrachten
zijn optionele verdieping. Les 1: verschillende labels, dezelfde deurpagina.
Les 2: verschillende koppen, dezelfde inhoud; daarna een eigen kleine index.
Reason:
Opdracht om de lessen dragend te maken op dagen met minder energie, met
voelbare filosofische inzichten en kleine HTML-ingrepen onderweg.
Files:
content/les-de-link.html, content/les-de-lijst.html, main.js,
docs/decisions.md, docs/ai-log.md
Sources:
W3C Link Purpose (In Context), W3C WAI Headings, MDN Basic HTML syntax;
Verbeek, Beyond Interaction (2015), DOI 10.1145/2751314, geverifieerd via
het onderzoeksportaal van Universiteit Twente. Bronnen staan in de lessen.

### 2026-10-21 - Lineaire reis en experimenten op de site zelf

Changed:
Vaste reisbalk met acht haltes, vorige/volgende, overzicht, vrije verkenning,
terugkeer, verlaten en vergelijking van dezelfde pagina in een andere interface.
Live ingrepen op de linkteksten van les 1 en de cursusindex van les 2; HTML volgt
het resultaat. Ervaring staat vóór de docentkaart en theoretische reflectie.
Basislettergrootte blijft bereikbaar. Een aanvraagnummer voorkomt dat een oude
contentfetch een later gekozen pagina overschrijft. Cacheversies bijgewerkt.
Reason:
Expliciete opdracht om de site als UX voelbaar te maken en de verschillende
interfacewerelden als één lineair én verkenbaar geheel te verbinden.
Files:
main.js, stadia.css, index.html, content/les-de-link.html,
content/les-de-lijst.html, README.md, site.json, docs/decisions.md, docs/ai-log.md
Validation:
JavaScript-syntaxcontrole en echte headless Edge-browserproeven: alle acht
interfacecondities, echte linktekstwijziging, eigen tekst, gelijkblijvend corpus,
zijpad en terugkeer, desktop en mobiel. Geen JavaScript-fouten in die proeven.
Praktijktoetsing in de klas blijft open.

### 2026-10-21 - Verkenningen, terugkeer en rustige bediening

Changed:
Korte activiteiten voor werelden 3-8, direct op de bestaande interface, met
filosofische reflectie, HTML-fragment en docentkaart. Proefkeuzes van les 1 en 2
worden tijdelijk per tabblad hersteld, ook na zijpaden. Reisbediening compacter.
Zoekresultaten zijn links met toetsenbordbediening; letterlijke zoektekens geven
geen regexfout. Escape sluit de resultaten. Handmatige rustige interface bewaart
de systeemvoorkeur. Reisnavigatie blijft buiten de afsluitende linktekstproef.
Leskopij en de beperkte betekenis van de generieke-linkteller verduidelijkt.
Reason:
Vervolg op Sebs verzoek om rustig door te werken aan de site zelf als UX.
Files:
main.js, stadia.css, index.html, content/les-de-link.html,
content/les-de-lijst.html, content/klik-hier.html, README.md,
docs/decisions.md, docs/ai-log.md
Validation:
28 browsercontroles geslaagd voor alle zes handelingen, terugkeer met herstelde
proefstand, veilige reisnavigatie, zoekfocus en toetsenbord, systeemvoorkeur en
mobiele breedte van alle acht werelden. Praktijktoetsing met studenten blijft open.

Aanvullende controle:
Reisbalk compacter gemaakt en visueel bekeken op desktop en mobiel. Het
onderwerpenmenu staat op smalle schermen achter een native details-bediening;
na een keuze sluit het en op desktop is het open. Getest met schermwissel,
paginakeuze, letterlijke regextekens in zoeken en mobiele breedte.

### 2026-10-21 - TNT-video als opening van les 1

Changed:
De door Seb aangeleverde video fpXn3ae4zws (TNT: Push to Add Drama) staat
vroeg in les 1, vóór de live linkproef. Met een voorspelmoment, nabespreking,
filosofische vraag over nieuwsgierigheid en sturing, en een docentkaart voor
vijf minuten inclusief alternatief zonder afspelen. De reclamefilm wordt
niet als algemeen gebruikersonderzoek gepresenteerd. Externe link zonder autoplay.
Reason:
Seb vroeg de video ergens in het begin op te nemen.
Files:
content/les-de-link.html, docs/ai-log.md
Validation:
Videotitel gecontroleerd op de opgegeven YouTube-pagina; lokale plaatsing
voor de eerste live proef gecontroleerd.

### 2026-10-21 - Tekstherstel op vraag van Seb

Changed:
Eerdere lesinhoud van les 1 en 2 teruggezet. Reis-, wereld- en halte-metafoor
uit de zichtbare navigatie gehaald; interne URL-parameter blijft compatibel.
Toegevoegde docentkaarten, promotionele openingszinnen en lesregie verwijderd
uit de gebruikerspagina's. Werkende bediening behouden met eenvoudige labels.
TNT-video alleen als verwijzing. Introductie teruggebracht naar de eerdere tekst,
met hogeschool kunstopleiding als doelgroep.
Reason:
Expliciete correctie van Seb: originele teksten terug, seb-lib-voice.
Files:
content/les-de-link.html, content/les-de-lijst.html,
content/over-dit-onderzoekscentrum.html, main.js, index.html, README.md,
docs/decisions.md, docs/ai-log.md

### 2026-10-21 - Overgangen en grafische referenties

Changed:
Weergaven wisselen met History API binnen hetzelfde document. Leesanker,
open onderdelen en proefkeuzes blijven behouden. De bestaande URL-parameter en
lineaire onderwerpvolgorde blijven werken. Alle acht weergaven zijn bereikbaar
via “Dezelfde pagina, andere weergave”. Toetsenbordbediening volgt dezelfde overgang.
Bestaande lokale schermafbeeldingen van Lialina, JODI en Nutshell worden gebruikt
als bronverwijzingen: eerst als tekstlinks, vanaf vormgeving met afbeeldingen.
Reason:
Opdracht van Seb: voelbare overgangen zonder opgelegde lesregie, oorspronkelijke
teksten en toon behouden, grafisch materiaal in de map en online onderzoeken.
Sources:
- assets/referentie/: elf bestaande schermafbeeldingen geïnventariseerd.
- https://sites.rhizome.org/anthology/lialina.html
- https://wwwwwwwww.jodi.org/
- https://ncase.me/nutshell/
- https://www.cameronsworld.net/ en https://radio.garden/ eveneens bekeken.
De eerste drie bronverwijzingen zijn gebruikt; bestaande lokale opnamen, geen
licentieclaim over de oorspronkelijke kunstwerken.
Files:
main.js, stadia.css, index.html, README.md, site.json,
docs/decisions.md, docs/ai-log.md
Validation:
Alle contentbestanden met SHA-256 vergeleken met de uitgangssituatie: ongewijzigd.
Browserproeven: alle acht weergaven zonder documentherlaad, gelijke introductietekst,
behoud van open vergelijkingspaneel, leesanker, terug/vooruit, proefstand over
weergaven heen, toetsenbord, laden van lokale beelden op hun eigen verhouding en
mobiele breedte. Geen JavaScript-paginafouten in deze controles.

### 2026-10-21 - Samengestelde koppen op twee niveaus

Changed:
45 samengestelde sectiekoppen in 14 contentbestanden gesplitst in h1 en h2.
Paginakoppen krijgen dezelfde verdeling bij dubbele punt of puntkomma.
De lijn onder h1 verwijderd. Formuleringen verder behouden.
Reason:
Seb: twee verschillende niveaus, geen extra lijn, overal toepassen.
Files:
content/*.html (14 bestanden), main.js, style.css, index.html, docs/ai-log.md

### 2026-10-21 - Visuele controle van de koppen

Changed:
Overgebleven opvulling voor de oude lijn onder h1 verwijderd. Bij h1 direct
gevolgd door h2 is de afstand teruggebracht tot 0.15em, met nul bovenmarge op h2.
De regels gelden ook zonder huisstijl. Op schermen tot 620px zijn de twee
kopgroottes 1.8em en 1.2em; langere koppen breken daardoor rustiger af.
Formuleringen en contentbestanden ongewijzigd.
Reason:
Seb vroeg de koppen visueel op de hele site te controleren: twee duidelijke
niveaus, geen extra lijnen of onnodige witruimte, oorspronkelijke tekst behouden.
Validation:
53 pagina's op desktop (1280px) en mobiel (390px), 106 weergaven. Contactbladen
van alle pagina's visueel bekeken. 118 weergegeven kopparen gecontroleerd op
niveauverschil, afstand, opvulling en lijnen. Geen gevonden overloop of
JavaScript-paginafouten. Ook de vroege interfaces en de volledige site nagekeken.
Alle contentbestanden via SHA-256 vergeleken: ongewijzigd.
Files:
style.css, stadia.css, index.html, docs/ai-log.md
Evidence:
Visuele contactbladen en heading-audit.json in de visualisatiemap van deze chat.

### 2026-10-21 - Leerstof en leerplan als werkdocument

Changed:
leerplan.md aangemaakt op expliciete vraag van Seb. Bevat uitgangspunten voor de
hogeschool kunstopleiding, feitelijke stand van zaken, een voorlopig samenhangend
concept, de acht stappen met leerstof en concepten, de rol van de site en kleine
HTML-ingrepen, inhoudelijke knelpunten, leerresultaten als voorstel, bespreekpunten
en open werk. Alle 53 bestaande pagina's gelinkt in een afzonderlijke inventaris.
Link naar het werkdocument toegevoegd aan README.md.
Reason:
Een vaste plek om de lineaire opbouw en het mogelijke overkoepelende concept te
bespreken, zonder het interne leerplan als regie aan de gebruikersinterface toe
te voegen. Oudere beslisnotities zijn historiek, geen bewijs dat alle lessen af zijn.
Validation:
Acht stappen en 53 inventarisitems gecontroleerd. Alle lokale documentlinks bestaan.
Cursusteksten en interface zijn voor deze taak niet gewijzigd.
Files:
leerplan.md, README.md, docs/ai-log.md

### 2026-10-21 - Dezelfde inhoud in kolom, raster en flexibel systeem

Changed:
Compositiekeuze vanaf stadium 4. Zes kolommen met gelijke tekstblokken of een
vaste reeks brede en smalle blokken, met een omgekeerde tweede verdeling.
Bestaande referentiebeelden volgen de gekozen verdeling. Optioneel raster en
uitklapbare regels met de twee boekverwijzingen. Keuzes werken met browserhistoriek.
Reason:
De grafische ordening op de site zelf kunnen vergelijken met behoud van de inhoud.
Validation:
Edge op desktop en mobiel: dezelfde sectieteksten en beeldbronnen in alle standen,
verschillende gemeten kolombreedtes, omgekeerde verdeling, terugknop en rasterkeuze.
Geen paginafouten of mobiele horizontale overflow. Desktopbeelden visueel bekeken.
Alle contentbestanden via SHA-256 vergeleken: ongewijzigd.
Files:
main.js, stadia.css, index.html, leerplan.md, README.md, docs/ai-log.md
