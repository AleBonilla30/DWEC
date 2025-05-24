let historial = document.querySelector("#historial")
let resultado = document.querySelector("#calculos")

function limpiar (){
    resultado.value = ""
}

function agregar(value){
    resultado.value += value
}

function calcular(){
    let expresion = resultado.value

    let calculo = eval(resultado.value)
    resultado.value = calculo

    let listaCalculos = expresion + " = " + calculo

    agregarHistorial(listaCalculos)
}

function agregarHistorial(calculos){
    let li = document.createElement('li')
    li.className = 'list-group-item text-center'
    li.textContent = calculos
    historial.append(li)
}