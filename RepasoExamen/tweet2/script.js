let mensaje = document.querySelector("#mensaje");
let caracteres = document.querySelector("#caracteres");
let btnPublicar = document.querySelector("#publicar");
let tweet = document.querySelector("#tweet");

btnPublicar.addEventListener("click", () => {
    if (mensaje.value === "") {
        Swal.fire({
            title: "Warning!",
            text: "El mensaje esta vacio, no se puede publicar!",
            icon: "warning",
        });
    }else {
        pintarTweet(mensaje.value)
        limpiarTweet()

    }
});

mensaje.addEventListener('input', () => {
    let longitud = mensaje.value.length
    caracteres.textContent = `${longitud}/255`

    if (longitud >= 255) {
        Swal.fire({
            title: "Error!",
            text: "El mensaje ha superado los 255 caracteres!",
            icon: "error",
        });
    }

})

function pintarTweet(mensaje){
    let col = document.createElement('div')
    col.className = 'col'
    let card = document.createElement('div')
    card.className = 'card'
    let cardBody = document.createElement('div')
    cardBody.className = 'card-body'
    let title = document.createElement('h5')
    title.className = ' card-title'
    title.textContent = 'Tweet' 
    let parrafo = document.createElement('p')
    parrafo.className = 'card-text'
    parrafo.textContent = mensaje
    cardBody.append(title)
    cardBody.append(parrafo)
    card.append(cardBody)
    col.append(card)
    tweet.append(col)

}
function limpiarTweet(){
    mensaje.value = ""
    caracteres.textContent = '0/255'
}
