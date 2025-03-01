let carritoCompra = document.querySelector("#carritoCompra");
let total = document.querySelector("#total")
let carrito = []
let totalAPagar = 0

function agregarProductos(products) {
    let productosCarrito = carrito.find(producto => producto.id === products.id)

    if (productosCarrito) {
        productosCarrito.cantidad +=1
    }else{
        carrito.push({...products, cantidad: 1})
    }
    mostrarCarrito()
}

function mostrarCarrito() {
    carritoCompra.innerHTML = ""

    carrito.forEach(product => {
        let card = document.createElement("div")
        card.className = "card mb-3"
        card.style.maxWidth = " 540px"
    
        let cardContainer = document.createElement("div")
        cardContainer.className = "row g-0"
    
        let imgContainer = document.createElement("div")
        imgContainer.className = "col-md-4"
    
        let img = document.createElement("img")
        img.className = "img-fluid rounded-start"
        img.src = product.image
        imgContainer.append(img)
        cardContainer.append(imgContainer)
    
        let cardBodyContainer = document.createElement("div")
        cardBodyContainer.className = "col-md-8"
    
        let cardBody = document.createElement("div")
        cardBody.className = "card-body"
    
        let cardTitle = document.createElement("h5")
        cardTitle.className = "card-title"
        cardTitle.innerText = product.title
        cardBody.append(cardTitle)
    
        let cardCategory = document.createElement("p")
        cardCategory.className = "card-text"
        cardCategory.innerText = product.category
        cardBody.append(cardCategory)
    
        let cardPrice = document.createElement("p")
        cardPrice.className = "card-text"
        cardPrice.innerText = `Precio: ${product.price}€`
        cardBody.append(cardPrice)
    
        let cardCantidad = document.createElement("p")
        cardCantidad.className = "card-text"
        cardCantidad.innerText = `Cantidad: ${product.cantidad}`
        cardBody.append(cardCantidad)
    
        let cardSubtotal = document.createElement("p")
        cardSubtotal.className = "card-text"
        cardSubtotal.innerText = `Subtotal: ${product.price * product.cantidad}€`
        cardBody.append(cardSubtotal)

        let botonEliminar = document.createElement('button')
        botonEliminar.className = "btn btn-outline-danger btn-sm"
        botonEliminar.innerText = "Eliminar"
        botonEliminar.addEventListener('click', () =>{
            eliminarProducto(product.id)
        })
        cardBody.append(botonEliminar)
    
        cardBodyContainer.append(cardBody)
        cardContainer.append(cardBodyContainer)
        card.append(cardContainer)
    
        carritoCompra.append(card)      
        
    })
    totalAPagar = calcularTotal()
    total.innerText = `${totalAPagar.toFixed(2)}€`
}

function calcularTotal() {
    return carrito.reduce((total, producto) => total + producto.price * producto.cantidad, 0)
}
function vaciarCarrito(){
    carritoCompra.innerHTML = ""
    mostrarCarrito()
}

function eliminarProducto(id) {
    let i = carrito.findIndex(p => p.id === id)
    if (i !== -1) { //si el produucto existe en el carrito
        if (carrito[i].cantidad > 1) {//si es mayor de 1 entonces reduce la cantidad en 1
            carrito[i].cantidad -= 1
        }else{
            carrito.splice(i,1)// elimina el producto totalmente si la cantidad es 1
        }
    }
    mostrarCarrito()
}
