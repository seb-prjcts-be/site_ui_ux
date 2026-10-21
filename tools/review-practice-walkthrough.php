<?php
declare(strict_types=1);
if(PHP_SAPI!=='cli'){http_response_code(404);exit;}
require_once __DIR__.'/../lib/manage.php';
$db=course_db(true);
if(course_meta($db,'practice_walkthrough_review')){echo "Doorloopreview bestaat al.\n";exit;}
$observations=[
 'herkennen'=>'Uitsnede en plaats veranderd; A en B teruggehaald. Plaats zonder uitsnede uitgeschakeld.',
 'begrijpen'=>'Andere vorm gekozen en tekst/teken uitgezet; echte selectie en verdiepingsvraag zichtbaar.',
 'orienteren'=>'Wachttijd op 2000 ms gezet; Bezig zichtbaar en vervolgens dezelfde handeling zonder tussenmelding uitgevoerd.',
 'handelen'=>'Overzicht verplaatst, reeks afgespeeld tot Licht; focus blijft op afspeelknop.',
 'afwegen'=>'Herhaald bevestigd; geluid expliciet aan, visueel signaal afzonderlijk uit. Geen akoestische kwaliteitsmeting.',
 'onderzoeken'=>'Tekst en vlak afzonderlijk gewijzigd; beeld geopend en met Escape gesloten; onderzoekslink naar affordances gevolgd.',
];
foreach($observations as $id=>$observation){
 course_record_check($db,'criterion',$id,'K06','deels','Concrete eerste handeling, vergelijking van één variabele en eigen vervolgontwerp sluiten inhoudelijk aan. '.$observation.' Docentvalidatie en voorbeeldrubric blijven open.','Codex (AI)');
 course_record_check($db,'criterion',$id,'K07','deels','Gerichte vraag verschijnt na een ingreep; A/B behoudt beide varianten. Zelfcontrole vraagt waarneming, interpretatie en andere verklaring. Zelfstandige transfer nog niet met studenten beoordeeld.','Codex (AI)');
 course_record_check($db,'criterion',$id,'K11','deels',$observation.' Browserdoorloop en modeltests; geen volledige WCAG-, mobiele of native uploadcontrole van deze aanpassingen.','Codex (AI)');
 course_record_page_check($db,$id,'Kritische AI-doorloop van praktijkhandeling, vergelijking en overgang naar verdieping; alleen K06/K07/K11 opnieuw beoordeeld.',$observation.' Zie docs/studentendoorloop-20261021.md. Overige criteria en broncontroles niet vernieuwd; docentcontrole en leeronderzoek blijven open.','Codex (AI)');
}
$q=$db->prepare('INSERT INTO metadata VALUES(?,?)');$q->execute(['practice_walkthrough_review',course_json(['reviewed_at'=>course_now(),'scope'=>'AI-doorloop van zes maakproeven; geen leeronderzoek.'])]);
echo "Zes begrensde doorloopreviews geregistreerd.\n";
