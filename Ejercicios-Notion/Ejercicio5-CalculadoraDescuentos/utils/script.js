let precioInput = document.querySelector('#precio')
let descuentoInput = document.querySelector('#descuento')
let btnDescuento = document.querySelector('#btnDescuento')

let listaRestultado = document.querySelector('#resultado')
let divResultado = document.querySelector('#divResultado')

btnDescuento.addEventListener('click', (e)=>{
    e.preventDefault()
    let precioOriginal = parseFloat(precioInput.value)
    let descuento = parseInt(descuentoInput.value)

    if(isNaN(precioOriginal) || precioOriginal <= 0) {
        Swal.fire({
            title: "Warning!",
            text: "Por Favor, introduce el precio para calcular el descuento",
            icon: "warning"
        });
    }

        listaRestultado.innerHTML = ""

        let precioFinal = calcularDescuento(precioOriginal)

        let parrafo = document.createElement('p')
        parrafo.textContent = `Datos obtenidos:`
        divResultado.append(parrafo)
        let liprecioOriginal = document.createElement('li')
        liprecioOriginal.textContent = ` Precio original: ${precioOriginal}€`
        listaRestultado.append(liprecioOriginal)

        let liDescuento = document.createElement('li')
        liDescuento.textContent = ` Descuento aplicado: ${descuento}%`
        listaRestultado.append(liDescuento)

        let liprecioFinal = document.createElement('li')
        liprecioFinal.textContent = `Precio con descuento aplicado: ${precioFinal}€`
        listaRestultado.append(liprecioFinal)
        divResultado.append(listaRestultado)


    

    function calcularDescuento(precio) {
        return precio * (1 - descuento/100)
    }
})

