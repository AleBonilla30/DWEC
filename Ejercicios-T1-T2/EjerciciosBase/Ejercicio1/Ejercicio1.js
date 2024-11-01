/* 1. Piramide

Escriba un script que pedido por consola (prompt un número), 
represente por consola la siguiente figura con el número de filas introducido en el prompt.
En el caso de no introducir un número o que sea menor que 0 saltará un aviso por consola y 
dará la posibilidad de repetir el proceso:

```
Cuantas filas quieres que aparezca: 7

+
++
+++
++++
+++++
++++++
+++++++ */

let numero;
do {
    numero = Number(prompt("¿Cuantas filas quieres que aparezca?"));
    if (isNaN(numero) || numero <= 0) {
        alert("El dato es incorrecto ❌ o el numero es menor que cero"); 
    }
    
} while (isNaN(numero) || numero <=0);

for (let i = 1; i <= numero; i++) {

    console.log("+".repeat(i));
    
}