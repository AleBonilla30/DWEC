/* function funcion1(a,b) {
    return (a + b)/2;
}

function funcion2(a) {
    let b = 5;
    return a + b;
}

function funcion3(a, b) {
    let c = 10;

    return a + b + c;
} */

//funciones flechas
/* El cuerpo de la funcion solo tiene una linea y se puede omitir las llaves y el return */

let function1 = (a,b) => (a + b)/2;

//el cuerpo de la funcion de varias lineas se debe incluir las llaves y el return
let function2 = (a) => {
    let b = 5;
    return a + b;
}

let function3 = (a,b) => {
    let c = 10;
    return a + b + c;
}

console.log(function1(4,6));
console.log(function2(5));
console.log(function3(4,7));


