// =============================================
// CLASES QUE SE REPITEN CADA SEMANA
// 0=Dom 1=Lun 2=Mar 3=Mié 4=Jue 5=Vie 6=Sáb
// =============================================
const clasesSemanales = {
  0: {
    color: "bg-warning",
    nombre: "Centro Cultural Rojas Magallanes",
    horario: "Niños: 10:00 – 11:00 · Adultos: 11:00 – 12:30",
    precio: "1 clase/semana: $25.000 mensual",
  },
  1: {
    color: "bg-warning",
    nombre: 'Junta de Vecinos "Villa Lomas de Macul" unidad n°18',
    horario: "19:30 – 21:30",
    precio: "Niños y adultos mayores: Gratis · Público general: $2.000/clase",
  },
  5: {
    color: "bg-warning",
    nombre: 'Junta de Vecinos "Villa Lomas de Macul" unidad n°18',
    horario: "19:30 – 21:30",
    precio: "Niños y adultos mayores: Gratis · Público general: $2.000/clase",
  },
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
// MOSTRAR MODAL CON DETALLE DEL DÍA
// =============================================
function mostrarDetalle(dia, month, data) {
  document.getElementById("diaModal-titulo").textContent =
    getMeses()[month] + " " + dia;
  document.querySelector("#diaModal-lugar span").textContent =
    data.nombre || "";
  document.querySelector("#diaModal-horario span").textContent =
    data.horario || data.comentario || "";

  const precioRow = document.getElementById("diaModal-precio");
  if (data.precio) {
    precioRow.querySelector("span").textContent = data.precio;
    precioRow.style.display = "";
  } else {
    precioRow.style.display = "none";
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
      eventoData = { nombre: evento.nombre, horario: evento.comentario };
      celda.title = evento.nombre;
    }

    // 3. Clases semanales (amarillo) — solo si no hay evento especial ni feriado
    if (clasesSemanales[diaSemana] && !feriado && !evento) {
      const cls = clasesSemanales[diaSemana];
      celda.classList.add(cls.color, "text-dark");
      eventoData = cls;
      celda.title = cls.nombre;
    }

    // 4. Parque
    if (diasParque[year]?.[month]?.includes(dia)) {
      eventoData = { nombre: "Actividad en Parque", horario: "" };
      celda.title = "Actividad en Parque";
    }

    // Click solo en días con evento (no feriados solos)
    if (eventoData && !feriado) {
      const snap = { ...eventoData, _dia: dia, _month: month };
      celda.classList.add("cal-clickable");
      celda.addEventListener("click", () => mostrarDetalle(snap._dia, snap._month, snap));
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
