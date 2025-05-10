
let mensaje = document.querySelector("#mensaje")
let caracteres = document.querySelector("#caracteres")
let btnPublicar = document.querySelector("#publicar")
let tweet = document.querySelector("#tweet")

btnPublicar.addEventListener('click', (e) => {
    e.preventDefault()

    
    if (mensaje.value === "") {
        Swal.fire({
            title: "Warning!",
            text: "El campo esta vacio, tienes que escribir para publicar!",
            icon: "warning"
        });
    }else{
        crearPublicacion(mensaje.value)
        limpiarTweet()
    }
})

    mensaje.addEventListener('input', ()=> {
        let longitud = mensaje.value.length
        caracteres.textContent = `${longitud}/255`
        if (longitud >= 255) {
            Swal.fire({
                title: "Limite alcanzado!",
                text: "Has alcanzado el maximo de 255 caracteres!",
                icon: "warning"
            });
        }
    })



function crearPublicacion(mensaje) {
    let card = document.createElement('div')
    card.className = 'card'
    let cardBody = document.createElement('div')
    cardBody.className = 'card-body'
    let titulo = document.createElement('h5')
    titulo.className = 'card-title'
    titulo.innerText = 'Tweet'
    let parrafo = document.createElement('p')
    parrafo.className = 'card-text'
    parrafo.innerText = mensaje
    cardBody.append(titulo)
    cardBody.append(parrafo)
    card.append(cardBody)
    tweet.append(card)
}

function limpiarTweet() {
    mensaje.value = ""
    caracteres.textContent = "0/255";
}