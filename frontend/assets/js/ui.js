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
    "clases.junta.gratis-label": "Niños y adultos mayores:",
    "clases.junta.gratis-val": "Gratis",
    "clases.junta.general-label": "Público General:",
    "clases.junta.general-val": "$2.000",
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
  en: {
    "nav.nosotros": "About Us",
    "nav.galeria": "Gallery",
    "nav.noticias": "News",
    "nav.saopaulo": "São Paulo",
    "nav.clases": "Classes & Schedule",

    "home.hero.titulo": "Capoeira: Movement, Culture and Freedom",
    "home.hero.sub": "Come Jogar with us",

    "home.noticias.titulo": "News",
    "home.noticias.badge": "New",
    "home.noticias.btn": "View all news",

    "home.quees.titulo": "What is Capoeira?",
    "home.quees.p1":
      "Capoeira is an Afro-Brazilian cultural expression that combines martial arts, music, dance and acrobatics in a single practice. Its origins date back to the 16th century, when enslaved Africans in Brazil developed this form of combat as a method of resistance and self-defense, disguising it within rhythmic movements to avoid repression.",
    "home.quees.p2":
      "Over time, capoeira evolved from a persecuted practice to become a cultural symbol of Brazil and an intangible heritage recognized in 2014 by UNESCO worldwide.",
    "home.quees.p3":
      "Today, capoeira is practiced all over the world, not only as a physical activity, but also as a tool for integral development. It fosters discipline, coordination, body expression and community work, keeping alive a tradition that connects history, culture and movement.",
    "home.quees.onca": "Capoeira Organização Onças in Chile",
    "home.quees.btn": "Learn more about us",

    "home.explora.titulo": "Explore more",
    "home.explora.clases.titulo": "Classes and contacts",
    "home.explora.clases.desc": "Schedules and places where we train in Chile.",
    "home.explora.galeria.titulo": "Gallery",
    "home.explora.galeria.desc": "Photos of rodas, trainings and events.",
    "home.explora.sao.desc": "Our connection with Brazil and the roots of the group.",

    "nosotros.hero.titulo": "Who We Are",
    "nosotros.hero.sub":
      "A family that grows through movement, music and Afro-Brazilian tradition.",
    "nosotros.historia.titulo": "Organização Onça (Chile)",
    "nosotros.historia.p1":
      "Organização Onça - Chile was founded in 2025, under the supervision of Contramestre Cabelo Pé de Serra. Since then, we have grown as a community, sharing the passion for capoeira.",
    "nosotros.historia.p2":
      "With a long history of rodas, workshops and events, we have established ourselves as a space for meeting, learning and celebrating Afro-Brazilian culture in Santiago, Chile. Being part of the history of capoeira in Chile, we continue building our path, looking toward the future with hearts full of joy and commitment to this extraordinary martial art.",
    "nosotros.filosofia.titulo": "Our Philosophy",
    "nosotros.filosofia.p1":
      "At Organização Onça we believe in Capoeira as a transformative tool that promotes respect, discipline and creativity. Our philosophy is based on the values of community, inclusion and continuous learning, fostering an environment where each individual can grow both physically and spiritually through the practice of Capoeira.",
    "nosotros.filosofia.p2":
      "We strive to keep capoeira and all its branches alive, such as maculelê, samba de roda and other expressions of Afro-Brazilian culture, promoting diversity and cultural exchange within our community.",
    "nosotros.equipo.titulo": "Our Team",
    "nosotros.camilo.titulo": "Professor Camilo Donoso",
    "nosotros.camilo.cv":
      "Professor Grau 2° Camilo Donoso began capoeira at the young age of 7 around 2000 in a community capoeira workshop alongside his brother, and from that moment this discipline became part of his life. With more than 20 years of experience in Capoeira, he was initially part of the Sul da Bahia group founded by Mestre Zequinha, with whom he maintains an excellent relationship to this day.",
    "nosotros.felipe.titulo": "Professor Felipe Donoso",
    "nosotros.felipe.cv":
      "Professor Grau 2° Felipe Donoso has more than 20 years of experience in Capoeira. He began as a child in the 2000s alongside his brother Camilo, sharing the capoeira path since childhood. He trained under the guidance of Mestre Zequinha, from the Sul da Bahia group, with whom he maintains an excellent relationship to this day.",

    "noticias.hero.titulo": "News & Events",
    "noticias.hero.sub": "What's happening at Organização Onça",
    "noticias.cargando": "Loading news…",
    "noticias.vacia": "No news published at this time.",
    "noticias.error": "Could not load news.",
    "noticias.error.sub":
      "Make sure to open the site from a server (e.g.: Live Server in VS Code).",
    "noticias.ver": "View poster",

    "galeria.hero.titulo": "Gallery",
    "galeria.hero.sub": "Our history in images.",
    "galeria.momentos.titulo": "Our Moments",
    "galeria.2025.desc": "Photos of rodas, trainings and events from 2025. Come and relive our moments.",
    "galeria.2026.desc": "Photos of rodas, trainings and events from 2026. We keep building history.",

    "saopaulo.hero.titulo": "São Paulo – Root of Organização Onça",
    "saopaulo.hero.sub": "The heart of the group, where tradition, music and movement meet.",
    "saopaulo.origenes.titulo": "Our Origins",
    "saopaulo.origenes.p1": "Organização Onça springs from one of the most traditional roots of Capoeira Regional in Salvador, Bahia. We come directly from the lineage of Mestre Bimba, creator of Capoeira Regional and responsible for transforming the art into a method, discipline and cultural identity.",
    "saopaulo.origenes.p2": "The story continues with Mestre Joel, a disciple of Mestre Bimba, who spread this essence in Itapuã and trained Mestre Cobrinha, consolidating the Onça line that we preserve and expand today.",
    "saopaulo.linaje.titulo": "Our Lineage – Family Tree",
    "saopaulo.linaje.sub": "The root of our capoeira: Mestre Bimba → Mestre Joel → Mestre Cobrinha → Contramestre Cabelo Pé de Serra.",
    "saopaulo.matriz.titulo": "The Home Base in São Paulo",
    "saopaulo.matriz.p1": "From São Paulo our line develops and strengthens, keeping alive the essence left by our mestres and projecting us toward the future of capoeira in the world.",
    "saopaulo.matriz.p2": "This space is a meeting point, learning and training center, where tradition and modernity coexist in harmony.",
    "saopaulo.joel.titulo": "Mestre Joel",
    "saopaulo.joel.p1": "Born on February 28, 1944 in Santo Amaro, Brazil, Mestre Joel grew up in Feira de Santana and began capoeira under the guidance of Mestre Arara, a direct disciple of Mestre Bimba. From his earliest years as a practitioner, he distinguished himself by his commitment to the roots and traditions of this art. During the 1960s he began traveling frequently to São Paulo, where he was a key figure in the founding and expansion of several capoeira groups. In 1972, Mestre Bimba officially recognized him as a mestre.",
    "saopaulo.joel.p2": "He also founded the Associação de Capoeira Ilha de Itapuã, consolidating his legacy as a trainer and organizer.",
    "saopaulo.joel.p3": "His influence transcended Bahia and left an indelible mark on São Paulo capoeira. He is remembered as one of the first mestres to record capoeira music, preserving for future generations the songs and traditions that give life to this martial art.",
    "saopaulo.cobrinha.titulo": "Mestre Cobrinha",
    "saopaulo.cobrinha.p1": "Mestre Cobrinha, son of Mestre Joel, a reference for capoeira in São Paulo and the roda at República Square.",
    "saopaulo.cabelo.titulo": "Contramestre Cabelo Pé de Serra",
    "saopaulo.cabelo.p1": "Contramestre Cabelo is one of the main people responsible for the preservation, teaching and expansion of our line. He supervises and accompanies the groups outside Brazil, ensuring that our essence remains firm and authentic.",
    "saopaulo.graduaciones.titulo": "Graduations – Organização Onça",
    "saopaulo.graduaciones.sub": "Each graduation symbolizes the spiritual, technical and cultural growth of our students. A tradition we celebrate with joy, respect and unity.",
    "saopaulo.grad.ninos": "Graduation – Children",
    "saopaulo.grad.adultos": "Graduation – Adults",

    "clases.hero.titulo": "Capoeira Classes",
    "clases.hero.sub": "Train with us and live a cultural, musical and sports experience. We have classes throughout the week at different points in Santiago.",
    "clases.lugares.titulo": "📍 Training Locations",
    "clases.rojas.titulo": "Centro Cultural Rojas Magallanes",
    "clases.rojas.domingo": "Sunday:",
    "clases.rojas.ninos": "Children: 10:00 – 11:00",
    "clases.rojas.adultos": "Adults: 11:00 – 12:30",
    "clases.rojas.precio": "Monthly price:",
    "clases.rojas.precio.val": "1 class per week:",
    "clases.semana.titulo": "Weekday classes",
    "clases.junta.titulo": '"Villa Lomas de Macul" Neighborhood Association unit n°18',
    "clases.junta.dias": "Mondays and Fridays:",
    "clases.junta.horario": "Schedule: 19:30 - 21:30",
    "clases.junta.precio": "Price per Class:",
    "clases.junta.gratis": "Children and seniors: Free",
    "clases.junta.general": "General Public: $2.000",
    "clases.junta.gratis-label": "Children and seniors:",
    "clases.junta.gratis-val": "Free",
    "clases.junta.general-label": "General Public:",
    "clases.junta.general-val": "$2.000",
    "clases.semana.desc": "Coming soon",
    "clases.airlibre.titulo": "Outdoor classes",
    "clases.airlibre.desc": "Coming soon",
    "clases.contacto.titulo": "Want to train with us?",
    "clases.contacto.sub": "Write to us directly or follow us for more information.",
    "clases.calendar.prev": "◀ Previous month",
    "clases.calendar.next": "Next month ▶",
    "clases.legend.clases": "Trainings",
    "clases.legend.parque": "Outdoor activity",
    "clases.legend.evento": "Special event",

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
    "clases.junta.gratis-label": "Crianças e idosos:",
    "clases.junta.gratis-val": "Grátis",
    "clases.junta.general-label": "Público Geral:",
    "clases.junta.general-val": "$2.000",
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
  document.documentElement.lang = lang === "pt" ? "pt-BR" : lang === "en" ? "en" : "es";
  _updateLangButtons(lang);
}

function _updateLangButtons(lang) {
  const sel = document.getElementById("lang-select");
  if (sel) sel.value = lang;
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
