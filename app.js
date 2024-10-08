// Inicialización de variables del carrusel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images img');
const totalSlides = slides.length;
const name = document.getElementById('name');

// Función para mover el carrusel
function moveSlide(direction) {
    // Ocultar la imagen actual
    slides[currentSlide].classList.remove('active');

    // Actualizar el índice del slide actual
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Mostrar la nueva imagen
    slides[currentSlide].classList.add('active');

    // Ajustar la posición del carrusel
    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Función validar nombre
function validarNombre(nombre) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+(?:\s[A-Za-zÁÉÍÓÚáéíóúñÑ]+)*$/;
    return regex.test(nombre);
}

// Event listener para el formulario
document.getElementById('reservation-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;

    validarNombre(name) ? console.log('nombre correcto') : console.log('nombre no válido');
    // Validar que todos los campos estén completos
    if (validarNombre(name) && email && phone && service && date) {
        // Mostrar el mensaje de confirmación
        document.getElementById('confirmation-message').classList.remove('hidden');

        // Limpiar el formulario
        this.reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
