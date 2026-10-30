
// Animação de entrada dos elementos

const elementos = document.querySelectorAll(
    '.card, .beneficios-grid div, .sobre'
);

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('mostrar');
        }
    });
}, {
    threshold: 0.15
});

elementos.forEach((elemento) => {
    elemento.classList.add('animar');
    observador.observe(elemento);
});

