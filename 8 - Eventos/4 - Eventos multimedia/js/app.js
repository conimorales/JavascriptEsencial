"use strict"

//********************************
//*** Eventos multimedia

const video = document.querySelector('.bostonVideo');
//play momento en que se le dio reproducir
video.addEventListener("play", function () {
    console.log('El video ha iniciado');
});

//busqueda de ubicación del control de vídeo
video.addEventListener("seeking", function () {
    console.log('Se esta buscando en el video', this.currentTime);
});

//ended evento ya termino
video.addEventListener("ended", function () {
    console.log('El video ha terminado');
});