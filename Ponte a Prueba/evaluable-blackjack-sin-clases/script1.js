

let sumCrupier = 0;
let sumYours = 0;
let desk = []
let playerName = "";
let hiddenCard ;
let hiddenCardValue;
let hiddenCardImg;

//inicio del juego

window.onload = function() {

    playerName = prompt("Introduce tu nombre:")
    document.getElementById("welcome").textContent = `¡Bienvenido, ${playerName} listo para jugar..!`
    crearBaraja()
    barajear();
    iniciarJuego();

}


//construir Baraja

function crearBaraja() {
    let values = ["A", "2","3","4","5","6","7","8","9","10","J","Q","K"];
    let types = ["C","T","D","P"];
    desk = [];
    for (let value of values) {
        for (let type of types) {
            desk.push({value: value, type: type});
        }
    }
}

//mezclar baraja con shuffle
function barajear(){
    desk = _.shuffle(desk);

}

//funcion principal del juuego

function iniciarJuego() {
    hiddenCard = desk.pop();
    hiddenCardValue = obtenerValor(hiddenCard);
    

    //se crea la imagen reverso 
    hiddenCardImg = document.createElement("img");
    hiddenCardImg.src = "./utils/images/cards/red_back.png";
    document.getElementById("cartas-crupier").append(hiddenCardImg)


        //carta visible 
        let card = desk.pop()
        agregarCartas("cartas-crupier", card, "crupier");

        sacarCartasCrupierTime();
    

    

    /* while (sumCrupier < 17) {
        let card = desk.pop();
        agregarCartas("cartas-crupier", card, "crupier")
    } */
    //activar los bonotes
    document.getElementById("ask").disabled = false
    document.getElementById("stay").disabled = false
    


    //eventos para los botones
    document.getElementById("ask").addEventListener("click", ask)
    document.getElementById("stay").addEventListener("click", stay)
    
}

/* let hiddenCardRevealed = false */

function sacarCartasCrupierTime() {


    
    let intervalo =  setInterval(() => {
        let puntosCartaOculta = sumCrupier + hiddenCardValue;
        if (puntosCartaOculta < 17) {
            let cardCrupier = desk.pop();
            agregarCartas("cartas-crupier", cardCrupier, "crupier");
            
            document.getElementById("suma-crupier").innerText = sumCrupier;
        }
        else {

            clearInterval(intervalo);
            if (puntosCartaOculta > 21 ) {
                hiddenCardImg.src =  `./utils/images/cards/${hiddenCard.value}${hiddenCard.type}.png`
                document.getElementById("suma-crupier").innerText = sumCrupier + hiddenCardValue;
                endGame(`El jugador ${playerName} gana, la banca superó los 21`);
        
            }
        }
    }, 2000);

    
} 
        


     // Solo sacamos cartas si la banca tiene menos de 17 puntos
    /* if (sumCrupier <= 17) {
        // Sacamos una carta
        if (!hiddenCardRevealed) {
            sumCrupier += hiddenCardValue;
            hiddenCardRevealed = true
            
        }else{

            let carta = desk.pop();
            agregarCartas("cartas-crupier", carta, "crupier");
        }
        // Si la banca sigue teniendo menos de 17 puntos, espera 1 segundo y vuelve a sacar otra carta
        document.getElementById("suma-crupier").innerText = sumCrupier;


        setTimeout(() => {
            sacarCartasCrupierTime();
        }, 1000);
    } else {
        // Si la banca ya tiene 17 o más puntos, mostramos el resultado final
        if (sumCrupier > 21) {
            hiddenCardImg.src =  `./utils/images/cards/${hiddenCard.value}${hiddenCard.type}.png`
            endGame(`El jugador ${playerName} gana, la banca superó los 21`);
        }
    }   */


function agregarCartas(divId, card, player) {
    let cardImg = document.createElement("img")
    cardImg.src =` ./utils/images/cards/${card.value}${card.type}.png`;
    document.getElementById(divId).append(cardImg);

    let cardValue = obtenerValor(card);

    if (player === "crupier") {
        sumCrupier += cardValue;
        document.getElementById("suma-crupier").innerText = sumCrupier;

        if (sumCrupier > 21) {
            endGame(`El jugador ${playerName} gana, la banca superó 21.`) 
        }
    }else if (player === "player"){
        sumYours += cardValue;
        document.getElementById("suma-player").innerText = sumYours;
        if (sumYours > 21) {
            hiddenCardImg.src =  `./utils/images/cards/${hiddenCard.value}${hiddenCard.type}.png`
            sumCrupier += hiddenCardValue;
            document.getElementById("suma-crupier").innerText = sumCrupier;
            endGame(`La Banca gana, El jugador ${playerName} superó 21.`)
        }
    }
}


function obtenerValor(card) {
    if (card.value === "A") {
        return 1;
    }else if (["J","Q","K"].includes(card.value)) {
        return 11;
    }else{
        return parseInt(card.value);//retorna los valores numericos
    }
}

function ask() {
    let card = desk.pop()
    agregarCartas("tus-cartas", card, "player")
}

function stay() {

    hiddenCardImg.src = `./utils/images/cards/${hiddenCard.value}${hiddenCard.type}.png`
    sumCrupier += hiddenCardValue;
    document.getElementById("suma-crupier").innerText = sumCrupier;
    

    /* while (sumCrupier <=17) {
        let card = desk.pop();
        agregarCartas("cartas-crupier", card, "crupier");
    } */

    if (sumCrupier >  sumYours && sumCrupier <= 21) {
        endGame("La banca gana.")

    }else if (sumCrupier == sumYours){
        endGame("Se ha quedado en empate!!")
    }else{
        endGame(`El jugador ${playerName} gana.`)
    }
}

function resetGame() {
    sumCrupier = 0;
    sumYours = 0;

    //limpiar los contenedores delas cartas
    document.getElementById("cartas-crupier").innerText= "";
    document.getElementById("tus-cartas").innerText= "";

    //reiniciar el procentaje de la suma
    document.getElementById("suma-crupier").innerText = 0;
    document.getElementById("suma-player").innerText = 0;

    //limpiar el resultado 
    document.getElementById("result").innerText = "";

    //desactivar los botones hasta que empiece el juego

    document.getElementById("ask").disabled = true;
    document.getElementById("stay").disabled = true;

    //crear y mezclar la baraja
    crearBaraja();
    barajear();

    iniciarJuego();
}


function endGame (message){
    document.getElementById("result").innerText = message;
    document.getElementById("ask").disabled = true;
    document.getElementById("stay").disabled = true;

}