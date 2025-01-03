//datos primitivos
let estudiasteJs: boolean = true;
if (estudiasteJs) {
    console.log("Puedes seguir viendo este curso de Typescript");
    
}else{
    console.log("Primero tienes que ver el curso de JavaScript");
    
}

//number
let interMiami: number = 11;
let fcDallas: number = 11;
let messi: number = 1;
let juegaMessi: boolean = true;

//si la funcion no va a devolver nada se pone de tipo void
function jugar(equipo1:number, equipo2: number, juegaMessi:boolean):void {
    let motivo: string = ""

    if (juegaMessi) {
        equipo1 += messi;
        motivo = " por que juega messi"
    }
    if (equipo1 > equipo2) console.log(`Gana el equipo Inter Miami ${motivo}`);
    if (equipo1 == equipo2) console.log("Es un empate");
    if (equipo1 < equipo2) console.log("Gana el equipo FC Dallas");
    
}
jugar(interMiami,fcDallas,juegaMessi)

//any es cualquier tipo de dato(Hay que evitar de usar any)

let disney;

disney = "Cenicienta";
console.log(disney);

disney = 33
console.log(disney);

disney = true
console.log(disney);

//arrays

let arregloNum: number[] = [1,2,3,4,5,6]

let arregloTexto: string[] = ['HTML', 'CSS', 'JAVASCRIPT']

arregloTexto[0].indexOf('CSS')



