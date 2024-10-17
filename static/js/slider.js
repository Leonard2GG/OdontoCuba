const sliders = [...document.querySelectorAll('.testimony__body')];
let value;
let intervalId;

// Función para cambiar la posición del slider
function changePosition(add) {
    const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
    value = Number(currentTestimony);
    value += add;

    sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');

    if(value === sliders.length + 1 || value === 0){
        value = value === 0 ? sliders.length : 1;
    }
    
    sliders[value-1].classList.add('testimony__body--show');
}

// Función para iniciar el slider automático
function startAutoPlay() {
    intervalId = setInterval(() => {
        changePosition(1);
    }, 5000); // Cambia esto según lo que desees (en milisegundos)
}

// Inicia el autoplay al cargar la página
document.addEventListener('DOMContentLoaded', startAutoPlay);

