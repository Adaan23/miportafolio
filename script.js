document.addEventListener("DOMContentLoaded", () => {
    // Observador de animaciones al hacer scroll (Aparecer elementos a medida que bajas)
    const opcionesObservador = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observador = new IntersectionObserver((entradas, observador_instancia) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
                // Dejamos de observar el elemento para mejorar el rendimiento
                observador_instancia.unobserve(entrada.target); 
            }
        });
    }, opcionesObservador);

    const elementosAnimables = document.querySelectorAll('.animar-scroll');
    elementosAnimables.forEach(elemento => observador.observe(elemento));
    
    // Añadimos scroll suave para los enlaces del menú / navegación
    document.querySelectorAll('a[href^="#"]').forEach(enlace => {
        enlace.addEventListener('click', function (evento) {
            evento.preventDefault();
            const idDestino = this.getAttribute('href');
            const elementoDestino = document.querySelector(idDestino);
            
            if (elementoDestino) {
                elementoDestino.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
