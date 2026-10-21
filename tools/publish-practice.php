<?php
declare(strict_types=1);
if (PHP_SAPI !== 'cli') { http_response_code(404); exit; }
require_once __DIR__ . '/../lib/manage.php';
$db=course_db(true);
if (course_meta($db,'practice_publication')) { echo "Praktijk bestaat al.\n"; exit; }
$items=[
 ['herkennen','Beeld en kadering','Image and framing','frame',
  'Hetzelfde beeld. Een andere uitsnede. Begin met kijken, verander het kader en vergelijk wat overblijft.',
  'Maak twee uitsneden van hetzelfde beeld. Benoem wat zichtbaar blijft, wat verdwijnt en waar je blik naartoe gaat. Plaats daarna in een schets één handeling bij dat beeld.',
  'Je kunt een uitsnede veranderen en een keuze voor de plaats van een handeling onderbouwen met een zichtbaar verschil.',
  'Een kader selecteert materiaal. Zodra je iemand iets laat doen, komt er een tweede vraag bij: waar en hoe wordt die handeling herkenbaar? Dat verband onderzoeken we hier; we stellen geen universele compositieregel vast.',
  ['f-patroon-en-koppen'=>'Wat maakt een leesroute aannemelijk?','affordances-en-signifiers'=>'Waaruit leid je een mogelijke handeling af?','esthetiek-en-mediatheorie'=>'Hoe vormt een interface wat je ziet?']],
 ['begrijpen','Kleur en contrast','Colour and contrast','color',
  'Een kleur kan een accent dragen. Welke andere aanwijzingen heb je nodig om een selectie te begrijpen?',
  'Bewaar een kleurvariant als A. Verander de kleur en schakel tekst en teken uit. Vergelijk de aanwijzingen. Ontwerp vervolgens een selectie die ook zonder het kleurverschil herkenbaar blijft.',
  'Je kunt een selectie op minstens twee manieren zichtbaar maken en toelichten welke aanwijzing welke rol heeft.',
  'Kleur alleen is volgens WCAG 1.4.1 onvoldoende als enige visuele drager van betekenis. Deze proef laat bewust een zwakkere variant toe om die te onderzoeken. Een eigen kleurkeuze is geen toegankelijkheidscontrole.',
  ['psychologische-principes'=>'Welke groepering zie je voordat je leest?','esthetiek-en-bruikbaarheid'=>'Wanneer voelt verzorgd ook bruikbaar?','toestand-versus-opdracht'=>'Hoe zie je wat werkelijk geselecteerd is?']],
 ['orienteren','Tijd en beweging','Time and movement','time',
  'Een beweging heeft een ritme. Een handeling heeft ook een moment waarop je een reactie verwacht.',
  'Probeer dezelfde verplaatsing bij 0, 600 en 1600 ms wachttijd. Verander alleen de wachttijd. Vergelijk wat de melding “Bezig” doet en ontwerp een eigen tussenstaat.',
  'Je kunt opdracht, wachttijd en resultaat onderscheiden en een tussenstaat ontwerpen die geen voltooiing suggereert.',
  'De wachttijd is een ingestelde lokale simulatie, geen meting van een server. De pijl beweegt pas wanneer de ingestelde timer afloopt. Statusberichten krijgen een programmatische rol; dat volgt de richting van WCAG 4.1.3, zonder volledige conformiteit te bewijzen.',
  ['toestand-versus-opdracht'=>'Wanneer is een opdracht ook uitgevoerd?','three-mile-island'=>'Wat kan een indicator wel en niet vertellen?','fenomenologie-en-breakdown'=>'Wanneer wordt wachten een onderbreking?']],
 ['handelen','Montage en volgorde','Editing and sequence','sequence',
  'Drie kaders uit hetzelfde beeld. Verander hun volgorde en onderzoek welke samenhang je erin leest.',
  'Bewaar de beginvolgorde als A. Verplaats twee beelden met de pijlen en beschrijf een andere lezing. Maak daarna een schets waarin deze volgorde een navigatiepad wordt.',
  'Je kunt dezelfde onderdelen herordenen en het verschil tussen een gelezen volgorde en een gekozen navigatiepad beschrijven.',
  'Een beeldreeks en een interfacepad zijn verschillende dingen. De reeks nodigt uit tot lezen; een interface moet ook een volgende handeling mogelijk maken. Gebruik de overeenkomst om vragen te formuleren, niet als bewijs dat film en UI dezelfde regels hebben.',
  ['navigatie-en-wayfinding'=>'Wat heb je nodig om terug te kunnen?','gopher-versus-web'=>'Wat verandert door een andere structuur?','geheugen-en-cognitieve-belasting'=>'Welke informatie moet je onderweg vasthouden?']],
 ['afwegen','Geluid en reactie','Sound and response','sound',
  'Een korte bevestiging kan zichtbaar, hoorbaar of allebei zijn. Vergelijk die keuzes vanuit je ervaring met klank.',
  'Bevestig eerst zonder geluid. Zet geluid bewust aan en herhaal dezelfde handeling. Maak een variant voor een situatie waarin geluid niet beschikbaar of gewenst is.',
  'Je kunt visuele en auditieve feedback vergelijken en een bruikbaar alternatief zonder geluid ontwerpen.',
  'De proef maakt na een klik eventueel een korte toon met de Web Audio API. Er wordt niets opgenomen. Dezelfde zichtbare bevestiging blijft aanwezig. Toonhoogte en volume zijn ontwerpkeuzes van deze illustratie, geen universele ideale waarden.',
  ['toestand-versus-opdracht'=>'Wat bevestigt een signaal precies?','hedonisch-en-pragmatisch'=>'Wat ervaar je naast het functionele resultaat?','ethiek-van-design'=>'Wie bepaalt welke signalen wenselijk zijn?']],
 ['onderzoeken','Beeld wordt interface','Image becomes interface','interface',
  'Het beeld krijgt een handeling. Onderzoek hoe je zichtbaar maakt wat iemand ermee kan doen.',
  'Open het beeld via de pijl. Vergelijk daarna de variant met tekst en vlak. Ontwerp twee eigen uitnodigingen voor dezelfde handeling en verklaar voor wie je welke kiest.',
  'Je kunt twee aanwijzingen voor dezelfde handeling ontwerpen en hun betekenis en gevolgen bespreken.',
  'De knop verandert hier alleen de lokale beeldstaat. De vergelijking is een ontwerpoefening, geen gebruikerstest en geen bewijs dat één versie voor iedereen beter is. Denk ook na over de ruimte voor ambiguïteit in een kunstwerk.',
  ['affordances-en-signifiers'=>'Wat maakt een vorm tot aanwijzing?','klik-hier'=>'Wat belooft de tekst van een handeling?','creative-coding-als-interfacefilosofie'=>'Hoe kan interactie zelf het werk worden?','ethiek-van-design'=>'Welke vrijheid geef of ontneem je?']],
];
$sources=[
 'color'=>['https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html','W3C WAI, Understanding 1.4.1','Success Criterion en Intent','Kleur is niet de enige visuele aanwijzing voor betekenis.'],
 'time'=>['https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html','W3C WAI, Understanding 4.1.3','Success Criterion en Intent','Statuswijzigingen zijn programmatisch bepaalbaar zonder focusverplaatsing.'],
 'sound'=>['https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API','MDN, Web Audio API','Web audio concepts and usage','AudioContext en verbonden audionodes maken lokaal geluid mogelijk.'],
];
course_backup($db);
$db->beginTransaction();
try {
 $q=$db->prepare('UPDATE categories SET title=? WHERE title=?');$q->execute(['Praktijk','Leerlijn']);
 $q=$db->prepare('UPDATE topics SET metadata_json=? WHERE id=?');
 foreach($items as [$id,$title,$english,$kind,$intro,$task,$goal,$bridge,$links]) {
  $topic=array_values(array_filter(course_topics($db),static fn(array $t):bool=>$t['id']===$id))[0];
  foreach($links as $target=>$label) if(course_content($db,$target)===null) throw new RuntimeException('Onbekende onderzoekslink: '.$target);
  $topic['titel']=$title;$topic['en']=['titel'=>$english,'samenvatting'=>'Practical study; the full text is currently in Dutch.'];
  $topic['samenvatting']=$intro;$topic['categorie']='Praktijk';$topic['placeholder']=false;$topic['practice']=true;$topic['tags']=[];
  $q->execute([course_json($topic),$id]);
  $research='';foreach($links as $target=>$label)$research.='<li><a href="#'.course_e($target).'">'.course_e($label).'</a></li>';
  $source='';
  if(isset($sources[$kind])) {
   [$url,$name,$locator,$supports]=$sources[$kind];$claimId='praktijk-'.$kind.'-bron';
   $source='<p id="bron-'.course_e($claimId).'"><a href="'.course_e($url).'">'.course_e($name).'</a>. Vindplaats: '.course_e($locator).'. Dekking: '.course_e($supports).' De documentatie onderbouwt geen leerwinst of universele ontwerpvoorkeur.</p>';
   $claim=['id'=>$claimId,'type'=>$kind==='sound'?'technische documentatie':'norm','url'=>$url,'source'=>$name,'locator'=>$locator,'supports'=>$supports,'limitations'=>'Gerichte bronpassage; geen bewijs van lokale leerwinst of volledige toegankelijkheid.','verification'=>'open'];
   $insert=$db->prepare('INSERT INTO claims VALUES(?,?,?,?,NULL,NULL,?)');$insert->execute([$claimId,$id,course_json($claim),'open','']);
  }
  $html='<p class="practice-intro">'.course_e($intro).'</p><section class="practice-workbench" data-practice="'.$kind.'" aria-label="Verkennende maakproef"><div class="practice-stage"></div><div class="practice-tools"></div><div class="practice-actions"><button type="button" data-save>Bewaar A</button><button type="button" data-recall disabled>Toon A</button><button type="button" data-reset>Beginstand</button></div><p class="practice-notice" role="status" aria-live="polite"></p><noscript><p>De maakproef vraagt JavaScript. De opdracht, verdieping en onderzoekslinks blijven hieronder leesbaar.</p></noscript></section>';
  $html.='<div class="practice-reading"><details><summary>Maakopdracht</summary><p>'.course_e($task).'</p><p>Bewaar twee beelden of beschrijf twee toestanden buiten de site. Voeg een korte toelichting toe: wat veranderde je, wat merkte je op en welke andere verklaring is mogelijk?</p></details>';
  $html.='<details><summary>Wat je onderzoekt</summary><p>'.course_e($goal).'</p><p>Voorkennis: een beeld bekijken en een browser bedienen. Beoordelingsbewijs: twee vergelijkbare varianten, een beschreven verschil en een beargumenteerde ontwerpkeuze. Een mooie vorm of snelle uitvoering alleen volstaat niet.</p><p>'.course_e($bridge).'</p></details>';
  $html.='<details><summary>Denk verder</summary><ul class="practice-research-links">'.$research.'</ul><p>Dit zijn zelfstandige denkoefeningen en bronnen van inspiratie. Je hoeft ze niet allemaal te doorlopen en je mag bij een beeld, ervaring of tegenvoorbeeld beginnen.</p></details>';
  $html.='<details><summary>Controleer je keuze</summary><p>Welke parameter veranderde je? Wat bleef gelijk? Kun je je interpretatie onderscheiden van wat werkelijk op het scherm veranderde?</p><details><summary>Bespreekrichting</summary><p>Een bruikbare uitleg noemt een concrete ingreep en een zichtbaar of hoorbaar verschil. “Beter” vraagt een doel, context en gebruiker. Herhaal de vergelijking met één gewijzigde parameter als je die zaken nog niet kunt onderscheiden. Pas dit bij een volgend praktijkonderwerp opnieuw toe.</p></details></details>';
  $html.='<details><summary>Over deze proef</summary><p>Eigen illustratie en verkennende oefening, uitgewerkt met Codex (AI) voor het project van Sebastien Vanblaere op 21 oktober 2026. Geen onafhankelijke vakreview of uitgevoerd leeronderzoek. De grafiek is schematisch; de koppeling met UI/UX is een didactisch voorstel.</p><p>Geen namen, antwoorden, opnames of gebruikstijden worden verzameld. Een gekozen eigen beeld blijft lokaal in deze browser en wordt niet geüpload. Variant A blijft alleen beschikbaar zolang deze pagina open is. Gebruik de beginstand om opnieuw te starten.</p>'.$source.'<p>Open: docentcontrole van opdracht en begrippen, volledige toegankelijkheidsreview en onderzoek naar leerresultaten. Bronnen en tegenlezingen in de bestaande onderzoeksnotities hebben hun eigen reikwijdte en controledatum.</p><p>Wijziging 21 oktober 2026: de lege stap is uitgewerkt als praktijkonderwerp. Het bestaande onderzoek is inhoudelijk behouden.</p></details></div>';
  foreach(['nl'=>$html,'en'=>'<p lang="en">This practical study is currently available in Dutch.</p><div lang="nl">'.$html.'</div>'] as $lang=>$text) {
   $hash=hash('sha256',$text);$now=course_now();
   $insert=$db->prepare('UPDATE contents SET html=?,content_hash=?,updated_at=? WHERE topic_id=? AND lang=?');$insert->execute([$text,$hash,$now,$id,$lang]);
   $insert=$db->prepare('INSERT INTO content_versions(topic_id,lang,html,content_hash,changed_at,reason) VALUES(?,?,?,?,?,?)');$insert->execute([$id,$lang,$text,$hash,$now,'Lege stap uitgewerkt vanuit audiovisuele praktijk; onderzoek behouden.']);
  }
  course_event($db,$id,'content',$id,'practice_publication','hercontrole_nodig','Originele maakproef; nog geen afgeronde inhoudelijke review.','Codex (AI)',hash('sha256',$html),null);
 }
 $q=$db->prepare('INSERT INTO metadata VALUES(?,?)');$q->execute(['practice_publication',course_json(['created_at'=>course_now(),'topics'=>array_column($items,0),'preserved_research'=>53])]);
 $db->commit();echo "Zes praktijkonderwerpen gepubliceerd; 53 onderzoeksinhouden behouden.\n";
} catch(Throwable $error) { $db->rollBack();throw $error; }
