// =============================================
// CONFIGURACIÓN DE CLASES SEMANALES (se repiten cada semana)
// =============================================
// 0 = Domingo, 1=Lunes, 2= Martes, 3= Miercoles 4=Jueves,5= Viernes 6=Sábado

const clasesSemanales = {
  // Miércoles (3) y Viernes (5)
  /* 3: {
    color: "bg-warning",
    comentario: "Clases en Yungay (miércoles y viernes)",
  },
  5: {
    color: "bg-warning",
    comentario: "Clases en Yungay (miércoles y viernes)",
  },*/

  // Domingo (0)
  0: {
    color: "bg-warning",
    comentario: "Clases Rojas Magallanes (domingo)",
  },
};

// =============================================
// DÍAS DE ACTIVIDAD EN PARQUE (por fecha)
// =============================================

const diasParque = {
  // Próximamente
};

// =============================================
// EVENTOS ESPECIALES (por fecha exacta)
// =============================================

const eventosEspeciales = {
  2026: {
    0: [
      {
        dia: 27,
        nombre: "Intensivo 2026 batizado y troca",
        comentario: "Intensivo 2026 batizado y troca Capoeira Raza y Oncas",
      },
      {
        dia: 28,
        nombre: "Intensivo 2026 batizado y troca",
        comentario: "Intensivo 2026 batizado y troca Capoeira Raza y Oncas",
      },
      {
        dia: 29,
        nombre: "Intensivo 2026 batizado y troca",
        comentario: "Intensivo 2026 batizado y troca Capoeira Raza y Oncas",
      },
      {
        dia: 30,
        nombre: "Intensivo 2026 batizado y troca",
        comentario: "Intensivo 2026 batizado y troca Capoeira Raza y Oncas",
      },
      {
        dia: 31,
        nombre: "Intensivo 2026 batizado y troca",
        comentario: "Intensivo 2026 batizado y troca Capoeira Raza y Oncas",
      },
    ],
    1: [
      {
        dia: 1,
        nombre: "Intensivo 2026 batizado y troca",
        comentario: "Intensivo 2026 batizado y troca Capoeira Raza y Oncas",
      },
    ],
    5: [
      {
        dia: 5,
        color: "bg-warning",
        nombre: "Inicio de clases en Junta vecinal 'villa lomas de Macul, unidad n°18'",
        comentario: "Inicio de clases en Junta vecinal 'villa lomas de Macul, unidad n°18'",
      },
      {
        dia: 12,
        color: "bg-warning",
        nombre: "Roda de inauguracion Junta vecinal villa lomas de Macul, unidad n°18",
        comentario: "Roda de inauguracion nuevo espacio de clases",
      },
    ],
  },
};

// =============================================
// FERIADOS OFICIALES EN CHILE (POR FECHA)
// =============================================

const feriadosChile = {
  2025: {
    11: [
      // Diciembre
      { dia: 8, nombre: "Inmaculada Concepción" },
      { dia: 25, nombre: "Navidad" },
    ],
  },
  2026: {
    0: [
      // Enero
      { dia: 1, nombre: "Año Nuevo" },
    ],
    2: [
      // Marzo
      { dia: 29, nombre: "Viernes Santo" },
      { dia: 30, nombre: "Sábado Santo" },
    ],
    4: [
      // Mayo
      { dia: 1, nombre: "Día del Trabajo" },
      { dia: 21, nombre: "Glorias Navales" },
    ],
    5: [
      // Junio
      { dia: 29, nombre: "San Pedro y San Pablo" },
    ],
    6: [
      // Julio
      { dia: 16, nombre: "Virgen del Carmen" },
    ],
    7: [
      // Agosto
      { dia: 15, nombre: "Asunción de la Virgen" },
    ],
    8: [
      // Septiembre
      { dia: 18, nombre: "Independencia" },
      { dia: 19, nombre: "Glorias del Ejército" },
    ],
    9: [
      // Octubre
      { dia: 12, nombre: "Encuentro de dos mundos" },
      { dia: 31, nombre: "Iglesias Evangélicas y Protestantes" },
    ],
    10: [
      // Noviembre
      { dia: 1, nombre: "Todos los Santos" },
    ],
    11: [
      // Diciembre
      { dia: 8, nombre: "Inmaculada Concepción" },
      { dia: 25, nombre: "Navidad" },
    ],
  },
};

