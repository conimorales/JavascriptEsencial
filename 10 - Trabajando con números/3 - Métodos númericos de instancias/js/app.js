"use strict"

//********************************
//*** Propiedades númericas de instancias

var numero = 2.5;
// cuantos números muestra del decimal
console.log("toExponential: ", numero.toExponential(4));

//numero entero con 2 decimales ajusta el num
console.log("toFixed: ", numero.toFixed(2));

//6 elementos del decimal
console.log("toPrecision: ", numero.toPrecision(6));

//valor numérico convierte a cadena de texto
console.log("toString: ", typeof numero.toString());