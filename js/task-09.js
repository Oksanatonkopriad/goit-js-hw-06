function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector(`body`);
const spanEl = document.querySelector(`.color`);
const btnEl = document.querySelector(`.change-color`);

btnEl.addEventListener(`click`, bodyColor);

function bodyColor() {
  document.body.setAttribute(
    "style",
    "background-color: " + spanEl.textContent
  );
  spanEl.textContent = getRandomHexColor();
}
