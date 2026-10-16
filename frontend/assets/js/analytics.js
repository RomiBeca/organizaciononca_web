/* Conserva Analytics en el dominio publicado, sin conexiones al revisar la copia local. */
(function () {
  'use strict';
  if (!/(^|\.)organizacaooncachile\.cl$/i.test(location.hostname)) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-VN1YXZMQ9Q');
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-VN1YXZMQ9Q';
  document.head.appendChild(script);
})();
