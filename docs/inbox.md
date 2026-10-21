# Inbox

Temporary notes go here.

This file is allowed to be messy.

Important items should later move to decisions.md, project.json, site.json, or structure.json.

## Bronmateriaal filosofisch onderzoek (2026-10-21)

`data/bronnen/filosofie-psychologie-interface.md` bevat een overzicht van studies,
proefschriften en anekdotes over filosofie en psychologie van de interface.
Het is deels de basis voor het filosofisch-onderzoeksluik van de cursus.
Omgezet naar 37 contentpagina's op 2026-10-21 (zie docs/decisions.md).
De caveats uit het document staan op de pagina Open vragen.

## Plan: stadia, een interface per les (2026-10-21) - eerste versie gebouwd, zie decisions.md

Uitgangspunt van Seb: de site neemt leerlingen mee doorheen de allereerste
tekstgebaseerde websites met minimale interface. Leerlingen zien enkel de
opties waar de les over gaat. Niet een site en een interface, maar een voor
elke les of stadium.

### Stadia (voorstel)

| Nr | Stadium | Historisch anker | Wat erbij komt | Principe in de les |
|----|---------|------------------|----------------|--------------------|
| 0 | Tekst | 1991, info.cern.ch, eerste webpagina | Alleen tekst en links, browserstandaard (Times, blauw onderstreept). Geen menu, geen CSS. Navigatie via links in de tekst en "volgende" onderaan | De link; linktekst (klik hier) |
| 1 | Lijst | 1993-94, Mosaic, handgemaakte indexpagina's, Yahoo-directory | Koppen en een indexpagina als platte lijst van links | Hierarchie, F-patroon, scannen |
| 2 | Navigatie | eind jaren 90, zijbalkmenu met rubrieken | Het menu met categorieen, open/dicht | Fitts, Hick-Hyman, schermrand |
| 3 | Zoeken | 1995 AltaVista, 1998 Google | Het zoekveld | Zoeken versus bladeren, Hick-Hyman bij onbekende keuzes |
| 4 | Stijl | 1996 CSS, 2003 CSS Zen Garden, 2010 webfonts | De huisstijl: Oswald, Alegreya, roze accent, kernpunten, callouts | Esthetiek-bruikbaarheid, Gestalt, signifiers |
| 5 | Verwantschap | 2003-05, del.icio.us, flickr, folksonomie | De trefwoordenkolom en gerelateerde onderwerpen | Tags, associatie, hypertext als netwerk |
| 6 | Voorkeuren en beweging | jaren 2010, responsive, prefers-reduced-motion | Lettergrootte, taal, animaties, mobiele layout | Toegankelijkheid, SDT (autonomie), hedonisch |
| 7 | Kennis als UX | nu | Demo's en live controles | De site controleert zichzelf |

### Mechanisme

- Elk onderwerp in de onderwerpen-array krijgt een veld `stadium` (0-7).
  Onderzoekspagina's (de huidige inhoud) staan standaard op 7.
- Bij het openen van een pagina zet applyStadium(n) `data-stadium="n"` op
  `<html>` en schakelt componenten aan of uit: header-knoppen, menu, zoekveld,
  tagskolom, animaties, demo's. Niets wordt verwijderd uit de DOM; het wordt
  verborgen en niet geinitialiseerd.
- CSS wordt gesplitst in lagen per stadium, additief geladen:
  stadia/0-tekst.css (leeg of minimaal), 1-lijst.css, 2-navigatie.css,
  3-zoeken.css, 4-stijl.css (de huidige huisstijl), 5-verwantschap.css,
  6-voorkeuren.css. style.css wordt daarmee opgesplitst; de inhoud blijft
  gelijk. Een pagina in stadium n laadt lagen 0 tot n.
- In stadium 0 en 1 is de welkomstpagina de index: een tekstpagina met links,
  zoals info.cern.ch. De vaste "vorige/volgende"-links onderaan blijven in
  elk stadium, want anders kan een leerling in stadium 0 niet verder.
- Overschrijven: `?stadium=n` in de URL (voor de docent, om een stadium te
  tonen los van de les) en een schakelaar in de header die pas vanaf stadium
  6 zichtbaar is. Een gekozen overschrijving wordt in localStorage bewaard.
- Onderzoeksmodus: zonder overschrijving en op een pagina met stadium 7 is
  de site volledig, zoals nu.

### Volgorde van uitvoering

1. Stadium 0 eerst, als bewijs: een leerlingpagina "De link" (stadium 0),
   de welkomstpagina als tekstindex, applyStadium met alleen aan/uit van
   componenten, nog zonder CSS-splitsing (style.css tijdelijk uitgeschakeld
   in stadium 0).
2. CSS splitsen in lagen; stadia 1 tot 6.
3. Per stadium een anekdotepagina met het historische anker (info.cern.ch,
   Mosaic, Yahoo-directory, AltaVista/Google, CSS Zen Garden, del.icio.us).
4. Lespagina's per stadium, in de categorie Lessen (nieuw), elk met het
   principe en de oefening.

### Open punten

- Hoeveel stadia en of deze ladder overeenkomt met het lesplan.
- Of leerlingen zelf een stadium kunnen kiezen of enkel via de les.
- Of de onderzoeksinhoud zichtbaar blijft voor leerlingen in lage stadia
  (voorstel: nee; alleen pagina's met stadium <= huidig stadium staan in de
  index).

## Werkvoorraad: originele beelden, sites en principeverzamelingen (2026-10-21)

Gevonden op vraag van Seb. Per stadium wat we kunnen inbouwen, met rechten.

### Live of geemuleerd (leerlingen kunnen ze zelf bedienen)

