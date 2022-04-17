const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('All form fields should be filled in!');
  }

  const info = {
    email: email.value,
    password: password.value,
  };

  console.log(info);
  e.currentTarget.reset();
}
