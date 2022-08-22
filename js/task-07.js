const input = document.querySelector(`#font-size-control`);
const span = document.querySelector(`#text`);

function onInput(ev) {
  span.style.fontSize = ev.currentTarget.value + `px`;
}

input.addEventListener(`input`, onInput);
