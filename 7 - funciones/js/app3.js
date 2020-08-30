"use strict"
//*** Uso del operador this

//se selecciona el boton de html y se almacena su refetencia
const boton = document.querySelector('.boton');


/* boton.addEventListener('click', function () {
    console.log(this.innerHTML); pulso para acceder al botón
}) */

boton.addEventListener('click', () => {
    console.log(this)
    //acceso a la ventana completa 
    this.location = "http://www.google.com";
    // redireccionamiento

})