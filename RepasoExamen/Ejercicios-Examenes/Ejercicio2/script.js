let celciusInput = document.querySelector("#celcius")
let convertir = document.querySelector("#convertir")

//PARA CONVERTIR DE EUROS A DOLARES
let cantidad = document.querySelector("#moneda")
let origen = document.querySelector("#origen")
let destino = document.querySelector("#destino")
let btnConvertir = document.querySelector("#btnConvertir")

convertir.addEventListener("click", () => {
    let celcius = celciusInput.value
    if (celcius === "") {
        Swal.fire("Introduce un numero para convertir!");
    }else {
        
        Swal.fire({
            title: "Conversión!",
            text: `${celcius}ºC = ${conversor(celcius)}ºF`,
            icon: "question"
        });
        limpiar()
    }
})

function conversor(celcius){
    let result = parseFloat((celcius) * 9/5 ) + 32
    return result

}

function limpiar(){
    celciusInput.value = ""
}

btnConvertir.addEventListener('click', ()=> {
    let cantidadInput = cantidad.value
    let resultado

    if (isNaN(cantidadInput) || cantidadInput <= 0) {
        Swal.fire({
            title: "warning!",
            text: 'Introduce la cantidad para convertir',
            icon: "warning"
        });
    }else {
        let tipoCambio = 1.08

        if (origen.value === destino.value) {
            resultado = cantidadInput
        }else if (origen.value === 'EUR' && destino.value === 'USA') {
            resultado = cantidadInput * tipoCambio
        } else if (origen.value === 'USA' && destino.value === 'EUR'){
            resultado = cantidadInput / tipoCambio
        }
        Swal.fire({
            title: "Exito!",
            text: `${cantidadInput} ${origen.value} = ${resultado.toFixed(2)} ${destino.value}`,
            icon: "success"
        });

    }
})