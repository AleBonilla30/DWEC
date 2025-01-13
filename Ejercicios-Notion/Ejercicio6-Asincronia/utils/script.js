let usuarios = []
let divResultados = document.querySelector('#divResultado')
let btnContainer = document.querySelector('#btnResultado')


fetch('https://jsonplaceholder.typicode.com/users')
.then((Response) => Response.json())
.then((response1) => {
    usuarios = response1

    Swal.fire({
        title: "Espere un momento!",
        text: "Cargando datos...!",
        icon: "success"
    });
    
    usuarios.forEach(element => {

        setTimeout(() => {
            
            agregarUsuarios(element)
        }, 2000);

        console.log(element);
    });
    agregarBoton()
    
}).catch((e) => {
    console.log(e);
    
    Swal.fire({
        title: "Error!",
        text: "Error al cargar a los usuarios",
        icon: "error"
    });
})


/* <div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <button class="btn btn-primary">Go somewhere</button>
  </div>
 
</div> */
function agregarUsuarios(users) {
    let cardContainer = document.createElement('div')
    cardContainer.className = 'col'
    let card = document.createElement('div')
    card.className = 'card text-center animate__animated animate__jackInTheBox'

    let body = document.createElement('div')
    body.className = 'card-body'
    let nombre = document.createElement('h5')
    nombre.className = 'card-title'
    nombre.innerText = `${users.name}`
    body.append(nombre)

    let correo =  document.createElement('p')
    correo.className = 'card-text'
    correo.innerText = `${users.email}`
    body.append(correo)

    let direccion = document.createElement('p')
    direccion.className = 'card-text'
    
    //extraigo la direccion que es un objeto
    let address = `${users.address.street}, ${users.address.suite}, ${users.address.city}`
    direccion.innerText = `Dirección: ${address}`
    body.append(direccion)

    /* let button = document.createElement('button')
    button.className = 'btn btn-primary'
    button.innerText = 'Cargar mas datos'
    body.append(button) */


    card.append(body)
    cardContainer.append(card)
    divResultados.append(cardContainer)

}

function agregarBoton() {
    let botonContainer = document.createElement('div')
    botonContainer.className = 'd-flex justify-content-center mt-4'
    let button = document.createElement('button')
    button.className = 'btn btn-primary'
    button.innerText = 'Cargar mas datos'

    button.addEventListener('click', () => {
        button.disabled = true;
        button.innerText = 'Cargando...'

        setTimeout(() => {
            //aqui simula que agrega los 3 primero usuarios
            usuarios.slice(0,3).forEach((users) => {

                agregarUsuarios(users)
            })
            button.disabled = false;
            button.innerText = 'Cargar más datos'; 
        }, 2000);
        
    })
    botonContainer.append(button)
    btnContainer.append(botonContainer)
}