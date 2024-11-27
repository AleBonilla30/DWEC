/* 2. Modifica el ejercicio anterior para que en el caso de no introducir un sengundo parámetros, 
el valor por defecto que tomará el segundo operadores será de 0
 */

let num1 = Number(prompt("Introduce un numero"))
let num2 = Number(prompt("Introduce un segundo numero"))

function sum(numero1, numero2 = 0) {
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
    `El resulta de la multiplicacion es:\n
    ${multi(num1,num2)}`

);
alert(
    `El resulta de la division es:\n
    ${division(num1,num2).toFixed(2)}`

);