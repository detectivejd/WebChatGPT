// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío automático del formulario

        // Obtener los valores de los campos
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Validar los campos
        if (!validarNombre(nombre)) {
            alert("Por favor, ingresa un nombre válido (mínimo 3 caracteres).");
            return;
        }

        if (!validarEmail(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        if (!validarMensaje(mensaje)) {
            alert("El mensaje debe tener al menos 10 caracteres.");
            return;
        }

        // Mostrar mensaje de confirmación
        alert("Formulario enviado con éxito. ¡Gracias por tu mensaje!");

        // Limpiar el formulario
        formulario.reset();
    });

    // Función para validar el nombre
    function validarNombre(nombre) {
        return nombre.length >= 3;
    }

    // Función para validar el correo electrónico usando una expresión regular
    function validarEmail(email) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }

    // Función para validar el mensaje
    function validarMensaje(mensaje) {
        return mensaje.length >= 10;
    }
});
