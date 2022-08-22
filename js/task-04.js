const counterValue = 0;

const valueEl = document.querySelector(`#value`);
const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);

const onDecrementBtn = () => {
  counterValue -= 1;
  document.getElementById("value").textContent = counterValue;
};

const onIncrementBtn = () => {
  counterValue += 1;
  document.getElementById("value").textContent = counterValue;
};

document
  .querySelector("[data-action='increment']")
  .addEventListener("click", onIncrementBtn);

document
  .querySelector("[data-action='decrement']")
  .addEventListener("click", onDecrementBtn);
