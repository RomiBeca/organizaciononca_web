// Traducciones locales; se conserva la interfaz original.
const _T = window.ONCA_TRADUCCIONES;
function idiomaGuardado() {
  const requested = new URLSearchParams(location.search).get('lang');
  if (['es','pt','en'].includes(requested)) return requested;
  try { return localStorage.getItem('onca-lang') || 'es'; } catch (_) { return 'es'; }
}
// ── LANGUAGE ─────────────────────────────────────────────────────
let _activeTranslations = _T.es;

function _applyLang(lang) {
  _activeTranslations = _T[lang] || _T.es;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const val = _activeTranslations[el.getAttribute("data-i18n")];
    if (val !== undefined) el.textContent = val;
  });
  document.documentElement.lang = lang === "pt" ? "pt-BR" : lang === "en" ? "en" : "es";
  _updateLangButtons(lang);
}

function _updateLangButtons(lang) {
  document.querySelectorAll(".lang-flag-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  const activeBtn = document.querySelector(`.lang-flag-btn[data-lang="${lang}"]`);
  const triggerImg = document.getElementById("lang-flag-img");
  if (activeBtn && triggerImg) {
    const src = activeBtn.querySelector("img")?.src;
    if (src) triggerImg.src = src;
  }
}

// ── GLOBAL API ────────────────────────────────────────────────────
window.uiSetLang = function (lang) {
  if (!['es','pt','en'].includes(lang) || idiomaGuardado() === lang) return;
  try { localStorage.setItem('onca-lang', lang); } catch (_) { /* La selección también queda en la URL. */ }
  const next = new URL(location.href);
  next.searchParams.set('lang', lang);
  location.href = next.href;
};

window.uiT = function (key) {
  return _activeTranslations[key] || _T.es[key] || key;
};

window.uiLang = function () {
  return idiomaGuardado();
};

// ── INIT ──────────────────────────────────────────────────────────
// Los contenidos de página esperan a que el idioma esté aplicado.
// calendarioYcontactos.js hace "await window.uiReady" antes de renderizar.
let resolverUi;
window.uiReady = new Promise(resolve => { resolverUi = resolve; });

document.addEventListener("DOMContentLoaded", () => {
  const lang = idiomaGuardado();
  _applyLang(lang);
  resolverUi();

  // Barra de progreso de scroll
  const progressBar = document.createElement('div');
  progressBar.id = 'scroll-progress';
  document.body.prepend(progressBar);
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrolled = h.scrollTop || document.body.scrollTop;
    const total = h.scrollHeight - h.clientHeight;
    progressBar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
  }, { passive: true });

  // Botón flotante WhatsApp
  const waBtn = document.createElement("a");
  waBtn.id = "whatsapp-float";
  waBtn.href = "https://wa.me/56963711123?text=Hola!%20Me%20gustar%C3%ADa%20info%20sobre%20las%20clases%20de%20capoeira%20%F0%9F%A5%8B";
  waBtn.target = "_blank";
  waBtn.rel = "noopener noreferrer";
  waBtn.setAttribute("aria-label", "Contactar por WhatsApp");
  waBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
  document.body.appendChild(waBtn);

  // Botón volver arriba
  const backBtn = document.createElement("button");
  backBtn.id = "back-to-top";
  backBtn.innerHTML = "&#8679;";
  backBtn.setAttribute("aria-label", "Volver arriba");
  document.body.appendChild(backBtn);
  window.addEventListener("scroll", () => {
    backBtn.classList.toggle("visible", window.scrollY > 400);
  }, { passive: true });
  backBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Animaciones de entrada con scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll("section, .galeria-card, article").forEach((el) => {
    el.classList.add("fade-in-up");
    observer.observe(el);
  });
});