// =============================================
// VARIABLES DEL CALENDARIO
// =============================================

let fechaActual = new Date();

const calendarTitle = document.getElementById("calendarTitle");
const calendarBody = document.getElementById("calendarBody");
const prevBtn = document.getElementById("prevMonth");
const nextBtn = document.getElementById("nextMonth");

const mesesES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];
const mesesPT = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

function getMeses() {
  return (localStorage.getItem("onca-lang") || "es") === "pt" ? mesesPT : mesesES;
}

// =============================================
// FUNCIÓN PRINCIPAL — GENERA EL CALENDARIO
// =============================================

function generarCalendario() {
  const year = fechaActual.getFullYear();
  const month = fechaActual.getMonth();

  calendarTitle.textContent = `${getMeses()[month]} ${year}`;

  const primerDia = new Date(year, month, 1).getDay();
  const ultimoDia = new Date(year, month + 1, 0).getDate();

  // Ajuste lunes a domingo
  const inicio = primerDia === 0 ? 6 : primerDia - 1;

  calendarBody.innerHTML = "";
  let fila = document.createElement("tr");

  // Espacios vacíos antes del día 1
  for (let i = 0; i < inicio; i++) {
    fila.appendChild(document.createElement("td"));
  }

  // Generar días
  for (let dia = 1; dia <= ultimoDia; dia++) {
    const celda = document.createElement("td");
    celda.textContent = dia;

    // Texto normal por defecto
    celda.classList.add("text-dark");

    const fechaTemp = new Date(year, month, dia);
    const diaSemana = fechaTemp.getDay();

    let tooltip = "";

    // ======================================
    // 1️⃣ FERIADOS (ROJO)
    // ======================================
    const feriado = feriadosChile[year]?.[month]?.find((f) => f.dia === dia);
    if (feriado) {
      celda.classList.remove("text-dark");
      celda.classList.add("text-feriado"); // NUEVA CLASE ROJA
      tooltip = feriado.nombre;
    }

    // ======================================
    // 2️⃣ EVENTOS ESPECIALES (NARANJO)
    // ======================================
    const evento = eventosEspeciales[year]?.[month]?.find((e) => e.dia === dia);
    if (evento) {
      celda.classList.add(evento.color || "bg-evento");
      tooltip = evento.comentario || evento.nombre;
    }

    // ======================================
    // 3️⃣ CLASES SEMANALES (AMARILLO)
    // ======================================
    if (clasesSemanales[diaSemana] && !feriado && !evento) {
      celda.classList.add(clasesSemanales[diaSemana].color, "text-dark");
      tooltip = clasesSemanales[diaSemana].comentario;
    }

    // ======================================
    // 4️⃣ ACTIVIDAD EN PARQUE
    // ======================================
    if (diasParque[year]?.[month]?.includes(dia)) {
      celda.classList.add("text-dark");
      tooltip = "Actividad en Parque";
    }

    if (tooltip !== "") celda.title = tooltip;

    fila.appendChild(celda);

    if ((inicio + dia) % 7 === 0) {
      calendarBody.appendChild(fila);
      fila = document.createElement("tr");
    }
  }

  calendarBody.appendChild(fila);
}

// =============================================
// BOTONES CAMBIAR MES
// =============================================

prevBtn.addEventListener("click", () => {
  fechaActual.setMonth(fechaActual.getMonth() - 1);
  generarCalendario();
});

nextBtn.addEventListener("click", () => {
  fechaActual.setMonth(fechaActual.getMonth() + 1);
  generarCalendario();
});

const instagramOncas = "organizacaooncaschile";
const telefonoContacto = "+56963680280";
const mensaje = "Hola! Quiero información sobre clases de capoeira";

const instagramLink = document.getElementById("instagramLink");
const instagramUser = document.getElementById("instagramUser");

instagramLink.href = `https://instagram.com/${instagramOncas}`;
instagramUser.textContent = `@${instagramOncas}`;

document.getElementById("btnWhatsApp").addEventListener("click", () => {
  const url = `https://wa.me/${
    telefonoContacto
  }?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
});

// Inicializar
generarCalendario();
