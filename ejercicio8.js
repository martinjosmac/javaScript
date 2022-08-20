/*Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos.*/

var max = 0;
var min = 9999;
var contador = -1;
var sum = 0;

while (numero != 0) {

    var numero = prompt("ingrese otro numero");

    contador = contador + 1;

    numero = parseInt(numero);

    sum = sum + numero;

    if (max < numero && numero != 0) {
        max = numero;
    }
    if (numero < min && numero != 0) {
        min = numero;
    }
};

var promedio = parseInt(sum) / parseInt(contador);

document.write("el promedio es de : " + promedio);

document.write("<br> el menor numero ingresado es: " + min);

document.write("<br> el mayor numero ingresado es " + max);
