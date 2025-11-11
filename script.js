// === URL de tu Web App de Google Apps Script (sin espacios) ===
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzOrbVwK3TD2RuH8z_-_RnLuWDpVUyx_HLcD1AuZA8fQ6OWlXFld0iwyJ4-oGDPoXti/exec";

// === PREGUNTAS Y TÍTULOS BDI (21 preguntas completas) ===
const titulosBDI = [
  "Tristeza",
  "Pesimismo",
  "Fracaso",
  "Pérdida de Placer",
  "Sentimientos de Culpa",
  "Sentimientos de Castigo",
  "Disconformidad con uno mismo.",
  "Autocrítica",
  "Pensamientos o Deseos Suicidas",
  "Llanto",
  "Agitación",
  "Pérdida de Interés",
  "Indecisión",
  "Desvalorización",
  "Pérdida de Energía",
  "Cambios en los Hábitos de Sueño",
  "Irritabilidad",
  "Cambios en el Apetito",
  "Dificultad de Concentración",
  "Cansancio o Fatiga",
  "Pérdida de Interés en el Sexo"
];

const preguntasBDI = [
  ["No me siento triste.", "Me siento triste gran parte del tiempo.", "Me siento triste todo el tiempo.", "Me siento tan triste o soy tan infeliz que no puedo soportarlo."],
  ["No estoy desalentado respecto de mi futuro.", "Me siento más desalentado respecto de mi futuro que lo que solía estarlo.", "No espero que las cosas funcionen para mí.", "Siento que no hay esperanza para mi futuro y que sólo puede empeorar."],
  ["No me siento como un fracasado.", "He fracasado más de lo que hubiera debido.", "Cuando miro hacia atrás, veo muchos fracasos.", "Siento que como persona soy un fracaso total."],
  ["Obtengo tanto placer como siempre por las cosas de las que disfruto.", "No disfruto tanto de las cosas como solía hacerlo.", "Obtengo muy poco placer de las cosas que solía disfrutar.", "No puedo obtener ningún placer de las cosas de las que solía disfrutar."],
  ["No me siento particularmente culpable.", "Me siento culpable respecto de varias cosas que he hecho o que debería haber hecho.", "Me siento bastante culpable la mayor parte del tiempo.", "Me siento culpable todo el tiempo."],
  ["No siento que esté siendo castigado.", "Siento que tal vez pueda ser castigado.", "Espero ser castigado.", "Siento que estoy siendo castigado."],
  ["Siento acerca de mí lo mismo que siempre.", "He perdido la confianza en mí mismo.", "Estoy decepcionado conmigo mismo.", "No me gusto a mí mismo."],
  ["No me critico ni me culpo más de lo habitual.", "Estoy más crítico conmigo mismo de lo que solía estarlo.", "Me critico a mí mismo por todos mis errores.", "Me culpo a mí mismo por todo lo malo que sucede."],
  ["No tengo ningún pensamiento de matarme.", "He tenido pensamientos de matarme, pero no lo haría.", "Querría matarme.", "Me mataría si tuviera la oportunidad de hacerlo."],
  ["No lloro más de lo que solía hacerlo.", "Lloro más de lo que solía hacerlo.", "Lloro por cualquier pequeñez.", "Siento ganas de llorar pero no puedo."],
  ["No estoy más inquieto o tenso que lo habitual.", "Me siento más inquieto o tenso que lo habitual.", "Estoy tan inquieto o agitado que me es difícil quedarme quieto.", "Estoy tan inquieto o agitado que tengo que estar siempre en movimiento o haciendo algo."],
  ["No he perdido el interés en otras actividades o personas.", "Estoy menos interesado que antes en otras personas o cosas.", "He perdido casi todo el interés en otras personas o cosas.", "Me es difícil interesarme por algo."],
  ["Tomo mis propias decisiones tan bien como siempre.", "Me resulta más difícil que de costumbre tomar decisiones.", "Encuentro mucha más dificultad que antes para tomar decisiones.", "Tengo problemas para tomar cualquier decisión."],
  ["No siento que yo no sea valioso.", "No me considero a mí mismo tan valioso y útil como solía considerarme.", "Me siento menos valioso cuando me comparo con otros.", "Siento que no valgo nada."],
  ["Tengo tanta energía como siempre.", "Tengo menos energía que la que solía tener.", "No tengo suficiente energía para hacer demasiado.", "No tengo energía suficiente para hacer nada."],
  ["No he experimentado ningún cambio en mis hábitos de sueño.", "Duermo un poco más o menos que lo habitual.", "Duermo mucho más o mucho menos que lo habitual.", "Duermo la mayor parte del día o me despierto muy temprano y no puedo volver a dormir."],
  ["No estoy más irritable que lo habitual.", "Estoy más irritable que lo habitual.", "Estoy mucho más irritable que lo habitual.", "Estoy irritable todo el tiempo."],
  ["No he experimentado ningún cambio en mi apetito.", "Mi apetito es un poco menor o mayor que lo habitual.", "Mi apetito es mucho menor o mayor que lo habitual.", "No tengo apetito en absoluto o quiero comer todo el día."],
  ["Puedo concentrarme tan bien como siempre.", "No puedo concentrarme tan bien como habitualmente.", "Me es difícil mantener la mente en algo por mucho tiempo.", "Encuentro que no puedo concentrarme en nada."],
  ["No estoy más cansado o fatigado que lo habitual.", "Me fatigo o me canso más fácilmente que lo habitual.", "Estoy demasiado fatigado para hacer muchas cosas.", "Estoy demasiado fatigado para hacer la mayoría de las cosas que solía hacer."],
  ["No he notado ningún cambio reciente en mi interés por el sexo.", "Estoy menos interesado en el sexo de lo que solía estarlo.", "Estoy mucho menos interesado en el sexo.", "He perdido completamente el interés en el sexo."]
];

