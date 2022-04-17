let counterValue = 0;
const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const counterValueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

function decrement() {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
}
function increment() {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
}
