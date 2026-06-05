// Apply theme immediately to prevent flash of wrong theme
(function () {
  document.documentElement.setAttribute(
    "data-bs-theme",
    localStorage.getItem("onca-theme") || "dark",
  );
})();

// ── TRANSLATIONS ─────────────────────────────────────────────────
const _T = {
  es: {
    "nav.nosotros": "Nosotros",
    "nav.galeria": "Galería",
    "nav.noticias": "Noticias",
    "nav.saopaulo": "São Paulo",
    "nav.clases": "Clases & Horarios",

    "home.hero.titulo": "Capoeira: Movimiento, Cultura y Libertad",
    "home.hero.sub": "Ven a Jogar con nosotros",

    "home.noticias.titulo": "Noticias",
    "home.noticias.badge": "Novedad",
    "home.noticias.btn": "Ver todas las noticias",

    "home.quees.titulo": "¿Qué es la Capoeira?",
    "home.quees.p1":
      "La capoeira es una expresión cultural Afro-brasileña que combina lucha, música, danza y acrobacia en una sola práctica. Su origen se remonta al siglo XVI, cuando personas africanas esclavizadas en Brasil desarrollaron esta forma de combate como un método de resistencia y autodefensa, ocultándola dentro de movimientos rítmicos para evitar la represión.",
    "home.quees.p2":
      "Con el tiempo, la capoeira evolucionó desde ser una práctica perseguida hasta convertirse en un símbolo cultural de Brasil y patrimonio inmaterial reconocido en 2014 por la UNESCO a nivel mundial.",
    "home.quees.p3":
      "Hoy en día, la capoeira se practica en todo el mundo, no solo como actividad física, sino también como una herramienta de formación integral. Fomenta la disciplina, la coordinación, la expresión corporal y el trabajo en comunidad, manteniendo viva una tradición que conecta historia, cultura y movimiento.",
    "home.quees.onca": "Capoeira Organização Onças en Chile",
    "home.quees.btn": "Conocer más de nosotros",

    "home.explora.titulo": "Explora más",
    "home.explora.clases.titulo": "Clases y contactos",
    "home.explora.clases.desc": "Horarios y lugares donde entrenamos en Chile.",
    "home.explora.galeria.titulo": "Galería",
    "home.explora.galeria.desc": "Fotos de rodas, entrenamientos y eventos.",
    "home.explora.sao.desc": "Nuestra conexión con Brasil y la raíz del grupo.",

    "nosotros.hero.titulo": "Quiénes Somos",
    "nosotros.hero.sub":
      "Una familia que crece a través del movimiento, la música y la tradición afrobrasileña.",
    "nosotros.historia.titulo": "Organização Onça (Chile)",
    "nosotros.historia.p1":
      "Organização Onça - Chile nace en el año 2025, bajo la supervicion del contramestre Cabelo Pé de Serra. Desde entonces, hemos crecido como comunidad, compartiendo la pasión por la capoeira.",
    "nosotros.historia.p2":
      "Con una larga trayectoria de rodas, talleres y eventos, nos hemos consolidado como un espacio de encuentro, aprendizaje y celebración de la cultura afrobrasileña en Santiago de Chile. Siendo parte de la historia de la capoeira en Chile, hoy seguimos construyendo nuestro camino, con la mirada puesta en el futuro y el corazón lleno de alegría y compromiso con esta extraordinaria arte marcial.",
    "nosotros.filosofia.titulo": "Nuestra Filosofía",
    "nosotros.filosofia.p1":
      "En Organização Onça creemos en la Capoeira como una herramienta transformadora que promueve el respeto, la disciplina y la creatividad. Nuestra filosofía se basa en los valores de la comunidad, la inclusión y el aprendizaje continuo, fomentando un ambiente donde cada individuo pueda crecer tanto física como espiritualmente a través de la práctica de la Capoeira.",
    "nosotros.filosofia.p2":
      "Nos esforzamos por mantener viva la capoeira y todas sus aristas como el maculele, samba de roda entre otras instancias de la cultura afrobrasileña, promoviendo la diversidad y el intercambio cultural dentro de nuestra comunidad.",
    "nosotros.equipo.titulo": "Nuestro Equipo",
    "nosotros.camilo.titulo": "Profesor Camilo Donoso",
    "nosotros.camilo.cv":
      "El Profesor Grau 2° Camilo Donoso , comenzo en la capoeira a la corta edad de 7 años al rededor de los 2000 en un taller comunal de capoeira junto a su hermano  y desde entonces esta disciplina fue parte de su vida. Con más de 20 años de experiencia en la Capoeira siendo en sus inicios parte del grupo Sul da Bahia formado por el Mestre Zequinha, con quien mantiene hasta hoy una excelente relación.",
    "nosotros.felipe.titulo": "Profesor Felipe Donoso",
    "nosotros.felipe.cv":
      "El Profesor Grau 2° Felipe Donoso, cuenta con más de 20 años de experiencia en la Capoeira. Comenzó desde niño en los años 2000 junto a su hermano Camilo, compartiendo desde la infancia el camino de la Capoeira. Se formó bajo la guía del Mestre Zequinha, del grupo Sul da Bahia, con quien mantiene hasta hoy una excelente relación.",

    "noticias.hero.titulo": "Noticias & Eventos",
    "noticias.hero.sub": "Lo que está pasando en Organização Onça",
    "noticias.cargando": "Cargando noticias…",
    "noticias.vacia": "No hay noticias publicadas en este momento.",
    "noticias.error": "No se pudieron cargar las noticias.",
    "noticias.error.sub":
      "Asegurate de abrir el sitio desde un servidor (ej: Live Server en VS Code).",
    "noticias.ver": "Ver afiche",
  },
  pt: {
    "nav.nosotros": "Nós",
    "nav.galeria": "Galeria",
    "nav.noticias": "Notícias",
    "nav.saopaulo": "São Paulo",
    "nav.clases": "Aulas & Horários",

    "home.hero.titulo": "Capoeira: Movimento, Cultura e Liberdade",
    "home.hero.sub": "Venha Jogar conosco",

    "home.noticias.titulo": "Notícias",
    "home.noticias.badge": "Novidade",
    "home.noticias.btn": "Ver todas as notícias",

    "home.quees.titulo": "O que é a Capoeira?",
    "home.quees.p1":
      "A capoeira é uma expressão cultural afro-brasileira que combina luta, música, dança e acrobacia em uma única prática. Sua origem remonta ao século XVI, quando africanos escravizados no Brasil desenvolveram essa forma de combate como método de resistência e autodefesa, disfarçando-a em movimentos rítmicos para evitar a repressão.",
    "home.quees.p2":
      "Com o tempo, a capoeira evoluiu de uma prática perseguida para se tornar um símbolo cultural do Brasil e patrimônio imaterial reconhecido em 2014 pela UNESCO em nível mundial.",
    "home.quees.p3":
      "Hoje, a capoeira é praticada em todo o mundo, não apenas como atividade física, mas também como ferramenta de formação integral. Fomenta a disciplina, a coordenação, a expressão corporal e o trabalho em comunidade, mantendo viva uma tradição que conecta história, cultura e movimento.",
    "home.quees.onca": "Capoeira Organização Onças no Chile",
    "home.quees.btn": "Conhecer mais sobre nós",

    "home.explora.titulo": "Explore mais",
    "home.explora.clases.titulo": "Aulas e contatos",
    "home.explora.clases.desc": "Horários e locais onde treinamos no Chile.",
    "home.explora.galeria.titulo": "Galeria",
    "home.explora.galeria.desc": "Fotos de rodas, treinos e eventos.",
    "home.explora.sao.desc": "Nossa conexão com o Brasil e a raiz do grupo.",

    "nosotros.hero.titulo": "Quem Somos",
    "nosotros.hero.sub":
      "Uma família que cresce através do movimento, da música e da tradição afro-brasileira.",
    "nosotros.historia.titulo": "Organização Onça (Chile)",
    "nosotros.historia.p1":
      "Organização Onça - Chile nasce em 2025, sob a supervisão do contramestre Cabelo Pé de Serra. Desde então, crescemos como comunidade, compartilhando a paixão pela capoeira.",
    "nosotros.historia.p2":
      "Com uma longa trajetória de rodas, oficinas e eventos, nos consolidamos como um espaço de encontro, aprendizado e celebração da cultura afro-brasileira em Santiago do Chile. Sendo parte da história da capoeira no Chile, hoje seguimos construindo nosso caminho, com o olhar voltado para o futuro e o coração cheio de alegria e comprometimento com esta extraordinária arte marcial.",
    "nosotros.filosofia.titulo": "Nossa Filosofia",
    "nosotros.filosofia.p1":
      "Na Organização Onça acreditamos na Capoeira como uma ferramenta transformadora que promove o respeito, a disciplina e a criatividade. Nossa filosofia se baseia nos valores da comunidade, da inclusão e do aprendizado contínuo, fomentando um ambiente onde cada indivíduo possa crescer tanto física quanto espiritualmente através da prática da Capoeira.",
    "nosotros.filosofia.p2":
      "Nos esforçamos para manter viva a capoeira e todas as suas vertentes, como o maculelê, o samba de roda e outras expressões da cultura afro-brasileira, promovendo a diversidade e o intercâmbio cultural dentro de nossa comunidade.",
    "nosotros.equipo.titulo": "Nossa Equipe",
    "nosotros.camilo.titulo": "Professor Camilo Donoso",
    "nosotros.camilo.cv":
      "Grau 2° (10ª graduação), o Professor Camilo Donoso tem mais de 25 anos de experiência na Capoeira. Começou ainda criança nos anos 2000 ao lado de seu irmão Felipe, partilhando desde a infância o caminho da Capoeira. Formou-se sob a orientação do Mestre Zequinha, do grupo Sul da Bahia, com quem mantém até hoje uma excelente relação.",
    "nosotros.felipe.titulo": "Professor Felipe Donoso",
    "nosotros.felipe.cv":
      "Grau 2° (10ª graduação), o Professor Felipe Donoso tem mais de 25 anos de experiência na Capoeira. Começou ainda criança nos anos 2000 ao lado de seu irmão Camilo, partilhando desde a infância o caminho da Capoeira. Formou-se sob a orientação do Mestre Zequinha, do grupo Sul da Bahia, com quem mantém até hoje uma excelente relação.",

    "noticias.hero.titulo": "Notícias & Eventos",
    "noticias.hero.sub": "O que está acontecendo na Organização Onça",
    "noticias.cargando": "Carregando notícias…",
    "noticias.vacia": "Não há notícias publicadas no momento.",
    "noticias.error": "Não foi possível carregar as notícias.",
    "noticias.error.sub":
      "Abra o site a partir de um servidor (ex: Live Server no VS Code).",
    "noticias.ver": "Ver cartaz",
  },
};

