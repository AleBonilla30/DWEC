let pantalla = document.querySelector("#pantalla");
let historial = document.querySelector("#historial")

function agregar(valor){
    pantalla.value += valor
}

function limpiar(){
    pantalla.value = ""
}

function calcular(){
    let expresion = pantalla.value 
    let resultado = eval(pantalla.value)
    pantalla.value = resultado

    let operacion = expresion + " = " + resultado

    agregarHistorial(operacion)
}

function agregarHistorial(operacion) {
    let item = document.createElement('li')
    item.className = 'list-group-item text-center fs-2'
    item.textContent = operacion
    historial.append(item)
}