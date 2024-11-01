/* 1. Operaciones funciones 

Pedir al usuario que introduzca por teclado dos números y mediante funciones mostrar el resultado de todas las operaciones 
en un cuadro de alerta
 */
let num1 = Number(prompt("Introduce un numero:"));
let num2 = Number(prompt("Introduce un segundo numero:"));

function sum(numero1, numero2) {
    return numero1 + numero2;
}
function resta(numero1, numero2) {
    return numero1 - numero2
}
function multi(numero1, numero2) {

    return numero1 * numero2
}
function division(numero1, numero2) {

    return numero1 / numero2
}

alert(
    `El resultado de la suma es:\n
    ${sum(num1,num2)}`

);
alert(
    `El resulta de la resta es:\n
    ${resta(num1,num2)}`

);
alert(
    `El resulta de la multipliacion es:\n
    ${multi(num1,num2)}`

);
alert(
    `El resulta de la Division es:\n
    ${division(num1,num2).toFixed(2)}`

);
/* sum(num1,num2);
resta(num1,num2);
multi(num1,num2);
division(num1,num2); */