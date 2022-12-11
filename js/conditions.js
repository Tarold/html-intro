// if - розгалуження

// if (умова) {
//   гілка true;
// } else {
//   гілка false;
// }

// Булевські змінні імунуємо з is...

const isLogged = false;

if (isLogged) {
  console.log('You are logged in))))');
} else {
  console.log('Try again(((');
}

// Task: Задана змінна
// const isEnoughMoney = true;
// Якщо грошей достатньо, вивести “Операцію схвалено)”
// Якщо недостатньо, то вивести “Операцію відхилено(”

const isEnoughMoney = true;

if (isEnoughMoney) {
  console.log('Операцію схвалено)))');
} else {
  console.log('Операцію не схвалено(((');
}

// Перевірити, чи скінченне число ввів користувач, і видати відповідне повідомлення.

const inputValue = Number(prompt('Input number')); // => 55, Infinity, NaN

if (Number.isFinite(inputValue)) {
  console.log('number');
} else {
  console.log('not a finite number');
}

// Оператори порівняння

const age = 18;

console.log('age > 18 :>> ', age > 18);
console.log('age < 18 :>> ', age < 18);
console.log('age >= 18 :>> ', age >= 18);
console.log('age <= 18 :>> ', age <= 18);

// Нестрога рівність / нерівність - ПОГАНО!
console.log('age == 18 :>> ', age == 18);
console.log('age == "18" :>> ', age == '18');
console.log('age != 18 :>> ', age != 18);
console.log('age != "18" :>> ', age != '18');

// Строга / нерівність рівність
console.log('age === 18 :>> ', age === 18);
console.log('age === "18" :>> ', age === '18');
console.log('age !== 18 :>> ', age !== 18);
console.log('age !== "18" :>> ', age !== '18'); // 18!=='18'

// Task: Якщо користовач повнолітній, то привітати, якщо ні - то доступ заборонений

const age = 20;

if (age >= 18) {
  console.log('Wellcome!');
} else {
  console.log('Access is denied');
}

// Скорочена форма if

// if (умова) {
//   гілка true;
// }

// При вході перевірити, чи користувач повнолітній
// Якщо ні - то видати попередження про обмежений доступ
// Вивести привітання

const age = 18;

if (age < 18) {
  console.log('Деякі функції будуть обмежені');
}

console.log('Вітаємо на сайті!)');

// Task: если пользователь несовершеннолетний, то "Wellcome"
// иначе если сертификат есть, то "Wellcome"
//       иначе вакцинироваться

const age = 18;
const isVactinated = true;

if (age < 18) {
  console.log('Wellcome)');
} else {
  if (isVactinated) {
    console.log('Wellcome)');
  } else {
    console.log('Please go to vactination');
  }
}
// або

// Розширена форма if

// if (умова) {
//   гілка true;
// } else if (умова) {
//   гілка ;
// } else if (умова) {
//   гілка ;
// } else {
//   гілка false;
// }

if (age < 18) {
  console.log('Wellcome');
} else if (isVactinated) {
  console.log('Wellcome');
} else {
  console.log('Please go to vactination');
}

// Task: Ввести 2 числа. Вивести з них більше
// Ввести 2 числа. Вивести що вони рівні, а якщо ні, то більше з них

const userInput1 = Number(prompt('Введіть перше число'));
const userInput2 = Number(prompt('Введіть друге число'));

if (userInput1 > userInput2) {
  console.log('більше число = ', userInput1);
} else if (userInput1 < userInput2) {
  console.log('більше число = ', userInput2);
} else {
  console.log('Вони еквівалентні', userInput1 + ' = ' + userInput2);
}

// Умовні (булевські) операції

// умова І умова   - умова && умова - age >= 18 && isVactinated
// умова АБО умова - умова || умова - age < 18  || isVactinated
// НЕ умова        - !умова         - !isVactinated

const age = 18;
const isVactinated = true;

if (age < 18 || isVactinated) {
  console.log('Wellcome');
} else {
  console.log('Go to vactination');
}

console.group('Таблиця істинності &&:');

console.log('true && true :>> ', true && true); // => true, якщо всі true
console.log('false && false :>> ', false && false);
console.log('true && false :>> ', true && false);
console.log('false && true :>> ', false && true);

console.groupEnd();

console.group('Таблиця істинності ||:');

