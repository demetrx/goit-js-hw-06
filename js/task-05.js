const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput);

function onInput(e) {
  outputEl.textContent = e.currentTarget.value === '' ? 'Anonymous' : e.currentTarget.value;
}
