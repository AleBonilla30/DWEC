
let historial = document.querySelector("#historial")
let resultado = document.querySelector("#resultado")

function limpiar() {
    resultado.value = ""
}

function agregar(valor){
    resultado.value += valor
}

function calcular() {
    let expresion = resultado.value

    let calcular = eval(resultado.value)
    resultado.value = calcular

    let pintarHistorial = expresion + " = " + calcular
    pintar(pintarHistorial)
}

function pintar(resultado){
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.textContent = resultado

    historial.append(li)

}