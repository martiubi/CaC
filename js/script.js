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
    // acá hay que hacer las cuentas y ponerlas en el mensaje.
    resumenMessage[0].style.display = 'block';
  }

  //console.log(formData);
});

// EventListener boton de borrar y cancelar520

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
