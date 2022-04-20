const boxesEl = document.querySelector('#boxes');
const numOfBoxesEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');

createBtnEl.addEventListener('click', onCreateBtnClick);
destroyBtnEl.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick() {
  createBoxes(Number(numOfBoxesEl.value));
  numOfBoxesEl.value = '';
}

function onDestroyBtnClick() {
  boxesEl.textContent = '';
  numOfBoxesEl.value = '';
}

function createBoxes(amount) {
  const numOfExistingBoxes = document.querySelectorAll('#boxes div').length;
  const arr = [];
  const incr = 10;
  let size = 30 + numOfExistingBoxes * incr;

  for (let i = 0; i < amount; i += 1) {
    const el = document.createElement('div');

    el.style.backgroundColor = getRandomHexColor();
    el.style.width = el.style.height = `${size}px`;

    arr.push(el);
    size += incr;
  }

  boxesEl.append(...arr);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
