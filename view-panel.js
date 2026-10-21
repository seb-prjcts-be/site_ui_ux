/* Personal CSS preview. No server writes and no changes to scholarly reviews. */
(() => {
    const key = 'cursus-ux:view-v1';
    const fields = [
        ['reader-size', 'Lettergrootte', 14, 26, 18, 1, 'px'],
        ['reader-leading', 'Regelafstand', 1.3, 2.1, 1.7, .05, ''],
        ['reader-width', 'Tekstbreedte', 40, 96, 68, 1, 'ch'],
        ['header-space', 'Bovenruimte', 0, 40, 20, 1, 'svh'],
        ['page-gutter', 'Paginamarge', 12, 64, 36, 2, 'px'],
        ['section-space', 'Afstand tussen onderdelen', 16, 80, 45, 1, 'px'],
    ];
    const colors = [['primary-color','Hoofdkleur','#202124'], ['secondary-color','Accentkleur','#ff007d']];
    let values = {};
    try { const saved = JSON.parse(localStorage.getItem(key) || '{}'); if (saved && typeof saved === 'object' && !Array.isArray(saved)) values = saved; } catch (_) { /* Browser storage is optional. */ }
    const clean = {};
    for (const [id,, min,max,,step] of fields) {
        const value = values[id];
        if (typeof value === 'number' && Number.isFinite(value) && value >= min && value <= max) clean[id] = Math.round(value / step) * step;
    }
    for (const [id] of colors) {
        if (typeof values[id] === 'string' && /^#[0-9a-f]{6}$/i.test(values[id])) clean[id] = values[id].toLowerCase();
    }
    values = clean;
    function apply() {
        for (const [id] of colors) {
            if (Object.hasOwn(values,id)) document.documentElement.style.setProperty('--' + id, values[id]);
            else document.documentElement.style.removeProperty('--' + id);
        }
        for (const [id,,,,,,unit] of fields) {
            if (Object.hasOwn(values,id)) document.documentElement.style.setProperty('--' + id, values[id] + unit);
            else document.documentElement.style.removeProperty('--' + id);
        }
    }
    apply();
    document.addEventListener('DOMContentLoaded', () => {
        const panel = document.getElementById('view-panel');
        const trigger = document.getElementById('view-toggle');
        const form = document.getElementById('view-fields');
        const status = document.getElementById('view-status');
        function report(message, ok = true) {
            status.textContent = message;
            document.getElementById('view-feedback').textContent = ok ? '✓' : '!';
        }
        if (!panel || !window.bootstrap?.Offcanvas) return;
        form.innerHTML = '<h3>Kleuren</h3><div class="view-palette">' + colors.map(([id,label,initial]) => `<label class="view-field view-color" for="view-${id}">${label}<output id="output-${id}" for="view-${id}" aria-live="off"></output><input type="color" id="view-${id}" aria-label="${label}" value="${values[id] ?? initial}" data-variable="${id}"></label>`).join('') + '</div><h3>Typografie</h3>' + fields.map(([id,label,min,max,initial,step,unit], index) => `${index === 3 ? '<h3>Ruimte</h3>' : ''}<label class="view-field" for="view-${id}">${label}<output for="view-${id}" id="output-${id}"></output><input type="range" id="view-${id}" min="${min}" max="${max}" step="${step}" value="${values[id] ?? initial}" data-variable="${id}" data-unit="${unit}"></label>`).join('');
        function refresh() {
            for (const [id,,initial] of colors) {
                document.getElementById('view-' + id).value = values[id] ?? initial;
                document.getElementById('output-' + id).value = (values[id] ?? initial).toUpperCase();
            }
            for (const [id,,,,initial,,unit] of fields) {
                const input = document.getElementById('view-' + id);
                input.value = values[id] ?? initial;
                const text = Number(input.value).toLocaleString('nl-BE') + (unit === 'svh' ? '% schermhoogte' : unit);
                document.getElementById('output-' + id).value = text;
                document.getElementById('output-' + id).setAttribute('aria-live','off');
                input.setAttribute('aria-valuetext',text);
            }
        }
        refresh();
        form.addEventListener('input', event => {
            const input = event.target;
            if (!(input instanceof HTMLInputElement) || !input.dataset.variable) return;
            if (input.type === 'color') {
                if (!/^#[0-9a-f]{6}$/i.test(input.value)) return;
                values[input.dataset.variable] = input.value.toLowerCase();
            } else values[input.dataset.variable] = Number(input.value);
            apply(); refresh();
            try { localStorage.setItem(key, JSON.stringify(values)); report('Persoonlijke proef bewaard in deze browser.'); }
            catch (_) { report('Proef actief; bewaren in deze browser is niet beschikbaar.', false); }
        });
        trigger.hidden = false;
        trigger.addEventListener('click', () => {
            const instance = bootstrap.Offcanvas.getOrCreateInstance(panel, {backdrop: innerWidth < 1100, scroll: innerWidth >= 1100});
            instance.toggle();
        });
        let reading = null;
        panel.addEventListener('show.bs.offcanvas', () => {
            reading = window.captureInterfaceReadingPosition?.();
            document.body.classList.add('view-panel-open');
            trigger.setAttribute('aria-expanded','true');
        });
        panel.addEventListener('shown.bs.offcanvas', () => {
            window.restoreInterfaceReadingPosition?.(reading);
            panel.querySelector('.btn-close')?.focus({preventScroll:true});
        });
        panel.addEventListener('hide.bs.offcanvas', () => {
            reading = window.captureInterfaceReadingPosition?.();
            document.body.classList.remove('view-panel-open');
            trigger.setAttribute('aria-expanded','false');
        });
        panel.addEventListener('hidden.bs.offcanvas', () => {
            window.restoreInterfaceReadingPosition?.(reading);
            trigger.focus({preventScroll:true});
        });
        // Reopening after resize uses the correct overlay/scroll mode.
        panel.addEventListener('hidden.bs.offcanvas', () => bootstrap.Offcanvas.getInstance(panel)?.dispose());
        document.getElementById('view-reset').addEventListener('click', () => {
            values = {}; apply(); refresh();
            window.dispatchEvent(new Event('course:view-reset'));
            const url = new URL(location.href); url.searchParams.delete('compositie'); url.searchParams.delete('verdeling');
            history.replaceState(null,'',url); window.dispatchEvent(new PopStateEvent('popstate'));
            try { localStorage.removeItem(key); } catch (_) { /* Preview still resets. */ }
            report('Standaardstijl hersteld.');
        });
        document.getElementById('view-export').addEventListener('click', () => {
            const css = '/* Persoonlijke proef; geen gepubliceerde standaard. */\n:root {\n' + [...colors.filter(([id]) => Object.hasOwn(values,id)).map(([id]) => `  --${id}: ${values[id]};`), ...fields.filter(([id]) => Object.hasOwn(values,id)).map(([id,,,,,,unit]) => `  --${id}: ${values[id]}${unit};`)].join('\n') + '\n}\n';
            const url = URL.createObjectURL(new Blob([css],{type:'text/css;charset=utf-8'}));
            const link = document.createElement('a'); link.href = url; link.download = 'ui-ux-weergave.css'; link.click();
            setTimeout(() => URL.revokeObjectURL(url), 1000);
            report('CSS-export aangemaakt. De standaard op de site is niet gewijzigd.');
        });
    });
})();
