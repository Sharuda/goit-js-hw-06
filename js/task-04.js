// Лічильник складається зі спану і кнопок,
// які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// 1. Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та
// ініціалізуй її значенням 0.
// 2. Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// 3. Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

const onClickDecrBtn = event => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const onClickIncrBtn = event => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrementBtnEl.addEventListener('click', onClickDecrBtn);
incrementBtnEl.addEventListener('click', onClickIncrBtn);