- Stadium 0: de eerste webpagina, live op het oorspronkelijke adres:
  http://info.cern.ch/hypertext/WWW/TheProject.html. Line-mode browser
  emulator (CERN, hackathon 2013): https://line-mode.cern.ch/
- Stadium 1-3: OldWeb.today (Webrecorder, Ilya Kreymer): Wayback-snapshots
  in geemuleerde browsers van toen (MacLynx, Mosaic, Netscape, IE 5/6).
  https://oldweb.today/ en https://webrecorder.net/blog/2020-12-23-new-oldweb-today
  Daarmee kunnen leerlingen Yahoo 1994, AltaVista, Google 1998 bekijken
  zoals ze toen waren.
- Stadium 1-3: Web Design Museum (Petr Kovar): 1600+ schermafbeeldingen
  1991-2006 en tijdlijnen per site (Google, Wikipedia, Amazon, Apple).
  https://www.webdesignmuseum.org/ (screenshots via Internet Archive e.a.;
  rechten per beeld nakijken, liever linken dan kopieren)
- Apple: Infinite Mac (Mihai Parparita): elke klassieke Mac OS-versie vanaf
  System 1.0 in de browser, WebAssembly, geen installatie. https://infinitemac.org/
  Internet Archive: HyperCard-stacks in de browser (MacOS 7.0.1, PCE-emulator):
  https://blog.archive.org/2017/08/11/hypercard-on-the-archive-celebrating-30-years-of-hypercard/
- Xerox Alto: ContrAlto (Living Computer Museum, Josh Dersch) en de
  JavaScript-port ContrAltoJS; restauratievideo's van CuriousMarc (16 delen).
  Xerox Star-video's 1982-84 bij DigiBarn:
  https://www.digibarn.com/collections/movies/digibarn-tv/gui-movies/xerox/
- Gopher: via een proxy (Floodgap) nog te bezoeken; nog niet geverifieerd.

### Originele beelden en documenten

- Engelbart 1968: drie geremasterde delen staan al op de pagina. Computer
  History Museum bewaart de volledige opname (1:39:00), catalogus 102703237.
  Rechten/transcript nog niet gevonden; Doug Engelbart Institute nakijken.
- Susan Kare: iconschetsen op ruitjespapier 1982-83 in MoMA (gift van de
  ontwerpster, gedeeld met SFMOMA), bv. https://www.moma.org/collection/works/188382
  (sketchbook) en 188390-188397. Linken, niet kopieren.
- Three Mile Island: foto van president Carter in de TMI-2-controlekamer
  (april 1979), publiek domein (werk van de Amerikaanse overheid); bron
  President's Commission. Fotocollectie TMI-2 Knowledge Management Portal:
  https://tmi2kml.inl.gov/HTML/Pictures.html
- Therac-25: Leveson & Turner, IEEE Computer juli 1993, pp. 18-41; pdf o.a.
  https://web.mit.edu/6.033/2004/wwwdocs/papers/Therac_1.html (met toestemming
  IEEE herdrukt). Linken.
- JODI: https://wwwwwwwww.jodi.org (1995), MoMA My%Desktop (2019).
- Olia Lialina, Turing Complete User, boek 2021 open pdf bij arthistoricum.net
  (Heidelberg); zie https://monoskop.org/Olia_Lialina
- Lauren McCarthy LAUREN en Bret Victor Magic Ink: nog op te zoeken
  (lauren-mccarthy.com, worrydream.com).

### Principeverzamelingen (kandidaten voor Kennis als UX-demo's)

- Laws of UX (Jon Yablonski, lawsofux.com; boek O'Reilly, 2e ed. 2024):
  Fitts, Hick, Miller, Jakob's law, Tesler's law, Doherty threshold,
  peak-end, von Restorff, Zeigarnik, serial position, Postel, Pareto,
  Parkinson, Occam, esthetiek-bruikbaarheid, goal-gradient. Yablonski zelf:
  vuistregels, geen wetten.
- Nielsen & Molich 10 heuristieken (1990, herzien 1994): nngroup.com;
  Nielsens eigen geschiedenis op jakobnielsenphd.substack.com.
- Shneiderman's Eight Golden Rules, Tognazzini's First Principles
  (asktog.com), Raskin, WCAG 2.x: nog te koppelen aan pagina's.
- Deceptive Design (Brignull): typologie en hall of shame; nog te koppelen
  aan de dark-patterns-les.

### Voorstel integratie

1. Per stadium een vaste "Bekijk het origineel"-sectie met de video-cards
   (al in de huisstijl): link naar de live of geemuleerde bron, nooit een
   kopie van beelden waarvan de rechten niet vrij zijn.
2. Oefeningen in de lessen die de emulatoren gebruiken: info.cern.ch in de
   line-mode browser (les 1), Yahoo 1994 in OldWeb.today (les 2), System 1
   in Infinite Mac (Apple-anekdote), een HyperCard-stack (Atkinson).
3. Laws of UX als bron voor de volgende Kennis als UX-pagina's: Jakob's law
   (conventies van deze site), Tesler's law (wat de site voor de lezer doet),
   Doherty threshold (laadtijd en animatie), Zeigarnik (stapteller),
   serial position (volgorde in het menu).
4. Publiek domein-beelden (TMI-controlekamer) mogen in assets/; MoMA, CHM en
   Web Design Museum blijven links.

## Idee: een stadium "Beeld" (2026-10-21)

Tussen stadium 1 (Lijst) en 2 (Navigatie) past historisch een stap "Beeld"
(1993: img-tag, klikbare afbeelding met blauwe rand, image map). Nog niet
in de ladder opgenomen; zie de pagina Beeld dat klikt voor de bronnen.
