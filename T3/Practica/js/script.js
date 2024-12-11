let inputNombre = document.querySelector("#nombreInput")
let descripcionTextarea = document.querySelector("#descripcionTextarea")
let prioridadSelect = document.querySelector("#prioridadSelect")
let fechaInput = document.querySelector("#fechaInput")
let checkPrioritatia = document.querySelector("#checkPrioritaria")
let btnGuardar = document.querySelector("#btnGuardar")
let divResultados = document.querySelector(".row.mt-2.row-cols-1.row-cols-md-3.g-4")

let filtroSelect = document.querySelector("#filtrarSelect")
let btnFiltrar = document.querySelector("#btn-filtrar")

let tareas = []
let contador = 1

btnGuardar.addEventListener("click", (e) => {
    
    let nombre = inputNombre.value
    let descripcion = descripcionTextarea.value
    let prioridad = prioridadSelect.value
    let fecha = fechaInput.value
    let prioritaria = checkPrioritatia.checked
    

    
        if (nombre.length > 0 && descripcion.length > 0 && prioridad.length > 0 && fecha.length > 0) {
            
            Swal.fire({
                title: "Exito!",
                text: "Tarea guardada exitosamente!",
                icon: "success"
            });
            //guardar la informacion
            const nuevaTarea = {id: contador, nombre, descripcion, fecha,prioridad, prioritaria} 
            contador++;
            tareas.push(nuevaTarea)
            agregarNodoTarea(nuevaTarea)
            clearNodo()



        }else{
            Swal.fire({
                title: "Error!",
                text: "Falta algun dato",
                icon: "error"
            });
            console.log("no hay datos");
            
        }
    
}) 
    

function agregarNodoTarea(tarea) {
    let columna = document.createElement("div")
    columna.className = "col animate__animated animate__fadeInDown"

    let carta = document.createElement("div")
    carta.className = "card"

    let imagen = document.createElement("img")
    imagen.className = "card-img-top"
    if (tarea.prioridad == 1) {
        imagen.src = "./img/Alta.png"
    }else if (tarea.prioridad == 2) {
        imagen.src = "./img/media.png"
    } else {
        imagen.src = "./img/baja.png"
    }

    let cuerpo = document.createElement("div")
    cuerpo.className = "card-body"

    let titulo = document.createElement("h5")
    titulo.className = "card-title"
    titulo.textContent = tarea.nombre

    let descripcionCuerpo = document.createElement("p")
    descripcionCuerpo.className = "card-text"
    descripcionCuerpo.textContent = tarea.descripcion

    let fechaCuerpo = document.createElement("p")
    fechaCuerpo.className = "card-text"
    fechaCuerpo.innerHTML = `Fecha máxima: <strong>${tarea.fecha}</strong>`

    let btnCompletar = document.createElement("button")
    btnCompletar.className = "btn btn-primary"
    btnCompletar.textContent = "Completar"
    btnCompletar.addEventListener("click", () => completarTarea(contador,columna))

    cuerpo.append(titulo)
    cuerpo.append(descripcionCuerpo)
    cuerpo.append(fechaCuerpo)
    cuerpo.append(btnCompletar)

    carta.append(imagen)
    carta.append(cuerpo)
    columna.append(carta)
    divResultados.append(columna)


}

function completarTarea(id, nodoColumna) {
    Swal.fire({
        title: "¿Estas Seguro?",
        text: "La tarea será marcada como completada!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, completar!",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            nodoColumna.remove()
            tareas = tareas.filter(tarea => tarea.id !== id)
            Swal.fire({
            title: "Completada!",
            text: "La tarea se ha completado!.",
            icon: "success"
        });
        }
    });
}

function clearNodo() {
    inputNombre.value = ""
    descripcionTextarea.value = ""
    prioridadSelect.value = "Alta"
    fechaInput.value = ""
}

btnFiltrar.addEventListener("click", (e) => {
    let filtro = filtroSelect.value
    let tareasFiltradas;

    if (filtro === "4" ) {
        tareasFiltradas = tareas
    }else{
        tareasFiltradas = tareas.filter(tarea => tarea.prioridad === filtro)
    }

    actualizarTareas(tareasFiltradas)


})

function actualizarTareas(resultados) {
    //limpia las tareas existentes en el dom
    divResultados.innerHTML = ""

    resultados.forEach(element => {
        agregarNodoTarea(element)
    });
}

