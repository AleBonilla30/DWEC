//Dado el siguiente array de objetos, realiza las siguientes operaciones mediante programación funcional:

let coches = [
    {id: 1, marca: "Seat", modelo: "Ibiza", precio: 10000},
    {id: 2, marca: "Seat", modelo: "Ateca", precio: 18000},
    {id: 3, marca: "Volkswagen", modelo: "Golf", precio: 21000},
    {id: 4, marca: "Kia", modelo: "Niro", precio: 30000}
]




//· Obtén los coches de la marca «Seat».

let cochesSeat = coche => coche.marca == "Seat";
let resultado1 = coches.filter(cochesSeat);
console.log(resultado1);

//· Obtén los coches cuyo precio sea menor que 25 000.

let precioMenor = coche => coche.precio < 25000;
let resultado2 = coches.filter(precioMenor);
console.log(resultado2);

//· Encuentra el primer coche cuyo precio sea mayor que 20 000.
let primerCochePrecioMayor = coche => coche.precio > 20000;
let resuktado3 = coches.find(primerCochePrecioMayor);
console.log(resuktado3);


//· Transforma el array en otro con los mismos campos más uno adicional, denominado premium. Si el precio es 
//mayor de 20 000, premium=true; en caso contrario, premium=false.

let cochePremium = coches.map(coche => {
    let nuevoCoche = {}
    Object.assign(nuevoCoche,coche);/* Object.assign es un método que copia todas las propiedades de un objeto a otro. En este caso, copia las propiedades de coche al objeto nuevoCoche.
    Así, nuevoCoche se convierte en una copia exacta de coche, pero es un objeto independiente, por lo que cualquier cambio en nuevoCoche no afectará a coche. */

    nuevoCoche.premium = (nuevoCoche.precio > 20000) ? true : false; //Aquí se agrega una nueva propiedad llamada premium a nuevoCoche
    return nuevoCoche;
});

console.log(cochePremium);


/*  
· Calcula el precio medio de los coches de la marca «Seat». 
*/

let precioMedio = coches.reduce((acumulador,coche) =>{
    if (coche.marca  == "Seat") {
        //se suma el precio
        acumulador.total += coche.precio;
        //incrementa el numero de vehiculos 
        acumulador.cuenta++;
    }
    return acumulador;
}, {total: 0, cuenta: 0} );

let precioMedioSeat = precioMedio.total / precioMedio.cuenta;

console.log(precioMedioSeat);



