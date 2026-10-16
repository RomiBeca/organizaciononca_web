/* Última noticia con afiche completo; las publicaciones anteriores conservan sus enlaces. */
(async function () {
  'use strict';
  const container = document.getElementById('noticias-page-container');
  const principalHost = document.getElementById('noticia-principal-container');
  const archivoTitulo = document.getElementById('noticias-archivo-titulo');
  const e = window.oncaEscape;
  try {
    await window.uiReady;
    const lang = window.uiLang();
    const t = window.uiT;
    const noticias = await window.oncaLoadJSON('noticias');
    if (!noticias.length) {
      container.innerHTML = `<p class="text-center text-body-secondary py-5">${e(t('noticias.vacia'))}</p>`;
      return;
    }
    noticias.sort((a, b) => (b.fecha_iso || '').localeCompare(a.fecha_iso || ''));
    const texto = (n, campo) => e(n[campo + '_' + lang] || n[campo]);
    const imagen = n => e('../' + n.imagen);
    const modalAttrs = n => `data-bs-toggle="modal" data-bs-target="#modal-afiche" data-src="${imagen(n)}" data-alt="${texto(n, 'titulo')}"`;
    const compartir = n => `<button type="button" class="btn btn-outline-light btn-compartir-card" data-titulo="${texto(n, 'titulo')}" data-id="${e(n.id)}">${e(t('noticias.compartir'))}</button>`;
    const enlaces = n => `${n.enlace ? `<a class="btn btn-warning fw-bold" href="./${e(n.enlace)}">${e(t('noticias.evento'))} →</a>` : ''}
      ${n.galeria ? `<a class="btn btn-outline-warning fw-bold" href="./${e(n.galeria)}">${e(t('noticias.fotos'))} →</a>` : ''}`;
    const principal = noticias[0];
    principalHost.innerHTML = `<article class="noticia-principal${principal.imagen ? '' : ' noticia-principal--sin-imagen'}" id="noticia-${e(principal.id)}" aria-labelledby="noticia-principal-titulo">
      ${principal.imagen ? `<button type="button" class="noticia-principal__afiche" ${modalAttrs(principal)} aria-label="${e(t('noticias.ampliar'))}: ${texto(principal, 'titulo')}">
        <img src="${imagen(principal)}" alt="${texto(principal, 'titulo')}" decoding="async" />
        <span>${e(t('noticias.ampliar'))} ↗</span>
      </button>` : ''}
      <div class="noticia-principal__contenido">
        <p class="noticia-principal__etiqueta">${e(t('noticias.ultima'))}</p>
        <p class="noticia-principal__fecha"><time datetime="${e(principal.fecha_iso)}">${texto(principal, 'fecha')}</time></p>
        <h2 id="noticia-principal-titulo">${texto(principal, 'titulo')}</h2>
        <p class="noticia-principal__descripcion">${texto(principal, 'descripcion')}</p>
        <div class="noticia-principal__acciones">${enlaces(principal)}
          ${principal.imagen ? `<button type="button" class="btn btn-warning fw-bold" ${modalAttrs(principal)}>${e(t('noticias.ampliar'))}</button>` : ''}
          ${compartir(principal)}
        </div>
      </div>
    </article>`;

    // La noticia principal se muestra una vez; el resto se organiza por mes.
    const porMes = new Map();
    noticias.slice(1).forEach(n => {
      const mes = n['mes_' + lang] || n.mes;
      if (!porMes.has(mes)) porMes.set(mes, []);
      porMes.get(mes).push(n);
    });
    archivoTitulo.hidden = porMes.size === 0;
    const hoy = new Date().toLocaleDateString('sv');
    container.innerHTML = Array.from(porMes, ([mes, items]) => `<div class="mb-5">
      <h3 class="mes-titulo">${e(mes)}</h3><div class="row g-4">
      ${items.map(n => `<div class="col-md-6" id="noticia-${e(n.id)}">
        <article class="noticia-full-card">
          ${n.imagen ? (n.enlace
            ? `<a class="noticia-img-wrapper d-block" href="./${e(n.enlace)}"><img src="${imagen(n)}" alt="${texto(n, 'titulo')}" class="noticia-full-img${n.afiche ? ' noticia-full-img--afiche' : ''}" loading="lazy"${n.imagen_pos && !n.afiche ? ` style="object-position:${e(n.imagen_pos)}"` : ''} /></a>`
            : `<button type="button" class="noticia-img-wrapper noticia-archivo__afiche" ${modalAttrs(n)} aria-label="${e(t('noticias.ampliar'))}: ${texto(n, 'titulo')}"><img src="${imagen(n)}" alt="${texto(n, 'titulo')}" class="noticia-full-img noticia-full-img--afiche" loading="lazy" /><span>${e(t('noticias.ampliar'))} ↗</span></button>`)
          : ''}
          <div class="noticia-full-body">
            ${(n.vigente_hasta || n.fecha_iso) < hoy ? `<p class="noticia-archivo__estado">${e(t('noticias.pasado'))}</p>` : ''}
            <div class="noticia-fecha">${texto(n, 'fecha')}</div>
            <h4 class="noticia-titulo">${texto(n, 'titulo')}</h4>
            <p class="noticia-desc">${texto(n, 'descripcion')}</p>
            <div class="noticia-principal__acciones">${enlaces(n)}${compartir(n)}</div>
          </div>
        </article>
      </div>`).join('')}</div></div>`).join('');

    const modal = document.getElementById('modal-afiche');
    modal.addEventListener('show.bs.modal', event => {
      const trigger = event.relatedTarget;
      if (!trigger?.dataset.src) return;
      const img = document.getElementById('modal-afiche-img');
      img.src = trigger.dataset.src;
      img.alt = trigger.dataset.alt;
      document.getElementById('modal-afiche-titulo').textContent = trigger.dataset.alt;
      modal.dataset.imageSrc = trigger.dataset.src;
      modal.dataset.imageAlt = trigger.dataset.alt;
    });
    document.getElementById('btn-share-afiche').addEventListener('click', () => {
      const titulo = document.getElementById('modal-afiche-titulo').textContent;
      bootstrap.Modal.getInstance(modal)?.hide();
      const noticia = noticias.find(n => '../' + n.imagen === modal.dataset.imageSrc);
      openSharePanel(titulo, 'https://organizacaooncachile.cl/frontend/assets/page/noticias.html' + (noticia ? '#noticia-' + noticia.id : ''));
    });
    document.querySelector('.noticias-contenido').addEventListener('click', event => {
      const boton = event.target.closest('.btn-compartir-card');
      if (boton) openSharePanel(boton.dataset.titulo, 'https://organizacaooncachile.cl/frontend/assets/page/noticias.html#noticia-' + boton.dataset.id);
    });
    if (/^#noticia-[\w-]+$/.test(location.hash)) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } catch (error) {
    principalHost.innerHTML = '';
    archivoTitulo.hidden = true;
    container.innerHTML = `<p class="text-center text-body-secondary py-5">${e(window.uiT('noticias.error'))}</p>`;
    console.error('Noticias:', error);
  }
})();
