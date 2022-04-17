const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');
const collection = ingredients.reduce((col, e) => {
  const li = document.createElement('li');
  li.textContent = e;
  li.classList.add('item');
  col.push(li);
  return col;
}, []);

ingredientsEl.append(...collection);
