# Empirische methoden en toegankelijkheid

## Wanneer is een cursusdemo onderzoek?

### Takeaway
Een demo kan een begrip zichtbaar maken; een bewijsclaim vraagt een passende methode. Dit is een voorgestelde cursusregel, geen certificaat van wetenschappelijkheid.

### Cited Findings
- SIGSOFT vraagt bij experimenten hypotheses, variabelen, steekproefverantwoording, protocol, toewijzing, controle van storende factoren en bespreking van alternatieve verklaringen. Beschrijf resultaten met passende statistiek; bij frequentistische analyse horen effectgrootte en betrouwbaarheidsinterval. Het vaste aantal leerlingen in een klas kan een gemotiveerde beperking zijn. — [SIGSOFT, Experiments en General Standard](https://www2.sigsoft.org/EmpiricalStandards/docs/standards)

### Inferences
- Toetscriterium M1: label elke activiteit als illustratie, oefening, verkennende gebruikerstest of experiment. Een klassendemonstratie bewijst geen universele UX-wet.
- M2: noteer vooraf vraag, variant, taak, uitkomstmaat, deelnemers, instructie, stopregel en analyse. Leg wijzigingen achteraf vast.
- M3: houd bij vergelijkingen taakinhoud, apparaat en instructie gelijk. Wissel A/B-volgorde gebalanceerd af wanneer dezelfde deelnemers beide doen; noteer resterende oefen-, vermoeidheids- en overdrachtseffecten. Dit is een concrete invulling van controle op storende factoren.
- M4: rapporteer aantal deelnemers en metingen apart, spreiding, uitval en beperkingen. Vermijd causaliteit zonder passend ontwerp. Maak geen significantieclaim met alleen gemiddelden.

### Gaps
- Geen universeel minimumaantal deelnemers of vaste bewijsladder voor elke cursusactiviteit vastgesteld. Vereisten hangen af van vraag en methode.

## Hoe bescherm je deelnemers?

### Takeaway
Vrijwilligheid en zorgvuldige gegevensverwerking zijn onderdeel van de methode. Onderstaande criteria zijn onderzoekszorg, geen juridisch advies.

### Cited Findings
- SIGSOFT verlangt uitleg van werving, risico's, beperking van druk, vrije geïnformeerde toestemming, privacy, gegevensbescherming en toestemming voor publicatie/hergebruik. Het bespreekt ook machtsverhoudingen en het recht om te stoppen. — [SIGSOFT, Ethics: Human Participants](https://www2.sigsoft.org/EmpiricalStandards/docs/supplements?supplement=EthicsHumanParticipants)

### Inferences
- M5: geef vooraf doel, handelingen, duur, verzamelde gegevens, publicatie, toegang en stopmogelijkheid. Deelname aan dataverzameling mag niet stilzwijgend uit lesdeelname volgen; bied een gelijkwaardig alternatief.
- M6: verzamel voor oefeningen alleen noodzakelijke gegevens, gebruik deelnemerscodes, spreek bewaartermijn af en publiceer geen herkenbare opnames of ruwe leerlinggegevens. Een code is geen garantie op anonimiteit.
- M7: bespreek bij minderjarigen of formeel onderzoek eerst de toepasselijke schoolprocedure en vereiste toestemmingen. Noteer de beslissing; verzin geen ethische goedkeuring.

### Gaps
- De precieze Belgische schoolprocedure en rechtsgrond zijn niet onderzocht. De geraadpleegde richtlijn bepaalt die niet.

## Welke tests bewijzen toegankelijkheid of leerwinst?

### Takeaway
Technische toegankelijkheid, bruikbaarheid en leren hebben verschillende uitkomstmaten. Een geslaagde linktest, quiz of automatische scan vervangt geen evaluatie van de andere aspecten.

### Cited Findings
- Geen evaluatietool kan op zichzelf vaststellen dat een site toegankelijk is; deskundige menselijke beoordeling blijft nodig. WAI adviseert evaluatie tijdens ontwikkeling. — [W3C WAI, Evaluating Web Accessibility](https://www.w3.org/WAI/test-evaluate/)
- Gebruikersonderzoek kan barrières aantonen die een conformiteitscontrole mist. Combineer beide en rapporteer scope, methode en deelnemerskenmerken; generaliseer niet vanuit enkele deelnemers. — [W3C WAI, Involving Users](https://www.w3.org/WAI/test-evaluate/involving-users/)
- WCAG 2.2 heeft toetsbare succescriteria, waaronder toetsenbordbediening, contrast, focus en labels. Conformiteit dekt volledige pagina's en volledige processen; de richtlijn voorziet niet in elke gebruikersbehoefte. — [W3C, WCAG 2.2](https://www.w3.org/TR/WCAG22/)

### Inferences
- M8: houd afzonderlijke verslagen bij voor functionele techniek, WCAG-controle, gebruikersobservaties en leerresultaten. Markeer niet uitgevoerd en beperkt getest expliciet.
- M9: combineer automatische controles met handmatige toetsenbord-, focus-, zoom-, label- en contrastcontroles; registreer pagina/taak, criterium, browser, datum en bevinding.
- M10: meet leerdoelen met passende opdrachten en beoordelingscriteria. Een tevredenheidsvraag meet geen beheersing. Voor een claim dat deze cursus leren veroorzaakt zijn een vooraf beschreven vergelijking en aandacht voor voorkennis en toetsherhaling nodig; een voor-/nameting alleen sluit alternatieve verklaringen niet uit.

### Gaps
- Dit onderzoek voert geen gebruikersstudie, WCAG-audit of leerwinststudie van de huidige site uit. M1-M10 zijn operationele voorstellen op basis van de bronnen; geen externe keurmerkeisen.

Geraadpleegd: 21 oktober 2026. Primaire richtlijnen: SIGSOFT (methode en ethiek) en W3C/WAI (technische norm en evaluatie). De algemene ACM-beleidspagina gaf HTTP 403 en is niet als gelezen bewijs gebruikt.
