"use strict"

var edad = 35.12;
var edad = -35.12;
var edad = 35;

var cantidad = "100";

var nuevaCantidad = Number(cantidad);

// parseINT()
// parseFloat()

var bebida = "agua";
var comida = 'ceviche';
var instruccion = "El platillo se llama 'cevivhe' ";
var edad = 34;
var edadtxt = String(edad);

//BOOLEANOS TRUE OR FALSE 
var activo = true;
var inactivo = false;
var estado = Boolean(10 > 9)
var estado2 = Boolean(9 > 10)

var fecha = new Date();

/* CONSOLA DE CHROME
fecha.getDay(); dia de la semana en número
fecha.getDate(); primer día del mes
fecha.getFullYear(); año
fecha.getHours(); hora en la que ejecuto la instrucción
fecha.setDate(); con que día voy a trabajar, valor numerico de na fecha 
*/

//Símbolos --> cada símbolo tiene un valor diferente 
var simbolo1 = Symbol();
var simbolo2 = Symbol();
var ambiente = Symbol('dev');

// JSON -> JAVASCRIPT OBJECT NOTATION intercambio de datos 
var persona = {
    nombre: 'Sergio',
    twitter: 'yacafax'
};

var personas = [
    {
        nombre: 'Hugo',
        twitter: 'dcHugo'
    },
    {
        nombre: 'Paco',
        twitter: 'dcPaco'
    },
    {
        nombre: 'Luis',
        twitter: 'dcLuis'
    },
    persona
]
var personaJSON = JSON.stringify(persona); //cadena de texto 
var nuevaPersona = JSON.parse(personaJSON) // parse convierte a un objeto
