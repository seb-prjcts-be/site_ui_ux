<?php
declare(strict_types=1);
if(PHP_SAPI!=='cli'){http_response_code(404);exit;}
require_once __DIR__.'/../lib/manage.php';
$db=course_db(true);
if(course_meta($db,'practice_student_walkthrough')){echo "Doorloopaanpassingen zijn al toegepast.\n";exit;}
$items=[
 'herkennen'=>['Maak eerst een nauwere uitsnede. Verplaats daarna het kader. Wat verdwijnt, en waar kijk je nu naar?','Maak een uitsnede en bewaar A. Verander alleen de plaats van het kader. Wissel tussen A en B en benoem wat zichtbaar blijft en wat verdwijnt. Teken daarna een handeling bij het beeld: welke uitsnede ondersteunt die handeling, en waarom?','Wat verdwijnt uit beeld, en wat wordt daardoor belangrijker?','esthetiek-en-mediatheorie'],
 'begrijpen'=>['Kies een andere vorm. Schakel tekst en teken uit. Waaraan herken je nu je keuze?','Bewaar A met tekst en teken. Schakel alleen die aanwijzingen uit en vergelijk A en B. Probeer vervolgens een accentkleur die dicht bij het grijs ligt en kies opnieuw een vorm. Ontwerp op papier een selectie die ook zonder kleurverschil herkenbaar is.','Kun je de selectie nog herkennen als de kleuren op elkaar lijken?','toestand-versus-opdracht'],
 'orienteren'=>['Zet de wachttijd op 1600 ms en verplaats de pijl. Herhaal zonder tussenmelding. Wat weet je tijdens het wachten?','Bewaar A bij 1600 ms met tussenmelding. Schakel alleen de tussenmelding uit en voer in beide varianten dezelfde verplaatsing uit. Vergelijk daarna 0, 600 en 1600 ms met dezelfde meldingen. Ontwerp een tussenstaat die wachten aanduidt zonder een voltooiing te beloven.','Wat vertelt de tussenmelding, en wat weet je pas na de verplaatsing?','toestand-versus-opdracht'],
 'handelen'=>['Speel de drie beelden af. Wissel twee beelden om en speel opnieuw. Welke samenhang lees je nu?','Speel de beginreeks af en bewaar A. Verplaats één beeld en speel B af. Wissel tussen beide reeksen; beschrijf een verschil en een andere mogelijke lezing. Teken vervolgens een navigatiepad: waar kan iemand zelf kiezen, stoppen of terugkeren?','Welke lezing verandert door de volgorde, en wat heb je nodig om zelf te kiezen?','navigatie-en-wayfinding'],
 'afwegen'=>['Bevestig tweemaal. Zet geluid aan en herhaal. Schakel daarna alleen het visuele signaal uit. Wat merk je nog?','Vergelijk eerst alleen beeld met beeld en geluid. Bewaar die tweede variant als A. Schakel alleen het visuele signaal uit en bevestig opnieuw. Welke informatie mis je als je niet luistert? Ontwerp een bevestiging voor een stille omgeving; beschrijf ook wat iemand nodig heeft die niet naar het scherm kijkt.','Welk signaal blijft over als je niet kijkt of niet luistert?','hedonisch-en-pragmatisch'],
 'onderzoeken'=>['Open het beeld met de pijl. Voeg alleen tekst toe en probeer opnieuw. Wat belooft de knop nu?','Bewaar de pijl als A. Voeg alleen tekst toe en vergelijk. Herstel de beginstand en verander daarna alleen het vlak. Open telkens het beeld en sluit het weer. Ontwerp twee uitnodigingen voor dezelfde handeling en verklaar voor welke situatie je welke kiest.','Welke aanwijzing komt door de tekst, welke door het vlak?','affordances-en-signifiers'],
];
foreach($items as $id=>[$intro,$task,$question,$link]){
 $html=course_content($db,$id)['html'];
 $html=preg_replace('~<p class="practice-intro">.*?</p>~s','<p class="practice-intro">'.course_e($intro).'</p>',$html,1);
 $html=preg_replace('~(<summary>Maakopdracht</summary><p>).*?(</p>)~s','$1'.course_e($task).'$2',$html,1);
 $html=str_replace('</noscript></section>','</noscript><aside class="practice-insight" hidden><p>'.course_e($question).'</p><a href="#'.$link.'">Onderzoek deze vraag ↗</a></aside></section>',$html);
 $html=str_replace('Dezelfde zichtbare bevestiging blijft aanwezig.','Het visuele signaal kan afzonderlijk uit om een zwakke variant te onderzoeken. Beide signalen uit is geen bruikbare bevestiging. De teller maakt herhaalde acties zichtbaar; hij meet geen taakvoltooiing buiten deze demo.',$html);
 $html=str_replace('Variant A blijft alleen beschikbaar zolang deze pagina open is.','Varianten A en B blijven alleen beschikbaar zolang deze pagina open is. Een eigen beeld kiezen wist de bewaarde vergelijking.',$html);
 $html=str_replace('</details></div>','<p>Doorloop 21 oktober 2026: AI-doorloop vanuit studenthandelingen; vergelijkingen en gerichte verdiepingsvragen aangescherpt. Geen uitgevoerd onderzoek met studenten.</p></details></div>',$html);
 foreach(['nl'=>$html,'en'=>'<p lang="en">This practical study is currently available in Dutch.</p><div lang="nl">'.$html.'</div>'] as $lang=>$text)course_set_content($db,$id,$lang,$text,'Kritische studentendoorloop: uitvoerbare vergelijking, afzonderlijke variabelen en gerichte verdieping.');
}
$q=$db->prepare('INSERT INTO metadata VALUES(?,?)');$q->execute(['practice_student_walkthrough',course_json(['updated_at'=>course_now(),'topics'=>array_keys($items),'scope'=>'AI-doorloop, geen studentenonderzoek.'])]);
echo "Zes maakproeven aangescherpt; eerdere inhoudelijke controledatums blijven behouden tot hercontrole.\n";
