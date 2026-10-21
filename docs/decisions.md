# Decisions

Important project decisions go here.

## Format

### YYYY-MM-DD - Decision title

Decision:
Reason:
Impact:

### 2026-10-21 - De site is een onderzoekscentrum met acht categorieen

Decision:
De site dient eerst als studiemateriaal en groeit daarna uit tot een cursus
voor studenten. Alle inhoud wordt geordend in acht categorieen: Introductie,
Filosofie van de interface, Psychologie van de interface, Proefschriften,
Anekdotes, Kunst en code, Bronnen, Werkplaats. Elke anekdote opent met een
betrouwbaarheidslabel (goed gedocumenteerd, deels mythe, zwak onderbouwd).
Tags volgen een vast vocabulaire. Nieuw materiaal gaat van docs/inbox.md via
data/bronnen/ naar een pagina. De volledige regels staan op de pagina
Ordeningsprincipes (content/ordeningsprincipes.html).

Reason:
Het bronoverzicht over filosofie en psychologie van de interface had al een
natuurlijke indeling. Die is overgenomen en aangevuld met een laag voor
bronnen en een werkplaats, zodat latere aanvullingen op dezelfde manier
geplaatst kunnen worden.

Impact:
- 37 pagina's in content/, een per begrip, anekdote of bron.
- Contenttekst spreekt nooit de beheerder aan; terzijdes worden eigen
  anekdotepagina's (zie Winograd en SHRDLU).
- Niet-geverifieerde punten staan op de pagina Open vragen.

### 2026-10-21 - Kennis als UX: de site past toe wat ze uitlegt

Decision:
Nieuwe categorie "Kennis als UX". Elke pagina erin neemt een principe uit de
site en past het toe op de site zelf, met een live demo die de lezer het
principe laat ervaren. Technisch: een contentblok met data-demo="naam" wordt
na het renderen geactiveerd door demos[naam] in main.js. De eerste pagina is
"Klik hier, en waarom niet": een teller die alle linkteksten op de pagina en
in het menu controleert op generieke tekst, en een knop die alle links
tijdelijk "klik hier" noemt.

Reason:
Voorstel van Seb: de besproken principes rechtstreeks gebruiken in de UI en
UX van de site. De kennis wordt dan niet alleen beschreven maar ervaren.

Impact:
- Negen categorieen in plaats van acht.
- De teller vond bij de eerste test meteen een fout: de menulink naar de
  pagina zelf heette "Klik hier". De pagina is hernoemd; het voorval staat
  als weetje op de pagina.
- Kandidaten voor volgende pagina's: Fitts (menubalk en knopgrootte op de
  site), Hick-Hyman (aantal menu-items), F-patroon (koppen en kernpunten),
  toestand versus opdracht (zoekveld en laadindicator), breakdown
  (foutmeldingen bij ontbrekende content).

### 2026-10-21 - Stadia: een interface per les, en het navigatiesysteem Pad en stap

Decision:
De site kent acht stadia (0 Tekst, 1 Lijst, 2 Navigatie, 3 Zoeken, 4 Stijl,
5 Verwantschap, 6 Voorkeuren, 7 Kennis als UX), elk met een historisch anker.
Een les heeft een veld `stadium` in de onderwerpen-array. In lesmodus
(index.html?stadium=n, bewaard in localStorage) ziet de lezer alleen lessen
tot en met de eigen voortgang; een les met een hoger stadium openen verhoogt
de voortgang. ?stadium=alles zet terug naar de volledige site. Zichtbaarheid
van onderdelen per stadium staat in stadia.css; de huisstijl en Bootstrap
worden pas vanaf stadium 4 geladen. Onderzoekspagina's zonder `stadium`
staan op 7.

