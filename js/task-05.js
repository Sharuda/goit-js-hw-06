// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.

// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputTetxtEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputTetxtEl.addEventListener('input', event => {
    if (event.currentTarget.value !== '') {
        nameEl.textContent = event.currentTarget.value;
    } 
    else {
         nameEl.textContent = 'Anonymous';
      }
});