// const greeting = 'Hello';
// const userName = prompt('Input name');
// console.log(greeting + ', ' + userName);
// console.log(`${greeting}, ${userName}`); // шаблонний літерал

// 1*1=1
// 1*2=2
// 1*3=3
// ....
// 2*1=2
// 2*2=4
// 2*3=6

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     // console.log(i + ' * ' + j + ' = ' + i * j); // переписати на шаблонний літерал
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// Пользователь имеет 3 попытки ввести пароль
// Если пароль верен, то вывести "Пароль верен"
// Иначе "Пароль неверен"

// let userPassword = '';
// const PASSWORD = 'qwerty';
// const TRY_LIMIT = 3;
// let correntTryNumber = 1;

// do {
//   userPassword = prompt('Input password').trim();
// } while (userPassword !== PASSWORD && correntTryNumber++ < TRY_LIMIT);

// if (userPassword === PASSWORD) {
//   console.log('Password correct');
// } else {
//   console.log('Password incorrect');
// }

const PASSWORD = 'qwerty';
const TRY_LIMIT = 3;
let userPassword = '';
let correntTryNumber = 1;
let isPasswordCorrect = false;

do {
  isPasswordCorrect = prompt('Input password').trim() === PASSWORD;
} while (!isPasswordCorrect && correntTryNumber++ < TRY_LIMIT);

console.log(`Password ${isPasswordCorrect ? 'correct' : 'incorrect'}`);
