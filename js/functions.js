// ФУНКЦІЇ

// Повторне використання коду
// Одна функція - одна відповідальність

// Оголошення функції (function declaration)
// Функцію можна викликати як до, так і після оголошення
// function functionName(){
//   function body
// }

// functionName() - виклик функції

// Оголошення функції
function sayHello() {
  console.log('Hello');
}

sayHello(); // - виклик функції
sayHello(); // - виклик функції
sayHello(); // - виклик функції

// Передача значень до функції

const userName = 'Ivo';

function sayHelloToUser(name) {
  // name - параметр, вважається локальною змінною функції
  // локальні змінні не видимі ззовні функції
  console.log(`Hello, ${name}`);
  // return undefined; - якщо функція не містить return, то вона повертає undefined
}
// значення userName копіюється в параметр name функції
sayHelloToUser(userName);

// Повернення значень із функції
// JSDoc
/**
 * Returns sum of two summands
 * @param {number} a - First summand
 * @param {number} b - Second summand
 * @returns {number} Sum of two summands
 */

function sumAB(a, b) {
  return a + b;
}

sumAB(1, 5);

const sum = sumAB(4, 5);
console.log('sum :>> ', sum);
console.log('sumAB(15,30) :>> ', sumAB(15, 30));

// Task: Написати ф-ю для розрахунку числа в степені 4: 5=>625; 2=>16

function pow4(num) {
  return num ** 4;
}
console.log(pow4(5));

// або

function fourthPower(digit) {
  let result = Math.pow(digit, 4);
  return result; // одна відповідальність!!!
}

if (Number.isFinite(userDigit)) {
  alert(`${userDigit} ^ 4 = ${fourthPower(userDigit)}`);
} else {
  alert('You did not enter a number! Error!');
}

// Піднесення числа до довільного степеня
function pow(a, b) {
  return a ** b;
}
const numbers = pow(2, 3);
console.log(numbers);

const userDigit = Number(prompt('Enter number'));

// Task: Написати функцію для розрахунку суми чисел від 1 (*m) до n
// 5   => 1+2+3+4+5 = 15

function sumToMaxValue(limit) {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sumToMaxValue(5));

// *5,7 => 5 + 6 + 7 = 18

function sumFromMinToMaxValue(lowLimit, upperLimit) {
  let sum = 0;
  for (let i = lowLimit; i <= upperLimit; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sumFromMinToMaxValue(5, 10));

// Task: Написати функцію, яка повертає true для повнолітнього користувача,
// false - для неповнолітнього

function isAdult(age) {
  return age >= 18;
}
console.log(isAdult(17));

// або

const userAge = Number(prompt('Enter Your age'));

function isAdult(age) {
  return age >= 18;
}

if (isAdult(userAge)) {
  alert('You are adult');
} else {
  alert('You are not adult');
}

// Task: Написати функцію, яка за рядком "Ivo Smith" сформує рядок з ініціалами ("IS")

function getInitials(userFullName) {
  // знайти індекс пробіла
  const spaceIndex = userFullName.indexOf(' ');
  // сконкатенувати перший символ і перший символ після пробілу

  const initials =
    userFullName.substring(0, 1) +
    userFullName.substring(spaceIndex + 1, spaceIndex + 2);

  return initials;
}

console.log('getInitials("") :>> ', getInitials('Ivo Smith'));
console.log('getInitials("") :>> ', getInitials('Wally Brown'));

// значення за умовчуванням / типове значення
// Якщо значення на місце параметра за замовчуванням не передано,
// то береться значення, вказане після = у списку параметрів
// дефолтні значення мають бути перераховані ВКІНЦІ списку параметрів
/**
 * Power the base to the power of pow
 * @param {number} base - base
 * @param {number} [pow = 4] - power
 * @returns {number} power the base to the power of pow
 */
function power(base, pow = 4) {
  // if (pow === undefined) { - по факту, це працює так
  //   pow = 4;
  // }
  return base ** pow;
}

console.log('power(10,2) :>> ', power(10));

// Реалізувати функцію для розрахунку добутку чисел від
// n1(=1) до n2
// 10, 12 => 10*11*12
// 3 => 1*2*3

/**
 * Returns multiplication between First Number and Last Number
 * @param {number} n2 - Last Number
 * @param {number} [n1 = 1] - First Number
 * @returns {number} multiplication between First Number and Last Number
 */
function multiply(n2, n1 = 1) {
  let power = 1;
  for (n1; n1 <= n2; n1++) {
    power *= n1;
  }
  return power;
}
console.log('multiply(4,2)', multiply(4));

/* function expression / функциональное выражение / функціональний вираз */
// не можна використовувати до ініціалізації
const sum3 = function (a, b) {
  return a + b;
};

console.log('sum3(2,5) :>> ', sum3(2, 5));

// console.log('sum3(2,5) :>> ', sum3(2, 5));

// Анонімна функція
// function (a, b) {
//   return a + b;
// };

// Переписати функцію для піднесення до степеня у формі function expression
const pow = function (a, b) {
  return a ** b;
};

console.log('pow(2,3)', pow(2, 3));

// Чиста ф-я -
// 1) детермінована ф-я - ф-я, яка при одних і
// тих самих значеннях параметрів повертає один і той самий результат
// 2) без побічних ефектів (мережеві запити, введення/виведення даних)

// недетермінована ф-я
function sum5(a) {
  return a + Math.random();
}
console.log('sum5(1) :>> ', sum5(1));
console.log('sum5(1) :>> ', sum5(1));

// недетермінована ф-я
function sum4(a) {
  return a + b;
}

let b = 10;
console.log('sum4(1) :>> ', sum4(1));

b = 15;
console.log('sum4(1) :>> ', sum4(1));
