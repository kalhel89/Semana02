console.log("Página cargada correctamente");

const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function () {
        alert("Formulario enviado correctamente");
    });
}

const boton = document.getElementById("boton-saludo");

if (boton) {
    boton.addEventListener("click", function () {
        alert("Hola, gracias por visitar nuestra web");
    });
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}