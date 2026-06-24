let imagenesGaleria = [];
let indiceActual = 0;

// Abre el modal y detecta el orden de las fotos
function abrirModal(srcActual) {
    const modal = document.getElementById('modal-visor');
    const imgAmpliada = document.getElementById('imagen-ampliada');
    
    // Obtiene todas las imágenes de la cuadrícula actual
    const elementosImg = document.querySelectorAll('.grid-galeria img');
    imagenesGaleria = Array.from(elementosImg).map(img => img.src);
    
    // Encuentra la posición de la foto donde se hizo click
    indiceActual = imagenesGaleria.indexOf(srcActual);
    
    // Muestra el modal y asigna la imagen
    modal.style.display = "block";
    imgAmpliada.src = srcActual;
}

// Cierra el visor
function cerrarModal() {
    const modal = document.getElementById('modal-visor');
    modal.style.display = "none";
}

// Cambia la imagen hacia adelante (1) o hacia atrás (-1) de forma infinita
function cambiarFoto(direccion) {
    indiceActual += direccion;
    
    // Si llega al final, vuelve a la primera
    if (indiceActual >= imagenesGaleria.length) {
        indiceActual = 0;
    }
    // Si retrocede de la primera, va a la última
    if (indiceActual < 0) {
        indiceActual = imagenesGaleria.length - 1;
    }
    
    const imgAmpliada = document.getElementById('imagen-ampliada');
    imgAmpliada.src = imagenesGaleria[indiceActual];
}

// Controles del teclado para mayor comodidad
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('modal-visor');
    
    // Solo actúa si el modal está abierto
    if (modal.style.display === "block") {
        if (event.key === 'ArrowRight') {
            cambiarFoto(1);
        } else if (event.key === 'ArrowLeft') {
            cambiarFoto(-1);
        } else if (event.key === 'Escape') {
            cerrarModal();
        }
    }
});
