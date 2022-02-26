const changeColorBtnEl = document.querySelector(".change-color");
const currentColorTextEl = document.querySelector(".color");
changeColorBtnEl.addEventListener("click", onChangeColorClick);

function onChangeColorClick() {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  currentColorTextEl.textContent = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
