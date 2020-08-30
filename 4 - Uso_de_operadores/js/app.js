"use strict"
// Operadores aritméticos 
var datoA = 10;
var datoB = 20;

//Suma +
var suma = datoA + datoB;
console.log('La suma de ' + datoA + ' + ' + datoB + ' es igual a: ', suma);

//Resta
var resta = datoA - datoB;
console.log('La resta de ' + datoA + ' - ' + datoB + ' es igual a: ', resta);

//Multiplicación *
var multiplicacion = datoA * datoB;
console.log('La multiplicación de ' + datoA + ' * ' + datoB + ' es igual a: ', multiplicacion);

//División
var division = datoA / datoB;
console.log('La división de ' + datoA + ' / ' + datoB + ' es igual a: ', division);

//Módulo
var modulo = datoA % datoB;
console.log('El módulo de ' + datoA + ' % ' + datoB + ' es igual a: ', modulo);

// incremento
var incremento = datoA;
incremento++;
console.log('El incremento de ' + datoA + ' es igual a: ', incremento);

// Decremento
var decremento = datoA;
decremento--;
console.log('El decremento de ' + datoA + ' es igual a: ', decremento);

// OPERADORES RELACIONALES
var datoA = 10;
var datoB = 20;

//MAYOR QUE 
var mayorque = datoA > datoB;
console.log('Es ' + datoA + ' mayor que ' + datoB + ' : ', mayorque);

// menor que
var menorque = datoA < datoB;
console.log('Es ' + datoA + ' mayor que ' + datoB + ' : ', menorque);

// mayor o igual que 
var mayorOIgual = datoA >= datoB;
console.log('Es ' + datoA + ' mayor o igual que ' + datoB + ' : ', mayorOIgual);

// menor o igual que 
var menorOIgual = datoA <= datoB;
console.log('Es ' + datoA + ' menor o igual que ' + datoB + ' : ', menorOIgual);

// igual que 
var igualque = datoA == datoB;
console.log('Es ' + datoA + ' menor o igual que ' + datoB + ' : ', igualque);

//diferente que 
var noEsIgual = datoA != datoB;
console.log('Es ' + datoA + ' no es igual o es diferente que ' + datoB + ' : ', noEsIgual);

// OPERADORES LÓGICOS 
var datoA = 10;
var datoB = 20;

//OPERADOR Y o AND
var and = (datoA > 10 && datoB > 10);
console.log('El resultado de la evaluación AND es: ' + and);

//OPERADOR O o OR
var or = (datoA > 10 || datoB > 10);
console.log('El resultado de la evaluación OR es: ' + or);

// OPERADOR DE NEGACIÓN O NOT - 
var not = !(datoA > 10);
console.log('El resultado de la evaluación NOT es: ' + not);

// OPERADORES ASIGNACIÓN
var datoA = 10;

//ASIGNACION SIMPLE 
var igual = datoA;
console.log("El resultado de la asignación simple es: " + igual);

//SUMAR Y ASIGNAR
var masIgual = 10;
masIgual += datoA;
console.log("El resultado de la asignación += es: " + masIgual);

//RESTAR Y ASIGNAR
var menosIgual = 10;
menosIgual -= datoA;
console.log("El resultado de la asignación -= es: " + menosIgual);

//MULTIPLICAR Y ASIGNAR
var porIgual = 10;
porIgual *= datoA;
console.log("El resultado de la asignación *= es: " + porIgual);

//DIVIDIR Y ASIGNAR
var entreIgual = 20;
entreIgual /= datoA;
console.log("El resultado de la asignación /= es: " + entreIgual);

// OPERADOR NEGATIVO
var datoA = 10;
var datoB = -datoA;
console.log("El valor de datoA es " + datoA + ", después del operador negativo datoB es: " + datoB);

// OPERADORES CONCATENACIÓN
var datoA = 10;
var datoB = 20;

var nombre = "Constanza";
var apellido = "Morales";

// Concatenación de números:
var concatNum = datoA + datoB;
console.log("Los números " + datoA + " y " + datoB + " usados como números concatenados hacen: ", concatNum);

// Concatenación de cadenas de texto:
var concatTex = nombre + " " + apellido;
console.log("Los textos " + nombre + " y " + apellido + " se unen para formar: ", concatTex);

// Concatenación de números como texto:
var concatNumComoTxt = "2" + "8";
console.log("Los números 2 y 8 usados como texto se unen para formar: " + concatNumComoTxt);

// Concatenación de texto y número:
var concatNumTxt = datoA + "8";
console.log("Los números " + datoA + " y 8 usados como texto se unen para formar: " + concatNumTxt);

// OPERADORES TERNARIO O CONDICIONAL
var datoA = 10;
var datoB = 20;

// Condición ? True : False
var resultado = datoA > datoB ? "Si es mayor " : "No es mayor";
console.log("El resultado con el operador 1 ternario u operador condicional es:", resultado);

var datoA = 110;
var datoB = 20;

// Condición ? True : False
var resultado = datoA > datoB ? "Si es mayor " : "No es mayor";
console.log("El resultado con el operador 2 ternario u operador condicional es:", resultado);

// OPERADORES DE TIPOS DE DATOS
var datoA = 10; //NÚMERO 
var nombre = "Playa"; //Cadena de texto
var activo = true; //Boleano

var persona = {
    edad: 34, //número
    deporte: 'Correr' //cadena de texto
}; //objeto

console.log(typeof datoA);
console.log(typeof nombre);
console.log(typeof activo);
console.log(typeof persona);
console.log(typeof persona.edad);
console.log(typeof persona.deporte);