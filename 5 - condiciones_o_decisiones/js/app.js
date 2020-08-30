"use strict";
var datoA = 10;
var datoB = 20;
var resultado = "Sin datos";

if (datoA > datoB) {
  resultado = "La condición se cumplió";
}

console.log("El resultado de la evaluacion if es: ", resultado);

var datoA = 110;
var datoB = 20;
var resultado = "Sin datos";

if (datoA > datoB) {
  resultado = "La condición se cumplió";
}

console.log("El resultado de la evaluacion if es: ", resultado);

var datoA = 10;
var datoB = 20;
var resultado = "Sin datos";

if (datoA > datoB) {
  resultado = "La condición se cumplió";
} else if (datoA == datoB) {
  resultado = "Segunda evaluación verdadera";
} else {
  resultado = "No se cumplió ninguna evaluación";
}

console.log("El resultado de la evaluacion if-else-if es: ", resultado);

// Estructura Switch
var edad = 30;
var resultado = "";
switch (edad) {
  case 10:
    resultado = "La edad es 10 años";
    break;
  case 20:
    resultado = "La edad es 20 años";
    break;
  case 30:
    resultado = "La edad es 30 años";
    break;
  default:
    resultado = "Ningún caso coincide";
    break;
}

console.log("El resultado de la evaluación con números es: " + resultado);

var producto = "TV";

switch (producto) {
  case "TV":
    resultado = "Se eligió la TV";
    break;
  case "radio":
    resultado = "Se eligió el radio";
    break;

  default:
    resultado = "No se elegió ningún producto";
    break;
}

console.log("El resultado de la evaluación con números es: " + resultado);
