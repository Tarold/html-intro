//0
function isWorkingAgePerson(age) {
  return age >= 16 && age <= 65;
}
console.group(0);
console.log('isWorkingAgePerson(20)', isWorkingAgePerson(20));
console.log('isWorkingAgePerson(4)', isWorkingAgePerson(4));
console.log('isWorkingAgePerson(88)', isWorkingAgePerson(88));
console.groupEnd();

//1
function isPrimeNumber(number) {
  if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
console.group(1);
console.log('isPrimeNumber(7)', isPrimeNumber(1));
console.log('isPrimeNumber(7)', isPrimeNumber(7));
console.log('isPrimeNumber(8)', isPrimeNumber(8));
console.groupEnd();

//2
const checkMultiplicity = function (dividend, divisor) {
  return dividend % divisor === 0;
};
console.group(2);
console.log('checkMultiplicity(25, 5)', checkMultiplicity(25, 5));
console.log('checkMultiplicity(15,3)', checkMultiplicity(15, 3));
console.log('checkMultiplicity(15, 5)', checkMultiplicity(15, 5));
console.log('checkMultiplicity(15, 4)', checkMultiplicity(15, 4));
console.groupEnd();

//3
/**
 * Перевірка можливості існування трикутника
 * @param {number} a Сторона повина бути number більше 0
 * @param {number} b Сторона повина бути number більше 0
 * @param {number} c Сторона повина бути number більше 0
 * @returns {boolean} можливості існування трикутника в boolean
 */
const checkTriangleExists = function (a, b, c) {
  return a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0
    ? true
    : false;
};
console.group(3);
console.log('checkTriangleExists(2, 3, 4)', checkTriangleExists(2, 3, 4));
console.log('checkTriangleExists(2, -3, 4)', checkTriangleExists(2, -3, 4));
console.log('checkTriangleExists(2, 3, 40)', checkTriangleExists(2, 3, 40));
console.groupEnd();

//4
/**
 * Функція знаходить повну площу паралелепіпеда
 * @param {number} a сторона паралелепіпеда
 * @param {number} b сторона паралелепіпеда
 * @param {number} c сторона паралелепіпеда
 *
 * @return {number} Повна площадь поверхні паралелепіпеда
 */

function areaCalculationCone(a, b) {
  return Math.round(Math.PI * a * (a + b), -2);
}

/**
 * Функція знаходить повну площу конуса
 * @param {number} R Радіус конуса
 * @param {number} l Висота конуса
 *
 * @return {number} Повна площадь поверхні конуса
 */
function areaCalcParal(a, b, c) {
  return Math.round(2 * (a * b + b * c + a * c), -2);
}

/**
 * Функція знаходить повну площу трикутника
 * @param {number} a Cторона трикутника (правильний)
 * @param {number} b Cторона трикутника (прямокутний)
 * @param {number} c Cторона трикутника (довільний)
 *
 * @return {number} Площа трикутникв
 */
function areaCalculTriangle(a, b, c) {
  if (c !== undefined) {
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c), 0.5);
  } else if (b !== undefined) {
    return (1 / 2) * a * b;
  } else if (a !== undefined) {
    return (Math.pow(a, 2) * Math.sqrt(3, 0.5)) / 4;
  } else {
    return 'None values';
  }
}

console.group(4);
console.log('areaCalculationCone', areaCalculationCone(10, 50));
console.log('areaCalcParal', areaCalcParal(10, 10, 10));
console.log('areaCalculTriangle', areaCalculTriangle());
console.log('areaCalculTriangle', areaCalculTriangle(10));
console.log('areaCalculTriangle', areaCalculTriangle(10, 10));
console.log('areaCalculTriangle', areaCalculTriangle(10, 10, 10));

console.groupEnd();

//JS. Switch..case
/*
1. Запитати у користувача номер дня тижня та вивести відповідну повну рядкову назву
 (наприклад, якщо користувач вводить 7 – виводиться повідомлення "неділя"). 
 Передбачити обробку помилкового введення номера дня тижня (default).
*/
const userDayNumber = Number(prompt('Enter number of the day'));
switch (userDayNumber) {
  case 1:
    alert('Monday');
    break;
  case 2:
    alert('Tuesday');
    break;
  case 3:
    alert('Wednesday');
    break;
  case 4:
    alert('Thursday');
    break;
  case 5:
    alert('Friday');
    break;
  case 6:
    alert('Saturday');
    break;
  case 7:
    alert('Sunday');
    break;

  default:
    alert(`Numer ${userDayNumber} not day number`);
    break;
}
/*
2. У змінній day лежить якесь число з інтервалу від 1 до 31.
 Визначте, до якої декади місяця потрапляє це число 
 (до першої, другої чи третьої).
*/
const day = Number(prompt('Enter day of the month'));
switch (true) {
  case day > 0 && day < 11:
    alert('first');
    break;
  case day > 10 && day < 21:
    alert('second');
    break;
  case day > 20 && day < 32:
    alert('third');
    break;
  case day < 1:
  case day > 31:
    alert('Numer ' + day + ' is out of range');
    break;
}
