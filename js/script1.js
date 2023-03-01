console.log('hola mundo');

document.addEventListener('DOMContentLoaded', function () {});

const btnTickets = document.querySelector('.botonTickets');

btnTickets.addEventListener('click', function (e) {
  e.preventDefault();
  window.open = 'https://martiubi.github.io/CaC-TP-Bootstrap/tickets.html';
});
