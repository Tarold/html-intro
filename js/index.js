// if - розгалуження

// if (умова) {
//   гілка true;
// } else {
//   гілка false;
// }

// Булевські змінні імунуємо з is...

const isLogged = false;

if (isLogged) {
  console.log("You are logged in))))");
} else {
  console.log("Try again(((");
}

// Task: Задана змінна
// const isEnoughMoney = true;
// Якщо грошей достатньо, вивести “Операцію схвалено)”
// Якщо недостатньо, то вивести “Операцію відхилено(”

const isEnoughMoney = true;

if (isEnoughMoney) {
  console.log("Операцію схвалено)))");
} else {
  console.log("Операцію не схвалено(((");
}

// Перевірити, чи скінченне число ввів користувач, і видати відповідне повідомлення.

const inputValue = Number(prompt("Input number")); // => 55, Infinity, NaN

if (Number.isFinite(inputValue)) {
  console.log("number");
} else {
  console.log("not a finite number");
}

// Оператори порівняння

const age = 18;

console.log("age > 18 :>> ", age > 18);
console.log("age < 18 :>> ", age < 18);
console.log("age >= 18 :>> ", age >= 18);
console.log("age <= 18 :>> ", age <= 18);

// Нестрога рівність / нерівність - ПОГАНО!
console.log("age == 18 :>> ", age == 18);
console.log('age == "18" :>> ', age == "18");
console.log("age != 18 :>> ", age != 18);
console.log('age != "18" :>> ', age != "18");

// Строга / нерівність рівність
console.log("age === 18 :>> ", age === 18);
console.log('age === "18" :>> ', age === "18");
console.log("age !== 18 :>> ", age !== 18);
console.log('age !== "18" :>> ', age !== "18"); // 18!=='18'

// Task: Якщо користовач повнолітній, то привітати, якщо ні - то доступ заборонений

const age = 20;

if (age >= 18) {
  console.log("Wellcome!");
} else {
  console.log("Access is denied");
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
  console.log("Деякі функції будуть обмежені");
}

console.log("Вітаємо на сайті!)");

// Task: если пользователь несовершеннолетний, то "Wellcome"
// иначе если сертификат есть, то "Wellcome"
//       иначе вакцинироваться

const age = 18;
const isVactinated = true;

if (age < 18) {
  console.log("Wellcome)");
} else {
  if (isVactinated) {
    console.log("Wellcome)");
  } else {
    console.log("Please go to vactination");
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
  console.log("Wellcome");
} else if (isVactinated) {
  console.log("Wellcome");
} else {
  console.log("Please go to vactination");
}

// Task: Ввести 2 числа. Вивести з них більше
// Ввести 2 числа. Вивести що вони рівні, а якщо ні, то більше з них

const userInput1 = Number(prompt("Введіть перше число"));
const userInput2 = Number(prompt("Введіть друге число"));

if (userInput1 > userInput2) {
  console.log("більше число = ", userInput1);
} else if (userInput1 < userInput2) {
  console.log("більше число = ", userInput2);
} else {
  console.log("Вони еквівалентні", userInput1 + " = " + userInput2);
}

// Умовні (булевські) операції

// умова І умова   - умова && умова - age >= 18 && isVactinated
// умова АБО умова - умова || умова - age < 18  || isVactinated
// НЕ умова        - !умова         - !isVactinated

const age = 18;
const isVactinated = true;

if (age < 18 || isVactinated) {
  console.log("Wellcome");
} else {
  console.log("Go to vactination");
}

console.group("Таблиця істинності &&:");

console.log("true && true :>> ", true && true); // => true, якщо всі true
console.log("false && false :>> ", false && false);
console.log("true && false :>> ", true && false);
console.log("false && true :>> ", false && true);

console.groupEnd();

console.group("Таблиця істинності ||:");

console.log("true || true :>> ", true || true);
console.log("false || false :>> ", false || false); // => false, якщо всі false
console.log("true || false :>> ", true || false);
console.log("false || true :>> ", false || true);

console.groupEnd();

console.group("Таблиця істинності !:");

console.log("!true :>> ", !true);
console.log("!false  :>> ", !false);

console.groupEnd();

// Task: Вивести нагадування про знижку, якщо парне число випало на п'ятницю
const day = "Tuesday";
const date = 15;

if (day === "Friday" && date % 2 === 0) {
  console.log("EVEN FRIDAY Sale!");
}

// Task: Вивести інфо про знижку, якщо людина пенсійгого віку або має неповнолітню дитину
const userAge = 80;
const userChildAge = 25;

if (userAge >= 60 || userChildAge < 5) {
  console.log("Znigki)");
}

// Task: якщо неповнолітній, то обмежити доступ
const isAdult = true;

// isAdult !== true, isAdult === false
if (!isAdult) {
  console.log("Доступ обмежено");
}

// Task: перевітири, чи число є 0 чи ні

const a = -5;
if (a) {
  console.log("no 0");
} else {
  console.log(0);
}

// falsy values: 0, null, undefined, '', false, NaN

const value = "";
if (value !== undefined || value !== null || value !== "") {
  console.log("ok");
}
// або
// Use Case: чи прийшло значення
if (value) {
  console.log("ok");
}

// Task: Перевірити, що прийшло число і воно не NaN

const value = "dgdgdfg";

if (typeof value === "number" && !Number.isNaN(value)) {
  console.log("number not NaN");
}
// або
if (!isNaN(value)) {
  console.log("number not NaN");
}
