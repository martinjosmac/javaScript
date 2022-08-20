/*Escribir una función flecha que reciba una palabra y la devuelva al revés.*/
var palabra = prompt("ingrese una palabra");

function palabraInvertida(palabra) {
    return palabra.split("").reverse().join("");
}
console.log(palabraInvertida);
document.write(palabraInvertida);