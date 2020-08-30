"use strict"

//********************************
//*** Ventana de alerta

const video = document.querySelector('.bostonVideo');
//avisa que el vídeo termino de reproducirse 
video.addEventListener("ended", function () {
   alert("MENSAJE \n\n El video ha terminado");
});