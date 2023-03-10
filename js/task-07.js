// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.

// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputChangeFontSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
const valueSizeInput = inputChangeFontSizeEl.value;
textEl.style.fontSize = `${valueSizeInput}px`;

inputChangeFontSizeEl.addEventListener('input', () => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
});
