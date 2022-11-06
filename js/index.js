//0
function isWorkingAgePerson(age) {
  return age >= 16 && age <= 65 ? true : false;
}
console.group(0);
console.log('isWorkingAgePerson(20)', isWorkingAgePerson(20));
console.log('isWorkingAgePerson(4)', isWorkingAgePerson(4));
console.log('isWorkingAgePerson(88)', isWorkingAgePerson(88));
console.groupEnd();

//1
function isPrimeNumber(number) {
  if (number === 1) {
    return false;
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }

  // check if number is less than 1
  else {
    return false;
  }
}
console.group(1);
console.log('isPrimeNumber(7)', isPrimeNumber(7));
console.log('isPrimeNumber(8)', isPrimeNumber(8));
console.groupEnd();

//2
const checkMultiplicity = function (dividend, divisor) {
  return dividend % divisor === 0 ? true : false;
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
 *
 * Функція знаходить повну площу конуса
 * @param {number} R Радіус конуса
 * @param {number} l Висота конуса
 *
 * @return {number} Повна площадь поверхні конуса
 */

function areaCalculation(a, b, c) {
  if (c === undefined) {
    return Math.round(Math.PI * a * (a + b), -2);
  }
  return Math.round(2 * (a * b + b * c + a * c), -2);
}
console.group(4);
console.log('areaCalculation cone', areaCalculation(10, 50));
console.log('areaCalculation parallelepiped', areaCalculation(10, 10, 10));
console.groupEnd();
