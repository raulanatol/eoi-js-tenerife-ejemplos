function hablar(mensaje) {
  writeComputerMessage(mensaje);
}

async function preguntar(pregunta) {
  hablar(pregunta);
  return waitForResponse();
}

function inicioJuego() {
  cleanTextArea();
  cleanHistory();
}

function finJuego() {
  setTimeout(function() {
    inicioJuego();
  }, 2000);
}
