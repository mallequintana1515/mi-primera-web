// -------------------------------
// 1. Efecto de escritura automática
// -------------------------------

const texto = "Mallerli Quintana Correa";
let index = 0;

function escribirNombre() {
    const titulo = document.getElementById("malle");

    if (titulo) {
        titulo.textContent = texto.slice(0, index);
        index++;

        if (index <= texto.length) {
            setTimeout(escribirNombre, 100);
        }
    }
}

document.addEventListener("DOMContentLoaded", escribirNombre);


// -------------------------------
// 2. Scroll suave para los enlaces del menú
// ------
