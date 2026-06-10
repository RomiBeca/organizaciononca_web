// =============================================
// CLASES QUE SE REPITEN CADA SEMANA
// 0=Dom 1=Lun 2=Mar 3=Mié 4=Jue 5=Vie 6=Sáb
// =============================================
const clasesSemanales = {
  0: {
    color: "bg-warning",
    key: "clases.rojas", // Referencia a las claves i18n
    type: "rojas"
  },
  1: {
    color: "bg-warning",
    key: "clases.junta",
    type: "junta"
  },
  5: {
    color: "bg-warning",
    key: "clases.junta",
    type: "junta"
  },
};

// =============================================
// ESTRUCTURA DETALLADA DE CLASES (para modal)
// =============================================
const clasesDetalle = {
  rojas: {
    nombreKey: "clases.rojas.titulo",
    diasKey: "clases.rojas.domingo",
    horariosKeys: [
      "clases.rojas.ninos",
      "clases.rojas.adultos"
    ],
    preciosKeys: [
      "clases.rojas.precio.val"
    ],
    preciosValores: ["$25.000"],
    ubicacion: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.723567843041!2d-70.59330962450666!3d-33.534572073356465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d0ee6a4ed651%3A0xdc686a5dbe86ba5!2sCentro%20Cultural%20Rojas%20Magallanes!5e0!3m2!1ses-419!2scl!4v1781116092634!5m2!1ses-419!2scl"
  },
  junta: {
    nombreKey: "clases.junta.titulo",
    diasKey: "clases.junta.dias",
    horariosKeys: [
      "clases.junta.horario"
    ],
    preciosKeys: [
      "clases.junta.gratis",
      "clases.junta.general"
    ],
    preciosValores: ["", ""],
    ubicacion: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5594.999796233695!2d-70.60110354382047!3d-33.506403799365415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d17c369666eb%3A0x2068b0240f7f0dd!2sUnidad%20Vecinal%20N%C2%B018%2C%20Macul!5e0!3m2!1ses-419!2scl!4v1781116003416!5m2!1ses-419!2scl"
  }
};

// =============================================
// DÍAS DE ACTIVIDAD EN PARQUE (por fecha)
// =============================================
const diasParque = {};

// =============================================
// EVENTOS ESPECIALES (por fecha exacta)
// =============================================
const eventosEspeciales = {
  2026: {
    0: [
      { dia: 27, nombre: "Intensivo 2026 batizado y troca", comentario: "Intensivo 2026 batizado y troca Capoeira Raza y Oncas" },
      { dia: 28, nombre: "Intensivo 2026 batizado y troca", comentario: "Intensivo 2026 batizado y troca Capoeira Raza y Oncas" },
      { dia: 29, nombre: "Intensivo 2026 batizado y troca", comentario: "Intensivo 2026 batizado y troca Capoeira Raza y Oncas" },
      { dia: 30, nombre: "Intensivo 2026 batizado y troca", comentario: "Intensivo 2026 batizado y troca Capoeira Raza y Oncas" },
      { dia: 31, nombre: "Intensivo 2026 batizado y troca", comentario: "Intensivo 2026 batizado y troca Capoeira Raza y Oncas" },
    ],
    1: [
      { dia: 1, nombre: "Intensivo 2026 batizado y troca", comentario: "Intensivo 2026 batizado y troca Capoeira Raza y Oncas" },
    ],
    5: [
      { dia: 5,  color: "bg-warning", nombre: "Inicio de clases — Junta Vecinal Villa Lomas de Macul", comentario: "Inicio de clases en Junta vecinal 'villa lomas de Macul, unidad n°18'" },
      { dia: 12, color: "bg-warning", nombre: "Roda de Inauguración", comentario: "Roda de inauguracion nuevo espacio de clases" },
    ],
  },
};

