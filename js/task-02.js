// Напиши скрипт, який для кожного елемента масиву ingredients:

// 1.Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2.Додасть назву інгредієнта як його текстовий вміст.
// 3.Додасть елементу клас item.
// 4.Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const func = arrayIngredients => {
  return ingredients.map(name => {
    const itemListIngredient = document.createElement('li');
    itemListIngredient.textContent = name;
    itemListIngredient.classList.add('item');

    return itemListIngredient;
  });
};

const element = func(ingredients);
listEl.append(...element);
