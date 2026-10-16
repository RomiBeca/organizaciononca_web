/* Carga los JSON desde el servidor y usa la copia local al abrir index.html. */
(function () {
  'use strict';
  const script = document.currentScript;
  const dataBase = new URL('../data/', script.src);
  const cache = new Map();
  window.oncaLoadJSON = function (name) {
    if (!['noticias', 'calendario', 'videos'].includes(name)) {
      return Promise.reject(new Error('Nombre de datos no permitido.'));
    }
    if (cache.has(name)) return cache.get(name).then(value => JSON.parse(JSON.stringify(value)));
    const localCopy = () => {
      const value = window.ONCA_DATOS_LOCALES?.[name];
      if (value === undefined) throw new Error('No se encontró la copia local de ' + name);
      // Cada consumidor puede ordenar su copia sin alterar los datos compartidos.
      return JSON.parse(JSON.stringify(value));
    };
    const task = location.protocol === 'file:'
      ? Promise.resolve().then(localCopy)
      : fetch(new URL(name + '.json', dataBase), { cache: 'no-cache' })
        .then(response => {
          if (!response.ok) throw new Error('HTTP ' + response.status);
          return response.json();
        })
        .catch(localCopy);
    cache.set(name, task);
    return task.then(value => JSON.parse(JSON.stringify(value)));
  };
  // Escapa el contenido editorial antes de insertarlo en las tarjetas.
  window.oncaEscape = function (value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[char]);
  };
})();
