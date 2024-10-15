console.log("Mi primer Js");
/* 
existen varios tipos de variables, const let y var
const se utiliza si sabemos que no va a cambiar su valor
let es es mas utilizado y el recomendado 
var es global y por lo tanto es accesible desde cualquier sitio

no indico tipos en la variable -> JS es un lenguaje NO TIPADO
*/
const NOMBRE_ASIGNATURA = "Desarrollo cliente"//no cambia su valor y no se puede reasignar

if (true) {
    let nombre = "Ale";
    nombre = "Lisbeth"
    console.log(nombre)//solo se puede usar si esta dentro del bloque, con let no es accesible fuera solo si la declaramos fuera

}

//tipos de variables
let nombre = "Ale"//string
let edad = 33 //number
let altura = 1.60 //number
let experiencia = true //bool
let fechaNacimiento = new Date() //object
let asignaturas = [] //array - arrayList
let sinDefinir  //undefined 
let sinValor = null
//NaN -> not a number 

console.log(nombre);
console.log(edad);
console.log(altura);
console.log(experiencia);
console.log(fechaNacimiento);
console.log(asignaturas);
console.log(sinDefinir);
console.log(sinValor);

//su tipo 
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof altura);
console.log(typeof experiencia);
console.log(typeof fechaNacimiento);
console.log(typeof asignaturas);
console.log(typeof sinDefinir);
console.log(typeof sinValor);

