let counter = 0;
const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const counterEl = document.querySelector("#value");

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);

function decrement() {
  counter -= 1;
  counterEl.textContent = counter;
}
function increment() {
  counter += 1;
  counterEl.textContent = counter;
}
