let nombreAlert = "";
let edadAlert = 0;
let continuarAlert = confirm("¿Estás seguro de que quieres continuar?");

if (continuarAlert) {
    // Solicitar el nombre con Swal
    Swal.fire({
        title: "Introduce tu nombre",
        input: "text",
        inputLabel: "Nombre:",
        inputPlaceholder: "Introduce tu nombre",
        showCancelButton: true,
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.value) {
            nombreAlert = result.value;
            saludar(nombreAlert).then(() => {  // Aseguramos que el saludo se complete antes de solicitar la edad
                solicitarEdad();
            });
        }
    });
} else {
    Swal.fire({
        title: "Qué pena que no quieres continuar 😥",
        showClass: {
            popup: "animate__animated animate__fadeInUp animate__faster"
        },
        hideClass: {
            popup: "animate__animated animate__fadeOutDown animate__faster"
        }
    });
}

// Función para solicitar la edad
function solicitarEdad() {
    Swal.fire({
        title: "Introduce tu edad",
        input: "number",
        inputLabel: "Edad:",
        inputPlaceholder: "Introduce tu edad",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        inputValidator: (value) => {
            if (!value || isNaN(value)) {
                return "Por favor, introduce un número válido";
            }
        }
    }).then((result) => {
        if (result.value) {
            edadAlert = parseInt(result.value);
            Swal.fire(`Tu edad es de ${edadAlert}`).then(() => {
                solicitarNumeros(); // Llamamos a solicitarNumeros después de mostrar la edad
            });
        }
    });
}

// Función saludar
function saludar(nombreAlert) {
    return Swal.fire(`¡Bienvenido a mi página, ${nombreAlert}!`); // Aseguramos que saludar devuelva la promesa de Swal
}

// Función para solicitar los números y mostrar la suma
function solicitarNumeros() {
    let num1, num2;

    Swal.fire({
        title: "Introduce un número",
        input: "number",
        inputLabel: "Primer número:",
        inputPlaceholder: "Introduce un número",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        inputValidator: (value) => {
            if (!value || isNaN(value)) {
                return "Por favor, introduce un número válido";
            }
        }
    }).then((result) => {
        if (result.value) {
            num1 = Number(result.value);

            // Solicitar el segundo número después de obtener el primero
            Swal.fire({
                title: "Introduce un segundo número",
                input: "number",
                inputLabel: "Segundo número:",
                inputPlaceholder: "Introduce otro número",
                showCancelButton: true,
                cancelButtonText: "Cancelar",
                inputValidator: (value) => {
                    if (!value || isNaN(value)) {
                        return "Por favor, introduce un número válido";
                    }
                }
            }).then((result) => {
                if (result.value) {
                    num2 = Number(result.value);
                    Swal.fire(`La suma de ${num1} + ${num2} = ${sumaFlecha(num1, num2)}`);
                }
            });
        }
    });
}

// Ejemplo de suma con función flecha
const sumaFlecha = (param1, param2) => param1 + param2;
