'use strict';

const btn = document.querySelector('button');
const span = document.querySelector('span');

btn.onclick = () => {
  alert('Hi');
};

for (let i = 0; i < 1000000; i++) {
  if (i % 100) {
    // ці колбеки буде виконано після завершення основного скрипта,
    // пройшовши через чергу колбеків
    // і не будуть блокувати перерендери сторінки
    setTimeout(() => (span.textContent = `${i}`), 0);
  }
}
