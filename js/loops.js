console.log('Пройти прямо');
console.log('Повернути наліво');

console.log('Пройти прямо');
console.log('Повернути наліво');

console.log('Пройти прямо');
console.log('Повернути наліво');

console.log('Пройти прямо');
console.log('Повернути наліво');

// while (умова) {
//   тіло циклу
// }

// 1 виконання тіла циклу -- ітерація

let i = 1;
const limit = 4;

while (i++ <= limit) {
  console.log('Пройти прямо');
  console.log('Повернути наліво');
  // i = i + 1;
}

// i - змінна ціклу
// змінна цикла має змінюватися, щоб досягти умови закінчення

// Task: У користувача є книга з pageCount сторінок    5
// 1) Вивести номери сторінок з 1ї по останню          1 2 3 4 5

let currentPage = 1;
const pagesCount = 5;

while (currentPage <= pagesCount) {
  console.log(currentPage++);
  // currentPage = currentPage + 1;
}

// Алгоритм:
// почати з 1 стор
// перевірити, чи не досягли кінця
// якщо ні, то вивести номер
//             збільшити номер сторінки
// перевірити, чи не досягли кінця
// якщо ні, то вивести номер
//             збільшити номер сторінки
// перевірити, чи не досягли кінця
// якщо ні, то вивести номер
//             збільшити номер сторінки
// ...
// перевірити, чи не досягли кінця
// якщо так, то вихід з циклу

// Task: У користувача є книга з pageCount сторінок     5
// 2) * Вивести парні номери сторінок                   2 4

let i = 1;
const limit = 5;
if (i % 2 !== 0) {
  i++;
}
while (i <= limit) {
  console.log(i);
  i += 2;
}

// Task: Користувач вводе значення, поки не введе коректне число
// Вивести квадрат цього числа

let userValue = Number(prompt('Input number'));

while (!Number.isFinite(userValue)) {
  userValue = Number(
    prompt('You are input wrong number. Input correct number')
  );
}

console.log('userValue ** 2 :>> ', userValue ** 2);

// або (+ перевірка на незаповлення поля введення)

let userValue = prompt('Input number');

while (!Number.isFinite(Number(userValue)) || userValue === '') {
  userValue = prompt('You are input wrong number. Input correct number');
}

console.log('userValue ** 2 :>> ', userValue ** 2);

// Цикл з лічильником (змінна циклу)

// for (ініціалізація лічильника; умова; зміна лічильника){
//   тіло циклу
// }

let currentPage = 1;
const pagesCount = 5;

while (currentPage <= pagesCount) {
  console.log(currentPage);
  currentPage++;
}
// або
//             0                       1                   3
for (let currentPage = 1; currentPage <= pagesCount; currentPage++) {
  console.log(currentPage); // 2
}

// 0 (ініціалізація лічильника) виконується 1 раз до циклу
// 1 (умова продовження циклу)  якщо умова істинна, то виконуємо тіло циклу 2, інакше вихід
// 2 (тіло циклу)               виконується, якщо умова 1 істинна
// 3 (зміна лічильника)         виконується після кожної ітерації. Потім перехід на 1

// Task: вивести номери сторінок з останньої по 1

// const pagesCount = 5;

for (let currentPage = pagesCount; currentPage >= 1; currentPage--) {
  console.log('currentPage :>> ', currentPage);
}

// Task: розрахувати суму чисел від 1 до 5 ( 1+2+3+4+5 )

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log('sum :>> ', sum);

// s = 0
// i = 1;
// s = s + i = 0 + 1 = 1;
// i = 2
// s = s + i = 1 + 2 = 3
// i = 3
// s = s + i = 3 + 3 = 6

// Task: Вивести числа від 2 до 16 парні

const limit = 16;
for (let i = 2; i <= 16; i += 2) {
  console.log(i);
}

// Task: Розрахувати добуток чисел від 1 до 15 непарні
const limit = 15;

let mult = 1;
for (let i = 1; i <= 15; i += 2) {
  mult *= i; // 1 * 1 * 3 * 5 * 7 * ... * 15
}
console.log('mult :>> ', mult);

// i = i + 2 ==  i += 2

//--------------------------------------------
// передумова; min 0
// while (condition) {
//   body
// }

// передумова; min 0
// for(initialization; condition; var_change){
//   body
// }

// постумова; min 1
// do {
//   body
// } while (condition)
//---------------------------------------------

// Task: Користувач має ввести коректне число

let userNumber = null;

do {
  userNumber = Number(prompt('Input number'));
} while (!Number.isFinite(userNumber));

console.log('userNumber :>> ', userNumber);

// Task: Користувач має вводити результат 2+2*2 до тих пір, поки не введен правильну відповідь

let userAnswer = null;

do {
  userAnswer = Number(prompt('2 + 2 * 2 = ???'));
} while (userAnswer !== 6);

console.log('userAnswer :>> ', userAnswer);
