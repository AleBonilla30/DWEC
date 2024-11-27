/* 1. Dado el array = [1,2,3,4,5,6,7,8,9,10]


- Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
- Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
- Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.
- Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
- Calcular la media de todos los elementos del array */

let myArray = [1,2,3,4,5,6,7,8,9,10];
let i = 0;
while (i < myArray.length) {
    console.log(myArray[i]);
    i++;
}

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]); 
}

for (const item of myArray) {
    console.log(item);
    
}

myArray.forEach(element => {
    
    console.log(element);
    
});

myArray.forEach(item => {
    item += 1;
    console.log(item)

});

let suma = 0;

for (let i = 0; i < myArray.length; i++) {
    suma += myArray[i];
}

let media = suma / myArray.length;
console.log(media);



