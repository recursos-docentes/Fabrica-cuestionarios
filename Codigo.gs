/**
 * ======================================================================
 * PLANTILLA UNIVERSAL PARA DOCENTES TÉCNICOS - GENERADOR DE CUESTIONARIOS
 * ======================================================================
 */

function generarMultiplesExamenes() {
  // 1. CONFIGURACIÓN DE GRUPOS
  var listaGrupos = ["2do BC", "2do BD", "1ro BA"]; 

  // 2. CONFIGURACIÓN DEL CUESTIONARIO (Título y cantidad de preguntas por nivel)
  var configuracionExamenes = [{
    titulo: "Evaluación de Programación: JSP y Servlets",
    cantBasicas: 3, cantIntermedias: 2, cantAvanzadas: 1,
    puntosB: 1, puntosI: 2, puntosA: 3
  }];

  var fechaActual = new Date();
  var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  var nombreCarpetaDinamica = "Exámenes - " + meses[fechaActual.getMonth()] + " " + fechaActual.getFullYear();

  configuracionExamenes.forEach(function(config) {
    crearExamenIndividual(config, nombreCarpetaDinamica, listaGrupos);
  });
}

// =====================================================
// ============ BANCOS DE PREGUNTAS (RELLENAR) =========
// =====================================================

// Pegá aquí el contenido generado por la IA o tus propias preguntas
var bancoBasico = [
  crearPregunta('MULTIPLE', '¿Pregunta de ejemplo?', ['Opción 0', 'Opción 1', 'Opción 2'], 1) 
];

var bancoIntermedio = [
  crearPregunta('TEXT', 'Pregunta de desarrollo:', [], null)
];

var bancoAvanzado = [
  crearPregunta('CHECKBOX', 'Seleccione varias:', ['A', 'B', 'C'], [0, 2])
];

// =====================================================
// ============ LÓGICA DEL SISTEMA (NO TOCAR) ==========
// =====================================================

function crearPregunta(tipo, titulo, opciones, correcta) {
  return { tipo: tipo, titulo: titulo, opciones: opciones, correcta: correcta };
}

function agregarPreguntas(form, preguntas, puntos) {
  preguntas.forEach(function(p) {
    var item;
    switch (p.tipo) {
      case 'MULTIPLE':
        item = form.addMultipleChoiceItem();
        item.setChoices(p.opciones.map((opc, i) => item.createChoice(opc, i === p.correcta))).showOtherOption(true);
        break;
      case 'CHECKBOX':
        item = form.addCheckboxItem();
        var indicesCorrectos = Array.isArray(p.correcta) ? p.correcta : [p.correcta];
        item.setChoices(p.opciones.map((opc, i) => item.createChoice(opc, indicesCorrectos.includes(i))));
        break;
      case 'DROPDOWN':
        item = form.addListItem();
        item.setChoices(p.opciones.map((opc, i) => item.createChoice(opc, i === p.correcta)));
        break;
      case 'TEXT':
        item = form.addParagraphTextItem();
        break;
    }
    item.setTitle(p.titulo).setRequired(false);
    if (p.tipo !== 'TEXT') item.setPoints(puntos);
  });
}

function crearExamenIndividual(config, nombreCarpeta, listaGrupos) {
  var totalPreguntas = config.cantBasicas + config.cantIntermedias + config.cantAvanzadas;
  if (totalPreguntas === 0) return; 

  var ahora = new Date();
  var horaString = " (" + ahora.getHours() + ":" + ahora.getMinutes().toString().padStart(2, '0') + ")";
  
  var form = FormApp.create(config.titulo + horaString)
    .setIsQuiz(true)
    .setDescription('Respondé con atención. Solo los datos personales son obligatorios.');

  form.addTextItem().setTitle('Nombre y Apellido').setRequired(true);
  form.addListItem().setTitle('Grupo').setChoiceValues(listaGrupos).setRequired(true);

  if (config.cantBasicas > 0 && bancoBasico.length > 0) {
    form.addPageBreakItem().setTitle('Sección I: Nivel Básico');
    agregarPreguntas(form, mezclarArray([...bancoBasico]).slice(0, config.cantBasicas), config.puntosB);
  }
  if (config.cantIntermedias > 0 && bancoIntermedio.length > 0) {
    form.addPageBreakItem().setTitle('Sección II: Nivel Intermedio');
    agregarPreguntas(form, mezclarArray([...bancoIntermedio]).slice(0, config.cantIntermedias), config.puntosI);
  }
  if (config.cantAvanzadas > 0 && bancoAvanzado.length > 0) {
    form.addPageBreakItem().setTitle('Sección III: Nivel Avanzado');
    agregarPreguntas(form, mezclarArray([...bancoAvanzado]).slice(0, config.cantAvanzadas), config.puntosA);
  }

  moverArchivoACarpeta(form.getId(), nombreCarpeta);
  Logger.log('FORMULARIO CREADO CON ÉXITO: ' + config.titulo);
}

function mezclarArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function moverArchivoACarpeta(fileId, nombreCarpeta) {
  var archivo = DriveApp.getFileById(fileId);
  var carpetas = DriveApp.getFoldersByName(nombreCarpeta);
  var carpetaDestino = carpetas.hasNext() ? carpetas.next() : DriveApp.createFolder(nombreCarpeta);
  carpetaDestino.addFile(archivo);
  var root = DriveApp.getRootFolder();
  if (root.getId() !== carpetaDestino.getId()) root.removeFile(archivo);
}
