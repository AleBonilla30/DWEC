let divProductos = document.querySelector("#divProductos");

let productos = []

let url = "https://fakestoreapi.com/products"

async function cargarProductos(url) {
    try {
        let respuesta = await fetch(url)
        let json = await respuesta.json()
        productos = json

        mostrarProducto(productos)
            
        
        Swal.fire({
            icon: "success",
            title: "Productos cargados correctamente",
            draggable: true 
        })

    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error al cargar los productos!",
        });        
    }
}
cargarProductos(url)

/* <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
            <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
            <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div> */

function pintarProductos(products) {
    let card = document.createElement("div");
    card.className = "card h-100 d-flex flex-column"; // Asegura que la tarjeta tenga la misma altura";
    card.style.width = "18rem"

    let img = document.createElement('img');
    img.className = "card-img-top  mt-2 mx-auto" //mx-auto centra la imagen
    img.style.maxHeight = "150px"
    img.style.width = "auto"
    img.src = products.image
    card.append(img)


    let cardBody = document.createElement('div')
    cardBody.className = "card-body d-flex flex-column flex-grow-1"; // Ocupa el espacio restante"

    let titleCard = document.createElement('h5')
    titleCard.className = "card-title"
    titleCard.innerText = products.title
    cardBody.append(titleCard)

    let text = document.createElement('p')
    text.className = "card-text"
    text.innerText = products.description
    text.style.fontSize = "12px"; // Tamaño de fuente más pequeño
    text.style.flexGrow = "1"; // Ocupar espacio restante
    text.style.overflow = "hidden"; // Evitar desbordamiento
    text.style.textOverflow = "ellipsis"; // Puntos suspensivos si el texto es largo
    cardBody.append(text)
    card.append(cardBody)

    let priceCard = document.createElement('p')
    priceCard.className = "text-center fw-semibold"
    priceCard.innerText = `${products.price}€`
    cardBody.append(priceCard)

    let cardFooter = document.createElement('div')
    cardFooter.className = "card-footer bg-transparent "

    let button = document.createElement('button')
    button.className = "btn btn-outline-success btn-sm w-100"
    button.innerText = 'Añadir al carrito'
    button.addEventListener('click', ()=> {
        agregarProductos(products)
    })
    cardFooter.append(button)
    card.append(cardFooter)


    divProductos.append(card)

}

function mostrarProducto(producto){
    divProductos.innerHTML = ""

    producto.forEach(element => {
        pintarProductos(element)
    });

}