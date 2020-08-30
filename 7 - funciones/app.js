"use strict"
//estructura básica de una función o método
function saludar(nombre, edad) {
    console.log('Hola: ', nombre);
    console.log('Edad: ', edad);
    var resultado = nombre + " tiene " + edad + " años";
    return resultado;

}

var mensaje = saludar("coni", 23);
console.log(mensaje)



function contar(cantidad = 20) {
    console.log('Total: ', cantidad);
}
contar();
// Parámetro REST
function cocinar1(...masingredientes) {
    console.log('masingredientes', masingredientes);
}
cocinar1("Pollo", "Arroz", "Frijoles", "Pescado", "Chile")

function cocinar2(ingredientes1, ingredientes2, ingredientes3, ...otros) {
    console.log('Ingrediente1: ', ingredientes1);
    console.log('Ingrediente2: ', ingredientes2);
    console.log('Ingrediente3: ', ingredientes3);
    console.log('Otros: ', otros)
}

var ingredientesBase = ["Pollo", "Tomate"];
cocinar2(...ingredientesBase, "Arroz", "Pescado", "Chile");

//Funciones anónimas
/* (function () {
    var mensale = "hola";
    console.log(mensaje);
}
)() */

/* var saludar = function (nombre) {
    var mensale = "hola" + nombre;
    return mensaje;
} */


