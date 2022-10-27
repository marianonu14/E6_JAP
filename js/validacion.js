const forms = document.querySelectorAll('.needs-validation');
const terminos = document.getElementById('terminos');
const terminosFeedback = document.getElementById('feedback-terminos');
const btnFeedback = document.getElementById('btn-terminos');
const terminosCondiciones = document.getElementById('terminos-condiciones');
const terminosLabel = document.getElementById('terminos-label');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener(
    'submit',
    (event) => {
      terminosValidation();
      terminosForValidation();
      passwordForValidation();
      passwordValidation();

      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    },
    false
  );
});

function passwordForValidation() {
  password1.addEventListener('input', passwordValidation);
  password2.addEventListener('input', passwordValidation);
}

function passwordValidation() {
  const passwordIsInvalid =
    password1.value.length < 6 || password1.value !== password2.value;

  if (passwordIsInvalid) return password2.setCustomValidity('is-invalid');

  password2.setCustomValidity('');
}

function terminosValidation() {
  terminos.addEventListener('change', terminosForValidation);
}

function terminosForValidation() {
  if (terminos.checked) {
    terminos.classList.remove('is-invalid');
    terminos.classList.add('is-valid');
    terminosFeedback.textContent = '';
    btnFeedback.classList.remove('text-danger');
    return;
  }
  terminos.classList.add('is-invalid');
  terminosFeedback.textContent = 'Debe Aceptar Los Terminos del Servicio';
  btnFeedback.classList.add('text-danger');
}
