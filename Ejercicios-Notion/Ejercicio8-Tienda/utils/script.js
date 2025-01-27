

let divProductos = document.querySelector('#divProductos')
let carritoLista = document.querySelector('#carritoLista')

let selectFiltro = document.querySelector('#select-tipo')
let categoriaSelect = document.querySelector('#CategoriaSelectFiltro')
let btnFiltro = document.querySelector('#btnFiltrar')

let productos = []

let url = 'https://fakestoreapi.com/products'

async function cargarProductos(url) {
    let respuesta = await fetch(url)
    let json = await respuesta.json()
    productos = json

    productos.forEach(element => {
        console.log(element)
        pintarProducto(element)
    });

}

cargarProductos(url)

function pintarProducto(products) {
    let card = document.createElement('div')
    card.className = 'card text-center mb-3 animate__animated animate__backInLeft carta'
    card.style.width = '18rem;'

    let img = document.createElement('img')
    img.className = 'card-img-top'
    img.src = products.image

    card.append(img)

    let body = document.createElement('div')
    body.className = 'card-body'

    let titulo = document.createElement('h5')
    titulo.className = 'card-title'
    titulo.innerText = `${products.title}`
    body.append(titulo)

    let lista = document.createElement('ul')
    lista.className = 'list-group list-group-flush'

    let li1 = document.createElement('li')
    li1.className = 'list-group-item'
    li1.innerText = products.description
    lista.append(li1)

    let li2 = document.createElement('li')
    li2.className = 'list-group-item'
    li2.innerText = `Precio: ${products.price}€`
    lista.append(li2)
    body.append(lista)

    let botonContainer = document.createElement('div')
    botonContainer.className = 'card-body'
    let boton = document.createElement('button')
    boton.className = 'btn btn-outline-success'
    boton.innerText = 'Añadir a carrito'

    /* boton.addEventListener('click', () => {
        agregarProductosCarrito(products);
    }) */
    botonContainer.append(boton)

    body.append(botonContainer)

    card.append(body)

    divProductos.append(card)
}
function mostrarProducto(product) {
    divProductos.innerHTML = ""
    product.forEach((element) =>{
        pintarProducto(element)
    })
}
btnFiltro.addEventListener('click', () => {
    let selecionar = selectFiltro.value
    let resultado = []

    if (selecionar === 'price-min') {
        resultado = productos.filter((precioMin) => precioMin.price <= 19.99)
    }else if (selecionar === 'price-max'){
        resultado = productos.filter((precioMax) => precioMax.price >= 20)
    }else if (selecionar === 'category') {
        let tipoCategoria = categoriaSelect.value

        resultado = productos.filter((categoria) => categoria.category === tipoCategoria)
    }else{
        resultado = productos
    }
    mostrarProducto(resultado)
})

selectFiltro.addEventListener('change', () => {
    if (selectFiltro.value === 'category') {
        categoriaSelect.style.display = 'block'
    }
})