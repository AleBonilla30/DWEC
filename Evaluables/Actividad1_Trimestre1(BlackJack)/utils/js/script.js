/* class Carta {
    constructor(valor, tipo){
        this.valor = valor;
        this.tipo = tipo;
        this.imagesSrc = `./utils/images/cards/${valor}${tipo}.png`;
    }

    obtenerValor () {
        if (this.valor === "A") {
            return 1;
        }else if (["J","Q","K"].includes(this.valor)){
            return 11;
        }else{
            return parseInt(this.valor);
        }
    }
}

class Baraja {
    constructor() {
        this.desk = [];
        this.crearBaraja();
        this.barajear();
    }

    crearBaraja() {
        let valores = ["A", "2","3","4","5","6","7","8","9","10","J","Q","K"];
        let tipos = ["C","T","D","P"];
        for (let valor of valores) {
            for (let tipo of tipos) {
                this.desk.push(new Carta(valor,tipo));
            }
        }
    }

    barajear() {
        this.desk = _.shuffle(this.desk);
    }
    sacarCarta() {
        return this.desk.pop();
    }
} */

class BlackJack  {

    constructor (){
        this.sumCrupier = 0;
        this.sumYours = 0;
        this.hiddenCard = null;
        this.hiddenCardValue = null;
        this.hiddenCardImg = null;
        this.baraja = new Baraja();
        this. playerName = "";


          //se crea un evento a los botones
        document.getElementById("ask").addEventListener("click", this.ask.bind(this));
        document.getElementById("stay").addEventListener("click", this.stay.bind(this));
        document.getElementById("resetGame").addEventListener("click",this.resetGame.bind(this));
        
        
    }

    iniciarJuego() {

        if (!this.playerName) {
            
            this.playerName = prompt("Introduce tu nombre:")
            document.getElementById("welcome").textContent = `¡Bienvenido, ${this.playerName} listo para jugar...! `;
        }
        

        this.hiddenCard = this.baraja.sacarCartas();
        this.hiddenCardValue = this.hiddenCard.obtenerValor();

        this.hiddenCardImg = document.createElement("img");
        this.hiddenCardImg.src = "./utils/images/cards/red_back.png";;
        document.getElementById("cartas-crupier").append(this.hiddenCardImg);

        this.agregarCarta("cartas-crupier", this.baraja.sacarCartas(), "crupier");
        this.sacarCartasCrupier();

        //se activan los botones
        document.getElementById("ask").disabled = false;
        document.getElementById("stay").disabled = false;


        
    }

    sacarCartasCrupier() {

        let intervalo = setInterval(() => {
            let puntosCartaOculta = this.sumCrupier + this.hiddenCardValue;

            if (puntosCartaOculta < 17) {
            this.agregarCarta("cartas-crupier",this.baraja.sacarCartas(),"crupier");
            
            }else {
                clearInterval(intervalo)
                
                /* if(puntosCartaOculta > 21) {
                    this.reverlarCartaOculta();
                    this.endGame(`El jugador ${this.playerName} gana, la banca superó los 21`);
                    }*/
            } 
            
        }, 2000);
        
    }

    agregarCarta(divId, card, player) {
        let cardImg = document.createElement("img");
        cardImg.src = card.imgSrc;
        document.getElementById(divId).append(cardImg);

        let cardValue = card.obtenerValor();
        if (player === "crupier") {
            this.sumCrupier += cardValue;
            document.getElementById("suma-crupier").textContent = this.sumCrupier;
            if (this.sumCrupier > 21) {
                this.endGame(`El jugador ${this.playerName} ha ganado 🏆, la banca superó los 21`)
            }
        }else if (player === "player") {
            this.sumYours += cardValue;
            document.getElementById("suma-player").textContent = this.sumYours;
            if (this.sumYours > 21) {
                this.reverlarCartaOculta();
                this.endGame(`La banca gana 🏆, el jugador ${this.playerName} superó los 21`);
            }
        }
    }

    ask() {
        this.agregarCarta("tus-cartas",this.baraja.sacarCartas(),"player");
    }

    stay(){
        this.reverlarCartaOculta();
        if (this.sumCrupier > this.sumYours && this.sumCrupier <= 21) {
            this.endGame(`La banca le ha ganado 🏆 al jugador ${this.playerName}`);
        }else if (this.sumCrupier === this.sumYours) {
            this.endGame("El juego ha quedado en empate ✨");
        }else{
            this.endGame(`El jugador ${this.playerName} ha ganado esta partida 🏆`);
        }

    }

    resetGame() {
        this.sumCrupier = 0;
        this.sumYours = 0;
    
        //limpiar los contenedores delas cartas
        document.getElementById("cartas-crupier").innerHTML= "";
        document.getElementById("tus-cartas").innerHTML= "";
    
        //reiniciar el procentaje de la suma
        document.getElementById("suma-crupier").innerText = 0;
        document.getElementById("suma-player").innerText = 0;
    
        //limpiar el resultado 
        document.getElementById("result").innerText = "";
    
        //desactivar los botones hasta que empiece el juego
    
        document.getElementById("ask").disabled = true;
        document.getElementById("stay").disabled = true;
    
        //crear y mezclar la baraja
        this.baraja.crearBaraja();
        this.baraja.barajearCartas();
    
        this.iniciarJuego();
    }
    


    endGame (message) {
        document.getElementById("result").textContent = message;
        document.getElementById("ask").disabled = true;
        document.getElementById("stay").disabled = true;
        
        
    }

    reverlarCartaOculta() {
        this.hiddenCardImg.src = this.hiddenCard.imgSrc;
        this.sumCrupier += this.hiddenCardValue;
        document.getElementById("suma-crupier").textContent = this.sumCrupier
    }

}

window.onload = function () {
    let jugar = new BlackJack()
    jugar.iniciarJuego();
    
}

    





