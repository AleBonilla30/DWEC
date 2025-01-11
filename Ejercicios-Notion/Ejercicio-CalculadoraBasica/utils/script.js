let alojamInput = document.querySelector('#alojamiento')
let alimentInput = document.querySelector('#alimentacion')
let entretenimientoInput = document.querySelector('#entretenimiento')
let btnCalcular = document.querySelector('#calcuGastos')

btnCalcular.addEventListener('click', (e) => {
    let alojamiento = parseFloat(alojamInput.value)//se conviete a numeros
    let alimentacion = parseFloat(alimentInput.value)
    let entretenimiento = parseFloat(entretenimientoInput.value)

    if (isNaN(alojamiento) || isNaN(alimentacion) || isNaN(entretenimiento)) {

        Swal.fire({
            title: "Faltan datos",
            text: "Por favor, completa todos los campos antes de calcular los gastos.",
            icon: "warning",
        });
        return;
    }
    
    //muestro con alerta los gastos ingresados: 

    Swal.fire({
        title: "Datos ingresados",
        text: `Gastos a calcular:\n
        Alojamiento: ${alojamiento}€\n
        Alimentación: ${alimentacion}€\n
        Entretenimiento: ${entretenimiento}€`,
        icon: "info",
        confirmButtonText: "Calcular total",

    }).then(() => {//enlazo las alertas
        
        //calcular el total despues de confrimar
        let sumaGastos = calcularGastos(alojamiento,alimentacion,entretenimiento)
        
        //muestro el total en una segunda aleras
        Swal.fire({
            title: "Calculado!",
            text: `El coste total del viaje es ${sumaGastos}€!`,
            icon: "success"
        });
    })
})

function calcularGastos(num1, num2, num3) {
    return num1 + num2 + num3
}

