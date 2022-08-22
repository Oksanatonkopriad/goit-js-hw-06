let counterValue = 0;

const valueEl = document.querySelector(`#value`);
const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);

decrementBtn.addEventListener(`click`, onDecrementBtn);
incrementBtn.addEventListener(`click`, onIncrementBtn);

function onDecrementBtn() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function onIncrementBtn() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
