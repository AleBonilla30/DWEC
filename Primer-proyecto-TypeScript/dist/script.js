"use strict";
console.log("Mi primero programa Typescript");
//cuando se tiene un ts se tiene que compilar a js y cada cambio se hace con tsc y el nombre del archivo para poder ver los cambios en js
//con el modo observador que autamitcamente hace los cambios en el archivo js el comando es tsc script.ts -w(watch)
//si tenemos mas de un archivo ts y queremos que js haga los cambios de varios archivos se hace con 
//tsc -init y luego tsc -w
//para sacar las variables tiene que ser tipado 
//ejemplo 
//variables 
const nombre = 'Alejandra';
const edad = 33;
console.log(`Hola, ${nombre}, tu edad es de ${edad}`);
//declaracion de funciones con tipado explicito
function sumar(a, b) {
    return a + b;
}
console.log(sumar(10, 89));
//funciones de flecha con retorno implicito 
let dividir = (a, b) => a / b;
console.log(dividir(40, 5));
//funciones con parametros opcionales en este el signo ? significa que no es obligatorio usuarlo
function saludar(nombre, edad) {
    if (edad !== undefined) {
        return `Hola mi nombre es ${nombre} y tengo ${edad} años.`;
    }
    else {
        return `Hola mi nombre es ${nombre}.`;
    }
}
console.log(saludar("Ale Bonilla"));
console.log(saludar("Ale Bonilla", 33));
//funciones con valores por defecto
function saluda(nombre, edad = 33) {
    return `Hola mi nombre es ${nombre} y tengo ${edad} años.`;
}
console.log(saluda("Damaris Bonilla", 35));
//clases
class Persona {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
    mayorEdad(edad) {
        let mayorEdad = true;
        if (mayorEdad) {
            return `Que viejo estas`;
        }
        else {
            return "Eres un jovenazo";
        }
    }
}
let persona1 = new Persona("Alejandra");
console.log(persona1);
console.log(persona1.mayorEdad(33));
