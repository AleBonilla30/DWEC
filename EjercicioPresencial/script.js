let url = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple'
let preguntas = []
let indicePreguntas = 0
let puntuacion = 0
let divResultado = document.querySelector('#resultado')
let puntuacionDiv = document.querySelector('#puntuacionDiv')

//cargo el sonido de respuesta correcta-incorrecta

const incorrect = new Audio('sound/incorrect.mp3')
const correct = new Audio('sound/correct.mp3')

puntuacionDiv.innerText = `puntuacion: ${puntuacion}`


//funcion cargar preguntas desde el api

async function consultarPreguntas(url) {
    let respuesta = await fetch(url)
    let json = await respuesta.json()

    preguntas = json.results
    preguntas.forEach(element => {
      
      console.log(element.correct_answer);
    });
    pintarPregunta()

}

consultarPreguntas(url)

/* <div class="card" style="width: 18rem;">
  <div class="card-header">
    Featured
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div> */

function pintarPregunta() {

  if (indicePreguntas < preguntas.length ) {
    let preguntaActual = preguntas[indicePreguntas]

    let respuestas = _.shuffle([...preguntaActual.incorrect_answers, preguntaActual.correct_answer])

    let card = document.createElement('div')
    card.className = 'card animate__animated animate__fadeIn'
    card.style.width = '18rem;'

    let preguntaCarta = document.createElement('div')
    preguntaCarta.className = 'card-header'
    preguntaCarta.innerText = preguntaActual.question

    let ulRespuestas = document.createElement('ul')
    ulRespuestas.className = 'list-group list-group-flush'

    respuestas.forEach((respuesta) => {
        let liRespuesta = document.createElement('li');
        liRespuesta.className = 'list-group-item list-group-item-action';
        liRespuesta.innerText = respuesta;
        liRespuesta.style.cursor = 'pointer'

        liRespuesta.addEventListener('click', () =>{
          if (respuesta === preguntaActual.correct_answer) {
            puntuacion++;
            correct.play()

            Swal.fire({
              icon: 'success',
              title: '¡Correcto!',
              text: `Tu puntuación actual es: ${puntuacion}`,
              timer: 1000,
              showConfirmButton: false,
            });
          }else{
            incorrect.play();
                    Swal.fire({
                        icon: 'error',
                        title: 'Incorrecto',
                        text: `La respuesta correcta era: ${preguntaActual.correct_answer}`,
                        timer: 1000,
                        showConfirmButton: false,
                    });
          }

          puntuacionDiv.innerText = `Puntuacion: ${puntuacion}`
          divResultado.removeChild(card)//eliminar pregunta actual
          /* clearInterval(mostrarSuguientePregunta) */
          mostrarSuguientePregunta()
        })
        ulRespuestas.appendChild(liRespuesta);
    });

    card.appendChild(preguntaCarta);
    card.appendChild(ulRespuestas);
            
    divResultado.appendChild(card)

    indicePreguntas++;
    
    
  }
    
}

function mostrarSuguientePregunta() {
  setInterval(() => {
    divResultado.innerHTML = ""
    pintarPregunta()
  },10000)
}
