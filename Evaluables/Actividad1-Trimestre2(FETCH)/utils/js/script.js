

let productos = []
let filtroSelect = document.querySelector('#select-tipo')
let btnFiltro = document.querySelector('#btnFiltrar')
let divProductos = document.querySelector('#divProductos')
let categoriaSelect = document.querySelector('#CategoriaSelectFiltro')
let marcaSelect = document.querySelector('#marcaSelectFiltro')

let url = 'https://dummyjson.com/products';


//boton de filtrar
btnFiltro.addEventListener('click', (e) => {
    let selecionar = filtroSelect.value
    let productoFiltro = [];

    if (selecionar == 'price') {
        productoFiltro = productos.filter((price) => price.price <= 9.99)
    }else if (selecionar == 'category') {
        let tipoCategoria = categoriaSelect.value
        productoFiltro = productos.filter((categoria) => categoria.category == tipoCategoria)
    } else if (selecionar == 'brand') {
        let marcaFiltro = marcaSelect.value

        productoFiltro = productos.filter((brand) => brand.brand == marcaFiltro)
    }else{
        productoFiltro = productos
    }
    alertaFiltro(productoFiltro.length)
    mostrarProducto(productoFiltro)
})

filtroSelect.addEventListener('change', () => {
    if (filtroSelect.value == 'category') {
        categoriaSelect.style.display = 'block'
        marcaSelect.style.display = 'none'
    }else if (filtroSelect.value == 'brand') {
        marcaSelect.style.display = 'block'
        categoriaSelect.style.display = 'none'
    } else{
        categoriaSelect.style.display = 'none'
        marcaSelect.style.display = 'none'
    }
})


//cargar productos
async function obtenerProductos(url) {
    try {
        let respuesta = await fetch(url);
        let json = await respuesta.json()
        productos = json.products;

        Swal.fire({
            title: "Cargando Productos...",
            text: "Espera un momento mientras cargamos los productos",
            icon: "info",
            allowOutsideClick: false,
            showConfirmButton: false,
            timer: 2000, // Mostrar por 2 segundos
            customClass: {
                popup: `swal-custom-popup`
            }
        }).then(() => {
            mostrarProducto(productos);
            });
        
    } catch (error) {
        Swal.fire({
            title: "Error!",
            text: "Error al cargar los productos",
            icon: "error"
        });
    }
}

obtenerProductos(url)

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

//funcion agregar productos
function agregarProductos(products) {
    let card = document.createElement('div')
    card.className = 'card text-center mb-3 animate__animated animate__backInLeft carta'
    card.style.width = '18rem;'

    let img = document.createElement('img')
    img.className = 'card-img-top'

    if (products.images.length > 2) {
        img.src = products.images[2]
    }else{
        img.src = products.images[0]
    }
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
    li1.innerText = `Precio: ${products.price}€`
    lista.append(li1)

    let li2 = document.createElement('li')
    li2.className = 'list-group-item'
    li2.innerText = `Categoria: ${products.category}`
    lista.append(li2)
    body.append(lista)

    let botonContainer = document.createElement('div')
    botonContainer.className = 'card-body'
    let boton = document.createElement('button')
    boton.className = 'btn btn-outline-success'
    boton.innerText = 'Añadir a carrito'

    boton.addEventListener('click', () => {
        agregarProductosCarrito(products);
    })
    botonContainer.append(boton)

    body.append(botonContainer)

    card.append(body)

    divProductos.append(card)
}

//mostrar productos
function mostrarProducto(producto) {
    divProductos.innerHTML = ""

    producto.forEach(element => {
        agregarProductos(element)
    });
}

function alertaFiltro(numero) {
    let icon = 'success'
    if (numero == 0) {
        icon = 'warning'
    }

    Swal.fire({
        title: "Productos",
        text: `La cantidad de productos encontrados es ${numero}`,
        icon: icon
    });
}
