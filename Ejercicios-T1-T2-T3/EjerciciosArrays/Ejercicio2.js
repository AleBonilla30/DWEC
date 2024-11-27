/* 2. Crear un array vacío, luego generar 20 números al azar y guardarlos en un array. 
Una vez generados realiza las siguientes acciones: 

- Muestra por consola los pares
- Muestra por cosola todos los numeros
- Muestra el número máximo
- Muestra el número mínimo
- Muestra la media */

let numero = []
for (let i = 0; i < 20; i++) {
    let numerosAleatorios = Math.floor(Math.random() *100)//math.floor es para redondearlo a un numero entero
    numero.push(numerosAleatorios)
}

console.log("Array completo:");
console.log(numero)

console.log("Array pares");

numero.forEach(element => {
    if (element % 2 == 0) {
        console.log(element);
    }
});





console.log("Array maximos y minimos");
let maximo = Math.max(...numero)//se usa el operador de propagacion por que espera una lista de elementos o array y con ... se genera
    console.log(maximo);
    let minimo = Math.min(...numero);
    console.log(minimo);
    

    console.log("La media de los numeros:");
    let suma = 0;

    for (let i = 0; i < numero.length; i++) {
        suma += numero[i];
    }
    let media = suma/numero.length
    console.log(media);
    



