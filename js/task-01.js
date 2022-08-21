const categoriesEl = document.querySelectorAll(`.item`);
console.log(`Number of categories:`, categoriesEl.length);

categoriesEl.forEach(function (item) {
  console.log(`Category:`, item.firstElementChild.textContent);
  console.log(`Elements:`, item.lastElementChild.children.length);
});