Het navigatiesysteem Pad en stap werkt in elk stadium: kruimelpad (Start >
Categorie > Pagina, hierarchie en niet geschiedenis, aria-current), stapteller
(pagina i van n in de categorie, in lesmodus ook het stadium), vorige/volgende
met titel en samenvatting als title-attribuut, melding bij een andere
categorie, "volgend stadium" aan het einde, link rel=prev/next in de kop,
pijltoetsen. De startpagina is een indexpagina met alle categorieen en
pagina's, zoals info.cern.ch in 1991.

Reason:
Seb: de site neemt leerlingen mee doorheen de eerste tekstgebaseerde websites;
leerlingen zien enkel de opties waar de les over gaat; een interface per les
of stadium. Bronnen voor het navigatiesysteem: Lynch (1960), Pirolli & Card
(1999), Nielsen (2007), Krug (2000), Rosenfeld & Morville (1998); zie de
pagina Navigatie en wayfinding.

Impact:
- Nieuwe categorie Lessen (eerst in het menu) met Les 1 De link (stadium 0)
  en Les 2 Koppen en de lijst (stadium 1).
- Nieuwe pagina's: Navigatie en wayfinding, De eerste webpagina, Gopher
  versus het web, Pad en stap.
- style.css is nog niet in lagen gesplitst; stadia 0-3 draaien op
  browserstandaard plus stadia.css, stadia 4-7 op de volledige huisstijl met
  verborgen onderdelen. Splitsing in lagen is werkvoorraad.
- Lessen voor stadia 2-7 en de bijbehorende anekdotes (Mosaic, Yahoo,
  AltaVista/Google, CSS Zen Garden, del.icio.us) zijn werkvoorraad.

### 2026-10-21 - Leerlijn voor hogeschoolstudenten

Decision:
De cursus richt zich op hogeschoolstudenten. De website is leeromgeving,
onderzoeksobject en ontwerpexperiment. De centrale onderzoeksvraag luidt:
hoe kan een website doelgericht handelen en open verkenning ondersteunen,
en welke spanningen ontstaan daarbij?

Vindbaarheid en ontdekking vormen een ontwerphypothese. Studenten mogen die
begrenzen of beargumenteerd tegenspreken. De cursus stuurt op onderbouwd
ontwerpoordeel, niet op instemming met een universeel ideaal.

Reason:
Seb bevestigde de voorgestelde leerlijn: opeenvolgende ontdekkingen waarin
elke ontwerpkeuze een ervaren probleem beantwoordt en nieuwe vragen oproept.
De toon wordt academischer door nauwkeurige begrippen, brongebruik en
onderzoeksopdrachten, met behoud van toegankelijke taal.

Impact:
De onderstaande fasen sluiten aan op de bestaande technische stadia 0-7.
Een fase is een inhoudelijke eenheid en kan meerdere lesperioden omvatten.
De historische casussen ondersteunen de analyse; ze bewijzen geen
onvermijdelijke vooruitgang naar een ideale website.

