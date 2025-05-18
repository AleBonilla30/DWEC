let result = document.querySelector("#resultado")
let pantalla = document.querySelector("#pantalla")

function agregar(value) {
    pantalla.value += value
}

function calcular(){
    let expresion = pantalla.value;

    let calcular = eval(pantalla.value)
    pantalla.value = calcular
    let historial = expresion + " = " + calcular
    pintarHistorial(historial)
}

function limpiar(){
    pantalla.value = ""
}

function pintarHistorial(resultado){
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.textContent = resultado

    result.append(li);
}