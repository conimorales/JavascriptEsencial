"use strict"
//*** Eventos del teclado

// keydown
// keypress
// keyup

//escucha pulse de tecla detona evento
window.addEventListener("keydown", function (event) {
	console.log('Pulsando tecla');
	console.log(String.fromCharCode(event.keyCode)) //acceso a la letra que se apreta
})

//momento en que la tecla se mantiene pulsada
window.addEventListener("keypress", function (event) {
	console.log('Tecla pulsada')
})

//liberación de la tecla
window.addEventListener("keyup", function (event) {
	console.log('Tecla liberada')
})