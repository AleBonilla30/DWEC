class Carta {
    constructor(valor, tipo) {
        this.valor = valor;
        this.tipo = tipo;
        this.imgSrc = `./utils/images/cards/${valor}${tipo}.png`;
    }

    obtenerValor(){
        if (this.valor ==="A") {
            return 1
        }else if (["J","Q","K"].includes(this.valor)){
            return 11;
        }else{
            return parseInt(this.valor);    
        }
    }
}

class Baraja {
    constructor() {
        this.cartas = [];
        this.crearBaraja();//al inicializarlo en el contructor se crea automaticamente la baraja y lo barajea
        this.barajearCartas();
    
    }

    crearBaraja() {
        let valores = ["A", "2","3","4","5","6","7","8","9","10","J","Q","K"];
        let tipos = ["C","T","D","P"];

        for (let valor of valores) {
            for (let tipo of tipos) {
                this.cartas.push(new Carta(valor,tipo))
                
            }
        }
    }

    barajearCartas() {
        this.cartas = _.shuffle(this.cartas);
        console.log(this.cartas);
        
    }

    sacarCartas() {
        return this.cartas.pop()
    }
}