| Stadium | Fase en ervaring | Onderzoek en resultaat | Vraag die de overgang motiveert |
| --- | --- | --- | --- |
| 0 | Handelingen herkennen: tekst en links met verschillende labels | Bestemmingen voorspellen, verwachtingen vergelijken met resultaten, labels herontwerpen; onderscheid tussen teken en interpretatie | Toegang is mogelijk, maar hoe ordenen we een groeiende verzameling? |
| 1 | Informatie ordenen: dezelfde inhoud in verschillende lijsten en categorieën | Twee indelingen ontwerpen, zoekopdrachten door medestudenten laten uitvoeren; analyseren welke perspectieven de ordening zichtbaar maakt | Een categorie helpt zoeken, maar hoe weten bezoekers waar ze zijn en hoe ze terugkomen? |
| 2 | Oriënteren: meerdere routes, menu en kruimelpad | Taken rond terugvinden en terugkeren observeren; navigatiekeuzes verantwoorden | Wat als de bezoeker een specifieke vraag heeft en niet wil bladeren? |
| 3 | Gericht vinden: zoeken naast bladeren | Gelijke taken vergelijken, inclusief een taak zonder bekende zoekterm; fouten en beperkingen verklaren | Welke invloed heeft de presentatie op wat mensen opmerken en vertrouwen? |
| 4 | Aandacht sturen: dezelfde inhoud met andere typografie, beeld, kleur of beweging | Een gerichte presentatievariatie vergelijken op taakuitvoering, waargenomen belang en vertrouwen | Wat blijft buiten beeld wanneer iemand alleen de verwachte route volgt? |
| 5 | Verbanden ontdekken: contextuele links en relaties naast de hiërarchie | Een open verkenning documenteren; bruikbare, verrassende en verwarrende verbindingen onderscheiden | Hoe behouden verschillende bezoekers regie over deze rijkdom? |
| 6 | Regie nemen: verdieping, weergaven en voorkeuren | Gebruikssituaties, toetsenbord en vergroting onderzoeken; ook de belasting van instellingen beoordelen | Wie profiteert van de standaardkeuzes, en waarop baseren we dat oordeel? |
| 7 | Ontwerp verantwoorden: de volledige website als casus | Eigen variant ontwerpen met onderzoeksdossier; keuzes, bewijs, waarden en resterende nadelen expliciteren | Onder welke omstandigheden houdt de oorspronkelijke ontwerphypothese stand? |

Vaste onderzoekscyclus per les:
1. Ervaren: een concrete taak uitvoeren voordat het principe wordt uitgelegd.
2. Formuleren: observaties beschrijven en een voorlopige verklaring geven.
3. Theoretiseren: relevante begrippen en bronnen gebruiken, met aandacht
   voor hun toepassingsvoorwaarden en beperkingen.
4. Ontwerpen en toetsen: één gerichte wijziging maken, een verwachting
   formuleren en de gevolgen vergelijken met de uitgangssituatie.
5. Positioneren: conclusie, onzekerheid, alternatieve verklaring en gevolgen
   voor andere bezoekers benoemen.

Leerresultaten:
- Interfacekeuzes analyseren vanuit gebruik, ervaring en waarden.
- Een ontwerpvraag vertalen naar een toetsbare verwachting en passende taak.
- Observaties en literatuur verbinden aan een concrete ontwerpinterventie.
- Persoonlijke voorkeur, lokale testbevinding en algemene claim onderscheiden.
- Een ontwerpbeslissing onderbouwen inclusief beperkingen en afwegingen.

Eindopdracht en beoordeling:
Een beargumenteerd herontwerp van de cursuswebsite, als prototype met een
beknopt onderzoeksdossier. Het dossier bevat probleem en gebruikscontext,
verwachtingen, methode, observaties, relevante bronnen, ontwerpbeslissingen
en beperkingen. Beoordeling richt zich op samenhang tussen vraag, methode,
bewijs en ontwerp, kritische reflectie en toegankelijkheid. Kleine tests met
medestudenten leveren lokale aanwijzingen, geen universele bewijzen.

Randvoorwaarden:
- De interfacestadia zijn expliciete experimentele condities, geen ladder
  waarop meer functies automatisch een beter ontwerp betekenen.
- Essentiële toegankelijkheid en een betrouwbare terugweg blijven beschikbaar.
  De bestaande stadiumlogica moet hierop nog worden gecontroleerd.
- Studenten onderzoeken ook of de beperkingen van de cursusinterface het
  leren ondersteunen. Een eenvoudige tekstpagina blijft een geldige uitkomst.
- Filosofische vragen en toegankelijkheid keren in elke fase terug; ze worden
  niet uitgesteld tot een afsluitend hoofdstuk.

Open werk, in uitvoeringsvolgorde:
1. Les 1 en 2 herwerken volgens de cyclus en het hogeschoolniveau; algemene
   en historische claims controleren bij de inhoudelijke herwerking.
