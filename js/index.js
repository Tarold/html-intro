'use strict';

//Напишіть функцію printNumbers(from, to, interval) Використовуючи setInterval
function printNumbers(from, to, interval) {
  let current = from;
  let timerId = null;
  let negative = 1;

  if (from > to) {
    negative = -1;
    current *= -1;
    to *= -1;
  }

  timerId = setInterval(function () {
    console.log('setInterval :>> ', current * negative);
    if (current < to) {
      current++;
    } else {
      clearInterval(timerId);
    }
  }, interval);
}

//Використовуючи рекурсивний setTimeout
function printNumbersTimeout(from, to, interval) {
  let current = from;
  let negative = 1;

  if (current > to) {
    negative = -1;
    current *= -1;
    to *= -1;
  }
  setTimeout(function go() {
    console.log(`setTimeout :>> `, current * negative);
    if (current < to) {
      setTimeout(go, interval);
    }
    current++;
  }, interval);
}
printNumbers(-20, -10, 100);
printNumbersTimeout(-20, -10, 100);

/*
Виводити посилання через певний час після завантаження сторінки. 
Поки повідомлення не відображається, на його місці виводити зворотній відлік "Зачекайте хвилин:секунд".
 */

const timer = document.querySelector('.time');
const site = document.querySelector('.download');

function startCount() {
  let time = 60;

  function counting() {
    time -= 1;
    if (time < 0) {
      return false;
    }
    timer.textContent = time;
    return true;
  }

  setTimeout(function go() {
    if (counting()) {
      setTimeout(go, 1000);
    } else {
      endCount();
    }
  });
}

function endCount() {
  timer.parentNode.classList.add('hide');
  site.classList.remove('hide');
}

startCount();
