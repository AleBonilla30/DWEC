// Clase base Enemigo el mismo ejercicio pero con clases y herencia
class Enemigo {
    constructor() {
        this.energia = 10;
    }

    mover() {
        console.log("Me muevo.");
    }
}

// Clase Orco que extiende Enemigo
class Orco extends Enemigo {
    constructor() {
        super(); // Llama al constructor de Enemigo
        this.fuerza = 15;
    }

    disparar() {
        console.log("Disparo con mi poderoso arco.");
    }
}

// Clase Troll que extiende Enemigo
class Troll extends Enemigo {
    constructor() {
        super(); // Llama al constructor de Enemigo
        this.fuerza = 20;
    }

    golpear() {
        console.log("Golpeo con mi martillo de guerra.");
    }
}

// Crear instancias de Enemigo, Orco y Troll

// Crear un enemigo
let enemigo1 = new Enemigo();
console.log(enemigo1.energia); // 10
enemigo1.mover(); // Me muevo.

// Crear un orco
let orco1 = new Orco();
console.log(orco1.energia); // 10
console.log(orco1.fuerza); // 15
orco1.mover(); // Me muevo.
orco1.disparar(); // Disparo con mi poderoso arco.

// Crear un troll
let troll1 = new Troll();
console.log(troll1.energia); // 10
console.log(troll1.fuerza); // 20
troll1.mover(); // Me muevo.
troll1.golpear(); // Golpeo con mi martillo de guerra.