2. Per fase leerdoelen, taak, theorie, ontwerpinterventie, toetsing en
   overgang uitwerken; relevante bestaande onderzoekspagina's selecteren.
3. De stadiumlogica controleren op bereikbaarheid van bronnen, toetsenbord,
   voorkeuren en terugweg; noodzakelijke wijzigingen afzonderlijk uitwerken.
4. De ontbrekende lessen voor stadia 2-7 schrijven en aansluiten op de
   bestaande structuur. Relatiekaart, filters en andere genoemde varianten
   zijn werkvoorraad, geen reeds beschikbare functies.
5. Eindopdracht concretiseren met beoordelingscriteria; omvang en planning
   afstemmen op de beschikbare contacttijd en voorkennis.

Status:
Leerlijn vastgelegd. Les 1 en 2 bestaan in hun eerdere vorm. De overige
lessen, de herwerking en de technische controle zijn nog niet uitgevoerd.

### 2026-10-21 - Uitwerking les 1 en 2 volgens de onderzoekscyclus

Decision:
Les 1 en 2 zijn nu uitgewerkt op hogeschoolniveau. Studenten maken eigen
papieren of HTML-varianten op basis van de website en vergelijken lokale
observaties. Les 2 gebruikt een vast corpus van acht direct bereikbare
cursuspagina's: de vrijgegeven index in stadium 1 is hiervoor te klein.
Reason:
Opdracht van Seb om de vastgelegde leerlijn toe te passen op beide lessen.
Impact:
De eerdere open taak om les 1 en 2 te herwerken is inhoudelijk uitgevoerd.
De lessen bevatten leerdoelen, observatieprotocol, theorie en bronnen,
ontwerpinterventie, methodische beperkingen en inlevercriteria. Praktijktoetsing
met studenten en de bredere technische toegankelijkheidscontrole blijven open.
Lessen voor stadia 2-7 blijven werkvoorraad.

### 2026-10-21 - Speelse lessen die het lesgeven kunnen dragen

Decision:
De lessen moeten Sebs speelse, onderzoekende manier van lesgeven dragen,
ook op dagen met minder energie. Elke les krijgt een afgeronde kernroute,
een direct uitvoerbare opening, een docentkaart met letterlijke startzin,
vragen bij stilte, een alternatief zonder editor en een duidelijk stopmoment.
Verdieping wordt optioneel aangeboden. De onderzoekscyclus blijft behouden.
Reason:
Seb vroeg expliciet om de eerste twee lessen vanuit deze insteek te herwerken.
Impact:
Les 1 laat drie labels naar dezelfde pagina leiden en verbindt de ervaring
met interpretatie, mediatie en verantwoordelijkheid. Studenten maken een
HTML-link. Les 2 verandert eerst alleen de kop boven dezelfde verzameling,
en laat studenten daarna een eigen museum met koppen, lijsten en links maken.
Filosofie wordt toegepast op concrete ervaringen; de toepassing wordt als
interpretatie herkenbaar gemaakt. Beide lessen hebben volledige kopieerbare
HTML-voorbeelden, foutenhulp en drie slotzinnen. De uitgebreidere testopzetten
blijven beschikbaar als optionele verdieping. Lesritmes zijn voorstellen;
werking in de klas is nog niet getoetst.

### 2026-10-21 - Eén cursusreis, voelbare interfaces en echte ingrepen

