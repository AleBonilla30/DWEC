let inputNombre = document.querySelector("#nombreInput");
let inputEmail = document.querySelector("#emailInput");
let inputEdad = document.querySelector("#edadInput")
let inputPass = document.querySelector("#passInput");
let inputGenero = document.querySelector("#generoSelect");
let checkGuardar = document.querySelector("#checkGuardar");
let btnGuardar = document.querySelector("#btnGuardar");
let divResultados = document.querySelector("div.row.g-4")//acceder a la clase donde se mete la carta

//filtros de busqueda
let selectFiltrar = document.querySelector("#filtrarSelect")
let generoSelectFiltro = document.querySelector("#generoSelectFiltro")
let edadSelectFiltro = document.querySelector("#edadSelectFiltro")
let btnFiltrar = document.querySelector("#btn-filtrar")

let usuarios = []

btnGuardar.addEventListener("click", (e) =>{ //es el evento que se ha provocado la pulsacion eso es el parametro (e)
    let nombre = inputNombre.value
    let email = inputEmail.value
    let edad = inputEdad.value
    let pass = inputPass.value
    let genero = inputGenero.value
    
    if (checkGuardar.checked){
        if (nombre.length > 0 && email.length > 0 && pass.length > 0 && genero.length > 0) {
            //guardar datos
            Swal.fire({
                title: "Exito!",
                text: "Usuario Guardado correctamente!",
                icon: "success"
            });
            //se agrega un usuario a la lista con animacion pero de esta manera la animacion me la hace a todas las 
            //personas que se vaya agregando y lo que se quiere es que anime solo a la carta que se vaya agregando 
            /* divResultados.innerHTML += ` <div class="col animate__animated animate__fadeInDown">
                            <div class="card">
                            <img src="https://cdn-icons-png.flaticon.com/512/5363/5363451.png" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${nombre}</h5>
                            <p class="card-text">${email}.</p>
                            </div>
                        </div>
                    </div>` */
            
            let usuario = {nombre,email,edad,genero}
            usuarios.push(usuario)
            agregarNodo(nombre, email,edad, genero)
            clearInputs();
            
        }else{
            Swal.fire({
                title: "Error!",
                text: "Falta algun dato!",
                icon: "error"
            });
        }

    }
}); 

selectFiltrar.addEventListener("change", () => {
    if (selectFiltrar.value === "edad") {
        edadSelectFiltro.style.display = "block"
        generoSelectFiltro.style.display = "none"

    }else if (selectFiltrar.value === "genero"){
        edadSelectFiltro.style.display = "none"
        generoSelectFiltro.style.display = "block"
    }
})

btnFiltrar.addEventListener("click", (e) =>{
    let filtro = selectFiltrar.value
    let resultado = []
    if (filtro === "edad") {
        let tipoEdad = edadSelectFiltro.value
        if (tipoEdad === "mayorEdad") {
            resultado = usuarios.filter(user => user.edad >= 18);
            
        }else{
            resultado = usuarios.filter(user => user.edad < 18);
        }
    }else if (filtro === "genero") {
        let tipoGenero = generoSelectFiltro.value

        resultado = usuarios.filter(user => user.genero === tipoGenero)
    }
    actualizarResultados(resultado)

});

function actualizarResultados(resultados) {
    divResultados.innerHTML = ""
    resultados.forEach(element => {
        agregarNodo(element.nombre, element.email, element.edad ,element.genero)
    });
}

function agregarNodo(nombre, email,edad, genero) {
    let columna = document.createElement('div') //esto ess como escribir a mano
    columna.className = "col animate__animated animate__fadeInDown"
    let carta = document.createElement('div')
    carta.className = "card"
    let imagen = document.createElement('img')
    imagen.className = "card-img-top"
    if (genero == 1) {
        imagen.src = "https://cdn-icons-png.flaticon.com/512/3233/3233483.png"
        
    }else{
        imagen.src ="https://cdn-icons-png.flaticon.com/512/3577/3577099.png" 
    }
    let bodyCard = document.createElement('div')
    bodyCard.className = "card-body"
    let titulo = document.createElement('h5')
    titulo.className = "card-title"
    titulo.innerText = nombre //innerText se pone por que es el valor del nodo
    let parrafo = document.createElement('p')
    parrafo.className = "card-text"
    parrafo.innerText = email
    let edadInput = document.createElement("p")
    edadInput.className = "card-text"
    edadInput.innerText = edad
    bodyCard.append(titulo)
    bodyCard.append(parrafo)
    bodyCard.append(edadInput)

    carta.append(imagen)
    carta.append(bodyCard)
    columna.append(carta)
    divResultados.append(columna)

}

function clearInputs() {
    inputNombre.value = "";
    inputEmail.value = "";
    inputPass.value = "";
    inputGenero.value = "Masculino";
}
