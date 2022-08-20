/*Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”. */
var numero = prompt("ingrese un numero");
if (numero % 2 == 0 && numero != 0) {
    document.writeln("el numero es par")
} else if (numero == 0) {
    document.write("el numero no es par ni impar");
} else {
    document.writeln("el numero es impar");
}