console.log('true || true :>> ', true || true);
console.log('false || false :>> ', false || false); // => false, якщо всі false
console.log('true || false :>> ', true || false);
console.log('false || true :>> ', false || true);

console.groupEnd();

console.group('Таблиця істинності !:');

console.log('!true :>> ', !true);
console.log('!false  :>> ', !false);

console.groupEnd();

// Task: Вивести нагадування про знижку, якщо парне число випало на п'ятницю
const day = 'Tuesday';
const date = 15;

if (day === 'Friday' && date % 2 === 0) {
  console.log('EVEN FRIDAY Sale!');
}

// Task: Вивести інфо про знижку, якщо людина пенсійгого віку або має неповнолітню дитину
const userAge = 80;
const userChildAge = 25;

if (userAge >= 60 || userChildAge < 5) {
  console.log('Znigki)');
}

// Task: якщо неповнолітній, то обмежити доступ
const isAdult = true;

// isAdult !== true, isAdult === false
if (!isAdult) {
  console.log('Доступ обмежено');
}

// Task: перевітири, чи число є 0 чи ні

const a = -5;
if (a) {
  console.log('no 0');
} else {
  console.log(0);
}

// falsy values: 0, null, undefined, '', false, NaN

const value = '';
if (value !== undefined || value !== null || value !== '') {
  console.log('ok');
}
// або
// Use Case: чи прийшло значення
if (value) {
  console.log('ok');
}

// Task: Перевірити, що прийшло число і воно не NaN

const value = 'dgdgdfg';

if (typeof value === 'number' && !Number.isNaN(value)) {
  console.log('number not NaN');
}
// або
if (!isNaN(value)) {
  console.log('number not NaN');
}

// Task: Реалізувати переведення оцінки за 12б систомою в 5б
// 12 - 5+
// 11 - 5
// 10 - 5-
// ... Mark < 5

const mark = 12;

if (mark === 12) {
  console.log('5+');
} else if (mark === 11) {
  console.log('5');
} else if (mark === 10) {
  console.log('5-');
} else {
  console.log('Mark < 5');
}

// або

// Множинний вибір
// switch..case

switch (mark) {
  case 12:
    console.log('5+');
    break;
  case 11:
    console.log('5');
    break;
  case 10:
    console.log('5-');
    break;
  default:
    console.log('Mark < 5');
}

// Task: Користувач вводе 2 числа a, b - операцію ??? (*, /, +, -)
// Порахувати і вивести результат a ??? b
// '+', '-', ...
// В гілці default передбачити обробку некоретних введених користувачет операцій

const inputFirstValue = Number(prompt('Input Number'));
const inputSecondValue = Number(prompt('Input Number'));
const inputOperation = Number(prompt('Input /, *, +, -'));

switch (inputOperation) {
  case '+':
    alert(inputFirstValue + inputSecondValue);
    break;
  case '-':
    alert(inputFirstValue - inputSecondValue);
    break;
  case '*':
    alert(inputFirstValue * inputSecondValue);
    break;
  case '/':
    alert(inputFirstValue / inputSecondValue);
    break;
  default:
    alert('incorect operation');
}

// Task: За введеним номером місяця вивести назву пори року
// 1, 2, 12 - winter
// ...
const monthNumber = Number(prompt('Уведіть номер місяця'));

switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    alert('Зима.');
    break;
  case 3:
  case 4:
  case 5:
    alert('Весна.');
    break;
  case 6:
  case 7:
  case 8:
    alert('Літо.');
    break;
  case 9:
  case 10:
  case 11:
    alert('Осінь.');
    break;
  default:
    alert('Некоректний місяць.');
    break;
}

// Умовна операція (тернарна) ?:
// Знайти мінімальне з 2х чисел

const a = 15;
const b = 8;

let minAB = null;

// if (a < b) {
//   minAB = a;
// } else {
//   minAB = b;
// }

// console.log('minAB :>> ', minAB);

// або

let minAB2 = a < b ? a : b;

console.log('minAB2 :>> ', minAB2);

// Task: Задано вік користувача
// Вивести повідомлення, що
// якщо користувач повнолітній, то він має повний доступ,
// янщо ні, то обмежений
// Використати умовний оператор

const userAge = Number(prompt('Enter Your age :'));

alert(userAge >= 18 ? 'You have full access!' : "You don't have full access!");
// або
const accessRegister =
  userAge >= 18
    ? alert('You have full access!')
    : alert("You don't have full access!");
