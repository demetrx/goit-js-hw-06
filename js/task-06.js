const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(e) {
  if (e.currentTarget.value.length == e.currentTarget.dataset.length) {
    e.currentTarget.classList.remove('invalid');
    e.currentTarget.classList.add('valid');
    return;
  }

  e.currentTarget.classList.remove('valid');
  e.currentTarget.classList.add('invalid');
}
