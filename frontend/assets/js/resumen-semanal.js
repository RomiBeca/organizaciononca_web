/* El resumen y el calendario comparten los mismos datos y traducciones. */
(async function () {
  'use strict';
  const host = document.getElementById('resumen-semanal');
  if (!host) return;
  try {
    await window.uiReady;
    const cfg = await window.oncaLoadJSON('calendario');
    const e = window.oncaEscape;
    const locale = { es: 'es-CL', pt: 'pt-BR', en: 'en-GB' }[window.uiLang()] || 'es-CL';
    const dias = Object.entries(cfg.clases.semanales).sort(([a], [b]) => ((+a + 6) % 7) - ((+b + 6) % 7));
    host.innerHTML = dias.map(([dia, clase]) => {
      const detalle = cfg.clases.detalle[clase.type];
      const nombreDia = new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(new Date(2026, 0, 4 + Number(dia), 12));
      const horarios = detalle.horariosKeys.map(key => {
        const texto = window.uiT(key);
        // Una sola franja no necesita el prefijo «Horario»; el domingo mantiene las edades.
        const visible = detalle.horariosKeys.length === 1 ? texto.replace(/^[^\d]*/, '') : texto;
        return `<p class="semana-horario">${e(visible)}</p>`;
      }).join('');
      const desde = clase.desde && clase.desde > new Date().toLocaleDateString('sv')
        ? `<p class="semana-desde">${e(window.uiT('clases.resumen.desde'))} ${e(new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(clase.desde + 'T12:00:00')))}</p>` : '';
      return `<li class="semana-dia" data-dia="${e(dia)}"><h4>${e(nombreDia)}</h4>${horarios}
        <p class="semana-sede">${e(window.uiT(detalle.nombreKey))}</p><p class="semana-comuna">${e(detalle.comuna)}</p>${desde}</li>`;
    }).join('');
  } catch (error) {
    host.innerHTML = `<li class="text-body-secondary">${window.oncaEscape(window.uiT('clases.resumen.error'))}</li>`;
    console.error('Resumen semanal:', error);
  }
})();
