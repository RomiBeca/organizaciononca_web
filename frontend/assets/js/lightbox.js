(function () {
  const modalHTML = `
    <div class="modal fade" id="lightboxModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content bg-black border-0">
          <div class="modal-body p-0">
            <button type="button"
              class="btn-close btn-close-white position-absolute top-0 end-0 m-3"
              style="z-index:10;opacity:.85"
              data-bs-dismiss="modal"
              aria-label="Cerrar">
            </button>
            <div class="d-flex align-items-center" style="min-height:70vh">
              <button id="lb-prev" aria-label="Anterior"
                class="btn btn-dark flex-shrink-0 align-self-stretch px-3 rounded-0 border-0"
                style="font-size:2rem;opacity:.75">&#8249;</button>

              <div class="flex-grow-1 text-center p-2 p-md-3">
                <img id="lb-img" src="" alt=""
                  class="img-fluid rounded"
                  style="max-height:80vh;object-fit:contain;">
              </div>

              <button id="lb-next" aria-label="Siguiente"
                class="btn btn-dark flex-shrink-0 align-self-stretch px-3 rounded-0 border-0"
                style="font-size:2rem;opacity:.75">&#8250;</button>
            </div>
            <p id="lb-counter" class="text-center text-white-50 py-2 mb-0" style="font-size:.8rem"></p>
          </div>
        </div>
      </div>
    </div>`;

  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const modalEl  = document.getElementById('lightboxModal');
  const lbImg    = document.getElementById('lb-img');
  const lbCount  = document.getElementById('lb-counter');
  const lbPrev   = document.getElementById('lb-prev');
  const lbNext   = document.getElementById('lb-next');

  let images  = [];
  let current = 0;

  function buildList() {
    images = Array.from(document.querySelectorAll('a .galeria-img')).map(img => ({
      src: img.src,
      alt: img.alt || 'Foto galería'
    }));
  }

  function show(index) {
    current = (index + images.length) % images.length;
    lbImg.src    = images[current].src;
    lbImg.alt    = images[current].alt;
    lbCount.textContent = (current + 1) + ' / ' + images.length;
    lbPrev.style.visibility = images.length > 1 ? 'visible' : 'hidden';
    lbNext.style.visibility = images.length > 1 ? 'visible' : 'hidden';
  }

  // Intercept clicks on any link wrapping a .galeria-img
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a');
    if (!link) return;
    const img = link.querySelector('.galeria-img');
    if (!img) return;
    e.preventDefault();

    if (!images.length) buildList();
    const idx = images.findIndex(i => i.src === img.src);
    show(idx >= 0 ? idx : 0);

    bootstrap.Modal.getOrCreateInstance(modalEl).show();
  });

  lbPrev.addEventListener('click', () => show(current - 1));
  lbNext.addEventListener('click', () => show(current + 1));

  // Navegación con teclado
  document.addEventListener('keydown', function (e) {
    if (!modalEl.classList.contains('show')) return;
    if (e.key === 'ArrowLeft')  show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });

  // Limpiar src al cerrar para liberar memoria
  modalEl.addEventListener('hidden.bs.modal', () => { lbImg.src = ''; });
})();
