function generarMultiplesExamenes() {

  var listaGrupos = ["2do BC", "2do BD", "1ro BA"]; 

  var configuracionExamenes = [{
    titulo: "Cuestionario",
    cantBasicas: 3, cantIntermedias: 0, cantAvanzadas: 0,
    puntosB: 1, puntosI: 2, puntosA: 3
  }];

  configuracionExamenes.forEach(function(config) {
    crearExamenIndividual(config, listaGrupos);
  });
}

// =====================================================
// ============ BANCOS DE PREGUNTAS ====================
// =====================================================

var bancoBasico = [
  crearPregunta('MULTIPLE', '¿Pregunta de ejemplo?', ['Opción 0', 'Opción 1', 'Opción 2'], 1) 
];

var bancoIntermedio = [];
var bancoAvanzado = [];

// =====================================================
// ============ LÓGICA DEL SISTEMA =====================
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

function crearExamenIndividual(config, listaGrupos) {

  var totalPreguntas = config.cantBasicas + config.cantIntermedias + config.cantAvanzadas;
  if (totalPreguntas === 0) return; 

  var form = FormApp.create(config.titulo)
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

  Logger.log('FORMULARIO CREADO: ' + form.getEditUrl());
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
