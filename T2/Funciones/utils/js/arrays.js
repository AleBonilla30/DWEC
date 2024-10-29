//array -> coleccion de datos

const equipos = ["Barcelona", "Madrid", "Bilbao", "Atletico"];
equipos[4] = "Osasuna";
/* equipos[10] = "Villareal";
equipos[5] = "Real sociedad"; */
equipos[1] = "R. Madrid";
console.log(equipos);

for (let index = 0; index < equipos.length; index++) {
    const equipo = equipos[index];
    console.log(equipo);
    
}

for (const key in equipos) {//te imprime el index del array
    console.log(key);
    
}

for (const equipo of equipos) {//es como el foreach de java 
    console.log(equipo);
    
}

//foreach es una funcion que me permite iterar -> solo se le puede aplicar a arrays
//con 3 parametros (elemento,indice,recorres)

equipos.forEach((element, i) => {

    if (i % 2 == 0) { //para sacar solo los de indice que es par
        console.log(element);
    }
});

//añadir elemento del array en forma dinamica 

//añadir elemento
equipos.push("Getafe", "Rayo")//coloca el/los elementos al final del array
equipos.unshift("Alaves","Las palmas")//coloca el/los elementos al principio del array

//borrar elementos

//filtar elemento

console.log(equipos);


