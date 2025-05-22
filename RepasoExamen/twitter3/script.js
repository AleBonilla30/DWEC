let mensajeInput = document.querySelector("#mensaje")
let caracteres = document.querySelector("#caracteres")
let btnPublicar = document.querySelector("#publicar")
let twitter = document.querySelector("#tweet")

btnPublicar.addEventListener('click', ()=> {
    let mensaje = mensajeInput.value

    if (mensaje === "") {
        Swal.fire({
            title: "Warning!",
            text: "El mensaje esta vacio",
            icon: "warning"
        });
    }else {
        pintar(mensaje)
        limpiar()
    }
})

mensajeInput.addEventListener('input', ()=>{
    let longitud = mensajeInput.value.length
    caracteres.textContent = `${longitud}/255`

    if (longitud >= 255) {
        Swal.fire({
            title: "Warning!",
            text: "El mensaje ha llegado a 255 caracteres",
            icon: "warning"
        });
    }
})

function pintar(tweet){
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
    p.textContent = tweet

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
    twitter.append(col)
}

function limpiar(){
    mensajeInput.value = ""
}