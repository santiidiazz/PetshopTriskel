import 'animate.css';
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Animación suave para el scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animación para mostrar elementos cuando se hace scroll
    const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    // Aplicar observador a elementos
    document.querySelectorAll('.categoria, .servicio').forEach((elemento) => {
        observador.observe(elemento);
    });

    // Validación del formulario de contacto
    const formularioContacto = document.getElementById('formulario-contacto');
    if (formularioContacto) {
        formularioContacto.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
            
            if (validarFormulario(nombre, email, mensaje)) {
                mostrarMensaje('¡Mensaje enviado con éxito!', 'success');
                formularioContacto.reset();
            }
        });
    }

    // Cargar testimonios dinámicamente
    const testimonios = [
        { nombre: "Juan Pérez", comentario: "Excelente servicio para mi mascota.", rating: 5 },
        { nombre: "María García", comentario: "Los mejores productos y atención.", rating: 5 },
        { nombre: "Carlos López", comentario: "Mi perro ama este lugar.", rating: 4 }
    ];

    const testimoniosContainer = document.querySelector('.testimonios-container');
    if (testimoniosContainer) {
        cargarTestimonios(testimonios, testimoniosContainer);
    }

    // Botón "Volver arriba"
    const botonArriba = document.createElement('button');
    botonArriba.innerHTML = '↑';
    botonArriba.className = 'boton-arriba';
    document.body.appendChild(botonArriba);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            botonArriba.style.display = 'block';
        } else {
            botonArriba.style.display = 'none';
        }
    });

    botonArriba.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Agregar estilos al documento
const styleSheet = document.createElement("style");
styleSheet.textContent = estilos;
document.head.appendChild(styleSheet);