// =============================================
// FERIADOS OFICIALES EN CHILE
// =============================================
const feriadosChile = {
  2025: {
    11: [
      { dia: 8, nombre: "Inmaculada Concepción" },
      { dia: 25, nombre: "Navidad" },
    ],
  },
  2026: {
    0:  [{ dia: 1,  nombre: "Año Nuevo" }],
    2:  [{ dia: 29, nombre: "Viernes Santo" }, { dia: 30, nombre: "Sábado Santo" }],
    4:  [{ dia: 1,  nombre: "Día del Trabajo" }, { dia: 21, nombre: "Glorias Navales" }],
    5:  [{ dia: 29, nombre: "San Pedro y San Pablo" }],
    6:  [{ dia: 16, nombre: "Virgen del Carmen" }],
    7:  [{ dia: 15, nombre: "Asunción de la Virgen" }],
    8:  [{ dia: 18, nombre: "Independencia" }, { dia: 19, nombre: "Glorias del Ejército" }],
    9:  [{ dia: 12, nombre: "Encuentro de dos mundos" }, { dia: 31, nombre: "Iglesias Evangélicas y Protestantes" }],
    10: [{ dia: 1,  nombre: "Todos los Santos" }],
    11: [{ dia: 8,  nombre: "Inmaculada Concepción" }, { dia: 25, nombre: "Navidad" }],
  },
};

// =============================================
// VARIABLES DEL CALENDARIO
// =============================================
let fechaActual = new Date();

const calendarTitle = document.getElementById("calendarTitle");
const calendarBody  = document.getElementById("calendarBody");
const prevBtn       = document.getElementById("prevMonth");
const nextBtn       = document.getElementById("nextMonth");

const mesesES = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const mesesPT = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

function getMeses() {
  return (localStorage.getItem("onca-lang") || "es") === "pt" ? mesesPT : mesesES;
}

