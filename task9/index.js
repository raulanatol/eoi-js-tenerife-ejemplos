
//********************//
//  jQuery funciones  //
//********************//

function colorearCuartoPSegundoDiv() {
  var segundoDiv = $('div')[1];
  var cuartoPSegundoDiv = $(segundoDiv).find('p')[3];
  $(cuartoPSegundoDiv).css('background-color', '#FFFFFF');

  // $('div:last > p:last').css('background-color', '#FFFFFF');
}

function modificarTextoSegundoPSegundoDiv() {
  var segundoDiv = $('div')[1];
  var segundoP = $(segundoDiv).find('p')[1];
  $(segundoP).text('Este es un párrafo modificado');

  // index: The index of each child to match, starting with 1, the string even or odd, or an equation ( eg. :nth-child(even), :nth-child(4n) )
  // $('div:last > p:nth-child(2)').text('Este es un párrafo modificado');
}

function enlaceAGoogleEnParrafor3Div2() {
  var segundoDiv = $('div')[1];
  var tercerP = $(segundoDiv).find('p')[2];
  $(tercerP).html('Párrafo 3 del div 2 <a href="http://google.com">Enlace a google</a>');
}

function addEventoClickParrafo1Div2() {
  var segundoDiv = $('div')[1];
  var primerP = $(segundoDiv).find('p')[0];
  $(primerP).click(function() {
    $(this).css('background-color', '#418ef4');
  });
}

$(document).ready(function() {
  colorearCuartoPSegundoDiv();
  modificarTextoSegundoPSegundoDiv();
  enlaceAGoogleEnParrafor3Div2();
  addEventoClickParrafo1Div2();
});

//********************//
//  Vanilla funciones //
//********************//

function colorearCuartoPPrimerDiv() {
  var primerDiv = document.getElementsByTagName('div')[0];
  var cuartoP = primerDiv.getElementsByTagName('p')[3];
  cuartoP.style.backgroundColor = '#FFFFFF';
}

function modificarTextoSegundoPPrimerDiv() {
  var primerDiv = document.getElementsByTagName('div')[0];
  var segundoP = primerDiv.getElementsByTagName('p')[1];
  segundoP.innerText = 'Este es un párrafo modificado';
}

function enlaceAGoogleEnParrafor3Div1() {
  var primerDiv = document.getElementsByTagName('div')[0];
  var tercerP = primerDiv.getElementsByTagName('p')[2];
  var googleEnlace = document.createElement('a');
  var textEnlaceGoogle = document.createTextNode('Enlace a google');
  googleEnlace.appendChild(textEnlaceGoogle);
  googleEnlace.title = 'Enlace a google';
  googleEnlace.href = 'https://google.com';
  tercerP.appendChild(googleEnlace);
}

function addEventoClickParrafo1Div1() {
  var primerDiv = document.getElementsByTagName('div')[0];
  var primerP = primerDiv.getElementsByTagName('p')[0];
  primerP.onclick = function() {
    this.style.backgroundColor = '#418ef4';
  };
}

colorearCuartoPPrimerDiv();
modificarTextoSegundoPPrimerDiv();
enlaceAGoogleEnParrafor3Div1();
addEventoClickParrafo1Div1();
