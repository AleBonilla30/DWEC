/* ### Ejercicio 1: Calculadora de Gastos de Viaje

**Objetivo:** Crear una calculadora que sume los gastos de alojamiento, alimentación y entretenimiento.

**Instrucciones:**

1. Solicita al usuario que ingrese los gastos estimados para cada categoría mediante inputs.
2. Calcula el coste total sumando todos los gastos.
3. Muestra el coste total al usuario.

**Ejemplo de entrada:**

- Gastos de alojamiento: 200€
- Gastos de alimentación: 150€
- Gastos de entretenimiento: 100€

**Salida esperada:** El coste total del viaje es 450€. */

let inputAlojamiento = document.querySelector("#alojamiento");
let inputAlimentacion = document.querySelector("#alimentacion");
let inputEntretenimiento = document.querySelector("#entretenimiento");
let btnCoste = document.querySelector("#Calcular");
let resultado = document.querySelector("#resultado")



btnCoste.addEventListener('click', () => {
    let alojamiento = parseFloat(inputAlojamiento.value)
    let alimento = parseFloat(inputAlimentacion.value)
    let entretenimiento = parseFloat(inputEntretenimiento.value)

    if (isNaN(alimento) || isNaN(alojamiento) || isNaN(entretenimiento)) {
        alert('Por favor, complete todos los campos');
        return
    }
    console.log(alojamiento);
    
    let suma = calcularCoste(alojamiento, alimento, entretenimiento)
    
    resultado.textContent = `El coste Total del viaje es ${suma}€`
})

function calcularCoste(num1, num2, num3){
    return num1 + num2 + num3;
}
