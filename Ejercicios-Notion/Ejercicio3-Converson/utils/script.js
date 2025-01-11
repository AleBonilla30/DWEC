let celciusInput = document.querySelector('#celcius')
let fahrenInput = document.querySelector('#Fahrenheit')

let btnCelcius = document.querySelector('#btnCelcius')
let btnFahrenheit = document.querySelector('#btnFahrenheit')

let temperaturaCelcius = document.querySelector('#tempe-celcius')
let tempeFahrenheit = document.querySelector('#tempe-fahrenheit')

btnCelcius.addEventListener('click', (e) =>{
    e.preventDefault()
    let fahrenheit = parseFloat(celciusInput.value)
    if (isNaN(fahrenheit) || fahrenheit === 0) {
        Swal.fire({
            title: "Error!",
            text: "Por Favor, introduce un numero para poder convertirlo",
            icon: "error"
        });
    }else{
        
        temperaturaCelcius.innerHTML = ""

        let p = document.createElement('p')
        p.textContent = `La temperatura en Fahrenheit es: ${convertirCelcius(fahrenheit)}`
        temperaturaCelcius.append(p)

    }

})

btnFahrenheit.addEventListener('click', (e)=> {
    e.preventDefault()

    let celcius = parseFloat(fahrenInput.value)

    if (isNaN(celcius) || celcius === 0) {
        Swal.fire({
            title: "Error!",
            text: "Por Favor, introduce un numero para poder convertirlo",
            icon: "error"
        });
    }else{
        tempeFahrenheit.innerHTML = ""
        

        let p = document.createElement('p')
        p.textContent = `La temperatura en celcius es: ${convertirFahrenheit(celcius.toFixed(2))}`
        tempeFahrenheit.append(p)

    }
})

function convertirCelcius(numero) {
    return (numero * 1.8) + 32
}

function convertirFahrenheit(numero) {
    return (numero - 32) * 0.5556
}