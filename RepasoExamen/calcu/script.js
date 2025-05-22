let historial = document.querySelector("#historial")
let calcularInp = document.querySelector("#calcularInput")

function limpiar(){
    calcularInp.value = ''
}

function agregar(valor) {
    calcularInp.value += valor
}

function calcular(){
    let expresion = calcularInp.value

    let calculo = eval(calcularInp.value)
    calcularInp.value = calculo

    let his = expresion + " = " + calculo
    pintarHistorial(his)

}

function pintarHistorial(calculo){
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.textContent = calculo
    historial.append(li)

}