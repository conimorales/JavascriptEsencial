"use strict"

//********************************
//*** Ventana de confirmación

const video = document.querySelector('.bostonVideo');

video.addEventListener("ended", function () {
    let resultado = confirm("¿Deseas ver el video nuevamente?");
    console.log(resultado);
    //false or true

    // valor booleano --> método play invocado
    if (resultado) {
        video.play();
    }else {
        window.location = "http://www.google.com";
    }

});