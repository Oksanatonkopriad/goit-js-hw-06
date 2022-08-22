const input = document.querySelector(`#validation-input`);

function onInput(name) {
  const inpLength = Number(input.getAttribute(`data-length`));

  if (name.currentTarget.value.length === inpLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}

input.addEventListener(`blur`, onInput);
