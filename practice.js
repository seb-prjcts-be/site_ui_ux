/* Original local studies. Uploaded images never leave the browser. */
(() => {
    const models = {
        frame: {zoom:1, x:50}, color: {color:'#ff007d', labelled:true, selected:1},
        time: {delay:600, feedback:true}, sequence: {order:[0,1,2]}, sound: {enabled:false, visual:true}, interface: {explicit:false, surface:false}
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
        let state=clone(models[kind]), saved=null, alternate=null, showingA=false;
        let playing=false, frameIndex=0, confirmations=0;
        const frameNames=['Overzicht','Figuur','Licht'];
        const views=['0 0 600 400','110 100 260 173','310 20 260 173'];
        const insight=box.querySelector('.practice-insight');
        const reveal=()=>{if(insight)insight.hidden=false;};
        const stop=()=>{timers.forEach(clearTimeout);timers.clear();playing=false;};
        const edit=()=>{showingA=false;box.querySelector('[data-recall]').textContent='Toon A';};
        const listen=(element,event,fn)=>element.addEventListener(event,fn,{signal:abort.signal});
        const range=(name,label,min,max,step=1)=>`<label>${label}<output data-value="${name}"></output><input aria-label="${label}" type="range" data-param="${name}" min="${min}" max="${max}" step="${step}" value="${state[name]}"></label>`;
        const check=(name,label)=>`<label class="practice-check"><input type="checkbox" data-param="${name}" ${state[name]?'checked':''}> ${label}</label>`;
        const render=()=>{
            if(kind==='frame') {
                stage.innerHTML=art(crop(state.zoom,state.x).join(' '));
                if(imageUrl) { const svg=stage.querySelector('svg');svg.replaceChildren();const image=document.createElementNS('http://www.w3.org/2000/svg','image');image.setAttribute('href',imageUrl);image.setAttribute('width','600');image.setAttribute('height','400');image.setAttribute('preserveAspectRatio','xMidYMid slice');svg.append(image);svg.setAttribute('aria-label','Eigen beeld met aangepaste uitsnede'); }
            }
            if(kind==='color') stage.innerHTML=`<div class="color-study"><span>Kies een vorm</span><div class="color-shapes">${['Vierkant','Cirkel','Driehoek'].map((name,index)=>`<button type="button" data-select="${index}" aria-label="${name}" aria-pressed="${state.selected===index}" style="--study-accent:${state.color}"><i></i><span>${state.labelled?(state.selected===index?'✓ '+name:name):'&nbsp;'}</span></button>`).join('')}</div></div>`;
            if(kind==='time') stage.innerHTML='<div class="response-study"><div class="response-mark" aria-hidden="true">↗</div><button type="button" data-action="respond">Verplaats</button><span class="response-state" role="status">Gereed</span></div>';
            if(kind==='sequence') stage.innerHTML=`<div class="sequence-work"><div class="sequence-preview">${art(views[state.order[frameIndex]])}<span role="status">${frameIndex+1}/3 · ${frameNames[state.order[frameIndex]]}</span></div><button type="button" data-action="play">${playing?'Stop':'Speel reeks'}</button><div class="sequence-study">${state.order.map((id,index)=>`<div class="sequence-frame" ${playing&&index===frameIndex?'aria-current="step"':''}><span>${index+1} · ${frameNames[id]}</span>${art(views[id])}<div><button type="button" data-move="${index}" data-direction="-1" aria-label="${frameNames[id]} naar links" ${index===0?'disabled':''}>←</button><button type="button" data-move="${index}" data-direction="1" aria-label="${frameNames[id]} naar rechts" ${index===2?'disabled':''}>→</button></div></div>`).join('')}</div></div>`;
            if(kind==='sound') stage.innerHTML=`<div class="response-study"><div class="sound-mark" aria-hidden="true">${state.visual?(confirmations?'✓':'○'):''}</div><button type="button" data-action="sound">Bevestig</button><span class="sound-state" role="status">${state.visual?(confirmations?'Bevestigd · '+confirmations:'Gereed'):''}</span></div>`;
            if(kind==='interface') stage.innerHTML=`<div class="image-interface">${art()}<button type="button" data-action="image" class="image-action ${state.surface?'is-explicit':''}" aria-label="Open de beeldstudie" aria-haspopup="dialog">${state.explicit?'Bekijk beeld ↗':'↗'}</button></div>`;
            tools.querySelectorAll('[data-param]').forEach(input=>{const value=state[input.dataset.param];if(input.type==='checkbox') input.checked=value;else input.value=value;input.disabled=kind==='frame'&&input.dataset.param==='x'&&state.zoom===1;});
            tools.querySelectorAll('[data-value]').forEach(output=>{const name=output.dataset.value;output.value=name==='delay'?state[name]+' ms':name==='zoom'?state[name].toFixed(1)+'×':state[name]+'%';});
        };
        if(kind==='frame') tools.innerHTML=range('zoom','Uitsnede',1,3,.1)+range('x','Plaats',0,100)+'<label class="practice-file">Eigen beeld<input type="file" accept="image/png,image/jpeg,image/webp" aria-label="Eigen beeld kiezen"></label>';
        if(kind==='color') tools.innerHTML='<label>Accent<input aria-label="Accent van de proef" type="color" data-param="color" value="#ff007d"></label>'+check('labelled','Ook tekst en teken');
        if(kind==='time') tools.innerHTML=range('delay','Wachttijd',0,2000,100)+check('feedback','Tussenmelding tonen');
        if(kind==='sound') tools.innerHTML=check('enabled','Geluid aan')+check('visual','Visueel signaal');
        if(kind==='interface') tools.innerHTML=check('explicit','Tekst')+check('surface','Vlak');
        render();
        listen(tools,'input',event=>{
            const input=event.target; const name=input.dataset.param;
            if(!name || !(name in state)) return;
            if(name==='color'&&!/^#[0-9a-f]{6}$/i.test(input.value))return;
            stop();edit();frameIndex=0;
            state[name]=input.type==='checkbox'?input.checked:input.type==='color'?input.value:Number(input.value);
            render();reveal(); status.textContent=kind==='sound'&&!state.enabled&&!state.visual?'Beide signalen staan uit.':'Variant aangepast.';
        });
        const upload=tools.querySelector('input[type=file]');
        if(upload) listen(upload,'change',()=>{
            const file=upload.files[0]; if(!file)return;
            if(!['image/png','image/jpeg','image/webp'].includes(file.type)||file.size>10*1024*1024){status.textContent='Kies een PNG, JPEG of WebP tot 10 MB.';upload.value='';return;}
            saved=null;edit();box.querySelector('[data-recall]').disabled=true;
            if(imageUrl)URL.revokeObjectURL(imageUrl); imageUrl=URL.createObjectURL(file);render();status.textContent='Eigen beeld geladen; blijft op dit toestel.';
        });
        listen(stage,'click',async event=>{
            const button=event.target.closest('button'); if(!button)return;
            if(button.dataset.move!==undefined){stop();edit();frameIndex=0;state.order=move(state.order,Number(button.dataset.move),Number(button.dataset.direction));render();reveal();status.textContent='Volgorde '+state.order.map(id=>frameNames[id]).join(' – ');const replacement=stage.querySelector(`[data-move="${Math.max(0,Math.min(2,Number(button.dataset.move)+Number(button.dataset.direction)))}"]:not(:disabled)`);replacement?.focus({preventScroll:true});}
            if(button.dataset.select!==undefined){edit();state.selected=Number(button.dataset.select);render();reveal();stage.querySelector(`[data-select="${state.selected}"]`).focus({preventScroll:true});status.textContent='Vorm geselecteerd.';}
            if(button.dataset.action==='play'){
                if(playing){stop();render();stage.querySelector('[data-action=play]').focus({preventScroll:true});return;}
                playing=true;frameIndex=0;reveal();
                const step=()=>{if(abort.signal.aborted)return;const focused=document.activeElement===stage.querySelector('[data-action=play]');render();if(focused)stage.querySelector('[data-action=play]').focus({preventScroll:true});if(frameIndex<2){const timer=setTimeout(()=>{timers.delete(timer);frameIndex++;step();},1200);timers.add(timer);}else{playing=false;stage.querySelector('[data-action=play]').textContent='Speel reeks';status.textContent='Reeks afgelopen.';}};
                step();stage.querySelector('[data-action=play]').focus({preventScroll:true});
            }
            if(button.dataset.action==='respond'){
                const mark=stage.querySelector('.response-mark');mark.style.transition='none';mark.classList.remove('is-moved');void mark.offsetWidth;mark.style.transition='';
                button.disabled=true;stage.querySelector('.response-state').textContent=state.feedback?'Bezig…':'';reveal();
                const timer=setTimeout(()=>{timers.delete(timer);if(abort.signal.aborted)return;mark.classList.add('is-moved');stage.querySelector('.response-state').textContent='Verplaatst';button.disabled=false;},state.delay);timers.add(timer);
            }
            if(button.dataset.action==='sound'){
                confirmations++;reveal();
                stage.querySelector('.sound-mark').textContent=state.visual?'✓':'';stage.querySelector('.sound-state').textContent=state.visual?'Bevestigd · '+confirmations:'';
                if(state.enabled)try{await tone();}catch(error){if(!abort.signal.aborted)status.textContent=error.message;}
            }
            if(button.dataset.action==='image'){
                reveal();
                const dialog=document.createElement('dialog');dialog.className='practice-lightbox';
                dialog.setAttribute('aria-label','Beeldstudie');dialog.innerHTML='<button type="button" aria-label="Beeld sluiten">Sluiten ×</button>'+art();
                root.append(dialog);dialogs.add(dialog);
                listen(dialog.querySelector('button'),'click',()=>dialog.close());
                dialog.addEventListener('close',()=>{dialogs.delete(dialog);dialog.remove();button.focus({preventScroll:true});},{once:true});
                dialog.showModal();

            }
        });
        listen(box.querySelector('[data-save]'),'click',()=>{saved=clone(state);edit();box.querySelector('[data-recall]').disabled=false;status.textContent='Variant A bewaard. Verander één parameter en wissel daarna tussen A en B.';});
        listen(box.querySelector('[data-recall]'),'click',()=>{if(saved){stop();frameIndex=0;if(!showingA){alternate=clone(state);state=clone(saved);showingA=true;}else{state=clone(alternate);showingA=false;}render();box.querySelector('[data-recall]').textContent=showingA?'Toon B':'Toon A';reveal();status.textContent=showingA?'Variant A.':'Variant B.';}});
        listen(box.querySelector('[data-reset]'),'click',()=>{stop();saved=null;edit();frameIndex=0;confirmations=0;box.querySelector('[data-recall]').disabled=true;state=clone(models[kind]);if(imageUrl){URL.revokeObjectURL(imageUrl);imageUrl=null;}if(upload)upload.value='';if(insight)insight.hidden=true;render();status.textContent='Beginstand hersteld.';});
    }
    window.Practice={init,dispose,art};
})();
