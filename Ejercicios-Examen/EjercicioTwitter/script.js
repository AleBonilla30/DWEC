let mensaje = document.querySelector("#mensaje")
let caracteres = document.querySelector("#caracteres")
let btnPublicar = document.querySelector("#publicar")
let cartas = document.querySelector("#cartas")

btnPublicar.addEventListener('click', ()=> {
    let mensajeInput = mensaje.value

    if (mensajeInput === "") {
        Swal.fire({
            title: "Warning",
            text: "Mensaje vacio",
            icon: "warning"
        });
    }else {
        pintarTweet(mensajeInput)
        limpiar()
    }
})

mensaje.addEventListener('input', () => {
    let longitud = mensaje.value.length
    caracteres.textContent = `${longitud}/255`
    if (longitud >= 255) {
        Swal.fire({
            title: "Warning",
            text: "Ha alcanzado los 255 caracteres",
            icon: "warning"
        });
    }
})

function pintarTweet(message){
    let col = document.createElement('div')
    col.className = 'col'
    let card = document.createElement('div')
    card.className = 'card'
    let cardBody = document.createElement('div')
    cardBody.className = 'card-body'
    let title = document.createElement('h5')
    title.className = 'card-title'
    title.textContent = 'Tweet'
    let p = document.createElement('p')
    p.className = 'card-text'
    p.textContent = message

    let button = document.createElement('button')
    button.className = 'btn btn-outline-danger'
    button.textContent = 'Eliminar'
    button.addEventListener('click', ()=> {
        col.remove()
    })

    cardBody.append(title)
    cardBody.append(p)
    cardBody.append(button)
    card.append(cardBody)
    col.append(card)
    cartas.append(col)
}
function limpiar() {
    mensaje.value = ""
    caracteres.textContent = '0/255'
}