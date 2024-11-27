/* 3. Modifica el ejercicio anterior para que todas las funciones pidan por parámetros dos elementos. 
En el caso de que pase 1 o más de dos parámetros la ejecución saltará un error de excepción */

function verificarParameros(numero1, numero2) {
    if (arguments.length !== 2) {
        throw new Error(alert("Se requiere exactamente dos parametros"));
    }
}

function sum(numero1, numero2 = 0) {
    verificarParameros(numero1, numero2);
    return numero1 + numero2;
}
function resta(numero1, numero2) {
    verificarParameros(numero1, numero2);
    return numero1 - numero2;
}
function multi(numero1, numero2) {
    verificarParameros(numero1, numero2);
    return numero1 * numero2;
}
function division(numero1, numero2) {
    verificarParameros(numero1,numero2)
    return numero1 / numero2;
}

try {
    let num1 = Number(prompt("Introduce un numero"))
    let num2 = Number(prompt("Introduce un segundo numero"))

    alert(
        `El resultado es:\n
        Suma: ${sum(num1,num2)}
        Resta: ${resta(num1,num2)}
        Multiplicacion: ${multi(num1,num2)}
        Division: ${division(num1,num2)}
        `
    )
} catch (error) {
    alert(error.message)
}



