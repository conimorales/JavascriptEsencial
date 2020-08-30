"use strict"
//CALLBACK
function calcular(datoA, datoB, sumarCB, restarCB) {
    var suma = datoA + datoB;
    var restar = datoA - datoB;
    sumarCB(suma);
    restarCB(restar);

}
calcular(2, 3, function (resultado) {
        console.log('suma', resultado)
    },
    function (resultado) {
        console.log('resta', resultado)
    })

// Función Arrow
var saludar = nombre => "Hola " + nombre;
console.log(saludar("Susana"));

var sumar = cantidad => cantidad + 10
console.log(sumar(10));

var calcular = (datoA, datoB) => datoA + datoB
console.log(calcular(10, 15));

var generar = (datoA, datoB) => {
    var datoC = 5;
    return datoA + datoB + datoC;
}
console.log(generar(10, 15));

var validar = () => {
    return "Validación correcta";
}
console.log(validar());