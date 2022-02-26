const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(e) {
  if (e.currentTarget.value.length == inputEl.getAttribute("data-length")) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
    return;
  }
  inputEl.classList.remove("valid");
  inputEl.classList.add("invalid");
}
