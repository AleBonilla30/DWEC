let numeroInput = document.querySelector("#numero")
let btnEnviarNum = document.querySelector("#enviarNumero")
let listaPrimos = document.querySelector('#listaPrimos')

btnEnviarNum.addEventListener('click', (e) => {

    let numeroPrimo = parseInt(numeroInput.value)

    if (isNaN(numeroPrimo) || numeroPrimo <= 0) {

        Swal.fire({
            title: "Warning!",
            text: "Introduce un numero para generar los numero primos.!",
            icon: "warning"
        });
    }

    //limpiar los numeros primos anteriores
    listaPrimos.innerHTML = ""
    for (let i = 2; i <= numeroPrimo; i++) {
        if (esPrimo(i)){
            let li = document.createElement('li')
            li.textContent = i
            listaPrimos.append(li)

            //muestro un mensaje de exito

            Swal.fire({
                title: "Listo!",
                text: `Se ha generado los numeros primos hasta ${numeroPrimo}`,
                icon: "success"
            });
  
        }
    
    }

    
})

function esPrimo(num) {

    //si es numero es menor o igual a 1 no es primo
    if (num <= 1) {
        return false
    }

    //verificar que es primo 

    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false //si tiene algun divisor no es primo
        }
        
        return true //si no tiene es primo
    }
}

