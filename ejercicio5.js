/*Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división. */
var numero1 = prompt("ingrese el primer numero");
var numero2 = prompt("ingrese el segundo numero");

var opcion = prompt("ingrese la opcion que desea realizar suma, resta, multiplicacion, division(s/S, r/R, m/M, d/D))");

opcion = opcion.toLocaleLowerCase;

switch (opcion) {
    case "s":
    case "S":
        var totalSuma = parseInt(numero1) + parseInt(numero2);
        document.write("el total de la suma es: " + totalSuma);
        break;
    case "r":
    case "R":
        var totalResta = parseInt(numero1) - parseInt(numero2);
        document.write("el total de la resta es: " + totalResta);
        break;

    case "m":
    case "M":
        var totalMultiplicacion = parseInt(numero1) * parseInt(numero2);
        document.write("el total de la multiplicacion es: " + totalMultiplicacion);
        break;

    case "d":
    case "D":
        var totalDivision = parseInt(numero1) / parseInt(numero2);
        document.write("el total de la division es: " + totalDivision);
        break;

    default:
        break;
}  