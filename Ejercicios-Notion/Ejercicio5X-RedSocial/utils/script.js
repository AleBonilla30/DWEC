class Tweet {
    constructor(titulo, mensaje, categoria) {
        this.titulo = titulo
        this.mensaje = mensaje
        this.categoria = categoria
    }
}

let tituloInput = document.querySelector('#title')
let mensajeTextArea = document.querySelector('#mensaje')
let caracteres = document.querySelector('#caracteres')
let categoriaSelect = document.querySelector('#categoria')
let publicatBtn = document.querySelector('#btnPublicar')

let timeline = document.querySelector('#timeline')
let filtrarPublicaciones = document.querySelector('#selectFiltro')

let resultDiv = document.querySelector('#divResultado')

let publicaciones = []

publicatBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let titulo = tituloInput.value
    let mensaje = mensajeTextArea.value
    let categoria = categoriaSelect.value

    if (titulo.length > 0 && mensaje.length > 0 && categoria.length > 0) {
        Swal.fire({
            title: "Exito!",
            text: "Tarea guardada exitosamente!",
            icon: "success"
        });

        let tweet = new Tweet(titulo,mensaje, categoria)
        publicaciones.push(tweet)

        crearPublicacion(tweet)
        clearPublicacion()
    }else{
        Swal.fire({
            title: "Oops...",
            text: "Por favor, rellena todos los campos antes de publicar.",
            icon: "error",
        });
        return;
    }
})

mensajeTextArea.addEventListener('input', () => {
    caracteres.textContent = 250 - mensajeTextArea.value.length

})

/* <div class="card" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div> */
function crearPublicacion(tweet) {
    let card = document.createElement('div')
    card.className = 'card'
    card.style.width = '18rem'

    let body = document.createElement('div')
    body.className = 'card-body'

    let titleCard = document.createElement('h5')
    titleCard.className = 'card-title'
    titleCard.innerText = tweet.titulo
    body.append(titleCard)

    let subtitle = document.createElement('h6')
    subtitle.className = 'card-subtitle mb-2 text-body-secondary'
    subtitle.innerText = tweet.categoria
    body.append(subtitle)

    let mensajeP = document.createElement('p')
    mensajeP.className = 'card-text'
    mensajeP.innerText = tweet.mensaje
    body.append(mensajeP)

    card.append(body)

    timeline.append(card)
}

function clearPublicacion() {
    tituloInput.value = ""
    mensajeTextArea.value = ""
    categoriaSelect.value = ""
    caracteres.textContent = 250
}

filtrarPublicaciones.addEventListener('change', () => {
    let filter = filtrarPublicaciones.value
    let filtroCategoria
    console.log(filter);
    

    if (filter != 'todos') {
        filtroCategoria = publicaciones.filter(categoria => categoria.categoria === filter)
    }else{
        filtroCategoria = publicaciones
    }
    alertaFiltro(filtroCategoria.length)
    actualizarFiltro(filtroCategoria)
})

function actualizarFiltro(resultado) {
    resultDiv.innerHTML = ""

    resultado.forEach(element => {
        crearPublicacion(element)
    });
}

function alertaFiltro(numero) {
    let icono = 'success'

    if (numero = 0) {
        icono = 'warning'
    }else{
        Swal.fire({
            title: "Publicaciones",
            text: `La cantidad de publicaciones encontrados es ${numero}`,
            icon: icono
        });
    }
}