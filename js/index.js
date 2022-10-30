// if - розгалуження

// if (умова) {
//   гілка true;
// } else {
//   гілка false;
// }

// Булевські змінні імунуємо з is...

// const isLogged = false;

// if (isLogged) {
//   console.log('You are logged in))))');
// } else {
//   console.log('Try again(((');
// }

// Задана змінна

// const isEnoughMoney = true;

// Якщо грошей достатньо, вивести “Операцію схвалено)”
// Якщо недостатньо, то вивести “Операцію відхилено(”

// const isEnoughMoney = true;

// if (isEnoughMoney) {
//   console.log('Операцію схвалено)))');
// } else {
//   console.log('Операцію не схвалено(((');
// }

// Перевірити, чи скінченне число ввів користувач і видати відповідне повідомлення.

// const inputValue = Number(prompt('Input number')); // => 55, Infinity, NaN

// if (Number.isFinite(inputValue)) {
//   console.log('number');
// } else {
//   console.log('not a finite number');
// }

// Умовні операці

// const age = 18;

// console.log('age > 18 :>> ', age > 18);
// console.log('age < 18 :>> ', age < 18);
// console.log('age >= 18 :>> ', age >= 18);
// console.log('age <= 18 :>> ', age <= 18);

// Нестрога рівність / нерівність - ПОГАНО!
// console.log('age == 18 :>> ', age == 18);
// console.log('age == "18" :>> ', age == '18');
// console.log('age != 18 :>> ', age != 18);
// console.log('age != "18" :>> ', age != '18');

// Строга / нерівність рівність
// console.log('age === 18 :>> ', age === 18);
// console.log('age === "18" :>> ', age === '18');
// console.log('age !== 18 :>> ', age !== 18);
// console.log('age !== "18" :>> ', age !== '18'); // 18!=='18'

// Якщо користовач повнолітній, то привітати, якщо ні - то доступ заборонений

// const age = 20;

// if (age >= 18) {
//   console.log('Wellcome!');
// } else {
//   console.log('Access is denied');
// }

// Скорочена форма if

// При вході перевірити, чи користувач повнолітній
// Якщо ні - то видати попередження про обмежений доступ
// Вивести привітання

// if (умова) {
//   гілка true;
// }

// const age = 18;

// if (age < 18) {
//   console.log('Деякі функції будуть обмежені');
// }

// console.log('Вітаємо на сайті!)');

// если пользователь несовершеннолетний, то "Wellcome"
// иначе если сертификат есть, то "Wellcome"
// иначе вакцинироваться

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

// Ввести 2 числа. Вивести з них більше
// Ввести 2 числа. Вивести що вони рівні, а якщо ні, то більше з них
// * Виконати перевірку, що числа коректні

const userInput1 = Number(prompt("Введіть перше число"));
const userInput2 = Number(prompt("Введіть друге число"));

if (userInput1 > userInput2) {
  console.log("більше число = ", userInput1);
} else if (userInput1 < userInput2) {
  console.log("більше число = ", userInput2);
} else {
  console.log("Вони еквівалентні", userInput1 + " = " + userInput2);
}
