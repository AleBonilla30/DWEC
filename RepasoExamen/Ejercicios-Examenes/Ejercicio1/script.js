let mensaje = document.querySelector("#mensaje");
let btnAgregar = document.querySelector("#agregar");
let tarea = document.querySelector("#tarea")

btnAgregar.addEventListener("click", () => {
    if (mensaje.value === "") {
        Swal.fire({
            title: "Warning!",
            text: "No se puede agregar una tarea vacia!",
            icon: "warning",
        });
    }else {
        pintarTarea(mensaje.value)
        limpiar()
    }
});

function pintarTarea(mensaje) {
    let col = document.createElement('div')
    col.className = 'col'
    let card = document.createElement('div')
    card.className = 'card'
    let cardBody = document.createElement('div')
    cardBody.className = 'card-body'
    let text = document.createElement('p')
    text.className = 'card-text'
    text.textContent = mensaje
    let button = document.createElement('button')
    button.className = 'btn btn-outline-danger'
    button.textContent = 'Eliminar'

    button.addEventListener('click', () =>{
        col.remove()
    })


    cardBody.append(text)
    cardBody.append(button)
    card.append(cardBody)
    col.append(card)
    tarea.append(col)

}
function limpiar(){
    mensaje.value = ""
}