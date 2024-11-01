/* 5. Operaciones

Pedir dos números por teclado y mostrar en una alerta todos las operaciones posibles para dichos números (suma, resta, multiplicación y división). 
Adicionalmente el programa hará lo siguiente:

- si se introduce números menores que 0 o letras que salte una alerta indicando el error y el programa parará
- tras mostrar todas las operaciones se pedirá confirmación al usuario para que indique si quiere continuar 
realizando operaciones: en caso positivo el programa volverá a empezar. En caso negativo el programa parará
- si se detecta que alguna de las operaciones es negativa el programa parará 
tras realizar todas las operaciones de los números */

let num1, num2;
function realizarOperaciones() {
    num1 = Number(prompt("Introduce un numero:"));
    num2 = Number(prompt("Introduce un segundo numero"));

    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
        alert("Error ❌: se ha producido un error tienen que ser numero o mayores que cero");
        return;
    }
    //realizar las operaciones

    let suma = num1 + num2
    let resta = num1 - num2
    let multiplicacion = num1 * num2
    let division = num1 / num2

    alert(
    `Resultado de la operacion:
    suma: ${suma},
    resta: ${resta},
    multiplicacion: ${multiplicacion},
    division: ${division}`
    );

    if (suma <0 || resta < 0 || multiplicacion <0 || division < 0) {
        alert("Error ❌: Una de las operaciones resulto en numero negativos y el programa se detendra...")
        return
    }
    let continuar = confirm("Quieres continuar con las operaciones matematicas?");

    if (continuar) {
    realizarOperaciones()

    }else{
    alert("Es una pena que nos quieras continuar 😥")
    }
}

realizarOperaciones()
