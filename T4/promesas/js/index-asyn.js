let url = "https://dummyjson.com/products"

let boton = document.querySelector('#btnGuardar')
let productos;

//1. lanzo la peticion al server
//2. con el then se analiza respuesta
//3.dentro de ese then se pasa a json()
//4.en otro then se analiza la respuesta de la traduccion
//5. trato la respuesta

//await -> espera. Indica que la funcion donde esta aplicada es una promesa y no tengo que usar el then para obtener la respuesta
//async -> asincrono. Esto indica aquella funcion donde se aplica el modificador await que tiene que ser asincrono 
async function obtenerProducto(url) {
    let respuesta = await fetch(url)
    let json = await respuesta.json()
    productos = json.products
    

}

obtenerProducto(url)

boton.addEventListener('click', (e) => {

    /* localStorage.setItem('productos', JSON.stringify(productos)) */

    let producto = JSON.parse(localStorage.getItem('productos'))
    console.log(producto);
    





    //guardar un objeto 
  /*   let objeto = {
        nombre: 'borja',
        apellido: 'martin',
        asignaturas: ['DAWEC', 'PRO', 'PMDM','AD', 'LM']
    }
    localStorage.setItem('dato',JSON.stringify(objeto) )//lo que se guarda es un string, stringify convierte un json en tipo string  */


    //esto es un string
    /* localStorage.setItem('clase', 'DWEC')
    localStorage.setItem('contenido', 'Js')
    localStorage.setItem('profesor', 'Borja')
    localStorage.setItem('alumna', 'Alejandra')
    localStorage.setItem('horas', 2) */

    /* let asignatura = JSON.parse(localStorage.getItem('dato')) //con esto se obtiene el objeto y no me devuelve un string
    console.log(asignatura) */
})

