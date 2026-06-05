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

    "galeria.hero.titulo": "Galería",
    "galeria.hero.sub": "Nuestra historia en imágenes.",
    "galeria.momentos.titulo": "Nuestros Momentos",
    "galeria.2025.desc": "Fotos de rodas, entrenamientos y eventos del 2025. Ven y revive nuestros momentos.",
    "galeria.2026.desc": "Fotos de rodas, entrenamientos y eventos del 2026. Seguimos construyendo historia.",

    "saopaulo.hero.titulo": "São Paulo – Raíz de la Organização Onça",
    "saopaulo.hero.sub": "El corazón del grupo, donde tradición, música y movimiento se encuentran.",
    "saopaulo.origenes.titulo": "Nuestros Orígenes",
    "saopaulo.origenes.p1": "La Organización Onça nace a partir de una de las raíces más tradicionales de la Capoeira Regional en Salvador, Bahia. Provenimos directamente de la línea de Mestre Bimba, creador de la Capoeira Regional y responsable de transformar la arte en un método, disciplina e identidad cultural.",
    "saopaulo.origenes.p2": "La historia continúa con Mestre Joel, discípulo de Mestre Bimba, quien difundió esta esencia en Itapuã y formó a Mestre Cobrinha, consolidando la línea Onça que hoy preservamos y expandimos.",
    "saopaulo.linaje.titulo": "Nuestra Linaje – Árbol Genealógico",
    "saopaulo.linaje.sub": "La raíz de nuestra capoeira: Mestre Bimba → Mestre Joel → Mestre Cobrinha → Contramestre Cabelo Pé de Serra.",
    "saopaulo.matriz.titulo": "La Matriz en São Paulo",
    "saopaulo.matriz.p1": "Desde São Paulo se desarrolla y fortalece nuestra línea, manteniendo viva la esencia dejada por nuestros mestres y proyectándonos hacia el futuro de la capoeira en el mundo.",
    "saopaulo.matriz.p2": "Este espacio es un punto de encuentro, aprendizaje y formación, donde tradición y modernidad conviven en armonía.",
    "saopaulo.joel.titulo": "Mestre Joel",
    "saopaulo.joel.p1": "Nacido el 28 de febrero de 1944 en Santo Amaro, Brasil, Mestre Joel creció en Feira de Santana y se inició en la capoeira bajo la guía de Mestre Arara, discípulo directo de Mestre Bimba. Desde sus primeros años como practicante, se distinguió por su compromiso con las raíces y tradiciones de este arte. Durante la década de 1960 comenzó a viajar con frecuencia a São Paulo, donde fue figura clave en la fundación y expansión de varios grupos de capoeira. En 1972, Mestre Bimba lo reconoció oficialmente como mestre.",
    "saopaulo.joel.p2": "Fundó también la Associação de Capoeira Ilha de Itapuã, consolidando así su legado como formador y organizador.",
    "saopaulo.joel.p3": "Su influencia trascendió Bahía y dejó una huella imborrable en la capoeira paulista. Es recordado como uno de los primeros mestres en grabar música de capoeira, preservando para las generaciones futuras las canciones y tradiciones que dan vida a este arte marcial.",
    "saopaulo.cobrinha.titulo": "Mestre Cobrinha",
    "saopaulo.cobrinha.p1": "Mestre Cobrinha, hijo de Mestre Joel, referente de la capoeira en São Paulo y la roda de la Plaza de la República.",
    "saopaulo.cabelo.titulo": "Contramestre Cabelo Pé de Serra",
    "saopaulo.cabelo.p1": "Contramestre Cabelo es uno de los principales responsables de la preservación, enseñanza y expansión de nuestra línea. Supervisa y acompaña los grupos fuera de Brasil, garantizando que nuestra esencia permanezca firme y auténtica.",
    "saopaulo.graduaciones.titulo": "Graduaciones – Organização Onça",
    "saopaulo.graduaciones.sub": "Cada graduación simboliza el crecimiento espiritual, técnico y cultural de nuestros alumnos. Una tradición que celebramos con alegría, respeto y unión.",
    "saopaulo.grad.ninos": "Graduación – Niños",
    "saopaulo.grad.adultos": "Graduación – Adultos",

    "clases.hero.titulo": "Clases de Capoeira",
    "clases.hero.sub": "Entrena con nosotros y vive una experiencia cultural, musical y deportiva. Tenemos clases durante toda la semana en distintos puntos de Santiago.",
    "clases.lugares.titulo": "📍 Lugares de Entrenamiento",
    "clases.rojas.titulo": "Centro Cultural Rojas Magallanes",
    "clases.rojas.domingo": "Domingo:",
    "clases.rojas.ninos": "Niños: 10:00 – 11:00",
    "clases.rojas.adultos": "Adultos: 11:00 – 12:30",
    "clases.rojas.precio": "Precio mensual:",
    "clases.rojas.precio.val": "1 clase a la semana:",
    "clases.semana.titulo": "Clases en la semana",
    "clases.junta.titulo": 'Junta de Vecinos "Villa Lomas de Macul" unidad n°18',
    "clases.junta.dias": "Lunes y viernes:",
    "clases.junta.horario": "Horario: 19:30 - 21:30",
    "clases.junta.precio": "Precio por Clase:",
    "clases.junta.gratis": "Niños y adultos mayores: Gratis",
    "clases.junta.general": "Público General: $2.000",
    "clases.semana.desc": "Próximamente",
    "clases.airlibre.titulo": "Clases al aire libre",
    "clases.airlibre.desc": "Próximamente",
    "clases.contacto.titulo": "¿Quieres entrenar con nosotros?",
    "clases.contacto.sub": "Escríbenos directamente o síguenos para más información.",
    "clases.calendar.prev": "◀ Mes anterior",
    "clases.calendar.next": "Mes siguiente ▶",
    "clases.legend.clases": "Entrenamientos",
    "clases.legend.parque": "Actividad al aire libre",
    "clases.legend.evento": "Evento especial",

    "footer.copy": "Organização Onça © 2026",
     "footer.instagram": "Instagram",
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

    "galeria.hero.titulo": "Galeria",
    "galeria.hero.sub": "Nossa história em imagens.",
    "galeria.momentos.titulo": "Nossos Momentos",
    "galeria.2025.desc": "Fotos de rodas, treinos e eventos de 2025. Venha reviver nossos momentos.",
    "galeria.2026.desc": "Fotos de rodas, treinos e eventos de 2026. Continuamos construindo história.",

    "saopaulo.hero.titulo": "São Paulo – Raiz da Organização Onça",
    "saopaulo.hero.sub": "O coração do grupo, onde tradição, música e movimento se encontram.",
    "saopaulo.origenes.titulo": "Nossas Origens",
    "saopaulo.origenes.p1": "A Organização Onça nasce a partir de uma das raízes mais tradicionais da Capoeira Regional em Salvador, Bahia. Provenimos diretamente da linha do Mestre Bimba, criador da Capoeira Regional e responsável por transformar a arte em um método, disciplina e identidade cultural.",
    "saopaulo.origenes.p2": "A história continua com Mestre Joel, discípulo do Mestre Bimba, que difundiu essa essência em Itapuã e formou o Mestre Cobrinha, consolidando a linha Onça que hoje preservamos e expandimos.",
    "saopaulo.linaje.titulo": "Nossa Linhagem – Árvore Genealógica",
    "saopaulo.linaje.sub": "A raiz da nossa capoeira: Mestre Bimba → Mestre Joel → Mestre Cobrinha → Contramestre Cabelo Pé de Serra.",
    "saopaulo.matriz.titulo": "A Matriz em São Paulo",
    "saopaulo.matriz.p1": "De São Paulo se desenvolve e fortalece nossa linha, mantendo viva a essência deixada pelos nossos mestres e projetando-nos para o futuro da capoeira no mundo.",
    "saopaulo.matriz.p2": "Este espaço é um ponto de encontro, aprendizado e formação, onde tradição e modernidade convivem em harmonia.",
    "saopaulo.joel.titulo": "Mestre Joel",
    "saopaulo.joel.p1": "Nascido em 28 de fevereiro de 1944 em Santo Amaro, Brasil, Mestre Joel cresceu em Feira de Santana e iniciou-se na capoeira sob a orientação do Mestre Arara, discípulo direto do Mestre Bimba. Desde seus primeiros anos como praticante, destacou-se pelo compromisso com as raízes e tradições desta arte. Durante a década de 1960, começou a viajar com frequência para São Paulo, onde foi figura-chave na fundação e expansão de vários grupos de capoeira. Em 1972, o Mestre Bimba o reconheceu oficialmente como mestre.",
    "saopaulo.joel.p2": "Fundou também a Associação de Capoeira Ilha de Itapuã, consolidando assim seu legado como formador e organizador.",
    "saopaulo.joel.p3": "Sua influência transcendeu a Bahia e deixou uma marca indelével na capoeira paulista. É lembrado como um dos primeiros mestres a gravar música de capoeira, preservando para as gerações futuras as canções e tradições que dão vida a esta arte marcial.",
    "saopaulo.cobrinha.titulo": "Mestre Cobrinha",
    "saopaulo.cobrinha.p1": "Mestre Cobrinha, filho do Mestre Joel, referência da capoeira em São Paulo e da roda da Praça da República.",
    "saopaulo.cabelo.titulo": "Contramestre Cabelo Pé de Serra",
    "saopaulo.cabelo.p1": "O Contramestre Cabelo é um dos principais responsáveis pela preservação, ensino e expansão da nossa linha. Supervisiona e acompanha os grupos fora do Brasil, garantindo que nossa essência permaneça firme e autêntica.",
    "saopaulo.graduaciones.titulo": "Graduações – Organização Onça",
    "saopaulo.graduaciones.sub": "Cada graduação simboliza o crescimento espiritual, técnico e cultural dos nossos alunos. Uma tradição que celebramos com alegria, respeito e união.",
    "saopaulo.grad.ninos": "Graduação – Crianças",
    "saopaulo.grad.adultos": "Graduação – Adultos",

    "clases.hero.titulo": "Aulas de Capoeira",
    "clases.hero.sub": "Treine conosco e viva uma experiência cultural, musical e esportiva. Temos aulas durante toda a semana em diferentes pontos de Santiago.",
    "clases.lugares.titulo": "📍 Locais de Treino",
    "clases.rojas.titulo": "Centro Cultural Rojas Magallanes",
    "clases.rojas.domingo": "Domingo:",
    "clases.rojas.ninos": "Crianças: 10:00 – 11:00",
    "clases.rojas.adultos": "Adultos: 11:00 – 12:30",
    "clases.rojas.precio": "Preço mensal:",
    "clases.rojas.precio.val": "1 aula por semana:",
    "clases.semana.titulo": "Aulas na semana",
    "clases.junta.titulo": 'Junta de Vizinhos "Villa Lomas de Macul" unidade n°18',
    "clases.junta.dias": "Segundas e sextas:",
    "clases.junta.horario": "Horário: 19:30 - 21:30",
    "clases.junta.precio": "Preço por Aula:",
    "clases.junta.gratis": "Crianças e idosos: Grátis",
    "clases.junta.general": "Público Geral: $2.000",
    "clases.semana.desc": "Em breve",
    "clases.airlibre.titulo": "Aulas ao ar livre",
    "clases.airlibre.desc": "Em breve",
    "clases.contacto.titulo": "Quer treinar conosco?",
    "clases.contacto.sub": "Escreva-nos diretamente ou siga-nos para mais informações.",
    "clases.calendar.prev": "◀ Mês anterior",
    "clases.calendar.next": "Próximo mês ▶",
    "clases.legend.clases": "Treinos",
    "clases.legend.parque": "Atividade ao ar livre",
    "clases.legend.evento": "Evento especial",

    "footer.copy": "Organização Onça © 2026",
    "footer.instagram": "Instagram",
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
