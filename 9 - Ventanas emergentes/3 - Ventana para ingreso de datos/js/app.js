"use strict"

//*** Ventana para ingreso de datos

const video = document.querySelector('.bostonVideo');

video.addEventListener("ended", function () {
    let email = prompt("Escribe tu correo para ver mas videos"
        //"); console.log(email);

        , "data@info.com" // valor definido
    );
 
    //pulsa cancelar o no escribe nada 
    if (email == null || email == "") {
        console.log("Sin datos");
    } else {
        console.log(email);
    }
});