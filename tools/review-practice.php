<?php
declare(strict_types=1);
if(PHP_SAPI!=='cli'){http_response_code(404);exit;}
require_once __DIR__.'/../lib/manage.php';
$db=course_db(true);
if(course_meta($db,'practice_review')){echo "Deze eenmalige review is al geregistreerd. Nieuwe wijzigingen vragen een nieuwe inhoudelijke controle.\n";exit;}
$ids=['herkennen','begrijpen','orienteren','handelen','afwegen','onderzoeken'];
$criteria=[
 'K01'=>['deels','Project, AI-uitwerking, datum en scope zichtbaar in Over deze proef. Docentredactie en onafhankelijke review blijven open.'],
 'K02'=>['voldoet','Oorspronkelijke illustratie, normuitleg en interpretatieve koppeling onderscheiden; geen universele voorkeur of leereffect geclaimd.'],
 'K03'=>['deels','Drie nieuwe technische/normatieve bronpassages gericht geopend en geannoteerd. Onderzoekslinks behouden hun eigen historische review en beperkingen; geen nieuwe integrale controle van die teksten.'],
 'K04'=>['voldoet','Schematische demo, lokale timer, eigen ontwerpkeuzes en afwezigheid van leeronderzoek expliciet begrensd.'],
 'K05'=>['voldoet','Overgang van lege stap naar maakproef gedateerd op de pagina; oorspronkelijke versies, reden en events in SQLite behouden.'],
 'K06'=>['deels','Elke pagina koppelt één observeerbaar doel aan een ingreep, twee varianten en onderbouwde reflectie. Docentvalidatie en rubric met voorbeeldprestaties nog open.'],
 'K07'=>['deels','Zelfcontrolevraag, bespreekrichting en herstap aanwezig; transfer wordt voorgesteld, maar niet met studenten beoordeeld.'],
 'K08'=>['voldoet','Activiteiten expliciet als eigen verkennende maakproeven aangeduid. Geen deelnemers, metingen of experimentele resultaten verzameld.'],
 'K09'=>['niet_van_toepassing','Geen studie-uitkomsten of statistische conclusies gerapporteerd; geen fictieve effectgroottes of steekproefclaims.'],
 'K10'=>['niet_van_toepassing','Individuele maakproeven zonder deelnemersregistratie. Eigen beeld blijft via object-URL lokaal; geen opname of uploadendpoint.'],
 'K11'=>['deels','Node-grenstests voor uitsnede en herordenen geslaagd. Browser: zes werkvlakken, bewaren/terughalen, timer, expliciet geluid, modaal beeld en Escape gecontroleerd. Mobiele 390px-weergave visueel bekeken. Volledige toetsenbord-, zoom-, contrast- en schermlezerreview en native bestandskiezerproef blijven open.'],
 'K12'=>['open','Geen leeronderzoek uitgevoerd. Docentcontrole, geanonimiseerde voorbeeldprestaties en toetsing van transfer blijven nodig.'],
];
course_backup($db);$db->beginTransaction();
try{
 foreach($ids as $id){
  $content=course_content($db,$id);$now=course_now();
  foreach($criteria as $criterion=>[$status,$evidence]){
   $q=$db->prepare('UPDATE criterion_checks SET status=?,evidence=?,last_checked_at=?,checked_hash=? WHERE topic_id=? AND criterion=?');
   $q->execute([$status,$evidence,$now,$content['content_hash'],$id,$criterion]);
   course_event($db,$id,'criterion',$criterion,'check',$status,$evidence,'Codex (AI)', $content['content_hash'],$now);
  }
 }
 $db->commit();
}catch(Throwable $error){$db->rollBack();throw $error;}
foreach(['praktijk-color-bron','praktijk-time-bron','praktijk-sound-bron'] as $claim){
 course_record_check($db,'claim',$claim,null,'gecontroleerd','Bronpassage geopend op 21 oktober 2026: W3C Understanding 1.4.1 en 4.1.3, Success Criterion en Intent; MDN Web Audio API, concepts and usage. Controle dekt alleen de geannoteerde norm/technische werking, geen lokale toegankelijkheid of leerwinst.','Codex (AI)');
}
foreach($ids as $id){
 course_record_page_check($db,$id,'Originele maakproef, opdracht-doel-bewijs, zelfcontrole, beperkingen en onderzoeksverbindingen; K01-K12 afzonderlijk vastgelegd.','Tekst en koppelingen gelezen; modeltests en de zes browserinteracties uitgevoerd. Docentreview, volledige toegankelijkheidscontrole en leeronderzoek blijven open. Geen onafhankelijke vakreview.','Codex (AI)');
}
$q=$db->prepare('INSERT INTO metadata VALUES(?,?)');$q->execute(['practice_review',course_json(['reviewed_at'=>course_now(),'reviewer'=>'Codex (AI)','topics'=>$ids,'limitations'=>'Geen onafhankelijke vakreview, volledige WCAG-evaluatie of leeronderzoek.'])]);
echo "Zes begrensde paginareviews, 72 criteria en drie gerichte broncontroles geregistreerd.\n";
