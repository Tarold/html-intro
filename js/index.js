// ФУНКЦІЇ

// Повторне використання коду

// Оголошення функції (function declaration)
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

function sumAB(a, b) {
  return a + b;
}

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
