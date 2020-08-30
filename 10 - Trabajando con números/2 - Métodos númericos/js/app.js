"use strict"
//*** Métodos númericos


var numero = "10";

//tipo de número
//Number convierte a número
console.log('Number: ', typeof numero, typeof Number(numero));

//valor entero
console.log('parseInt: ', parseInt(numero));

//valor decimal
console.log('parseFloat: ', Number.parseFloat(numero));

//valor no es número
console.log('isNaN: ', isNaN(numero));

//valor es entero o no necesita number
//lo que esta almacenado es una cadena de texto
console.log('isInteger: ', Number.isInteger(numero));