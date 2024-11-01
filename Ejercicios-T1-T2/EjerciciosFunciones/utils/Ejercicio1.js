/* 1. Operaciones funciones 

Pedir al usuario que introduzca por teclado dos números y mediante funciones mostrar el resultado de todas las operaciones 
en un cuadro de alerta
 */
let num1 = Number(prompt("Introduce un numero:"));
let num2 = Number(prompt("Introduce un segundo numero:"));

function operations() {
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multi = num1 * num2;
    let division = (num1 / num2).toFixed(2);
    let modulo = num1 % num2;

    alert(
        `El resultado de los dos numeeros es:\n
        Suma: ${suma}.
        Resta: ${resta}.
        Multiplicacion: ${multi}.
        Division: ${division}.
        Modulo: ${modulo}.
        `
    )
}
operations();