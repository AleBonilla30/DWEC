let mensaje = document.querySelector("#mensaje")
let caracteres = document.querySelector("#caracteres")
let btnPublicar = document.querySelector("#publicar")
let carta = document.querySelector("#carta")

btnPublicar.addEventListener('click', (e) => {
    e.preventDefault()

    if (mensaje.value === "") {
        Swal.fire({
        title: "Warning!",
        text: "No se puede publicar un mensaje vacio!",
        icon: "warning"
        });
    }else {
        pintarCarta(mensaje.value)
        limpiar()

    }
})
mensaje.addEventListener('input', () => {
    let longitud = mensaje.value.length
    caracteres.textContent = `${longitud}/255`
    if (longitud >=255) {
        Swal.fire({
        title: "Warning!",
        text: "El mensaje ha alcanzado el maximo de caracteres de 255!",
        icon: "warning"
        });
    }
})

function pintarCarta(mensaje) {
    let col = document.createElement('div')
    col.className = "col"

    let card = document.createElement('div')
    card.className = "card"
    let cardBody = document.createElement('div')
    cardBody.className = "card-body"
    let title = document.createElement('h5')
    title.className = 'card-title'
    title.textContent = "Tweet"
    let text = document.createElement("p")
    text.className = "card-text"
    text.textContent = mensaje
    let button = document.createElement('button')
    button.className = 'btn btn-danger'
    button.textContent = 'Eliminar'

    button.addEventListener('click', ()=> {
        col.remove()
    })
    cardBody.append(title)
    cardBody.append(text)
    cardBody.append(button)
    card.append(cardBody)
    col.append(card)
    carta.append(col)
}

function limpiar() {
    mensaje.value = ""
    caracteres.textContent = "0/255"
}