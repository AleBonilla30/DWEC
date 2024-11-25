/*  Realiza las siguientes operaciones con objetos definidos por clase
    - Crea una clase llamada equipo. dicha clase tendrá las siguientes propiedades: nombre (de tipo string), plantilla (de tipo array), presupuesto (tipo int)
    - Crea una clase llamada jugador. dicha clase tendrá tendrá las siguientes características: nombre (de tipo string), posición (de tipo string), valor (de tipo int)
    - Crea una función que se llame ficharJugador dentro de la clase equipo y admita por un objeto de tipo jugador. La función agregará el jugador a la propiedad plantilla del equipo
    - Crea una funciona que se llame listarPlantilla dentro de la clase equipo, el cual muestra los datos de todos sus jugadores.
    - En un archivo separado crea tres objetos llamados: barsa, madrid, atleti y dale parámetros iniciales. La plantilla de todos los equipos estará vacía.
    - Realiza 5 fichajes en cada uno de los equipos
    - Muestra por consola los 3 jugadores más caros de cada uno de cada uno de los equipos  */

export class Equipo {
    constructor(nombre, presupuesto) {
        this.nombre = nombre;
        this.plantilla = [];
        this.presupuesto = presupuesto;
    }

    fichaJugador(jugador){
        if (this.presupuesto > jugador.valor) {

            this.plantilla.push(jugador);
            this.presupuesto -= jugador.valor;
            console.log(`El ${this.nombre}, ficho al jugador ${jugador.nombre} por un valor de ${jugador.valor} M€`);
            console.log(`Tu presupuesto es de ${this.presupuesto} M€`);
            
            
        }else{
            console.log(`No tienes presupuesto para fichar al jugador.`);
            
        }
        
    }

    listarPlantilla(){
        console.log("---------------------------------------");
        console.log(`Plnatilla del equipo ${this.nombre}`);
        for (let jugadores of this.plantilla) {
            console.log(jugadores);
        }
    }
}




 export class Jugador {
    constructor(nombre, posicion, valor) {
        this.nombre = nombre;
        this.posicion = posicion;
        this.valor = valor;
    }
}