Decision:
De cursuswebsite voert de UX-experimenten zelf uit. Een vaste reisbalk verbindt
acht interfacewerelden via ?reis=0..7 en bestaande hashpagina's. Vooruit en terug
volgen de werelden; uitstapjes behouden dezelfde wereld. Dezelfde inhoud kan in
aangrenzende interfaces vergeleken worden. De volledige cursus blijft bereikbaar.
Reason:
Seb: “deze site is de UX”, met een lineaire route door tijdzones/UI-concepten en
een voelbaar geheel. De eerdere uitwerking met losse prototypes droeg dit niet.
Impact:
De eerste twee lessen laten ingrepen op de echte site ervaren. Les 1 verandert
bestaande verwijzingen en toont hun HTML. Les 2 gebruikt een echte cursusindex
met acht gelijkblijvende pagina's, drie ordeningen en actuele HTML. De ingrepen
zijn tijdelijk per pagina; navigatiebediening blijft buiten de linkproef.
Bestaande stadia 0-7 leveren de interfacecondities; de expliciete reisparameter
heeft voorrang op oude stadiumvoortgang. De legacy-modus blijft beschikbaar.
De werelden 3-8 gebruiken bestaande onderzoekspagina's als verkennende haltes;
ze worden niet als uitgewerkte lessen gepresenteerd. Historische verwijzingen
zijn aanknopingspunten, geen volledige historische simulaties.

### 2026-10-21 - Elke wereld krijgt een handeling en een eindpunt

Decision:
Werelden 3-8 krijgen een korte verkenning op de echte interface, met opdracht,
filosofische denklens, klein HTML-fragment en uitklapbare docentkaart met eindpunt.
De bestaande onderzoekspagina blijft het achtergrondmateriaal. Deze verkenningen
worden niet voorgesteld als volledig uitgewerkte lessen.
Reason:
Seb vroeg rustig verder te werken aan het voelbare geheel en een dragende cursus.
Impact:
- Oriëntatie: kruimelpad en stapteller maskeren en herstellen; reis blijft veilig.
- Zoeken: de echte zoekfunctie gebruiken; woorden en bedoeling vergelijken.
- Vormgeving: dezelfde inhoud met en zonder de bestaande stijllagen bekijken.
- Verwantschap: via de echte trefwoorden een inhoudelijke route volgen.
- Voorkeuren: rustige interface kiezen, met blijvende voorrang voor systeemvoorkeur.
- Zelfonderzoek: bestaande linktekstproef koppelen aan de beperkingen van de teller.
Proefkeuzes van les 1 en 2 blijven tijdelijk in hetzelfde tabblad bewaard;
leerlinggegevens en antwoorden worden niet opgeslagen. Reisbediening is compacter.
Zoekresultaten zijn echte toetsenbordbereikbare links; speciale zoektekens worden
letterlijk behandeld. De afsluitende linktekstpagina onderscheidt heuristische
controle van UX-bewijs en vermijdt een onbewezen snelheidsclaim over linklengte.

### 2026-10-21 - Eerdere lesinhoud hersteld; seb-lib-voice

Decision:
Seb corrigeerde de toegevoegde toon: de cursus is voor een hogeschool
kunstopleiding. De metafoor van een reis met werelden en haltes en de gegenereerde
lesbegeleiding horen niet in de gebruikersinterface. seb-lib-voice is leidraad.
Impact:
De eerdere teksten van les 1 en 2 zijn teruggezet. De werkende link- en indexbediening
is behouden met eenvoudige labels. Het TNT-fragment blijft een sobere verwijzing.
De zichtbare navigatie heet vorige, volgende en onderwerp; bestaande adressen blijven
werken. De toegevoegde openingszinnen, docentkaarten, eindpunten en filosofische
scripts uit deze iteratie zijn uit de gebruikerspagina's gehaald. Weergaveknoppen
en HTML blijven onder een gesloten onderdeel bereikbaar. De introductie gebruikt
weer de eerdere beschrijving van het onderzoekscentrum, met de juiste doelgroep.

### 2026-10-21 - Overgangen met behoud van inhoud en leespositie

