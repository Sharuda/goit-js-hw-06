// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// 1.Розміри найпершого <div> - 30px на 30px.
// 2.Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 3.Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnEl = document.querySelector('[data-create]');
const cleanBtnEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('[type="number"]');
const containerBoxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
  amount = Number(inputEl.value);
  const divBoxes = [];
  let firstDivSize = 30;
  // let stepSizeDiv = 10;

  for (let i = 0; i < amount; i += 1) {
    // const div = document.createElement('div');
    // div.style.width = `${fisrtDivSize + stepSizeDiv * i}px`;
    // div.style.height = `${fisrtDivSize + stepSizeDiv * i}px`;
    // div.style.backgroundColor = getRandomHexColor();
    firstDivSize += 10 * i;
    const div = `<div style="width: ${firstDivSize}px; height: ${firstDivSize}px; background-color: ${getRandomHexColor()}"></div>`;
    divBoxes.push(div);
  }
  // containerBoxesEl.append(...divBoxes);
  containerBoxesEl.insertAdjacentHTML('beforeend', divBoxes.join(''));
}

function destroyBoxes() {
  containerBoxesEl.innerHTML = '';
  inputEl.value = '';
}

createBtnEl.addEventListener('click', createBoxes);
cleanBtnEl.addEventListener('click', destroyBoxes);
