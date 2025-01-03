//datos primitivos
var estudiasteJs = true;
if (estudiasteJs) {
    console.log("Puedes seguir viendo este curso de Typescript");
}
else {
    console.log("Primero tienes que ver el curso de JavaScript");
}
//number
var interMiami = 11;
var fcDallas = 11;
var messi = 1;
var juegaMessi = true;
//si la funcion no va a devolver nada se pone de tipo void
function jugar(equipo1, equipo2, juegaMessi) {
    var motivo = "";
    if (juegaMessi) {
        equipo1 += messi;
        motivo = " por que juega messi";
    }
    if (equipo1 > equipo2)
        console.log("Gana el equipo Inter Miami ".concat(motivo));
    if (equipo1 == equipo2)
        console.log("Es un empate");
    if (equipo1 < equipo2)
        console.log("Gana el equipo FC Dallas");
}
jugar(interMiami, fcDallas, juegaMessi);
//any es cualquier tipo de dato(Hay que evitar de usar any)
var disney;
disney = "Cenicienta";
console.log(disney);
disney = 33;
console.log(disney);
disney = true;
console.log(disney);
//arrays
var arregloNum = [1, 2, 3, 4, 5, 6];
var arregloTexto = ['HTML', 'CSS', 'JAVASCRIPT'];
arregloTexto[0].indexOf('CSS');
