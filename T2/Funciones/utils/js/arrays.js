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
equipos.pop()//elimina el ultimo elemento del array
equipos.shift()//elimina el primer elemento del array y lo retorna

//filtar elemento
//find-retorna el primer elemento que coincida con la busqueda
//filter-retorna todos los elementos que coincidan con la busqueda

//buscar un equipo que tenga al menos 7 letras
let busqueda = equipos.find(item =>{
    return item.length >= 7;
});
console.log(busqueda);


//filter
equipos.filter(item => {
    return item.length >= 7

}).forEach(element => {
        console.log(element);
        
    });

//console.log(equipos);


