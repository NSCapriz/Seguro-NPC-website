const mostrarContenidoBasico = document.getElementById('mostrarContenidoBasico');
const contenidoBasico = document.getElementById('contenidoBasico');

contenidoBasico.classList.add('oculto')

mostrarContenidoBasico.addEventListener('click', function mostrarBasico() {
    contenidoBasico.classList.toggle('contenidoBasico');
});

const mostrarContenidoIntermedio = document.getElementById('mostrarContenidoIntermedio');
const contenidoIntermedio = document.getElementById('contenidoIntermedio');

contenidoIntermedio.classList.add('oculto')

mostrarContenidoIntermedio.addEventListener('click', function mostrarIntermedio() {
    contenidoIntermedio.classList.toggle('contenidoIntermedio');
});


const mostrarContenidoPremium = document.getElementById('mostrarContenidoPremium');
const contenidoPremium = document.getElementById('contenidoPremium');

contenidoPremium.classList.add('oculto')

mostrarContenidoPremium.addEventListener('click', function mostrarPremium() {
    contenidoPremium.classList.toggle('contenidoPremium');
});