// === PREGUNTAS BAI (21 preguntas completas) ===
const preguntasBAI = [
  "Torpe o entumecido", "Acalorado", "Con temblor en las piernas", "Incapaz de relajarse",
  "Con temor a que ocurra lo peor", "Mareado, o que se le va la cabeza", "Con latidos del corazón fuertes y acelerados",
  "Inestable", "Atemorizado o asustado", "Nervioso", "Con sensación de bloqueo", "Con temblores en las manos",
  "Inquieto, inseguro", "Con miedo a perder el control", "Con sensación de ahogo", "Con temor a morir",
  "Con miedo", "Con problemas digestivos", "Con desvanecimientos", "Con rubor facial", "Con sudores, fríos o calientes"
];

const nivelesBAI = ["En absoluto", "Levemente", "Moderadamente", "Severamente"];

// === FUNCIONES GLOBALES ===
function mostrar(id) {
  document.querySelectorAll('main > div').forEach(d => d.style.display = 'none');
  const elemento = document.getElementById(id);
  if (elemento) elemento.style.display = 'block';
}

// === PARTE DEL ALUMNO ===
function comenzar() {
  const nombre1 = document.getElementById("nombreAlumno1").value.trim();
  const nombre2 = document.getElementById("nombreAlumno2").value.trim();
  const apellido1 = document.getElementById("apellidoAlumno1").value.trim();
  const apellido2 = document.getElementById("apellidoAlumno2").value.trim();
  const correo = document.getElementById("correoAlumno").value.trim();

  if (!nombre1) return alert("Por favor ingresa tu primer nombre.");
  if (!apellido1) return alert("Por favor ingresa tu primer apellido.");
  if (!correo || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) return alert("Correo inválido.");

  window.datosAlumno = {
    nombre: `${nombre1} ${nombre2} ${apellido1} ${apellido2}`.replace(/\s+/g, ' ').trim(),
    correo
  };

  cargarPreguntasBDI();
  mostrar("evaluacionBDI");
}

function cargarPreguntasBDI() {
  const bdi = document.getElementById("preguntasBDI");
  bdi.innerHTML = "";
  preguntasBDI.forEach((grupo, i) => {
    let html = `<div class='question'><p><strong>${i+1}. ${titulosBDI[i]}</strong></p>`;
    grupo.forEach((texto, j) => {
      html += `<label><input type='radio' name='bdi${i}' value='${j}'> ${texto}</label><br>`;
    });
    html += `</div>`;
    bdi.innerHTML += html;
  });
}

function cargarPreguntasBAI() {
  const bai = document.getElementById("preguntasBAI");
  bai.innerHTML = "";
  preguntasBAI.forEach((texto, i) => {
    let html = `<div class='question'><p><strong>${i+1}. ${texto}</strong></p>`;
    nivelesBAI.forEach((nivel, j) => {
      html += `<label><input type='radio' name='bai${i}' value='${j}'> ${nivel}</label><br>`;
    });
    html += `</div>`;
    bai.innerHTML += html;
  });
}

