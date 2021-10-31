window.onload = iniciar;

function iniciar() {
  document.getElementById('submit').addEventListener('click', validate, false);
}

function valida_nombre() {
  var nombre = document.getElementById('nombre');

  if (nombre.value == '') {
    alert('El campo nombre no puede estar vacío');
    return false;
  }
  return true;
}

function valida_email() {
    var email = document.getElementById('email');
    if (email.value !== '@') {
      alert('Debe proporcionar un e-mail válido');
      return false;
    }
    return true;
  }


function validate(e) {    
    if (valida_nombre() && valida_email() && confirm('Pulse aceptar si desea enviar el form')){
      return true;
    }
    return false;
}
