/* 3. Crea un array con los siguientes valores: 

```javascript
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
```

Una vez tengas introducidos todos los valores realiza las siguientes tareas: 

- Ordena el array y obten el valor máximo y mínimo
- Obtén la medida de edad */

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort((a,b) => a -b)

console.log("Array Ordenado: ", ages);

let min = ages[0] //despues de ordenarlo el minimo es  el primer elemento del array
let max = ages[ages.length-1] // es el ultimo elemento del array ordenado 


console.log(`Minimo: ${min}`);
console.log(`Maximo: ${max}`);

let suma = 0;

for (let i = 0; i < ages.length; i++) {
    suma += ages[i];
}

let media = suma / ages.length

console.log(`La media de las edades es: ${media}`);