function enviarBDI() {
  const respuestas = [];
  for (let i = 0; i < preguntasBDI.length; i++) {
    const r = document.querySelector(`input[name='bdi${i}']:checked`);
    if (!r) return alert("Completa todas las preguntas de depresión.");
    respuestas.push(parseInt(r.value));
  }
  window.respuestasBDI = respuestas;
  cargarPreguntasBAI();
  mostrar("evaluacionBAI");
}

// === ENVIAR A GOOGLE SHEETS ===
async function enviarBAI() {
  const respuestas = [];
  for (let i = 0; i < preguntasBAI.length; i++) {
    const r = document.querySelector(`input[name='bai${i}']:checked`);
    if (!r) return alert("Completa todas las preguntas de ansiedad.");
    respuestas.push(parseInt(r.value));
  }
  window.respuestasBAI = respuestas;

  const totalBDI = respuestasBDI.reduce((a, b) => a + b, 0);
  const totalBAI = respuestas.reduce((a, b) => a + b, 0);

  const nivelBDI = totalBDI < 14 ? "Depresión mínima" : totalBDI < 20 ? "Depresión leve" : totalBDI < 29 ? "Depresión moderada" : "Depresión severa";
  const nivelBAI = totalBAI <= 21 ? "Ansiedad muy baja" : totalBAI <= 35 ? "Ansiedad moderada" : "Ansiedad severa";

  const orientacion = (totalBDI >= 20 || totalBAI >= 36)
    ? "\nPuedes acercarte al área de psicopedagogía (segunda planta, lado derecho, al lado de coordinación) para recibir apoyo personalizado."
    : "";

  const texto = `Nombre: ${window.datosAlumno.nombre}
Correo: ${window.datosAlumno.correo}
Fecha: ${new Date().toLocaleString("es-ES")}

Inventario de Depresión de Beck (BDI)
Puntaje: ${totalBDI}
Interpretación: ${nivelBDI}

Inventario de Ansiedad de Beck (BAI)
Puntaje: ${totalBAI}
Interpretación: ${nivelBAI}${orientacion}`;

  document.getElementById("textoResultado").textContent = texto;

  // === DATOS A ENVIAR ===
  const datos = {
    nombre: window.datosAlumno.nombre,
    correo: window.datosAlumno.correo,
    fecha: new Date().toLocaleString("es-ES"),
    totalBDI,
    totalBAI,
    respuestasBDI: respuestasBDI,
    respuestasBAI: respuestas
  };

  try {
    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(datos)
    });
    console.log("✅ Enviado a Google Sheets");
  } catch (err) {
    console.warn("⚠️ Error al enviar:", err);
  }

  mostrar("resultado");
}

function descargarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const texto = document.getElementById("textoResultado").innerText;
  const lines = doc.splitTextToSize(texto, 180);
  doc.text(10, 20, lines);
  const nombreArchivo = window.datosAlumno.nombre.replace(/\s+/g, "_");
  doc.save(`resultado_${nombreArchivo}.pdf`);
}

