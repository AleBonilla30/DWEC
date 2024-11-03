/* 5. Continuando con el ejercicio anterior, ves sacando por consola cartas de la baraja cada 5 segundos.
Hay que tener en cuenta que cuando una baraja se tiene que quitar del mazo para que no pueda volver a salir. 
Una vez salga la varaba tendrás que poner el siguiente mensaje:  */
const { shuffle } = require("underscore");

let baraja = []


function generadorCartas(palo) {

    for (let i = 1; i <= 13; i++) {

        //ponemos el valor de las cartas
        let carta;
        let valor;
        if (i <=10) {
            carta = i//nummeros del 1 al 10
            valor = i
        }else{
            switch (i) {
                case 11:
                    carta = 'J'
                    valor = 11
                    break;
            
                case 12:
                    carta = 'Q'
                    valor = 12
                    break
                case 13:
                    carta = 'K'
                    valor = 13
                    break
            }

        }
    baraja.push({carta: carta + palo, valor: valor, palo: palo})
    
    }
}

//generacion de cartas de todos los palos
generadorCartas('C')
generadorCartas('D')
generadorCartas('R')
generadorCartas('T')


//imprimir baraja completa al imprimir todos los valores de un objeto vamos a sacarlo con Json.stringify
console.log("\nBaraja Ordenada");
for (const element of baraja) {
    console.log(JSON.stringify(element));
    console.log("----------------------");
    
}
//console.log(`Baraja completa: ${baraja}`);


let barajaDesordenada = shuffle(baraja)//desorneda el array
//imprimir barraja desordenaja
console.log("\nBarraja desordenada");

for (const element of barajaDesordenada) {
    console.log(JSON.stringify(element));
    console.log("----------------------");
}


//aqui sale la baraja cada 5 segundos

barajaDesordenada.forEach((cartaObj, indice) => {
    setTimeout(() => {
        console.log(`Carta: ${cartaObj.carta}`);
        console.log(`Valor: ${cartaObj.valor}`);
        console.log(`palo: ${cartaObj.palo}`);
        console.log('------');
        
        
        
    }, indice * 5000);
});

setTimeout(() => {
    console.log("Ya no hay mas cartas en la baraja");
    
}, barajaDesordenada.length * 5000);