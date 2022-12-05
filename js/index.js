'use strict';

// setTimeout(()=>{}, ms [, parameters])
// setInterval(()=>{}, ms [, parameters])

console.log('before setTimeout ');

// const timeoutId = setTimeout(() => {
//   alert('Hi)');
// }, 5000);

// clearTimeout(timeoutId)

console.log('after setTimeout ');

let i = 1;
// const intervalId = setInterval(() => {
//   console.log(i++);
// }, 1000);

// clearInterval(intervalId)

setTimeout(() => {
  document.querySelector('.bestPropositionLink').remove();
}, 5000);

// При натисканні на кнопку перефарбувати її через 2000 секунди
// * Після натискання на кнопку змінювати її колір кожні 2 секунди рандомно
