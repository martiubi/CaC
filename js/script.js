document.addEventListener('DOMContentLoaded', function () {});

//Variables

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const cantidad = document.getElementById('cant');
const categoria = document.getElementById('cat');
const form = document.getElementById('formulario');
const borrarBtn = document.getElementById('borrar');
const resumenBtn = document.getElementById('resumen');
const errorMessage = document.getElementsByClassName('error-message');
const resumenMessage = document.getElementsByClassName('resumen-message');
const cancelarBtn = document.getElementById('cancelar');
const comprarBtn = document.getElementById('comprar');
const precioTot = document.getElementById('precio-final');
const exitoMessage = document.getElementsByClassName('exito-message');

//EventListener boton de resumen

resumenBtn.addEventListener('click', (e) => {
  e.preventDefault();

  errorMessage[0].style.display = 'none';

  const formData = {
    nombre: nombre.value,
    apellido: apellido.value,
    email: email.value,
    cantidad: cantidad.value,
    categoria: categoria.value,
  };

  if (Validation() === false) {
    errorMessage[0].style.display = 'block';
  } else {
    let total = precioFinal(formData.categoria, formData.cantidad);
    precioTot.innerHTML = '$' + total;
    resumenMessage[0].style.display = 'block';

    setTimeout(function () {
      resumenMessage[0].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }, 100);
  }
});

// EventListener boton de borrar y cancelar

borrarBtn.addEventListener('click', (e) => {
  e.preventDefault();
  errorMessage[0].style.display = 'none';
  form.reset();
});

cancelarBtn.addEventListener('click', (e) => {
  e.preventDefault();
  resumenMessage[0].style.display = 'none';
  form.reset();
});

comprarBtn.addEventListener('click', (e) => {
  resumenMessage[0].style.display = 'none';
  exitoMessage[0]

  setTimeout(() => {
    exitoMessage[0]..style.display = 'none';
  }, 2000);

  form.reset();
});

// Functions

function Validation() {
  if (
    nombre.value == '' ||
    apellido.value == '' ||
    email.value == '' ||
    cantidad.value == '' ||
    categoria.value == 'Selecciona entradas'
  ) {
    return false;
  }
}

function precioFinal(categ, cant) {
  let total = 0;
  switch (categ) {
    case 'Estudiante':
      total = cant * 200 * 0.2;
      break;
    case 'Trainee':
      total = cant * 200 * 0.5;
      break;
    case 'Junior':
      total = cant * 200 * 0.85;
      break;
  }
  return total;
}
