// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку
// на button.change - color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnEl = document.querySelector('.change-color');
const valueColorSpanEl = document.querySelector('.color');
const body = document.querySelector('body');

changeColorBtnEl.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  valueColorSpanEl.textContent = getRandomHexColor();
});
