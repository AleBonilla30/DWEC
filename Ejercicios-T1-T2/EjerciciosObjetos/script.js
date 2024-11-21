import {Equipo, Jugador}   from "./objeto.js";



let barsa = new Equipo("Barsa", 230000)
let madrid = new Equipo("Madrid", 800000)
let atleti = new Equipo("Atleti", 500000)

barsa.fichaJugador(new Jugador("Gerald pique", "Defensa",50000));
barsa.fichaJugador(new Jugador("Ander Astralaga", "Portero",60000));
barsa.fichaJugador(new Jugador("Pau Cubarsí", "Defensa",40000));
barsa.fichaJugador(new Jugador("Ansu Faty", "Delantero",100000));
barsa.fichaJugador(new Jugador("Pablo Torres", "Centro campista",80000));

madrid.fichaJugador(new Jugador("David Beckham", "Centrocampista",100000));
madrid.fichaJugador(new Jugador("James Rdrigues", "Delantero",80000));
madrid.fichaJugador(new Jugador("Lunin", "Portero",50000));
madrid.fichaJugador(new Jugador("Carvajal", "Defensa",110000));
madrid.fichaJugador(new Jugador("Lucas V.", "Defensa",60000));

atleti.fichaJugador(new Jugador("Jan Oblak", "Portero", 45000));
atleti.fichaJugador(new Jugador("Nahuel Molina", "Defensa", 55000));
atleti.fichaJugador(new Jugador("Robin Aime", "Defensa", 65000));
atleti.fichaJugador(new Jugador("Antoine Greizmann", "Delantero", 85000));
atleti.fichaJugador(new Jugador("Julian Alvarez", "Delantero", 85000));


function mostrarTop3(equipo) {
    equipo.plantilla.sort((a,b) => b.valor - a.valor)//los ordena de mayor a menor
    let top3 = equipo.plantilla.slice(0,3)//muestra los 3 primeros
    console.log("--------------------------------------------------");
    
    console.log(`Los 3 jugadores del equipo ${equipo.nombre}:`);

    top3.forEach(jugador => {
        console.log(`Nombre: ${jugador.nombre}, Posicion: ${jugador.posicion}, Valor: ${jugador.valor}`);
        
    });
}
mostrarTop3(barsa)
mostrarTop3(madrid)
mostrarTop3(atleti)




/* barsa.listarPlantilla();
madrid.listarPlantilla();
atleti.listarPlantilla(); */