// =============================================
// MOSTRAR MODAL CON DETALLE DEL DÍA (ACTUALIZADO)
// =============================================
function mostrarDetalle(dia, month, data) {
  const lang = localStorage.getItem("onca-lang") || "es";
  
  // Título: Mes + Día
  document.getElementById("diaModal-titulo").textContent = `${getMeses()[month]} ${dia}`;

  // Si es un evento especial (tipo string simple)
  if (data.type === "evento") {
    document.querySelector("#diaModal-lugar span").textContent = data.nombre || "";
    document.querySelector("#diaModal-horario span").textContent = data.comentario || "";
    document.getElementById("diaModal-precio").style.display = "none";
    document.getElementById("diaModal-mapa").style.display = "none";
  } else {
    // Es una clase (rojas o junta)
    const detalle = clasesDetalle[data.type];
    
    if (!detalle) {
      console.warn("Detalle de clase no encontrado:", data.type);
      return;
    }

    // Nombre del lugar
    document.querySelector("#diaModal-lugar span").textContent = window.uiT(detalle.nombreKey);
    
    // Días
    document.querySelector("#diaModal-dias span").textContent = window.uiT(detalle.diasKey);
    
    // Horarios (múltiples)
    const horariosContainer = document.querySelector("#diaModal-horarios ul");
    horariosContainer.innerHTML = "";
    
    if (detalle.horariosKeys && detalle.horariosKeys.length > 0) {
      detalle.horariosKeys.forEach(key => {
        const li = document.createElement("li");
        li.textContent = window.uiT(key);
        horariosContainer.appendChild(li);
      });
      document.getElementById("diaModal-horarios").style.display = "";
    } else {
      document.getElementById("diaModal-horarios").style.display = "none";
    }
    
    // Precios (múltiples)
    const preciosContainer = document.querySelector("#diaModal-precios ul");
    preciosContainer.innerHTML = "";
    
    if (detalle.preciosKeys && detalle.preciosKeys.length > 0) {
      detalle.preciosKeys.forEach((key, index) => {
        const li = document.createElement("li");
        const texto = window.uiT(key);
        const valor = detalle.preciosValores[index];
        li.innerHTML = valor ? `${texto} <strong class="text-success">${valor}</strong>` : `<strong class="text-success">${texto}</strong>`;
        preciosContainer.appendChild(li);
      });
      document.getElementById("diaModal-precios").style.display = "";
    } else {
      document.getElementById("diaModal-precios").style.display = "none";
    }
    
    // Mapa
    const mapaContainer = document.getElementById("diaModal-mapa");
    if (detalle.ubicacion) {
      mapaContainer.innerHTML = `<iframe src="${detalle.ubicacion}" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      mapaContainer.style.display = "";
    } else {
      mapaContainer.style.display = "none";
    }
  }

  bootstrap.Modal.getOrCreateInstance(document.getElementById("diaModal")).show();
}

// =============================================
// GENERA EL CALENDARIO
// =============================================
function generarCalendario() {
  const year  = fechaActual.getFullYear();
  const month = fechaActual.getMonth();

  calendarTitle.textContent = `${getMeses()[month]} ${year}`;

  const primerDia = new Date(year, month, 1).getDay();
  const ultimoDia = new Date(year, month + 1, 0).getDate();
  const inicio    = primerDia === 0 ? 6 : primerDia - 1;

  calendarBody.innerHTML = "";
  let fila = document.createElement("tr");

  for (let i = 0; i < inicio; i++) fila.appendChild(document.createElement("td"));

  for (let dia = 1; dia <= ultimoDia; dia++) {
    const celda     = document.createElement("td");
    celda.textContent = dia;
    celda.classList.add("text-dark");

    const diaSemana = new Date(year, month, dia).getDay();
    let eventoData  = null;

    // 1. Feriados (rojo)
    const feriado = feriadosChile[year]?.[month]?.find(f => f.dia === dia);
    if (feriado) {
      celda.classList.remove("text-dark");
      celda.classList.add("text-feriado");
      celda.title = feriado.nombre;
    }

    // 2. Eventos especiales (naranjo)
    const evento = eventosEspeciales[year]?.[month]?.find(e => e.dia === dia);
    if (evento) {
      celda.classList.add(evento.color || "bg-evento");
      eventoData = { nombre: evento.nombre, comentario: evento.comentario, type: "evento" };
      celda.title = evento.nombre;
    }

    // 3. Clases semanales (amarillo) — solo si no hay evento especial ni feriado
    if (clasesSemanales[diaSemana] && !feriado && !evento) {
      const cls = clasesSemanales[diaSemana];
      celda.classList.add(cls.color, "text-dark");
      eventoData = { type: cls.type }; // Solo pasamos el tipo, todo lo demás viene de clasesDetalle
      celda.title = window.uiT(cls.key + ".titulo");
    }

    // 4. Parque
    if (diasParque[year]?.[month]?.includes(dia)) {
      eventoData = { nombre: "Actividad en Parque", horario: "", type: "evento" };
      celda.title = "Actividad en Parque";
    }

    // Click solo en días con evento (no feriados solos)
    if (eventoData && !feriado) {
      celda.classList.add("cal-clickable");
      celda.addEventListener("click", () => mostrarDetalle(dia, month, eventoData));
    }

    fila.appendChild(celda);

    if ((inicio + dia) % 7 === 0) {
      calendarBody.appendChild(fila);
      fila = document.createElement("tr");
    }
  }

  calendarBody.appendChild(fila);
}

// =============================================
// BOTONES MES
// =============================================
prevBtn.addEventListener("click", () => {
  fechaActual.setMonth(fechaActual.getMonth() - 1);
  generarCalendario();
});
nextBtn.addEventListener("click", () => {
  fechaActual.setMonth(fechaActual.getMonth() + 1);
  generarCalendario();
});

// =============================================
// CONTACTO
// =============================================
const instagramOncas   = "organizacaooncaschile";
const telefonoContacto = "+56963711123";
const mensaje          = "Hola! Quiero información sobre clases de capoeira";

const instagramLink = document.getElementById("instagramLink");
const instagramUser = document.getElementById("instagramUser");

instagramLink.href          = `https://instagram.com/${instagramOncas}`;
instagramUser.textContent   = `@${instagramOncas}`;

document.getElementById("btnWhatsApp").addEventListener("click", () => {
  window.open(
    `https://wa.me/${telefonoContacto}?text=${encodeURIComponent(mensaje)}`,
    "_blank"
  );
});

// Inicializar
generarCalendario();