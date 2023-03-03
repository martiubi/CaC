document.addEventListener('DOMContentLoaded', function () {});

const btnTickets = document.getElementsByClassName('comprarTickets');

for (var i = 0; i < btnTickets.length; i++) {
  btnTickets[i].addEventListener('click', function (e) {
    e.preventDefault();
    window.open('https://martiubi.github.io/CaC-TP-Bootstrap/tickets.html');
  });
}
