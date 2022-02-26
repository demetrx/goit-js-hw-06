const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
inputEl.addEventListener("input", onInputChange);

function onInputChange(e) {
  textEl.style.fontSize = `${e.currentTarget.value}px`;
}
textEl.style.fontSize = `${inputEl.value}px`;
