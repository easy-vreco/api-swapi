'use strict';

$(document).ready(function () {
  var $email = $('#email');
  var $password = $('#password');
  /* Validando el correo */
  var checkingEmail = $email.on('input', function () {
    console.log($(this).val());
    var PATTERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(PATTERNEMAIL.test($(this).val()));
  });
  /* Validando la contraseña*/
  /*
  Minimo 6 caracteres
  Al menos una letra mayúscula
  Al menos una letra minucula
  Al menos un dígito
  No espacios en blanco
  Al menos 1 caracter especial
  Ejemplo: Abc34*
  */
  var checkingPassword = $password.on('input', function () {
    var PATTERNPASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,}$/;
    console.log(PATTERNPASSWORD.test($(this).val()));
    if ($email.val().length !== 0 && PATTERNPASSWORD.test($(this).val()) === true) {
      $('#register-button').removeAttr('disabled');
    }
  });
});