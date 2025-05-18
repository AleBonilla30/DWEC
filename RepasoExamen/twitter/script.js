let mensaje = document.querySelector("#mensaje");
let caracter = document.querySelector("#caracteres");
let btnPublicar = document.querySelector("#publicar");
let cardDiv = document.querySelector("#carta")

btnPublicar.addEventListener("click", (e) => {
    e.preventDefault();

    if (mensaje.value === "") {
        Swal.fire({
            title: "Warning!",
            text: "No se puede publicar un mensaje vacio!",
            icon: "warning",
        });
    } else {
    pintarCarta(mensaje.value)
    limpiarTweet()
    }
    
});

mensaje.addEventListener('input', ()=> {
    let longitud = mensaje.value.length
    caracter.textContent = `${longitud}/255`

    if (longitud >= 255) {
        Swal.fire({
            title: "Warning!",
            text: "Ha llegado al limite de caracteres que son 255!",
            icon: "warning",
        });
    }
})


function pintarCarta(mensaje) {
    let col = document.createElement('div')
    col.className = 'col'
    let card = document.createElement('div')
    card.className = 'card'
    let cardBody = document.createElement('div')
    cardBody.className = 'card-body'
    let title = document.createElement('h5')
    title.className = 'card-title'
    title.textContent = 'Tweet'
    let parrafo = document.createElement('p')
    parrafo.className = 'card-text'
    parrafo.textContent = mensaje
    cardBody.append(title)
    cardBody.append(parrafo)
    card.append(cardBody)
    col.append(card)
    cardDiv.append(card)
}
 function limpiarTweet(){
    mensaje.value = ""
    caracter.textContent = '0/255'
 }
