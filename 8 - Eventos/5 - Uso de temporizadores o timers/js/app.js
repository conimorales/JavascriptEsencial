"use strict"

//*** Temporizadores o timers

// setInterval
//Ejecución infinita
//  var temporizador = setInterval(function () {
//      setColor();
//  }, 2000);

//ejecuta 1 acción después del tiempo que le indique 
setTimeout(function () {
    setColor();
}, 3000);

//cambia el color de la página
function setColor() {
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue";
}

function stopChangeColor() {
    clearInterval(temporizador)
}