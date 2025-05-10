let historial = document.querySelector("#historial")
let resultado = document.querySelector("#resultado")

function aggregar(valor) {
    resultado.value += valor
}

function calcular(){
    let expresion = resultado.value
    let operacion = eval(resultado.value)
    resultado.value = operacion

    let historial1 = expresion + " = " + operacion
    agregarHistorial(historial1)
}

function limpiar(){
    resultado.value = ""
}

function agregarHistorial(operacion){
    let li = document.createElement('li')
    li.className = "list-group-item"
    li.textContent = operacion

    historial.append(li)
}