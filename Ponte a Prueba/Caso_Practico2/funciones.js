/* Cuando escribes ...numeros en los parámetros de la función, estás indicando que la función puede recibir cualquier cantidad de argumentos.
Todos esos argumentos se agrupan en un array llamado numeros. */

/* el uso de ...numeros en la función media se llama operador de parámetros rest (o "rest parameter" en inglés).
 Este operador permite que la función reciba un número indefinido de argumentos y los agrupe en un solo array llamado numeros. */

function media(...numeros) {
    let resultado = 0;

    if (numeros.length === 0) {
        return resultado
    }

    for (let item of numeros) {
        resultado += item;
    }
    return resultado/numeros.length;

}

console.log(media());
console.log(media(2,5));
console.log(media(3,5,7,8,9));
