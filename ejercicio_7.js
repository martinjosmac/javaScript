/*Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial.*/

var max = prompt("ingrese maximo positivo");
var sum = 0;
do {
    var num = prompt("ingrese numero");
    num = parseInt(num); 
    var sum = parseInt(sum + num);
} while (sum < max);

document.write(sum);