Decision:
Weergaven wisselen binnen dezelfde pagina, zonder het document opnieuw te laden.
De bestaande secties dienen als leesanker. De acht weergaven zijn rechtstreeks
bereikbaar; de oorspronkelijke teksten blijven ongewijzigd. Geen lesregie toegevoegd.
Reason:
Seb vroeg verder te werken aan voelbare overgangen, met behoud van zijn toon en
oorspronkelijke teksten, en beschikbaar grafisch materiaal te onderzoeken en gebruiken.
Impact:
Historystaten houden de bestaande reis-parameter en hashadressen compatibel.
Vorige/volgende blijft de onderwerpen verbinden. Browser terug/vooruit en toetsen
werken ook bij een weergavewissel. Open onderdelen en de proefstand van dezelfde
pagina blijven behouden. Een lange pagina behoudt de gelezen sectie bij de wissel;
bij de onderkant begrenst de beschikbare paginahoogte de exacte scrollpositie.
Drie bestaande schermafbeeldingen uit assets/referentie worden gebruikt bij
bronverwijzingen naar Olia Lialina, JODI en Nutshell. Eerst verschijnen tekstlinks,
vanaf vormgeving dezelfde verwijzingen met beelden. Geen nieuwe afbeeldingen
gedownload en geen inhoudsbestanden aangepast.


### 2026-10-21 - Chronologische ijking, zes thema's met onderbouwing/tegenspraak en functie per anekdote

Decision:
De inhoud van het onderzoekscentrum is chronologisch geijkt en gegroepeerd in
zes historische thema's (1910–2023) op de pagina Twee fundamenten. Binnen elk
thema worden psychologische principes en filosofisch/kritisch onderzoek
expliciet met elkaar verbonden via onderbouwing en tegenspraak. Elke van de 18
anekdotes sluit af met een vaste sectie "Functie van deze anekdote" (Onderbouwing
en tegenspraak in het thema). De volgorde van Filosofie van de interface,
Psychologie van de interface en Anekdotes in main.js is strikt chronologisch
gezet. De bestaande stijl- en compositiepreview blijft ongewijzigd.

Reason:
Seb gaf aan dat de inhoud eerst ijzersterk en chronologisch moet kloppen, met
onderwerpen in thema's die onderbouwd zijn door of in tegenspraak staan met
filosofisch onderzoek, en dat elke anekdote een expliciete functie moet hebben.

Impact:
- Vier ontbrekende proefschriften primair geverifieerd en toegevoegd: B.J. Fogg
  (Stanford 1997), Anthony Dunne (RCA mei 1997), Steven Fokkinga (TU Delft 2015)
  en Jan Bats (Universiteit Twente 2019), plus Marc Hassenzahls geverifieerde
  Darmstadt-publicatie (2006).
- Primaire jaartallen en bronnen toegevoegd op alle filosofie-, psychologie- en
  anekdotepagina's (o.a. Heidegger 1927, Merleau-Ponty 1945, Card, English & Burr
  1978, Teitelman 1972 en Tesler & Mott 1974–1975).
- Tijdlijn uitgebreid van 33 naar 42 chronologische ankers (1910–2026).
- Open vragen bijgewerkt met een sectie "Inmiddels geverifieerd en verwerkt".
- Voorstel voor zes sleepbare p5.js-schetsen (één per chronologisch thema)
  uitgewerkt in leerplan.md.


### 2026-10-21 - Blijvend kwaliteitskader voor bronnen, onderwijs en onderzoek

Decision:
Op verzoek van Seb toetsen we inhoudelijke wijzigingen voortaan aan het
onderbouwde kader op content/ordeningsprincipes.html (versie 1.0).
project.json quality_policy verwijst naar kader en reviewregister;
AI_RULES.md maakt de controle onderdeel van elke inhoudelijke wijziging.
De bestaande route blijft behouden. Geen automatisch keurmerk of totaalscore.
Broncontrole, didactische afstemming, onderzoeksmethoden en technische werking
worden afzonderlijk gerapporteerd. Onbekend blijft open; studentonderzoek blijft
gepland tot er werkelijk deelnemers en resultaten zijn.
