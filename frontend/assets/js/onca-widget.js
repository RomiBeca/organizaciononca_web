/* Onça mascota de la esquina inferior derecha.
   Se pasea cerca de la esquina, de a ratos se sienta y mira hacia donde
   está el cursor, y de a ratos se va (para volver más tarde). Puramente decorativo. */
(function () {
  var scriptSrc = document.currentScript ? document.currentScript.src : '';
  var BASE = scriptSrc.replace(/js\/onca-widget\.js.*$/, '') +
    'img/onca-widget/' + encodeURIComponent('crea_una_onca_pintada (1)') + '/';

  var MARGIN = 14;       // separación del borde derecho
  var ROAM_WIDTH = 220;  // cuánto se pasea a la izquierda desde la esquina

  // Los frames de "caminar" (172x172) y los de "quieta/sentada" (128x128) traen
  // distinto margen transparente alrededor del personaje. Si se estiran los dos
  // al mismo cuadro fijo, el animal cambia de tamaño y flota a distinta altura
  // al pasar de caminar a sentarse. Estas constantes (medidas sobre los PNG)
  // permiten mostrar cada tipo con el mismo tamaño real y la misma línea de piso.
  var STILL_CANVAS = 128, STILL_CONTENT_H = 94, STILL_PAD = 14; // Idle/rotations y sentada_*/rotations
  var WALK_CANVAS = 172, WALK_CONTENT_H = 82, WALK_PAD = 43;    // Idle/animations/Walking

  function buildBoxes(charHeight, ground) {
    var stillScale = charHeight / STILL_CONTENT_H;
    var walkScale = charHeight / WALK_CONTENT_H;
    return {
      ground: ground,
      stillSize: STILL_CANVAS * stillScale,
      walkSize: WALK_CANVAS * walkScale,
      stillPad: STILL_PAD * stillScale,
      walkPad: WALK_PAD * walkScale
    };
  }

  var BOX_DESKTOP = buildBoxes(68, 40);
  var BOX_MOBILE = buildBoxes(46, 27);

  function boxes() { return window.innerWidth <= 600 ? BOX_MOBILE : BOX_DESKTOP; }

  // Ajusta tamaño y posición de la imagen para que sus patas queden siempre
  // sobre la misma línea de "piso", sea cual sea el tipo de sprite mostrado.
  function setCategory(category) {
    var b = boxes();
    var size = category === 'walk' ? b.walkSize : b.stillSize;
    var pad = category === 'walk' ? b.walkPad : b.stillPad;
    img.style.width = size + 'px';
    img.style.height = size + 'px';
    img.style.bottom = (-pad) + 'px';
  }

  // Direcciones en orden de ángulo (0°=este, 90°=norte, ...) usadas para mirar al cursor
  var DIRS = ['east', 'north-east', 'north', 'north-west', 'west', 'south-west', 'south', 'south-east'];

  function pad3(n) { return ('00' + n).slice(-3); }

  var WALK = { east: [], west: [] };
  for (var i = 0; i < 8; i++) {
    WALK.east.push(BASE + 'Idle/animations/Walking/east/frame_' + pad3(i) + '.png');
    WALK.west.push(BASE + 'Idle/animations/Walking/west/frame_' + pad3(i) + '.png');
  }
  var STAND = {}, SIT_QUIET = {}, SIT_MOVE = {};
  DIRS.forEach(function (d) {
    STAND[d] = BASE + 'Idle/rotations/' + d + '.png';
    SIT_QUIET[d] = BASE + 'sentada_quieta_movie/rotations/' + d + '.png';
    SIT_MOVE[d] = BASE + 'sentada_moviendo_la/rotations/' + d + '.png';
  });

  // Precarga de todos los frames para que no titile al cambiar de imagen
  WALK.east.concat(WALK.west)
    .concat(DIRS.map(function (d) { return STAND[d]; }))
    .concat(DIRS.map(function (d) { return SIT_QUIET[d]; }))
    .concat(DIRS.map(function (d) { return SIT_MOVE[d]; }))
    .forEach(function (src) { var im = new Image(); im.src = src; });

  var css = ''
    + '#onca-widget{position:fixed;left:0;width:1px;height:1px;'
    + 'pointer-events:none;z-index:2147483000;}'
    + '#onca-widget img{position:absolute;left:0;'
    + 'transform:translateX(-50%);cursor:pointer;pointer-events:auto;'
    + 'display:block;opacity:0;transition:opacity .5s ease;'
    + 'image-rendering:pixelated;image-rendering:crisp-edges;'
    + 'filter:drop-shadow(0 3px 4px rgba(0,0,0,.35));}'
    + '#onca-widget img.onca-visible{opacity:1;}'
    + '#onca-bubble{position:absolute;left:0;bottom:0;transform:translateX(-50%) translateY(6px) scale(.85);'
    + 'background:#fff;color:#1a1a1a;font:700 .82rem/1.3 inherit;white-space:nowrap;'
    + 'padding:.5em .9em;border-radius:14px;border:2px solid #ffc107;'
    + 'box-shadow:0 4px 10px rgba(0,0,0,.35);opacity:0;pointer-events:none;'
    + 'transition:opacity .25s ease, transform .25s ease;}'
    + '#onca-bubble.onca-bubble-visible{opacity:1;transform:translateX(-50%) translateY(0) scale(1);}'
    + '#onca-bubble::before{content:"";position:absolute;left:50%;bottom:-9px;transform:translateX(-50%);'
    + 'border:8px solid transparent;border-top-color:#ffc107;}'
    + '#onca-bubble::after{content:"";position:absolute;left:50%;bottom:-6px;transform:translateX(-50%);'
    + 'border:6px solid transparent;border-top-color:#fff;}';

  var styleTag = document.createElement('style');
  styleTag.textContent = css;
  document.head.appendChild(styleTag);

  var el = document.createElement('div');
  el.id = 'onca-widget';
  el.setAttribute('aria-hidden', 'true');
  var img = document.createElement('img');
  img.alt = '';
  el.appendChild(img);

  var bubble = document.createElement('div');
  bubble.id = 'onca-bubble';
  bubble.textContent = '¡Entrena con nosotros!';
  el.appendChild(bubble);

  document.body.appendChild(el);

  function setImg(src) { img.src = src; }

  var bubbleTimer = null;
  function showBubble() {
    bubble.style.bottom = (img.offsetHeight + 10) + 'px';
    bubble.classList.add('onca-bubble-visible');
    if (bubbleTimer) clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(function () {
      bubble.classList.remove('onca-bubble-visible');
    }, 2600);
  }
  img.addEventListener('click', function (e) {
    e.stopPropagation();
    showBubble();
  });

  function applyGround() { el.style.bottom = boxes().ground + 'px'; }
  applyGround();
  window.addEventListener('resize', applyGround);

  // Seguimiento del cursor (si no hay mouse -- táctil -- simplemente nunca "mira")
  var mouseX = null, mouseY = null;
  window.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  // "north" y "north-east" muestran al animal de espaldas: se reemplazan por
  // la dirección lateral más cercana para que nunca le dé la espalda al visitante.
  var NO_BACK = { 'north': 'north-west', 'north-east': 'east' };

  function dirToCursor() {
    if (mouseX === null) return null;
    var rect = el.getBoundingClientRect();
    var cx = rect.left + rect.width / 2;
    var cy = rect.top + rect.height / 2;
    var dx = mouseX - cx;
    var dy = mouseY - cy;
    if (Math.abs(dx) < 24 && Math.abs(dy) < 24) return null; // el cursor está casi encima, ignora
    var angle = Math.atan2(-dy, dx) * 180 / Math.PI;
    if (angle < 0) angle += 360;
    var dir = DIRS[Math.round(angle / 45) % 8];
    return NO_BACK[dir] || dir;
  }

  // Camina desde fromX a toX (px), eligiendo automáticamente los frames este/oeste
  function walkTo(fromX, toX, onDone) {
    setCategory('walk');
    var dir = toX >= fromX ? 'east' : 'west';
    var frames = WALK[dir];
    var distance = Math.abs(toX - fromX);
    var duration = Math.min(4200, Math.max(900, distance * 11));
    var frame = 0;
    setImg(frames[0]);
    var frameTimer = setInterval(function () {
      frame = (frame + 1) % frames.length;
      setImg(frames[frame]);
    }, 110);

    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      el.style.left = (fromX + (toX - fromX) * p) + 'px';
      if (p < 1) {
        requestAnimationFrame(step);
      } else {
        clearInterval(frameTimer);
        if (onDone) onDone();
      }
    }
    requestAnimationFrame(step);
  }

  // Se sienta mirando "defaultDir"; entremedio hace gestos de cola y, de a ratos,
  // gira a mirar hacia el cursor durante un momento. Llama a onDone al terminar.
  function sitPhase(defaultDir, onDone) {
    setCategory('still');
    setImg(STAND[defaultDir]);
    setTimeout(function () {
      setImg(SIT_QUIET[defaultDir]);
      var ticks = 3 + Math.floor(Math.random() * 4); // 3 a 6 gestos antes de levantarse

      function nextTick(n) {
        if (n <= 0) { onDone(); return; }
        var delay = 900 + Math.random() * 1500;
        setTimeout(function () {
          var lookDir = Math.random() < 0.45 ? dirToCursor() : null;
          if (lookDir) {
            setImg(SIT_QUIET[lookDir]);
            setTimeout(function () {
              setImg(SIT_QUIET[defaultDir]);
              nextTick(n - 1);
            }, 1300 + Math.random() * 1000);
          } else {
            setImg(SIT_MOVE[defaultDir]);
            setTimeout(function () {
              setImg(SIT_QUIET[defaultDir]);
              nextTick(n - 1);
            }, 320);
          }
        }, delay);
      }
      nextTick(ticks);
    }, 260);
  }

  function roamRange() {
    var vw = window.innerWidth;
    // Se usa el ancho de la caminata (el más grande) para que nunca se corte
    // contra el borde de la ventana, sea cual sea el sprite mostrado.
    var maxX = vw - MARGIN - boxes().walkSize / 2;
    return { min: maxX - ROAM_WIDTH, max: maxX };
  }

  function enter(onDone) {
    var range = roamRange();
    var startX = window.innerWidth + 40;
    var targetX = range.min + Math.random() * (range.max - range.min);
    el.style.left = startX + 'px';
    img.classList.add('onca-visible');
    walkTo(startX, targetX, onDone);
  }

  function roamStep(onDone) {
    var range = roamRange();
    var currentX = parseFloat(el.style.left);
    if (isNaN(currentX)) currentX = range.max;
    var targetX = range.min + Math.random() * (range.max - range.min);
    walkTo(currentX, targetX, onDone);
  }

  function leave(onDone) {
    var currentX = parseFloat(el.style.left);
    if (isNaN(currentX)) currentX = window.innerWidth;
    var targetX = window.innerWidth + 60;
    walkTo(currentX, targetX, function () {
      img.classList.remove('onca-visible');
      onDone();
    });
  }

  function sitLoop() {
    sitPhase('south', function () {
      if (Math.random() < 0.35) {
        // se va, y vuelve más tarde
        leave(function () {
          var wait = 20000 + Math.random() * 40000; // 20s a 60s afuera
          setTimeout(runCycle, wait);
        });
      } else {
        // se pasea a otro punto cercano y se vuelve a sentar
        roamStep(sitLoop);
      }
    });
  }

  function runCycle() {
    enter(sitLoop);
  }

  // Primera aparición: espera un poco tras cargar la página
  setTimeout(runCycle, 3000 + Math.random() * 3000);
})();
