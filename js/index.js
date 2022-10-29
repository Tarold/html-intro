// JS - мова з динамічною типізацією

// Виведення в консоль
// console.log('Hello, world!');

// Вивести в модальне вікно
// alert('Hello, world!');

/*
  Багатостроковий коментар
*/

// Змінні

// let a = 1;
// console.log('a =', a);
// a = a + 1;
// console.log('a =', a);

// для уникнення випадкового переприсвоювання важливої інф-ї
// рекомендується максимально вживати const
// const pi = 3.14; // не можна переприсвоювати значення!

// console.log(pi);

// var b = 10; // старий стиль
// console.log('b =', b);

// Стиль іменування: camelCase
// lowerCamelCase
// UpperCamelCase

// PI, MATH_PI - для констант

// 1    a-z, A-Z, _, $
// 2... a-z, A-Z, _, $, 0-9

// Типи даних - примітивні (7)
//            - object

// string

// const stringVariable1 = 'string1';
// const stringVariable2 = 'string2'; // подвійні дужки
// const stringVariable3 = `string3`;
// "string2" - літерально задане значення

// console.log('He says :"Hello"');

// number
// 1, 22, -50, 10.5, 10e5, Infinity, -Infinity, 0 (+0, -0), NaN

// const numberVariable1 = Infinity;
// console.log('numberVariable1 :>> ', numberVariable1);

// const numberVariable2 = NaN;
// console.log('numberVariable2 :>> ', numberVariable2);

// console.log('10 / 0 :>> ', 10 / 0);
// console.log('10 / -0 :>> ', 10 / -0);
// console.log('"abc" / 5 :>> ', 'abc' / 5);
// Number.MAX_VALUE
// Number.MAX_SAFE_INTEGER

// bigint

// const bigintValue = 9999999999999999n;
// console.log('bigintValue :>> ', bigintValue);

// boolean

// true, false

// const boolValue = false;
// console.log('boolValue :>> ', boolValue);

// symbol
// const symbolValue = Symbol();
// console.log('symbolValue :>> ', symbolValue);

// undefined / value undefined

// const undValue = undefined
// let undValue;
// console.log('undValue :>> ', undValue);

// null / value null

// const nullValue = null;
// console.log('nullValue :>> ', nullValue);

// не примітив / object
const obj = {};

// typeof значення
