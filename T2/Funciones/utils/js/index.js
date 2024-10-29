//console.log(`Hola ${nombre} este es mi programa de Js`);

//alert un mensaje
//alert(`Bienvenido ${nombre} a la pagina`); //saca inf sin posibilidas hacer nada

/* let nombre = prompt("Introduce tu nombre");//pide informacion al usuario

alert(`Binevenido a mi pagina ${nombre}`);

let edad = parseInt(prompt("Introduce tu edad"));

if (isNaN(edad)) {
    alert("El dato introducido es incorrecto");
}else{
    alert(`Tu edad es de ${edad}`);
}
 */

let nombre = "";
let edad = 0;
let continuar = confirm("Estas seguro que quieres continuar"); //boolean --> confirm pide una pregunta y responde true/false
if (continuar) {
    
    nombre = prompt("Introduce tu nombre");
    saludar(nombre);

    do {
        edad = parseInt(prompt("Introduce tu edad")); //estas pasando el dato que solicitas a numero
        if (isNaN(edad)) {
        alert("El dato introducido es incorrecto");
        } else {
            alert(`Tu edad es de ${edad}`);
        }
    } while (isNaN(edad));

} else {
  //alert("Que pena que no quieres continuar 😥");
    Swal.fire({
    title: "Que pena que no quieres continuar 😥",
    showClass: {
        popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
            `,
    },
    hideClass: {
        popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
            `,
    },
    });
}

//funciones en js se puede tener funciones fuera de la clase

function saludar(nombre) {
    alert(`¡Bienvenido a mi pagina ${nombre}!`);
}

/* A las funciones se le puede poner parametros por defecto 
function sumar(param1, param2 = 0) {//si se le pasa un solo parametro saldra 4
    return param1 + param2;
}
console.log(sumar(4));
parametros posicionales y solo funciona cuando el segundo parametro le das un parametro por defecto
y solo va a valer si los dos parametros los pones por defecto
*/
function sumar(param1, param2) {
    return param1 + param2;
}

console.log(sumar(4, 7));

//funciones arrow function o lambda

//se escribe de forma muy rapida
//let variable = (param1, param2, param3) => {cuerpo de la funcion} --> asi se escribe la funcion lambda y se le pone tantos parametros como quiero que tenga

if (continuar) {
    let num1 = 0;
    let num2 = 0;

    let sumaFlecha = (param1, param2) => {
    return param1 + param2;
  }; //estas funciones primero las declaras y luego las llamas


    //verificar el primero numero
    do {
        num1 = Number(prompt("Introduce un numero"));
        
        if (isNaN(num1)) {
            alert("El dato que has introducido no es un numero")
        }
        
        
    } while (isNaN(num1));


    //verificar el segundo numero 

    do {
        num2 = Number(prompt("Introduce un segundo numero"));
        if (isNaN(num2)) {
            alert("El segundo numero no es correcto");
        }
    } while (isNaN(num2));


    alert(`la suma de ${num1} + ${num2} = ${sumaFlecha(num1, num2)}`);
            


//se puede poner alerts con librerias externas hay dos opciones o instalar npm de la libreria o pegar el script en html y tiene que estar disponible antes
//des script que lo llama

    Swal.fire({
    title: "Gracias por visitar mi pagina!",
    text: "You clicked the button!",
    icon: "success",
    });



}


