const input = document.querySelector(`#name-input`);
const span = document.querySelector(`#name-output`);

function newInput(name) {
  span.textContent = name.currentTarget.value;

  if (name.currentTarget.value === "") {
    span.textContent = "Anonymous";
  }
}

input.addEventListener(`input`, newInput);
