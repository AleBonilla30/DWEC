/* 4. Comparación de fechas:

Realiza un programa que pida por prompt el día, mes y año de tu cumpleaños. 
Indica cuantos días han pasado desde tu cumpleaños hasta el día de hoy
 */

alert("Binevenido Introduce tu fecha de cumpleaños");

let dia = Number(prompt("Introduce el dia de tu cumpleaños (1-31):"));
let mes = Number(prompt("Introduce el mes de tu cumpleaños (1-12):"))-1;
let año = Number(prompt("Introduce el año de tu cumpleaños (YYYY):"));

let brithday = new Date(año,mes,dia);
let fechaActual = new Date();

let tiempoPasados = fechaActual - brithday;// te devuelve milisegundos en las dos fechas 

//convertimos milisegundos en dias con floor se redondea los numeros hacia abajo

let diasPasados = Math.floor(tiempoPasados/(1000 * 60 * 60 *24))//convertimos los milisegundos en dias

alert(`Han pasado ${diasPasados} dias desde tu cumpleaños hasta hoy`);

