let mensaje = document.querySelector("#mensaje")
let caracter = document.querySelector("#caracteres")
let btnPublicar = document.querySelector("#publicar")
let twitter = document.querySelector("#tweet")

btnPublicar.addEventListener('click', ()=> {
    let publicacion = mensaje.value

    if (publicacion === "") {
        Swal.fire({
            title: "Warning!",
            text: "El mensaje esta vacio, no se puede publicar!",
            icon: "warning"
        });
    }else {
        agregarCarta(publicacion)
        limpiar()
    }
})

mensaje.addEventListener('input', ()=> {
    let longitud = mensaje.value.length
    caracter.textContent = `${longitud}/255`

    if (longitud >= 255) {
         Swal.fire({
            title: "Warning!",
            text: "El mensaje ha llegado a los 255 caracteres!",
            icon: "warning"
        });
    }
})

function agregarCarta(message) {
    let col = document.createElement('div')
    col.className = 'col'

    let card = document.createElement('div')
    card.className = 'card'
    let cardBody = document.createElement('div')
    cardBody.className = 'card-body'
    let tittle = document.createElement('h5')
    tittle.className = 'card-title'
    tittle.textContent = "Tweet"
    let p = document.createElement('p')
    p.className = 'card-text'
    p.textContent = message

    let button = document.createElement('button')
    button.className = 'btn btn-outline-danger'
    button.textContent = 'Eliminar'
    button.addEventListener('click', ()=>{
        col.remove()
    })

    cardBody.append(tittle)
    cardBody.append(p)
    cardBody.append(button)
    card.append(cardBody)
    col.append(card)
    twitter.append(col)
}

function limpiar(){
    mensaje.value = ''
    caracter.textContent = '0/255'
}