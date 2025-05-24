let celcius = document.querySelector("#celcius")
let btnConvertir = document.querySelector("#convertir") 

btnConvertir.addEventListener('click', ()=> {
    let celciusInput = celcius.value
    if (celciusInput === "") {
        Swal.fire({
            title: "Warning",
            text: "Introduce un numero para convertir",
            icon: "warning"
        });
    }else {
        Swal.fire({
            title: "Conversor",
            text: `La conversion de ${celciusInput}ºC = ${conversor(celciusInput).toFixed(2)}ºF`,
            icon: "success"
        });
    }
})

function conversor(celcius) {
    let resultado = parseFloat(celcius * 9/5 ) + 32
    return resultado
}

let moneda = document.querySelector("#moneda")
let origen = document.querySelector("#origen")
let destino = document.querySelector("#destino")

let convertirMoneda = document.querySelector("#convertirMoneda")

convertirMoneda.addEventListener('click', ()=> {
    let monedaInput = moneda.value
    let resultado

    if (monedaInput === "") {
        Swal.fire({
            title: "Warning",
            text: "Introduce un numero para convertir",
            icon: "warning"
        });
    }else{
        let tipoCmabio = 1.08

        if (origen.value === destino.value) {
            resultado = monedaInput
        }else if(origen.value === "EUR" && destino.value ==="USA"){
            resultado = monedaInput * tipoCmabio
        }else if (origen.value === "USA" && destino.value === "EUR") {
            resultado = monedaInput / tipoCmabio
        }

        Swal.fire({
            title: "Exito",
            text:  `${monedaInput} ${origen.value} = ${resultado.toFixed(2)} ${destino.value}`,
            icon: "warning"
        });

    }
})