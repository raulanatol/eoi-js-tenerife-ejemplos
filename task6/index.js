var prompt = require('prompt-sync')();

// Listado de libros prestados
var librosPrestados = [];

/**
 * Preguntamos al usuario por los datos de un nuevo prestamo
 */
function preguntasNuevoPrestamos() {
  var nombre = prompt('¿Nombre del libro?');
  var contacto = prompt('¿Nombre del contacto?');
  var fecha = prompt('¿Fecha de préstamo?');
  var telefono = prompt('¿Teléfono?');
  return {
    nombre: nombre,
    contacto: contacto,
    fecha: fecha,
    telefono: telefono
  };
}

/**
 * Preguntamos al usuario ¿qué quiere hacer?
 * Devuelve false si quiere cerrar la aplicación
 */
function queHacer() {
  var result = true;
  var accion = prompt('¿Qué quieres hacer? ');
  if (accion === 'x') {
    result = false;
  } else if (accion === 'i') {
    var nuevoPrestamo = preguntasNuevoPrestamos();
    console.log('Nuevo prestamo', nuevoPrestamo);
  }
  return result;
}

var exit;
do {
  exit = queHacer();
} while(exit);

console.log('¡Hasta pronto!');
