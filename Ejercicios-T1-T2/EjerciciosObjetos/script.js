import {Equipo, Jugador}   from "./objeto.js";



let barca = new Equipo("Barcelona",5000)
let madrid = new Equipo("Madrid", 8000)
let atleti = new Equipo("Atleti", 9000)

barca.fichaJugador(new Jugador("Gerald pique", "Defensa",50));
barca.fichaJugador(new Jugador("Ander Astralaga", "Portero",60));
barca.fichaJugador(new Jugador("Pau Cubarsí", "Defensa",40));
barca.fichaJugador(new Jugador("Ansu Faty", "Delantero",100));
barca.fichaJugador(new Jugador("Pablo Torres", "Centro campista",80));

madrid.fichaJugador(new Jugador("David Beckham", "Centrocampista",100));
madrid.fichaJugador(new Jugador("James Rdrigues", "Delantero",80));
madrid.fichaJugador(new Jugador("Lunin", "Portero",50));
madrid.fichaJugador(new Jugador("Carvajal", "Defensa",110));
madrid.fichaJugador(new Jugador("Lucas V.", "Defensa",60));

atleti.fichaJugador(new Jugador("Jan Oblak", "Portero", 45));
atleti.fichaJugador(new Jugador("Nahuel Molina", "Defensa", 55));
atleti.fichaJugador(new Jugador("Robin Aime", "Defensa", 65));
atleti.fichaJugador(new Jugador("Antoine Greizmann", "Delantero", 85));
atleti.fichaJugador(new Jugador("Julian Alvarez", "Delantero", 85));


function mostrarTop3(equipo) {
    equipo.plantilla.sort((a,b) => b.valor - a.valor)//los ordena de mayor a menor
    let top3 = equipo.plantilla.slice(0,3)//muestra los 3 primeros
    console.log("--------------------------------------------------");
    
    console.log(`Los 3 jugadores del equipo ${equipo.nombre}:`);

    top3.forEach(jugador => {
        console.log(`Nombre: ${jugador.nombre}, Posicion: ${jugador.posicion}, Valor: ${jugador.valor} M€`);
        
    });
}
mostrarTop3(barca)
mostrarTop3(madrid)
mostrarTop3(atleti)




/* barsa.listarPlantilla();
madrid.listarPlantilla();
atleti.listarPlantilla(); */