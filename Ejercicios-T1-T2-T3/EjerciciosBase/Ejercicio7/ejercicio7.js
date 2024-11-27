/* 7. Operaciones recurrentes

Pedir al usuario que introduzca por teclado dos números y 
mediante funciones mostrar el resultado de todas las operaciones en un cuadro de alerta
Modificar el ejercicio anterior para que una vez introducidos los números
aparezca un cuadro de dialogo preguntando que si se quieren realizar las operaciones. 
En caso de contestar que si aparecerán por consola y 
con un espacio de 2 segundos entre cada una los resultados de la suma, resta, multiplicación y división.
 */

let num1 = Number(prompt("Introduce un numero:"))
let num2 = Number(prompt("Introduce un segundo numero:"))

let continuar = confirm("Quieres realizar las opreaciones matematicas?");

if (continuar) {
    operaciones()
}else{
    alert("Es una pena que nos dejes 😥")
}

function operaciones() {
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multi = num1 * num2;
    let división = (num1 / num2).toFixed(2);

    /* alert(
        `El resultado de la operacion:\n
        Suma de ${num1} y ${num2} es: ${suma}\n.
        Resta de ${num1} y ${num2} es: ${resta}\n.
        Multiplicación de ${num1} y ${num2} es: ${multi}\n.
        División de ${num1} y ${num2} es: ${división}\n.
        `
    ) */

    setTimeout (() =>{
        alert(`Suma: ${suma}`)
    },2000);
    setTimeout (() =>{
        alert(`Resta: ${resta}`)
    },4000);
    setTimeout (() =>{
        alert(`Multiplicacion: ${multi}`)
    },6000);
    setTimeout (() =>{
        alert(`Division: ${división}`)
    },8000);
    
}
