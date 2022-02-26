const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
const itemEls = MakeItems(ingredients);
ingredientsEl.append(...itemEls);

function MakeItems(list) {
  return list.map((e) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = e;
    itemEl.classList.add("item");
    return itemEl;
  });
}
