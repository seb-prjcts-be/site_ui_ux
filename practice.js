/* Original local studies. Uploaded images never leave the browser. */
(() => {
    const models = {
        frame: {zoom:1, x:50}, color: {color:'#ff007d', labelled:true},
        time: {delay:600}, sequence: {order:[0,1,2]}, sound: {enabled:false}, interface: {explicit:false}
    };
    const clone = value => JSON.parse(JSON.stringify(value));
    function crop(zoom,x) { const width=600/zoom; return [(600-width)*x/100,(400-400/zoom)/2,width,400/zoom]; }
    function move(order,index,delta) { const result=[...order]; const next=index+delta; if(next<0 || next>=result.length) return result; [result[index],result[next]]=[result[next],result[index]]; return result; }
    const art = (view='0 0 600 400', extra='') => `<svg viewBox="${view}" role="img" aria-label="Schematisch landschap met zon, heuvels en een figuur"><rect width="600" height="400" fill="#e5e2da"/><circle cx="438" cy="104" r="48" fill="var(--secondary-color)"/><path d="M0 260 140 115 330 355 490 190 600 285V400H0Z" fill="#acb3a3"/><path d="m0 330 240-100 360 160v10H0" fill="#5e7268"/><path d="M290 400 350 235 390 400Z" fill="#d6bcb0"/><circle cx="150" cy="255" r="11" fill="#222"/><path d="M150 268v42m-12-22h24m-12 22-10 25m10-25 10 25" fill="none" stroke="#222" stroke-width="4"/>${extra}</svg>`;
    if (typeof module !== 'undefined') module.exports={crop,move,models};
    if (typeof document === 'undefined') return;
    let teardown=()=>{};
    let audio=null;
    async function tone() {
        const Audio = window.AudioContext || window.webkitAudioContext;
        if (!Audio) throw Error('Geluid niet beschikbaar in deze browser.');
        audio ||= new Audio();
        await audio.resume();
        const oscillator=audio.createOscillator(), gain=audio.createGain();
        oscillator.frequency.value=620; gain.gain.setValueAtTime(.025,audio.currentTime);
        gain.gain.exponentialRampToValueAtTime(.001,audio.currentTime+.12);
        oscillator.connect(gain); gain.connect(audio.destination);
        oscillator.start(); oscillator.stop(audio.currentTime+.13);
    }
    function dispose() { teardown(); teardown=()=>{}; if(audio){audio.close().catch(()=>{});audio=null;} }
    function init(root) {
        dispose();
        const box=root.querySelector('[data-practice]'); if(!box) return;
        const kind=box.dataset.practice; if(!models[kind]) return;
        const stage=box.querySelector('.practice-stage'), tools=box.querySelector('.practice-tools');
        const status=box.querySelector('[role=status]');
        const abort=new AbortController(); const timers=new Set(); const dialogs=new Set(); let imageUrl=null;
        teardown=()=>{abort.abort();timers.forEach(clearTimeout);dialogs.forEach(dialog=>{dialog.close();dialog.remove();});if(imageUrl) URL.revokeObjectURL(imageUrl);};
        let state=clone(models[kind]), saved=null;
        const listen=(element,event,fn)=>element.addEventListener(event,fn,{signal:abort.signal});
        const range=(name,label,min,max,step=1)=>`<label>${label}<output data-value="${name}"></output><input aria-label="${label}" type="range" data-param="${name}" min="${min}" max="${max}" step="${step}" value="${state[name]}"></label>`;
        const check=(name,label)=>`<label class="practice-check"><input type="checkbox" data-param="${name}" ${state[name]?'checked':''}> ${label}</label>`;
        const render=()=>{
            if(kind==='frame') {
                stage.innerHTML=art(crop(state.zoom,state.x).join(' '));
                if(imageUrl) { const svg=stage.querySelector('svg');svg.replaceChildren();const image=document.createElementNS('http://www.w3.org/2000/svg','image');image.setAttribute('href',imageUrl);image.setAttribute('width','600');image.setAttribute('height','400');image.setAttribute('preserveAspectRatio','xMidYMid slice');svg.append(image);svg.setAttribute('aria-label','Eigen beeld met aangepaste uitsnede'); }
            }
            if(kind==='color') stage.innerHTML=`<div class="color-study"><span>Reeks 01</span><div class="color-shapes"><i></i><i></i><i></i></div><button type="button" class="color-select" aria-pressed="true" style="--study-accent:${state.color}">${state.labelled?'✓ Geselecteerd':'●'}</button></div>`;
            if(kind==='time') stage.innerHTML='<div class="response-study"><div class="response-mark" aria-hidden="true">↗</div><button type="button" data-action="respond">Verplaats</button><span class="response-state" role="status">Gereed</span></div>';
            if(kind==='sequence') stage.innerHTML=`<div class="sequence-study">${state.order.map((id,index)=>`<div class="sequence-frame"><span>${index+1}</span>${art(['0 0 600 400','110 100 260 173','310 20 260 173'][id])}<div><button type="button" data-move="${index}" data-direction="-1" aria-label="Beeld ${index+1} naar links" ${index===0?'disabled':''}>←</button><button type="button" data-move="${index}" data-direction="1" aria-label="Beeld ${index+1} naar rechts" ${index===2?'disabled':''}>→</button></div></div>`).join('')}</div>`;
            if(kind==='sound') stage.innerHTML='<div class="response-study"><div class="sound-mark" aria-hidden="true">○</div><button type="button" data-action="sound">Bevestig</button><span class="sound-state" role="status">Gereed</span></div>';
            if(kind==='interface') stage.innerHTML=`<div class="image-interface">${art()}<button type="button" data-action="image" class="image-action ${state.explicit?'is-explicit':''}" aria-label="Open de beeldstudie" aria-haspopup="dialog">${state.explicit?'Bekijk beeld ↗':'↗'}</button><span class="image-result" role="status"></span></div>`;
            tools.querySelectorAll('[data-param]').forEach(input=>{const value=state[input.dataset.param];if(input.type==='checkbox') input.checked=value;else input.value=value;});
            tools.querySelectorAll('[data-value]').forEach(output=>{const name=output.dataset.value;output.value=name==='delay'?state[name]+' ms':name==='zoom'?state[name].toFixed(1)+'×':state[name]+'%';});
        };
        if(kind==='frame') tools.innerHTML=range('zoom','Uitsnede',1,3,.1)+range('x','Plaats',0,100)+'<label class="practice-file">Eigen beeld<input type="file" accept="image/png,image/jpeg,image/webp" aria-label="Eigen beeld kiezen"></label>';
        if(kind==='color') tools.innerHTML='<label>Accent<input aria-label="Accent van de proef" type="color" data-param="color" value="#ff007d"></label>'+check('labelled','Ook tekst en teken');
        if(kind==='time') tools.innerHTML=range('delay','Wachttijd',0,2000,100);
        if(kind==='sound') tools.innerHTML=check('enabled','Geluid aan');
        if(kind==='interface') tools.innerHTML=check('explicit','Met tekst en vlak');
        render();
        listen(tools,'input',event=>{
            const input=event.target; const name=input.dataset.param;
            if(!name || !(name in state)) return;
            if(name==='color'&&!/^#[0-9a-f]{6}$/i.test(input.value))return;
            timers.forEach(clearTimeout);timers.clear();
            state[name]=input.type==='checkbox'?input.checked:input.type==='color'?input.value:Number(input.value);
            render(); status.textContent='Variant aangepast.';
        });
        const upload=tools.querySelector('input[type=file]');
        if(upload) listen(upload,'change',()=>{
            const file=upload.files[0]; if(!file)return;
            if(!['image/png','image/jpeg','image/webp'].includes(file.type)||file.size>10*1024*1024){status.textContent='Kies een PNG, JPEG of WebP tot 10 MB.';upload.value='';return;}
            saved=null;box.querySelector('[data-recall]').disabled=true;
            if(imageUrl)URL.revokeObjectURL(imageUrl); imageUrl=URL.createObjectURL(file);render();status.textContent='Eigen beeld geladen; blijft op dit toestel.';
        });
        listen(stage,'click',async event=>{
            const button=event.target.closest('button'); if(!button)return;
            if(button.dataset.move!==undefined){state.order=move(state.order,Number(button.dataset.move),Number(button.dataset.direction));render();status.textContent='Volgorde '+state.order.map(id=>id+1).join(' – ');const replacement=stage.querySelector(`[data-move="${Math.max(0,Math.min(2,Number(button.dataset.move)+Number(button.dataset.direction)))}"]:not(:disabled)`);replacement?.focus({preventScroll:true});}
            if(button.classList.contains('color-select'))status.textContent='Deze variant is geselecteerd. Vergelijk de aanwijzingen.';
            if(button.dataset.action==='respond'){
                button.disabled=true;stage.querySelector('.response-state').textContent='Bezig…';
                const timer=setTimeout(()=>{timers.delete(timer);if(abort.signal.aborted)return;stage.querySelector('.response-mark').classList.toggle('is-moved');stage.querySelector('.response-state').textContent='Verplaatst';button.disabled=false;},state.delay);timers.add(timer);
            }
            if(button.dataset.action==='sound'){
                stage.querySelector('.sound-mark').textContent='✓';stage.querySelector('.sound-state').textContent='Bevestigd';
                if(state.enabled)try{await tone();}catch(error){if(!abort.signal.aborted)status.textContent=error.message;}
            }
            if(button.dataset.action==='image'){
                const dialog=document.createElement('dialog');dialog.className='practice-lightbox';
                dialog.setAttribute('aria-label','Beeldstudie');dialog.innerHTML='<button type="button" aria-label="Beeld sluiten">Sluiten ×</button>'+art();
                root.append(dialog);dialogs.add(dialog);
                listen(dialog.querySelector('button'),'click',()=>dialog.close());
                dialog.addEventListener('close',()=>{dialogs.delete(dialog);dialog.remove();button.focus({preventScroll:true});},{once:true});
                dialog.showModal();

            }
        });
        listen(box.querySelector('[data-save]'),'click',()=>{saved=clone(state);box.querySelector('[data-recall]').disabled=false;status.textContent='Variant A bewaard tot je deze pagina verlaat.';});
        listen(box.querySelector('[data-recall]'),'click',()=>{if(saved){timers.forEach(clearTimeout);timers.clear();state=clone(saved);render();status.textContent='Variant A hersteld.';}});
        listen(box.querySelector('[data-reset]'),'click',()=>{timers.forEach(clearTimeout);timers.clear();saved=null;box.querySelector('[data-recall]').disabled=true;state=clone(models[kind]);if(imageUrl){URL.revokeObjectURL(imageUrl);imageUrl=null;}if(upload)upload.value='';render();status.textContent='Beginstand hersteld.';});
    }
    window.Practice={init,dispose,art};
})();
