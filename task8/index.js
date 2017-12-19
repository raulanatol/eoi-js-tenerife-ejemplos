
function cambiarBorde(event) {
  var evento = event || window.event;
  switch(evento.type) {
    case 'mouseover':
      this.style.borderColor = 'black';
      break;
    case 'mouseout':
      this.style.borderColor = 'red';
      break;
    default:
      // Nothing to do
  }
}

window.onload = function() {
  document.getElementById("contenedor").onmouseover = cambiarBorde;
  document.getElementById("contenedor").onmouseout = cambiarBorde;
}
