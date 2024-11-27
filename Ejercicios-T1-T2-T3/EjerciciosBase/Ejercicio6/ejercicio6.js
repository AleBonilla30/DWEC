/* 6. Frases

Pedir al usuario que introduzca una frase por teclado. Tras meter la frase se ejecutará la siguiente funcionalidad:

- Si la frase tiene menos de 10 letras, se volverá a pedir nuevamente
- Si tiene más de 10 letras aparecerá una alerta con la siguiente información:

- El dato introducido tiene:
- X letras
- X palabras
- X frases */


let frase = "";
do {
    frase = prompt("Introduce una frase:")
    if (frase.length < 10) {
        alert("Introduce nuevamente la frase")
    }
} while (frase.length < 10);

let letras = frase.replace(/\s+/g, "").length//elimina los espacios y cuenta las letras
let palabras = frase.trim().split(/\s+/).length // divide la frase en palabras por espacio

alert(
    `La frase introducida tien:\n
    ${letras} letras\n
    ${palabras} palabras\n`
)