// ── LANGUAGE ─────────────────────────────────────────────────────
function _applyLang(lang) {
  const t = _T[lang] || _T.es;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const val = t[el.getAttribute("data-i18n")];
    if (val !== undefined) el.textContent = val;
  });
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "es";
  _updateLangButtons(lang);
}

function _updateLangButtons(lang) {
  const active = lang === "pt" ? "btn-lang-pt" : "btn-lang-es";
  const inactive = lang === "pt" ? "btn-lang-es" : "btn-lang-pt";
  const btnA = document.getElementById(active);
  const btnI = document.getElementById(inactive);
  if (btnA) {
    btnA.classList.add("btn-warning");
    btnA.classList.remove("btn-outline-secondary");
  }
  if (btnI) {
    btnI.classList.remove("btn-warning");
    btnI.classList.add("btn-outline-secondary");
  }
}

// ── THEME ─────────────────────────────────────────────────────────
function _updateThemeBtn() {
  const isDark =
    (document.documentElement.getAttribute("data-bs-theme") || "dark") ===
    "dark";
  document.querySelectorAll("[data-theme-icon]").forEach((btn) => {
    btn.textContent = isDark ? "☀" : "🌙";
    btn.title = isDark ? "Modo claro" : "Modo oscuro";
  });
}

// ── GLOBAL API ────────────────────────────────────────────────────
window.uiSetLang = function (lang) {
  if (localStorage.getItem("onca-lang") === lang) return;
  localStorage.setItem("onca-lang", lang);
  location.reload();
};

window.uiToggleTheme = function () {
  const next =
    document.documentElement.getAttribute("data-bs-theme") === "dark"
      ? "light"
      : "dark";
  document.documentElement.setAttribute("data-bs-theme", next);
  localStorage.setItem("onca-theme", next);
  _updateThemeBtn();
};

// Expose translations for page scripts that render dynamic content
window.uiT = function (key) {
  const lang = localStorage.getItem("onca-lang") || "es";
  return (_T[lang] || _T.es)[key] || _T.es[key] || key;
};

window.uiLang = function () {
  return localStorage.getItem("onca-lang") || "es";
};

// ── INIT ──────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  _applyLang(localStorage.getItem("onca-lang") || "es");
  _updateThemeBtn();
});
