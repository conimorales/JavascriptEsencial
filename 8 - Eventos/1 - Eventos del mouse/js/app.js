"use strict"
//*** Eventos del mouse

//guarda en una constante llamada botón 
const boton = document.querySelector('.boton');


//addEventListener-->escucha de eventos
boton.addEventListener('click', function () {
    console.log("El boton se ha pulsado");
})

//cursor sobre el botón
boton.addEventListener('mouseover', function () {
    console.log("El mouse esta sobre el botón");
})

//cursor fuera del botón
boton.addEventListener('mouseout', function () {
    console.log("El mouse esta fuera del botón");
})