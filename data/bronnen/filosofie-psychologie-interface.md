# Filosofie en psychologie van de interface: een onderbouwd overzicht van studies, proefschriften en anekdotes over UI/UX

> Bronmateriaal, aangeleverd op 2026-10-21. Deels de basis voor het filosofisch-onderzoeksluik van de cursus.
> Nog niet omgezet naar contentpagina's. Zie `docs/inbox.md`.

UI/UX is geen puur ambachtelijk vak, ook al wordt het vaak zo voorgesteld. Het rust op twee stevige theoretische fundamenten. Het eerste is filosofisch: de fenomenologie (Heidegger, Merleau-Ponty) via Winograd & Flores en Dourish, en daarnaast de postfenomenologie en mediatietheorie (Ihde, Verbeek). Het tweede is experimenteel-psychologisch: Fitts, Hick-Hyman, Miller en Sweller, aangevuld met Hassenzahl en de esthetiek-bruikbaarheidsstudies. Voor jou als creative-coding docent en kunstenaar is de vruchtbaarste ingang het spanningsveld tussen die twee. Psychologie meet efficiëntie. Filosofie en kritisch design vragen *wat* een interface met ons doet, en daar vind je ook de beste anekdotes en proefschriften.

## TL;DR

- **De kernlijn:** Heidegger → Winograd & Flores (1986) → Dourish' *Where the Action Is* (2001) → Ihde/Verbeek (postfenomenologie, technologische mediatie) vormt de filosofische ruggengraat. Fitts (1954), Hick-Hyman, Miller (1956), Sweller (1988), Kurosu & Kashimura (1995) en Hassenzahl (hedonisch/pragmatisch) vormen de psychologische.
- **Proefschriften zijn concreet te vinden en vaak open access:** Dourish (UCL 1996), Sengers (CMU 1998, *Anti-Boxology*), Card (CMU 1978), Höök (Stockholm 1996), Redström (Göteborg 2001, *slow technology*), Mathur (Princeton 2020, dark patterns), en in de Lage Landen o.a. Verbeek (Twente 2000), Desmet (TU Delft 2002), Frens (TU/e 2006), Ross (TU/e 2008), Kudina (Twente 2019) en Zaman (KU Leuven 2011).
- **Anekdotes zijn didactisch goud, maar check ze:** sommige zijn goed gedocumenteerd (Bowmans "41 shades of blue" staat letterlijk in zijn blogpost; Therac-25 is uitgebreid onderzocht). Andere zijn deels mythe of onverifieerbaar: de "$300 million button" komt van één bron met een anonieme klant.

---

## 1. Filosofie van de interface

### 1.1 Fenomenologie en HCI: Heidegger, Dreyfus, Winograd & Flores, Dourish

