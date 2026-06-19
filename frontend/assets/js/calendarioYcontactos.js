// =============================================
// VARIABLES DEL CALENDARIO
// =============================================
let clasesSemanales    = {};
let clasesDetalle      = {};
let diasParque         = {};
let eventosEspeciales  = {};
let feriadosChile      = {};
let FECHA_INICIO_CLASES = null;

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
// FUNCIÓN AUXILIAR
// =============================================
function esClaseHabilitada(dia, month, year) {
  return new Date(year, month, dia) >= FECHA_INICIO_CLASES;
}

// =============================================
// MOSTRAR MODAL CON DETALLE DEL DÍA
// =============================================
function mostrarDetalle(dia, month, data, esPasado = false) {
  const tituloEl = document.getElementById("diaModal-titulo");
  tituloEl.innerHTML = `${getMeses()[month]} ${dia}${esPasado
    ? ' <span class="badge bg-secondary ms-2 align-middle" style="font-size:.65rem;vertical-align:middle">Pasado</span>'
    : ''}`;

  if (data.type === "evento") {
    document.querySelector("#diaModal-lugar span").textContent   = data.nombre    || "";
    document.querySelector("#diaModal-horario span").textContent = data.comentario || "";
    document.getElementById("diaModal-horario").style.display  = "";
    document.getElementById("diaModal-dias").style.display     = "none";
    document.getElementById("diaModal-horarios").style.display = "none";
    document.getElementById("diaModal-precios").style.display  = "none";
  } else {
    const detalle = clasesDetalle[data.type];
    if (!detalle) { console.warn("Detalle no encontrado:", data.type); return; }

    document.getElementById("diaModal-horario").style.display = "none";

    document.querySelector("#diaModal-lugar span").textContent = window.uiT(detalle.nombreKey);

    document.querySelector("#diaModal-dias span").textContent = window.uiT(detalle.diasKey);
    document.getElementById("diaModal-dias").style.display = "";

    const horariosUl = document.querySelector("#diaModal-horarios ul");
    horariosUl.innerHTML = "";
    if (detalle.horariosKeys?.length) {
      detalle.horariosKeys.forEach(key => {
        const li = document.createElement("li");
        li.textContent = window.uiT(key);
        horariosUl.appendChild(li);
      });
      document.getElementById("diaModal-horarios").style.display = "";
    } else {
      document.getElementById("diaModal-horarios").style.display = "none";
    }

    const preciosUl = document.querySelector("#diaModal-precios ul");
    preciosUl.innerHTML = "";
    if (detalle.preciosKeys?.length) {
      detalle.preciosKeys.forEach((key, i) => {
        const li  = document.createElement("li");
        const txt = window.uiT(key);
        const val = detalle.preciosValores[i];
        li.innerHTML = val
          ? `${txt} <strong class="text-success">${val}</strong>`
          : `<strong class="text-success">${txt}</strong>`;
        preciosUl.appendChild(li);
      });
      document.getElementById("diaModal-precios").style.display = "";
    } else {
      document.getElementById("diaModal-precios").style.display = "none";
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

  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  calendarBody.innerHTML = "";
  let fila = document.createElement("tr");

  for (let i = 0; i < inicio; i++) fila.appendChild(document.createElement("td"));

  for (let dia = 1; dia <= ultimoDia; dia++) {
    const celda      = document.createElement("td");
    celda.innerHTML  = `<span>${dia}</span>`;
    celda.classList.add("text-dark");

    const diaSemana = new Date(year, month, dia).getDay();
    const fechaDia  = new Date(year, month, dia);
    const esPasado  = fechaDia < hoy;
    let eventoData  = null;

    // 1. Feriados (rojo)
    const feriado = feriadosChile[year]?.[month]?.find(f => f.dia === dia);
    if (feriado) {
      celda.classList.remove("text-dark");
      celda.classList.add("text-feriado");
      celda.title = feriado.nombre;
    }

    // 2. Eventos especiales (color definido en JSON, por defecto naranjo)
    const evento = eventosEspeciales[year]?.[month]?.find(e => e.dia === dia);
    if (evento) {
      celda.classList.add(evento.color || "bg-evento");
      eventoData = { nombre: evento.nombre, comentario: evento.comentario, type: "evento" };
      celda.title = evento.nombre;
    }

    // 3. Clases semanales (amarillo) — solo si no hay evento ni feriado, y si ya comenzaron
    if (clasesSemanales[diaSemana] && !feriado && !evento && esClaseHabilitada(dia, month, year)) {
      const cls = clasesSemanales[diaSemana];
      celda.classList.add(cls.color, "text-dark");
      eventoData = { type: cls.type };
      celda.title = window.uiT(cls.key + ".titulo");
    }

    // 4. Parque
    if (diasParque[year]?.[month]?.includes(dia)) {
      eventoData = { nombre: "Actividad en Parque", horario: "", type: "evento" };
      celda.title = "Actividad en Parque";
    }

    // 5. Pasado / hoy
    if (esPasado) {
      celda.classList.add("cal-pasado");
    } else if (fechaDia.getTime() === hoy.getTime()) {
      celda.classList.add("cal-hoy");
    }

    // Click solo en días con evento (no feriados solos)
    if (eventoData && !feriado) {
      celda.classList.add("cal-clickable");
      celda.addEventListener("click", () => mostrarDetalle(dia, month, eventoData, esPasado));
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
// RELOJ HORA CHILE
// =============================================
function iniciarReloj() {
  const el = document.getElementById("reloj-chile");
  if (!el) return;
  function tick() {
    el.textContent = new Date().toLocaleTimeString("es-CL", {
      timeZone: "America/Santiago",
      hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
    });
  }
  tick();
  setInterval(tick, 1000);
}

// =============================================
// INICIALIZAR CON DATOS DEL JSON
// =============================================
async function inicializar(cfg) {
  // Esperar que las traducciones estén listas antes de renderizar
  if (window.uiReady) await window.uiReady;
  // Datos del calendario
  clasesSemanales   = cfg.clases.semanales;
  clasesDetalle     = cfg.clases.detalle;
  diasParque        = cfg.diasParque;
  eventosEspeciales = cfg.eventosEspeciales;
  feriadosChile     = cfg.feriadosChile;

  // Fecha de inicio (formato "YYYY-MM-DD")
  const [y, m, d]   = cfg.clases.fechaInicio.split("-").map(Number);
  FECHA_INICIO_CLASES = new Date(y, m - 1, d);

  // Contacto
  const { instagram, telefono, mensajeWhatsApp } = cfg.contacto;

  const instagramLink = document.getElementById("instagramLink");
  const instagramUser = document.getElementById("instagramUser");
  if (instagramLink) instagramLink.href = `https://instagram.com/${instagram}`;
  if (instagramUser) instagramUser.textContent = `@${instagram}`;

  const btnWA = document.getElementById("btnWhatsApp");
  if (btnWA) {
    btnWA.addEventListener("click", () => {
      window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensajeWhatsApp)}`, "_blank");
    });
  }

  // Navegación del calendario
  prevBtn.addEventListener("click", () => {
    fechaActual.setMonth(fechaActual.getMonth() - 1);
    generarCalendario();
  });
  nextBtn.addEventListener("click", () => {
    fechaActual.setMonth(fechaActual.getMonth() + 1);
    generarCalendario();
  });

  generarCalendario();
  iniciarReloj();
}

// =============================================
// CARGA DEL JSON
// =============================================
fetch("../data/calendario.json")
  .then(r => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.json();
  })
  .then(inicializar)
  .catch(err => console.error("Error cargando calendario.json:", err));
