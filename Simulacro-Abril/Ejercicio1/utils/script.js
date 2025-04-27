let result = document.querySelector('#result')
let historial = document.querySelector('#listaHistorial')

function agregar(valor){
    result.value += valor
}

function calcular (){
    const resultado = eval(result.value)
    agregarHistorial(result.value + " = " + resultado)
    result.value = resultado
}

function agregarHistorial(operacion){
    let li = document.createElement('li')
    li.textContent = operacion
    historial.append(li)

}

function limpiar(){
    result.value = ''
}