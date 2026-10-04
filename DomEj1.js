alert('Hola');

//guardo el nombre en una variable desde prompt para poder enseñarla luego
var nombre = prompt('Pon tu nombre');

alert('hola ' + nombre);

var numero = prompt('Pon 1 número');
var numero2 = prompt('Pon 2 número');
// sin el parseInt se ve como texto, hay que convertirlo para suamr
var suma = parseInt(numero) + parseInt(numero2);

alert('La suma es ' + suma);

var edad = prompt('Pon la edad');

//hago una fórmula de if para discriminar la variable y mostrar el texto correspondiente
if (edad < 18) {
  alert('Eres menor');
}
if (edad >= 18) {
  alert('Eres mayor');
} else {
  alert('No has puesto un número');
}