- **Heidegger: *zuhanden* vs. *vorhanden*.** Een hamer die werkt "verdwijnt" in het gebruik (ready-to-hand). Pas bij een breuk (*breakdown*) wordt hij een object van beschouwing (present-at-hand). Dat is wellicht het meest geciteerde filosofische idee in HCI. Het verklaart waarom goede interfaces "transparant" voelen en waarom fouten ons plots bewust maken van het gereedschap.
- **Hubert Dreyfus** (*What Computers Can't Do*, 1972) gebruikte Heidegger en Merleau-Ponty tegen de symbolische AI. Menselijk kunnen is belichaamd en situationeel, niet regelgebaseerd. Die kritiek werd de opstap voor HCI-denkers.
- **Terry Winograd & Fernando Flores, *Understanding Computers and Cognition* (1986).** Zij brachten Heidegger, Gadamer, Maturana en de taalhandelingstheorie de informatica binnen. Hun centrale ontwerples is dat je ontwerpt *voor breakdowns*. Dat de auteur van SHRDLU (een AI-icoon) zich zo van de AI afkeerde, is op zich een sterke anekdote.
- **Paul Dourish, *Where the Action Is: The Foundations of Embodied Interaction* (MIT Press, 2001).** Hij verbindt tangible en social computing via fenomenologie (Husserl, Heidegger, Schutz, Merleau-Ponty, Wittgenstein) tot het begrip *embodied interaction*: betekenis ontstaat in handelen, niet in representatie.
- **Merleau-Ponty en embodiment.** Het lichaamsschema (de blinde met de stok, de vrouw met de hoedenveer) is het standaardvoorbeeld van *incorporatie* van gereedschap. Je ziet het terug in tangible interaction (Ishii), in Kristina Hööks *somaesthetic design* (*Designing with the Body*, MIT Press 2018, gebaseerd op Shustermans somaesthetiek) en in de Eindhovense "rich interaction"-school (zie §3).

### 1.2 Affordances: Gibson → Norman → signifiers

- **James J. Gibson** (ecologische psychologie, uitgewerkt in *The Ecological Approach to Visual Perception*, 1979) definieerde affordances als relationele handelingsmogelijkheden tussen dier en omgeving. Ze bestaan, of ze waargenomen worden of niet.
- **Don Norman** (*The Psychology/Design of Everyday Things*, 1988) maakte er *waargenomen* affordances van. Dat leidde tot jarenlange begripsverwarring ("deze knop heeft een affordance"). Norman corrigeerde zich later en introduceerde in de herziene editie (2013) expliciet **signifiers**: het teken dat aangeeft wáár en hoe je moet handelen. Voor lesgebruik is dit een mooie case van hoe een filosofisch begrip "vertaald" en vervormd wordt in de praktijk.

### 1.3 Postfenomenologie en technologische mediatie (Ihde, Verbeek)

- **Don Ihde** (*Technology and the Lifeworld*, 1990) onderscheidt vier mens-techniekrelaties: *embodiment* (bril), *hermeneutisch* (thermometer lezen), *alteriteit* (technologie als quasi-ander, denk aan chatbots) en *achtergrond* (verwarming). Dat is direct bruikbaar om interfaces te analyseren.
- **Peter-Paul Verbeek** promoveerde in 2000 aan de Universiteit Twente op *De daadkracht der dingen: over techniek, filosofie en vormgeving* (Boom, 2000), vertaald als *What Things Do* (Penn State UP, 2005). Hij stelt een filosofie "vanuit de dingen" voor en maakt in het slothoofdstuk expliciet de sprong naar industrieel ontwerp. Verbeek werd later rector magnificus van de UvA.
- **Technologische mediatie** betekent dat technologie percepties en handelingen *co-vormt*, en daarmee ook morele beslissingen. Een interface is dus nooit neutraal.

### 1.4 Ethiek van design: Verbeek, persuasive design, dark patterns, Harris, Zuboff

- **Verbeek, *Moralizing Technology* (2011):** als artefacten moraliteit mediëren, dragen ontwerpers morele verantwoordelijkheid. Ontwerpen is "ethiek met andere middelen".
- **Persuasive technology:** B.J. Fogg (Stanford) bouwde captologie uit. Zijn *behavior model* (B = M·A·P: motivatie, vermogen en prompt) werd een standaardrecept voor engagement, en daarmee ook voor verslavend design.
- **Dark patterns:** UX-ontwerper Harry Brignull (gepromoveerd in cognitieve wetenschap) muntte de term in 2010 met de site darkpatterns.org, een "pattern library" om misleidende interfaces "to name and shame". De site heet nu deceptive.design en spreekt van "deceptive patterns". Colin Gray en collega's (Purdue, later Indiana) maakten er een academisch onderzoeksveld van ("The Dark (Patterns) Side of UX Design", CHI 2018).
- **Tristan Harris** (ex-Google design ethicist) lanceerde de "Time Well Spent"-beweging en het Center for Humane Technology. **Shoshana Zuboff** (*The Age of Surveillance Capitalism*, 2019) levert het economisch-politieke kader: de interface is de oogstmachine van "behavioral surplus".
- **Positie:** de dark-patternsliteratuur is empirisch het sterkst, en het is daarbij waar normatieve vragen het scherpst worden. Mathur, Mayer & Kshirsagar ("What Makes a Dark Pattern… Dark?", CHI 2021) tonen dat definities sterk uiteenlopen ("tricks", "misleading", "coercive") en pleiten voor normatieve onderbouwing in plaats van louter beschrijvende catalogi.

### 1.5 Esthetiek en mediatheorie van de interface

- **Lev Manovich, *The Language of New Media* (2001):** de "cultural interface" als hybride van cinema, gedrukt woord en HCI.
- **Alexander Galloway, *The Interface Effect* (2012):** een interface is geen ding maar een *effect*, een proces van onderhandeling tussen binnen en buiten, met een politieke lading (World of Warcraft als allegorie van informatiekapitalisme).
- **Branden Hookway, *Interface* (MIT Press, 2014):** een genealogie van het begrip (van vloeistofdynamica tot mens-machine) die de interface opvat als relatie van controle en begrenzing.
- **John Harwood, *The Interface: IBM and the Transformation of Corporate Design, 1945–1976* (Univ. of Minnesota Press, 2011).** Het boek groeide uit zijn doctoraat aan Columbia (PhD 2006). Harwood beschrijft de interface als "het koppelteken tussen 'man' en 'machine'" en reconstrueert hoe Eliot Noyes, Paul Rand en de Eameses het beeld van de computer vormgaven. Dit is een architectuurhistorisch proefschrift, niet HCI.
- **Johanna Drucker, *Graphesis* (Harvard UP, 2014):** een humanistische kritiek op informatievisualisatie en interfaces als "argumenten", met aandacht voor interpretatie in plaats van "data als gegeven". Voor p5.js-datavisualisatie is dit verplichte kost.
- **Vilém Flusser** (*Für eine Philosophie der Fotografie*, 1983; *Ins Universum der technischen Bilder*, 1985) beschrijft het **apparaat** met zijn **programma**, waarin de gebruiker een "functionaris" wordt die de mogelijkheden van het programma uitput. Voor creative coders is dit zeer actueel: speel je *tegen* het programma of *ermee*?
- **Bruno Latour / ANT:** in "Where Are the Missing Masses?" (1992) toont hij hoe deurdrangers en verkeersdrempels morele "scripts" dragen ("delegatie" aan niet-mensen). Madeleine Akrich ontwikkelde het verwante "script"-begrip. Verbeek bouwt hier rechtstreeks op voort.
- **Speculative/critical design:** Anthony Dunne (*Hertzian Tales*, 1999, voortgekomen uit zijn RCA-doctoraat) en Dunne & Raby (*Design Noir*, 2001; *Speculative Everything*, 2013) gebruiken design om vragen te stellen in plaats van problemen op te lossen. Dit is de brug naar kunstpraktijk.

---

## 2. Psychologie van de interface

| Principe | Kernbron | Wat het zegt | Kanttekening |
|---|---|---|---|
| Gestalt (nabijheid, gelijkenis, sluiting…) | Wertheimer, Köhler, Koffka (1910–30) | Waarneming organiseert zich in gehelen | Beschrijvend, weinig voorspellend |
| Fitts' law | Paul Fitts, 1954 | Bewegingstijd ∝ log₂(afstand/doelgrootte) | Robuust; via Card en Buxton in HCI gebracht |
| Hick-Hyman law | Hick 1952, Hyman 1953 | Keuzetijd groeit logaritmisch met aantal opties | Geldt vooral voor ongeordende, onbekende keuzes |
| Magical number 7±2 | George Miller, 1956 | Grenzen van het kortetermijngeheugen | Vaak misbruikt ("max 7 menu-items"); Cowan (2001) stelt eerder ~4 chunks |
| Cognitive load | John Sweller, 1988 | Intrinsieke, extrinsieke en germane belasting | Ontwikkeld voor instructie, niet voor UI |
| Heuristieken & biases | Tversky & Kahneman 1974; prospect theory 1979 | Framing, anchoring, default-effecten | Basis voor nudging én dark patterns |
| Aesthetic-usability effect | Kurosu & Kashimura (CHI '95); Tractinsky 1997; Tractinsky, Katz & Ikar 2000 | Mooi oogt bruikbaar | Effect is omkeerbaar en contextafhankelijk |
| Heuristic evaluation | Nielsen & Molich, CHI 1990 | 10 vuistregels voor expertevaluatie | Pragmatisch, weinig theoretisch |
| Hedonic/pragmatic | Hassenzahl (2003, 2010) | UX = pragmatische + hedonische kwaliteit | AttrakDiff-vragenlijst |
| Flow | Csikszentmihalyi, 1990 | Balans uitdaging/vaardigheid | Relevant voor games en creatieve tools |
| Emotional Design | Norman, 2004 | Visceraal, gedragsmatig, reflectief | Populair-wetenschappelijk |
| Behavior model | Fogg, 2009 | B = MAP | Ethisch omstreden in toepassing |
| SDT | Deci & Ryan (1985, 2000) | Autonomie, competentie, verbondenheid | Peters, Calvo & Ryan (2018): METUX-model |
| *Don't Make Me Think* | Steve Krug, 2000 | Zelfevidente interfaces | Praktijkboek, geen onderzoek |

**Kernpunten met interpretatie:**

- **Fitts in HCI:** Stuart Card bracht met zijn muisstudies bij Xerox PARC Fitts' law in HCI. Dat werk hielp de muis als invoerapparaat legitimeren. Bill Buxton paste Fitts verder toe op invoerapparaten.
- **Esthetiek-bruikbaarheid:** Kurosu & Kashimura (Hitachi) concludeerden dat "apparent usability" sterker correleerde met schoonheid dan met inherente bruikbaarheid. Tractinsky repliceerde dit in Israël (CHI 1997) en toonde in 2000 met een ATM-simulatie dat de esthetiek van het systeem de *post-use* percepties van bruikbaarheid beïnvloedde, terwijl de werkelijke bruikbaarheid dat niet deed. Tuch, Roth, Hornbæk, Opwis & Bargas-Avila ("Is beautiful really usable?", *Computers in Human Behavior*, 2012) toonden met een webshop-experiment dat het effect "can be reversed under certain conditions": "The frustration of poor usability lowers ratings on perceived aesthetics." Mijn conclusie: het effect is reëel, maar het is geen natuurwet.
- **Hassenzahl** (psycholoog, gepromoveerd aan de TU Darmstadt in 2006) verschoof UX van "taakefficiëntie" naar "ervaring en betekenis". Zijn artikel met Tractinsky, "User experience – a research agenda" (2006), is met duizenden citaties een van de meest geciteerde UX-teksten. Daarnaast schreef hij *Experience Design: Technology for All the Right Reasons* (2010).
- **Neuro/eye-tracking:** Nielsens "F-pattern" (NN/g, 16 april 2006), gebaseerd op eye-tracking van "232 users" die "thousands of Web pages" bekeken ("two horizontal stripes followed by a vertical stripe"), is het bekendste eye-trackingresultaat. Neuro-UX (EEG, fMRI) blijft methodologisch zwak bij reële interfaces. Behandel claims over "neurodesign" met scepsis.

---

## 3. Proefschriften (doctoraten)

### 3.1 Internationale pioniers (geverifieerd)

| Auteur | Universiteit, jaar | Titel | Waar te vinden | Invalshoek |
|---|---|---|---|---|
| Stuart K. Card | Carnegie Mellon (psychologie), 1978, promotor Allen Newell | *Studies in the Psychology of Computer Text Editing Systems* | Geciteerd in ACM DL; CMU-bibliotheek | Cognitieve psychologie, GOMS-voorloper; "wellicht het eerste HCI-doctoraat" |
| Bill Buxton | Univ. of Toronto, MSc 1978 (geen PhD) | *Design Issues in the Foundation of a Computer-Based Tool for Music Composition* | Tech. Report CSRG-97, billbuxton.com | Muziek → HCI; vier eredoctoraten, o.a. TU/e 2010 |
| Jenny Preece | Open University, 1985, promotor Tim O'Shea | *Interpreting trends in graphs: A study of 14 and 15 year olds* | Open Research Online: https://oro.open.ac.uk/57008/ | Educatieve technologie, graafperceptie |
| Paul Dourish | University College London, 1996 | *Open Implementation and Flexibility in CSCW Toolkits* | UCL Discovery (open access): https://discovery.ucl.ac.uk/id/eprint/10103825/ | Technisch (toolkit Prospero); zijn filosofie komt pas in *Where the Action Is* |
| Kristina Höök | Stockholm University (DSV), 1996 | *A Glass Box Approach to Adaptive Hypermedia* | Ongepubliceerd proefschrift; artikelversie in *UMUAI* 6 (1996) | Transparantie van adaptieve systemen; later somaesthetic design |
| Phoebe Sengers | Carnegie Mellon, 1998, promotor Joseph Bates | *Anti-Boxology: Agent Design in Cultural Context* | Open: http://reports-archive.adm.cs.cmu.edu/anon/1998/CMU-CS-98-151.pdf | Zelfgedefinieerd doctoraat in AI én cultuurtheorie; basis voor "reflective design" |
| Johan Redström | Göteborg Universiteit, 2001 | *Designing Everyday Computational Things* | http://redstrom.se/johan/thesis/index.html | Bevat "Slow Technology; Designing for Reflection" (met Hallnäs) |
| John Harwood | Columbia (kunstgeschiedenis), 2006 | Dissertatie → boek *The Interface* (2011) | Univ. of Minnesota Press | Architectuur- en designgeschiedenis |
| Marc Hassenzahl | TU Darmstadt (psychologie), 2006 | Doctoraat in de psychologie | Titel niet gevonden in mijn bronnen | Grondlegger hedonisch/pragmatisch model |
| Arunesh Mathur | Princeton (informatica), 2020, promotor Marshini Chetty | *Identifying and measuring manipulative user interfaces at scale on the web* | DataSpace: https://dataspace.princeton.edu/handle/88435/dsp012f75rc09f | Dark patterns; ACM SIGCHI Outstanding Dissertation Award 2021 |

**Correcties op gangbare aannames:** Buxton heeft geen klassiek PhD (MSc 1978 plus eredoctoraten). Dourish' doctoraat is technisch, niet fenomenologisch. Preece promoveerde op graafinterpretatie bij scholieren, niet op HCI in strikte zin. Dat is precies waarom het interessant is: veel HCI-pioniers kwamen uit andere disciplines (muziek, onderwijs, cultuurtheorie).

### 3.2 Nederland en België (geverifieerd)

| Auteur | Universiteit, jaar | Titel | Invalshoek |
|---|---|---|---|
| Peter-Paul Verbeek | Universiteit Twente, 2000 | *De daadkracht der dingen: over techniek, filosofie en vormgeving* (Boom) | Postfenomenologie en design |
| Caroline Hummels | TU Delft, 2000, promotor G.J.F. Smets | *Gestural design tools: prototypes, experiments and scenarios* | Belichaamde, ecologisch-psychologische interactie |
| Pieter Desmet | TU Delft, 2002 (verdedigd 25 juni 2002), promotor J.J. Jacobs | *Designing emotions* | Appraisaltheorie, PrEmo-meetinstrument |
| Stephan Wensveen | TU Delft, 2005 (verdedigd 2 maart 2005), promotors J. Aasman & C.J. Overbeeke | *A tangibility approach to affective interaction* | "Know, feel, do": cognitie, perceptueel-motorisch, affect |
| Joep Frens | TU Eindhoven, 2006 (verdedigd 19 april 2006) | *Designing for Rich Interaction: Integrating Form, Interaction, and Function* | Alternatief voor "menus on screens"; research-through-design |
| Philip Ross | TU Eindhoven, 2008 (cum laude) | *Ethics and Aesthetics in Intelligent Product and System Design* | Pragmatistische esthetiek (Shusterman), waardentheorie (Schwartz), Verbeek |
| Bieke Zaman | KU Leuven, Sociale Wetenschappen, 2011 | *Laddering method with preschoolers: Understanding preschoolers' user experience with digital media* | UX bij kleuters, "third-wave HCI" |
| Maurits Kaptein | TU Eindhoven, 2012 | *Personalized persuasion in ambient intelligence* | Sociale psychologie van persuasie |
| Jilles Smids | TU Eindhoven, 2018 | *Persuasive technology, allocation of control, and mobility: an ethical analysis* | Ethiek van persuasive technology |
| Olya Kudina | Universiteit Twente, 2019, begeleid door Verbeek & Nagenborg | *The technological mediation of morality: value dynamism, and the complex interaction between ethics and technology* | Postfenomenologie, waardedynamiek |

**Repository-links (open access):**
- Desmet: https://repository.tudelft.nl/record/uuid:937aaf05-12f0-4283-adfb-007bdbbeaaa2
- Hummels: https://repository.tudelft.nl/islandora/object/uuid:3f74650f-acc3-44f5-8a63-8e8637a3b156
- Wensveen: https://repository.tudelft.nl/record/uuid:6c1677bd-048b-407c-ab64-3ed9bc329c24
- Frens: https://pure.tue.nl/ws/files/1743335/200610381.pdf
- Ross: https://pure.tue.nl/ws/files/3660374/200910169.pdf
- Kudina: https://research.utwente.nl/en/publications/the-technological-mediation-of-morality-value-dynamism-and-the-co/
- Smids: https://pure.tue.nl/ws/files/92133097/20180313_Smids.pdf
- Zaman (Lirias): https://lirias.kuleuven.be/server/api/core/bitstreams/dcd94243-a022-4278-8ec4-1db3d2311141/content

**Eerlijkheid over hiaten:** ik vond geen geverifieerd UGent-proefschrift (Biblio) over UX/HCI met filosofische invalshoek. Wel is imec-mict (UGent) een UX-onderzoeksgroep met lopende doctoraten. Ik vond ook geen dark-patternsproefschrift aan een Belgische of Nederlandse universiteit. Niet geverifieerde leads zijn Steven Fokkinga (TU Delft 2015, over negatieve emoties in design) en Jan Bats (2019, *The Moral Matter of an Interactive Online Domain*, begeleid door Verbeek). De Delftse en Eindhovense proefschriften zijn eerder ecologisch-psychologisch dan filosofisch. Verbeek, Kudina, Smids en Ross zijn de expliciet filosofische.

### 3.3 Recente thema's (2015–2026): waar zoeken

Voor dark patterns, slow technology, somaesthetics, feminist HCI en AI-interfaces zijn de beste startpunten de ACM SIGCHI Outstanding Dissertation Awards (Mathur won in 2021), DiVA (Zweedse proefschriften, sterk in somaesthetics via KTH/Höök en Umeå/Redström) en de kringen rond Shaowen Bardzell ("Feminist HCI", CHI 2010), William Odom (slow technology) en Colin Gray (dark patterns). Ik raad aan via DiVA en ProQuest te zoeken op de termen hieronder in plaats van op namen te vertrouwen.

---

## 4. Anekdotes (met betrouwbaarheidsoordeel)

**Goed gedocumenteerd:**

- **Doug Engelbarts "Mother of All Demos" (9 december 1968, San Francisco):** muis, hypertext, gedeelde schermen en videoconferentie in één live demo. Dit is het oermoment van interactief computergebruik als *augmentatie van intellect* in plaats van automatisering.
- **Xerox PARC en de desktopmetafoor:** de Alto (1973) en Star (1981) brachten bureaublad, vensters en iconen. Alan Kays slogan **"Doing with Images makes Symbols"** vertaalt Bruners leertheorie (enactief → iconisch → symbolisch) naar de GUI. Dit is een rechtstreekse lijn van ontwikkelingspsychologie naar interface.
- **Apple Lisa/Macintosh, Bill Atkinson en Susan Kare:** Atkinson schreef QuickDraw en MacPaint (en later HyperCard). Kare tekende de iconen op ruitjespapier. Het bekendste kunsthistorische bruggetje is dat Kare een grafisch ontwerper/kunstenaar was, geen ingenieur.
- **Google's "41 shades of blue":** Douglas Bowman schreef bij zijn vertrek in "Goodbye, Google" (20 maart 2009): "Yes, it's true that a team at Google couldn't decide between two blues, so they're testing 41 shades between each blue to see which one performs better. I had a recent debate over whether a border should be 3, 4 or 5 pixels wide, and was asked to prove my case. I can't operate in an environment like that." Hij was Googles eerste visuele designer. Het verhaal werd shorthand voor data-tegen-smaak. Google UK-directeur Dan Cobley zei in februari 2014 tegen The Guardian dat "a slightly purpler shade of blue was more conducive to clicking than a slightly greener shade of blue… we made an extra $200m a year in ad revenue"; critici zoals Jonathan Baker-Bates (webtorque.org, 8 februari 2014) noemden dat cijfer "completely unprovable, and may well be bogus." Het verhaal heeft dus twee kanten.
- **Dark patterns (2010):** Brignulls darkpatterns.org (zie §1.4).
- **Therac-25 (1985–1987):** een bestralingstoestel dat door softwarefouten (o.a. een race condition bij snelle bewerking van invoer door ervaren operatoren) zware overdoseringen gaf: volgens Leveson & Turner (IEEE Computer, juli 1993) "Between June 1985 and January 1987, six known accidents involved massive overdoses by the Therac-25 — with resultant deaths and serious injuries." Cryptische meldingen zoals "Malfunction 54" en gewenning aan het wegklikken van fouten maakten het een klassieke UI-les. De standaardbron is Leveson & Turner (IEEE Computer, 1993).
- **Three Mile Island (1979):** Don Norman was betrokken bij analyses van de controlekamer, waar indicatoren de *opdracht* aan een klep toonden in plaats van de *werkelijke toestand*. Het mede-vormende inzicht: "human error" is vaak design error.

**Deels mythe of zwak onderbouwd:**

- **De "$300 million button":** dit is Jared Spools verhaal (2009, geschreven voor Luke Wroblewski's *Web Form Design*). Een webwinkel verving de knop "Register" door "Continue" met de tekst "You do not need to create an account…", goed voor "$15 million the first month" en "$300,000,000" het eerste jaar. Spool noemt de klant niet. Latere blogs maken er Amazon of Best Buy van, en dat is pure speculatie. De claim "45% conversiestijging" is een verbastering: in Spools verhaal had 45% van de klanten meerdere accounts. Behandel het als parabel, niet als data.
- **"Norman door":** het verschijnsel komt uit *The Design of Everyday Things* (1988). De term zelf werd pas veel later via internetcultuur populair.
- **Microsoft Clippy (Office 97):** het beroemde voorbeeld van een "alteriteitsrelatie" (Ihde) die mislukte. Opdringerig, slecht getimed, zonder sociaal begrip. Het was mede geïnspireerd door Reeves & Nass' *Media Equation* (Stanford), het onderzoek dat aantoonde dat mensen computers sociaal behandelen. Het verband met Nass wordt vaak verteld, maar de details variëren per bron.
- **Skeuomorfisme vs. flat design:** Scott Forstall (realistisch leer, linnen, houten boekenplanken) verliet Apple eind 2012, waarna Jony Ive iOS 7 (2013) plat maakte. Het is een ontwerpdebat, maar ook een machtsverhaal binnen Apple. Persoonlijke motieven zijn grotendeels journalistieke reconstructie.
- **De uitvinding van "undo":** meestal toegeschreven aan Warren Teitelman (Interlisp, jaren 1970) en aan Larry Tesler/PARC-kringen (modeloze editors, knippen/plakken). Een eenduidige "uitvinder" bestaat niet.
- **Fitts' law en de Mac-menubalk:** Bruce Tognazzini legt in zijn "First Principles of Interaction Design" uit dat een menubalk aan de schermrand "oneindig diep" is, omdat de cursor er niet voorbij kan. Daarom is die balk sneller te raken dan een menu in het venster (Windows). Dit is een theoretisch sterk en vaak herhaald argument.

**Tekstueel-filosofische klassiekers:** Jef Raskins *The Humane Interface* (2000) bevat de kritiek op modes, de "locus of attention" en de stelling dat gewoontevorming onvermijdelijk is. Bret Victors *Magic Ink* (2006) stelt dat de meeste software *informatiesoftware* is en dat interactie vaak een teken van falend grafisch ontwerp is. Voor creative coders is het een uitnodiging om eerst te *tonen* en pas daarna te laten klikken.

---

## 5. Leestips, repositories en creative-coding-links

**Top-12 leeslijst (in deze volgorde):**
1. Winograd & Flores, *Understanding Computers and Cognition* (1986)
2. Dourish, *Where the Action Is* (2001)
3. Verbeek, *De daadkracht der dingen* (2000) / *What Things Do* (2005), daarna *Moralizing Technology* (2011)
4. Ihde, *Technology and the Lifeworld* (1990)
5. Norman, *The Design of Everyday Things* (herziene editie 2013, met signifiers)
6. Hassenzahl, *Experience Design* (2010)
7. Galloway, *The Interface Effect* (2012) + Hookway, *Interface* (2014)
8. Drucker, *Graphesis* (2014)
9. Flusser, *Für eine Philosophie der Fotografie* (1983)
10. Dunne & Raby, *Speculative Everything* (2013)
11. Höök, *Designing with the Body* (2018)
12. Brignull, *Deceptive Patterns* (2023)

**Open-access-repositories:**
- **TU Delft Repository** (repository.tudelft.nl): Desmet, Hummels, Wensveen
- **TU/e Research Portal** (research.tue.nl / pure.tue.nl): Frens, Ross, Kaptein, Smids
- **Universiteit Twente** (research.utwente.nl): Verbeek-school, Kudina
- **KU Leuven Lirias** + het **Portaal Doctoraatsverdedigingen** (alle KU Leuven-verdedigingen sinds 2004)
- **UGent Biblio** (biblio.ugent.be): zoek op imec-mict
- **DiVA** (diva-portal.org): Zweedse proefschriften (KTH, Umeå, Göteborg)
- **UCL Discovery, Open Research Online (OU), Princeton DataSpace, CMU Tech Reports**
- **ProQuest Dissertations** (via universiteitsbibliotheek)

**Google Scholar- en repository-zoektermen:** `postphenomenology interaction design dissertation`, `"technological mediation" HCI thesis`, `somaesthetic design PhD`, `"slow technology" thesis`, `"dark patterns" dissertation`, `"feminist HCI"`, `"critical technical practice" Agre`, `"research through design" proefschrift`, `"aesthetics of interaction" thesis`, `"human-AI interaction" phenomenology`, en in het Nederlands `techniekfilosofie ontwerp proefschrift`.

**Creative coding en kunst:**
- **Processing** (Casey Reas & Ben Fry, MIT Media Lab, 2001) en **p5.js** (Lauren McCarthy, 2013) zijn zelf interface-filosofie: lage drempel, "sketch" als metafoor, toegankelijkheid. McCarthy's kunstpraktijk (o.a. *LAUREN*, waarin zij zelf de "slimme assistent" speelt) is een levende postfenomenologische analyse van Ihde's alteriteitsrelatie.
- **JODI** (Joan Heemskerk & de Belg Dirk Paesmans): net.art die de desktop-interface ontregelt. Dit is Heidegger's *breakdown* als kunstvorm.
- **Olia Lialina**, "Turing Complete User" (2012), verdedigt de "gebruiker" tegen de "onzichtbare interface".
- **Lesidee:** laat studenten in p5.js één knop bouwen in drie versies: een Fitts-optimale, een dark pattern en een "slow technology"-variant. Analyseer ze vervolgens met Ihde's vier relaties en Verbeeks mediatiebegrip. Zo combineer je psychologie, ethiek en kunst in één opdracht.

---

## Caveats

- Sommige jaartallen en details van anekdotes (Clippy, undo, TMI, Kay's lezing) heb ik uit standaardkennis en niet in deze ronde primair geverifieerd. Check ze in de originele bronnen voor je ze in les gebruikt.
- Hassenzahls proefschrifttitel en Foggs Stanford-dissertatie heb ik niet kunnen bevestigen.
- Neuro-UX- en "conversie"-claims komen vaak uit marketingbronnen. Wees kritisch.

## Om verder te zoeken

1. Hassenzahls dissertatietitel (TU Darmstadt, 2006) via de Deutsche Nationalbibliothek (d-nb.info)
2. B.J. Foggs Stanford-dissertatie (1997) via ProQuest
3. Anthony Dunnes RCA-PhD (de basis van *Hertzian Tales*)
4. UGent Biblio: proefschriften van imec-mict over UX en technologie-ethiek
5. DiVA: somaesthetic design-proefschriften rond Kristina Höök (KTH)
6. SIGCHI Outstanding Dissertation Awards 2015–2026 voor recente AI-interface- en dark-patternsdoctoraten
7. Leveson & Turner (1993) en Normans TMI-teksten als primaire bronnen voor de veiligheidscases
8. Tognazzini's "First Principles of Interaction Design" (asktog.com) voor de Fitts/menubalk-uitleg
