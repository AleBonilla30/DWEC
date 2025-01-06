"use strict";
//datos primitivos
let estudiasteJs = true;
if (estudiasteJs) {
    console.log("Puedes seguir viendo este curso de Typescript");
}
else {
    console.log("Primero tienes que ver el curso de JavaScript");
}
//number
let interMiami = 11;
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
//si la funcion no va a devolver nada se pone de tipo void
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = "";
    if (juegaMessi) {
        equipo1 += messi;
        motivo = " por que juega messi";
    }
    if (equipo1 > equipo2)
        console.log(`Gana el equipo Inter Miami ${motivo}`);
    if (equipo1 == equipo2)
        console.log("Es un empate");
    if (equipo1 < equipo2)
        console.log("Gana el equipo FC Dallas");
}
jugar(interMiami, fcDallas, juegaMessi);
//any es cualquier tipo de dato(Hay que evitar de usar any)
let disney;
disney = "Cenicienta";
console.log(disney);
disney = 33;
console.log(disney);
disney = true;
console.log(disney);
//arrays
let arregloNum = [1, 2, 3, 4, 5, 6];
let arregloTexto = ['HTML', 'CSS', 'JAVASCRIPT'];
arregloTexto[0].indexOf('CSS');
//objetos
let programador = {
    nombre: "Alejandra Bonilla",
    tecnologias: ['Angular', 'Java', 'JavaScript', 'php', 'python'],
    tomaCafe: true
};
console.log(programador);
let programador1 = {
    nombre: 'Jorge Amor',
    tecnologias: ['Python'],
    tomaCafe: false
};
let programador2 = {
    nombre: 'Damaris',
    tecnologias: ['Html', 'css'],
};
function enviarCurriculum(programador) {
    console.log(`Este curriculum es de ${programador.nombre}`);
}
enviarCurriculum(programador1);
//clases y Poo-> programacion orientada a objetos
class Pelicula {
    nombre; //se le ppone el siggno de interrogacion para que sepa que no lo has inicializado
    protagonistas;
    actores;
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
    proyectarEnCine() {
        console.log(`${this.nombre} esta siendo proyectada`);
    }
}
const pelicula = new Pelicula("Harry potter", ['Harry', 'Hermione', 'ron'], ['ron', 'Hermione', 'Harry Potter', 'Ginny', 'Sirius Black']);
console.log(pelicula);
console.log(pelicula.proyectarEnCine());
//encapsulamiento y genericos
class Sorteo {
    nombre;
    numero;
    constructor(nombre) {
        this.nombre = nombre;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getNumero() {
        return this.numero;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.numero}`;
    }
}
let sorteo = new Sorteo("Alejandra Bonilla");
sorteo.setNumero(9);
console.log(sorteo.sortear());
