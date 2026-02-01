const progresoTxt = document.getElementById('contador-progreso');
const mensajeFinal = document.getElementById('mensaje-final');
const galeria = document.getElementById('galeria');
const btnShare = document.getElementById('btnShare');

let porcentaje = 0;

function iniciarCarga() {
    const intervalo = setInterval(() => {
        if (porcentaje <= 100) {
            progresoTxt.textContent = porcentaje + "%";
            porcentaje++;
        } else {
            clearInterval(intervalo);
            finalizarAnuncio();
        }
    }, 50); // Velocidad de carga
}

function finalizarAnuncio() {
    // 1. Cambiar mensajes
    progresoTxt.textContent = "100% OFICIAL";
    mensajeFinal.textContent = "¡Ya no es un secreto! Te amo, Angy ❤️";
    mensajeFinal.style.fontFamily = "'Pacifico', cursive";
    mensajeFinal.style.fontSize = "1.8em";

    // 2. Revelar las fotos (quitar el borroso)
    galeria.style.filter = "none";

    // 3. Mostrar botón de compartir
    btnShare.style.display = "inline-block";
}

// Lógica para compartir el link (si el navegador lo permite)
btnShare.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: '¡Es Oficial!',
            text: 'Miren lo que hice para Angy ❤️',
            url: window.location.href
        });
    } else {
        alert("¡Copia el link de arriba y pásalo a tus amigos! ❤️");
    }
});

// Iniciar al cargar la página
window.onload = iniciarCarga;
