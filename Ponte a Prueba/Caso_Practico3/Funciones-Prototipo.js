/* Se deben poder crear objetos basados en cualquiera de los tres prototipos indicados. Puedes utilizar cualquiera de los tres sistemas estudiados:

·        Sintaxis class.

·        Funciones constructoras.

·        Objetos enlazados con Object.create.

 */

//enemigo

let Enemigo = {
    energia: 10,
    mover: function () {
        console.log("Me estoy moviendo");
        
    }
}

//orco
let Orco = Object.create(Enemigo);
Orco.fuerza = 15,
Orco.disparas = function () {
    console.log("Disparo con mi poderoza Arma");
    
}

//Troll
let Troll = Object.create(Enemigo)
Troll.fuerza = 20,
Troll.golpear = function () {
    console.log("Golpeo super fuerte");
    
}

//creacion de enemigo
let enemigo1 = Object.create(Enemigo)
console.log(enemigo1.energia);
console.log(enemigo1.mover());
//creacion de orco
let orco1 = Object.create(Orco)
console.log(orco1.energia);
console.log(orco1.fuerza);
console.log(orco1.mover());
console.log(orco1.disparas());
//creacion de troll
let troll1 = Object.create(Troll)
console.log(troll1.energia);
console.log(troll1.fuerza);
console.log(troll1.mover());
console.log(troll1.golpear());


