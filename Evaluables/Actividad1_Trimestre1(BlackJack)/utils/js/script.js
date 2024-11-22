
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
        document.querySelector("#ask").addEventListener("click", this.ask.bind(this));
        document.querySelector("#stay").addEventListener("click", this.stay.bind(this));
        document.querySelector("#resetGame").addEventListener("click",this.resetGame.bind(this));
        
        
    }

    iniciarJuego() {

        if (!this.playerName) {
            
            this.playerName = prompt("Introduce tu nombre:")
            document.querySelector("#welcome").textContent = `¡Bienvenido, ${this.playerName} listo para jugar...! `;
        }
        this.sacarCartasCrupier();
        
         //se activan los botones
        document.querySelector("#ask").disabled = false;
        document.querySelector("#stay").disabled = false;
    }

    sacarCartasCrupier() {

        this.hiddenCard = this.baraja.sacarCartas();
        this.hiddenCardValue = this.hiddenCard.obtenerValor();
        
        this.hiddenCardImg = document.createElement("img");
        this.hiddenCardImg.src = "./utils/images/cards/red_back.png";;
        document.querySelector("#cartas-crupier").append(this.hiddenCardImg);
        this.agregarCarta("cartas-crupier", this.baraja.sacarCartas(), "crupier");

        let intervalo = setInterval(() => {

            let puntosCartaOculta = this.sumCrupier + this.hiddenCardValue;

            if (puntosCartaOculta < 17) {
                this.agregarCarta("cartas-crupier",this.baraja.sacarCartas(),"crupier");
            
            }else {
                clearInterval(intervalo)
                
                if(puntosCartaOculta > 21) {
                    this.reverlarCartaOculta();
                    this.endGame(`El jugador ${this.playerName} gana, la banca superó los 21`);
                }
            } 
            
        },2000);
        
    }


    agregarCarta(divId, card, player) {
        let cardImg = document.createElement("img");
        cardImg.src = card.imgSrc;
        document.querySelector(`#${divId}`).append(cardImg);

        let cardValue = card.obtenerValor();
        if (player === "crupier") {
            this.sumCrupier += cardValue;
            document.querySelector("#suma-crupier").textContent = this.sumCrupier;
            if (this.sumCrupier > 21) {
                this.endGame(`${this.playerName} ha ganado 🏆, la banca superó los 21`)
            }
        }else if (player === "player") {
            this.sumYours += cardValue;
            document.querySelector("#suma-player").textContent = this.sumYours;
            if (this.sumYours > 21) {
                this.reverlarCartaOculta();
                this.endGame(`La banca gana 🏆, ${this.playerName} superó los 21`);
            }
        }
    }

    ask() {
        this.agregarCarta("tus-cartas",this.baraja.sacarCartas(),"player");
    }

    stay(){
        this.reverlarCartaOculta();
        if (this.sumCrupier > this.sumYours && this.sumCrupier <= 21) {
            this.endGame(`La banca ha ganado 🏆 contra ${this.playerName}`);
        }else if (this.sumCrupier === this.sumYours) {
            this.endGame("El juego ha quedado en empate ✨");
        }else{
            this.endGame(`${this.playerName} ha ganado esta partida 🏆`);
        }

    }

    resetGame() {
        this.sumCrupier = 0;
        this.sumYours = 0;
    
        //limpiar los contenedores delas cartas
        document.querySelector("#cartas-crupier").innerHTML= "";
        document.querySelector("#tus-cartas").innerHTML= "";
    
        //reiniciar el procentaje de la suma
        document.querySelector("#suma-crupier").innerText = 0;
        document.querySelector("#suma-player").innerText = 0;
    
        //limpiar el resultado 
        document.querySelector("#result").innerText = "";
    
        //desactivar los botones hasta que empiece el juego
    
        document.querySelector("#ask").disabled = true;
        document.querySelector("#stay").disabled = true;
    
        //crear y mezclar la baraja
        this.baraja.crearBaraja();
        this.baraja.barajearCartas();
    
        this.iniciarJuego();
    }
    


    endGame (message) {
        document.querySelector("#result").textContent = message;
        document.querySelector("#ask").disabled = true;
        document.querySelector("#stay").disabled = true;
        
        
    }

    reverlarCartaOculta() {
        this.hiddenCardImg.src = this.hiddenCard.imgSrc;
        this.sumCrupier += this.hiddenCardValue;
        document.querySelector("#suma-crupier").textContent = this.sumCrupier
    }

}

window.onload = function () {
    let jugar = new BlackJack()
    jugar.iniciarJuego();
    
}

    





