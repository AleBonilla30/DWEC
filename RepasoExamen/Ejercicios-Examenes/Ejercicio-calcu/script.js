let historial = document.querySelector("#historial")
let resultado = document.querySelector("#resultado")

function limpiar(){
    resultado.value = ''
}

function agregar(value) {
    resultado.value += value
}

function calcular(){
    let expresion = resultado.value

    let calculo = eval(resultado.value)
    resultado.value = calculo

    let expresionHistorial = expresion + " = " + calculo
    agregarHistorial(expresionHistorial)
}

function agregarHistorial(calculo){
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.textContent = calculo
    historial.append(li)

}