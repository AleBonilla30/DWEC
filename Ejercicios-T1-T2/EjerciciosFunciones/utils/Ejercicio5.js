/* 5. Realiza un programa que permita introducir al usuario cual es el valor de la casa que se va a comprar. 
Para ello el programa nada más iniciar pedirá:

- Precio de la casa que se va a comprar
- Dinero que le va a pedir al banco
- Número de años en los que lo va a devolver
- % de interes que se le va a aplicar

Una vez introducidos todos estos datos, y mediantes funciones se deberá mostrar la tabla de amortización 
que tendrá el pago de la hipoteca. Por ejemplo para unos datos introducidos de;

- Valor de la casa 450000€
- Dinero pedido al banco: 200000€
- Años a pagar: 15
- Intereses aplicados: 1,5%

La tabla de amortización será la siguiente

```javascript
hipoteca.js:17 Vas a pagad una cantidad de 500000 ya con intereses en 120 mensualidades con un importe mensual de 4167
hipoteca.js:25 Pago correspondiente al mes 1 con una cantidad de 495833
hipoteca.js:25 Pago correspondiente al mes 2 con una cantidad de 491667
hipoteca.js:25 Pago correspondiente al mes 3 con una cantidad de 487500
hipoteca.js:25 Pago correspondiente al mes 4 con una cantidad de 483333
hipoteca.js:25 Pago correspondiente al mes 5 con una cantidad de 479167
hipoteca.js:25 Pago correspondiente al mes 6 con una cantidad de 475000
hipoteca.js:25 Pago correspondiente al mes 7 con una cantidad de 470833
hipoteca.js:25 Pago correspondiente al mes 8 con una cantidad de 466667
``` */
function datosUsuario() {
    let compraCasa = parseFloat(prompt("Introduce el precio de la casa para comprar?"));
    let dineroPrestamo = parseFloat(prompt("Cuanto dinero vas a pedir al banco?"));
    let numeroAnios = parseInt(prompt("Numero de años de hipoteca?"));
    let intereses = parseFloat(prompt("% de intereses que se le va aplicar a la vivienda?"))

    return{compraCasa,dineroPrestamo,numeroAnios,intereses}

}

function calculoPagoMensual(montoPrestamo, interesAnual, numeroPagos) {
    const mensual = interesAnual / 12 / 100

    return montoPrestamo * (mensual / (1 - Math.pow(1 + mensual, -numeroPagos )))
}

function tablaAmortizacion(dineroPrestamo, interesAnual, numeroAnos) {
    const numeroPagos = numeroAnos * 12 //numero de pagos en meses
    const pagoMensual = calculoPagoMensual(dineroPrestamo, interesAnual, numeroAnos)
    let saldoRestante = dineroPrestamo

    alert(
        `Vas a pagar una cantidad total de ${(pagoMensual * numeroPagos).toFixed(2)}€ ya con intereses en ${numeroPagos} mensualidades
        con un importe mensual de ${pagoMensual}`
    )

    for (let mes = 1; mes <= numeroPagos; mes++) {
        const interesMensual = saldoRestante * (interesAnual / 12 / 100)
        const capitalMensual =  pagoMensual - interesMensual
        saldoRestante -= capitalMensual

        //aseguramos que no aparezca saldo negativo 
        saldoRestante = saldoRestante < 0 ? 0 : saldoRestante

        console.log(`Pago correspondiente al mes ${mes} con una cantidad de ${saldoRestante.toFixed(2)}€`)
        
    }

    
}
let usuario = datosUsuario()
tablaAmortizacion(usuario.compraCasa,usuario.dineroPrestamo,usuario.numeroAnios,usuario.intereses)

