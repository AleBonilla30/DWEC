let carritoLista = document.querySelector('#carritoLista')
let totalAPagar = document.querySelector('#totalPagar')
let carrito = []
let total = 0

const correct = new Audio('utils/sound/correct.mp3')
const incorrect = new Audio('utils/sound/incorrect.mp3')
const alert = new Audio('utils/sound/warning.mp3')
//carrito 

function agregarProductosCarrito(products) {
    let productoEnCarrito = carrito.find(p => p.id === products.id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
    } else {
        carrito.push({ ...products, cantidad: 1 });
    
    }
    mostrarCarrito();
}

function mostrarCarrito() {

    carritoLista.innerHTML = "";
    
    carrito.forEach(products => {
        let item = document.createElement('div')
        item.className = 'card mb-3  animate__animated animate__fadeInDown ';

        let divCuerpo = document.createElement('div')
        divCuerpo.className = "row g-0"

        let divImg = document.createElement('div')
        divImg.className = 'col-md-3'
        let img = document.createElement('img')
        img.className = "img-fluid rounded-start"
        if (products.images.length > 2) {
            img.src = products.images[2]
        }else{
            img.src = products.images[0]
        }
        divImg.append(img)
        divCuerpo.append(divImg)

        let divCard = document.createElement('div')
        divCard.className = "col-md-9"

        let CardBody = document.createElement('div')
        CardBody.className = "card-body"

        let titulo = document.createElement('h5')
        titulo.className = "card-title"
        titulo.innerText = `${products.title}`
        CardBody.append(titulo)

        let parrafo = document.createElement('p')
        parrafo.className = 'card-text text-end'
        parrafo.innerText = `Precio: ${products.price}€`
        CardBody.append(parrafo)

        let parrafo2 = document.createElement('p')
        parrafo2.className = 'card-text text-end'
        parrafo2.innerText = `Cantidad: ${products.cantidad}`
        CardBody.append(parrafo2)

        let parrafo3 = document.createElement('p')
        parrafo3.className = 'card-text text-end'
        parrafo3.innerText = `Subtotal: ${(products.price * products.cantidad).toFixed(2)}€`
        CardBody.append(parrafo3)

        //boton para eliminar un producto del carrito

        let botonEliminar = document.createElement('button')
        botonEliminar.className = 'btn btn-outline-danger'
        botonEliminar.innerText = 'Eliminar'
        botonEliminar.addEventListener('click', () => eliminarProductosCarrito(products.id))
        CardBody.append(botonEliminar)

        divCard.append(CardBody)
        divCuerpo.append(divCard)

        item.append(divCuerpo)

        /* item.innerHTML = `<div class="row g-0">
                <div class="col-md-3">
                    <img src="${products.images[0]}" class="img-fluid rounded-start" alt="${products.title}">
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        <h5 class="card-title">${products.title}</h5>
                        <p class="card-text text-end">Precio: ${products.price}€</p>
                        <p class="card-text text-end">Cantidad: ${products.cantidad}</p>
                        <p class="card-text text-end">Subtotal: ${(products.price * products.cantidad).toFixed(2)}€</p>
                    </div>
                </div>
            </div>`  
             */
        carritoLista.append(item)
    
    });

    total = calcularTotal()
    totalAPagar.textContent = total.toFixed(2)
    console.log(totalAPagar)
}

function calcularTotal() {
    let totalFinal = carrito.reduce((total, producto) => total + producto.price * producto.cantidad,0)
    return totalFinal
}
function vaciarCarro(){
    carrito = []
    carritoLista.innerHTML = ""
    totalAPagar.textContent = 0
    mostrarCarrito()
}
function eliminarProductosCarrito(id) {
    let index = carrito.findIndex(p => p.id === id);
    if (index !== -1) {
        if (carrito[index].cantidad > 1) {
            carrito[index].cantidad -= 1 //aqui si encuentra el id de ese producto y tiene mas de 1 le resta un producto y lo elimina del carrito
        }else{
            carrito.splice(index, 1) // elimina el producto totalmente si la cantidad es 1
        }
    }
    mostrarCarrito();
}
let btnComprar = document.querySelector('#btnComprar');
    btnComprar.addEventListener('click', () => {
        if (carrito.length === 0) {
            alert.play()
            Swal.fire({
                title: 'Carrito vacío',
                text: 'No hay productos en el carrito.',
                icon: 'info',
            });
        } else {
            
            Swal.fire({
                title: 'Confirmar compra',
                text: `El total a pagar es ${total.toFixed(2)}€. ¿Estás seguro de finalizar la compra?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, comprar',
                cancelButtonText: 'Cancelar',
            }).then((result) => {
                if (result.isConfirmed) {
                    correct.play()
                    Swal.fire({
                        title: 'Compra realizada',
                        text: `¡Gracias por tu compra! Total pagado: ${total.toFixed(2)}`,
                        icon: 'success',

                    });

                    vaciarCarro()

                }else if (result.dismiss === Swal.DismissReason.cancel) {
                    incorrect.play()

                    Swal.fire({
                        title: 'Compra Cancelada',
                        text: 'Puedes seguir comprando',
                        icon: 'info',
                    })

        

                }
            })
        }
    });



