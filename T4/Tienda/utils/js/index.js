let productos= []
let selectTipo = document.querySelector("#select-tipo")
let divResultado = document.querySelector("#divResultado")

selectTipo.addEventListener("change", (e) => {
    console.log(selectTipo.value);
    let tipo = selectTipo.value
    let listaFiltrada = []

    if (tipo != "todos") {
        listaFiltrada = productos.filter(item => item.category === tipo)
        
    }else{
        listaFiltrada = productos
    }

    alertFiltro(listaFiltrada.length)//para saber la cantidad de productos en la alerta
    mostrarProducto(listaFiltrada)
    
})

fetch('https://dummyjson.com/products')
//se pasa la repuesta a jason
.then((response) => response.json())
.then((response1) => {
    productos = response1.products

    Swal.fire({
        title: "Exito!",
        text: "Todos los productos cargados!",
        icon: "success"
    });
    productos.forEach(element => {
        console.log(element);
        agregarCarta(element)
        
    });
}).catch(() => {
    Swal.fire({
        title: "Error!",
        text: "Error al cargar los productos",
        icon: "error"
    });
    
})


function agregarCarta(producto) {
    let columna = document.createElement("div")
    columna.className = "col animate__animated animate__fadeInDown"

    let carta = document.createElement("div")
    carta.className = "card"
    carta.style = "width: 18rem;"

    let imagen = document.createElement("img")
    imagen.className = "card-img-top"

    if (producto.images.length > 2) {
        
        imagen.src = producto.images[2]
    }else{
        imagen.src = producto.images[0]
    }

    let bodyCard = document.createElement("div")
    bodyCard.className = "card-body"

    let titulo = document.createElement("h5")
    titulo.className = "card-title"
    titulo.innerText = producto.title

    let parrafo = document.createElement("p")
    parrafo.className = "card-text"
    parrafo.innerText = producto.description

    let lista = document.createElement("ul")
    lista.className = "list-group list-group-flush"
    let listaCuerpo = document.createElement("li")
    listaCuerpo.className = "list-group-item"
    listaCuerpo.innerText = `Category: ${producto.category}`
    lista.append(listaCuerpo)
    let listaCuerpo1 = document.createElement("li")
    listaCuerpo1.className = "list-group-item"
    listaCuerpo1.innerText = `Price: ${producto.price}€`
    lista.append(listaCuerpo1)
    let listaCuerpo2 = document.createElement("li")
    listaCuerpo2.className = "list-group-item"
    listaCuerpo2.innerText = `Stock: ${producto.stock}`
    lista.append(listaCuerpo2)

    let containerBtn = document.createElement("div")
    containerBtn.className = "d-flex justify-content-center"
    let btnComprar = document.createElement("button")
    btnComprar.className = "btn btn-success mt-2 "
    btnComprar.innerText = "Añadir"
    containerBtn.append(btnComprar)

    bodyCard.append(titulo)
    bodyCard.append(parrafo)
    bodyCard.append(lista)
    bodyCard.append(containerBtn)

    carta.append(imagen)
    carta.append(bodyCard)
    columna.append(carta)
    divResultado.append(columna)


}

function mostrarProducto(lista) {
    divResultado.innerHTML = ""

    lista.forEach(element => {
        agregarCarta(element)
    });
}

function alertFiltro(numero) {
    let icono = "success"
    if (numero == 0) {
        icono = "warning"
    }
    Swal.fire({
        title: "Productos",
        text: `La cantidad de productos encontrados es ${numero}`,
        icon: icono
      });
}

/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> */