// === ADMIN: CARGAR RESULTADOS ===
async function accederAdmin() {
  const usuario = document.getElementById("usuarioAdmin").value.trim();
  const clave = document.getElementById("claveAdmin").value.trim();

  if (usuario === "administradorPSY" && clave === "8648337psy") {
    mostrar("adminPanel");
    await cargarResultadosAdmin();
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}

async function cargarResultadosAdmin() {
  const tabla = document.getElementById("tablaAdmin");
  tabla.innerHTML = "<tr><td colspan='7'>Cargando desde Google Sheets...</td></tr>";

  try {
    const response = await fetch(APPS_SCRIPT_URL);
    const data = await response.json();
    const resultados = Array.isArray(data.resultados) ? data.resultados : [];

    tabla.innerHTML = "";

    if (resultados.length === 0) {
      tabla.innerHTML = "<tr><td colspan='7'>No hay resultados registrados.</td></tr>";
      return;
    }

    resultados.slice().reverse().forEach(res => {
      const nivelBDI = res.totalBDI < 14 ? "Sin síntomas" :
                      res.totalBDI < 20 ? "Leve" :
                      res.totalBDI < 29 ? "Moderado" : "Grave";

      const nivelBAI = res.totalBAI <= 21 ? "Sin síntomas" :
                      res.totalBAI <= 35 ? "Moderado" : "Grave";

      const colorBDI = res.totalBDI >= 29 ? 'red' : res.totalBDI >= 20 ? 'orange' : 'green';
      const colorBAI = res.totalBAI > 35 ? 'red' : res.totalBAI > 21 ? 'orange' : 'green';

      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${res.nombre}</td>
        <td>${res.correo}</td>
        <td>${res.fecha}</td>
        <td>${res.totalBAI} (${nivelBAI})</td>
        <td>${res.totalBDI} (${nivelBDI})</td>
        <td style="text-align: left; padding: 8px; font-size: 13px;">
          <strong style="color: ${colorBDI};">Depresión:</strong> ${nivelBDI} (${res.totalBDI}/63)<br>
          <strong style="color: ${colorBAI};">Ansiedad:</strong> ${nivelBAI} (${res.totalBAI}/66)
        </td>
        <td><button onclick="generarPDFAdmin('${res.nombre}', '${res.correo}', '${res.fecha}', ${res.totalBDI}, ${res.totalBAI}, ${JSON.stringify(res.respuestasBDI)}, ${JSON.stringify(res.respuestasBAI)})">PDF</button></td>
      `;
      tabla.appendChild(fila);
    });

  } catch (err) {
    tabla.innerHTML = "<tr><td colspan='7'>Error al cargar datos. Verifica la conexión.</td></tr>";
    console.error("Error al cargar desde Sheet:", err);
  }
}

function generarPDFAdmin(nombre, correo, fecha, totalBDI, totalBAI, respuestasBDI, respuestasBAI) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const nivelBDI = totalBDI < 14 ? "Depresión mínima" :
                  totalBDI < 20 ? "Depresión leve" :
                  totalBDI < 29 ? "Depresión moderada" : "Depresión severa";

  const nivelBAI = totalBAI <= 21 ? "Ansiedad muy baja" :
                  totalBAI <= 35 ? "Ansiedad moderada" : "Ansiedad severa";

  const orientacion = (totalBDI >= 20 || totalBAI >= 36)
    ? "Puedes acercarte al área de psicopedagogía (segunda planta, lado derecho, al lado de coordinación) para recibir apoyo personalizado."
    : "No se requiere acción inmediata.";

  // === TEXTO COMPLETO DEL PDF ===
  let texto = `Nombre: ${nombre}
Correo: ${correo}
Fecha: ${fecha}

Inventario de Depresión de Beck (BDI)
Puntaje: ${totalBDI}
Interpretación: ${nivelBDI}

Inventario de Ansiedad de Beck (BAI)
Puntaje: ${totalBAI}
Interpretación: ${nivelBAI}

${orientacion}

========================================
DETALLE DE RESPUESTAS
========================================

`;

  // === AÑADIR RESPUESTAS DEL BDI ===
  texto += "1. INVENTARIO DE DEPRESIÓN DE BECK (BDI)\n\n";
  respuestasBDI.forEach((respuesta, i) => {
    const opcion = preguntasBDI[i][respuesta] || "No respondido";
    texto += `${i+1}. ${titulosBDI[i]}: ${opcion}\n`;
  });

  // === AÑADIR RESPUESTAS DEL BAI ===
  texto += "\n\n2. INVENTARIO DE ANSIEDAD DE BECK (BAI)\n\n";
  respuestasBAI.forEach((respuesta, i) => {
    const nivel = nivelesBAI[respuesta] || "No respondido";
    texto += `${i+1}. ${preguntasBAI[i]}: ${nivel}\n`;
  });

  // === DIVIDIR TEXTO EN PÁGINAS ===
  const lines = doc.splitTextToSize(texto, 180);
  const lineHeight = 8;
  let y = 20;

  doc.setFontSize(12);
  lines.forEach(line => {
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
    doc.text(10, y, line);
    y += lineHeight;
  });

  const nombreArchivo = nombre.replace(/\s+/g, "_");
  doc.save(`resultado_completo_${nombreArchivo}.pdf`);
}

function filtrarResultados() {
  const filtro = document.getElementById("buscadorAdmin").value.toLowerCase();
  document.querySelectorAll("#tablaAdmin tr").forEach(fila => {
    fila.style.display = fila.textContent.toLowerCase().includes(filtro) ? "" : "none";
  });
}

function cerrarSesion() {
  mostrar("adminLogin");
  document.getElementById("usuarioAdmin").value = "";
  document.getElementById("claveAdmin").value = "";
}

// === ONLOAD ===
window.onload = function () {
  const inicio = document.getElementById("inicio");
  const adminLogin = document.getElementById("adminLogin");
  
  if (inicio) mostrar("inicio");
  else if (adminLogin) mostrar("adminLogin");
};