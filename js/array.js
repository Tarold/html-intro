// const usersList = {
//   1: { id: 1, name: 'Test' },
//   2: { id: 2, name: 'Ivo' },
// };

// Array - впорядкована колекція

// Створення масиву ------------------------------------------

const arr1 = []; // Синтаксичний цукор
const arr2 = new Array();

const arr3 = [1, 2, 3, 4];

// arr[i] - доступ до елемента під номером i
// arr.length - довжина масива

const users = [
  { id: 1, name: 'Test' },
  { id: 2, name: 'Ivo' },
];

// Перебір масиву циклами ----------------------------------

// Task: написати функцію для виводу елементів масиву

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log('arr[i] :>> ', arr[i]);
  }
}

printArray(arr3);

// Task: написати функцію для обчислення суми елементів масиву
// функція приймає масив і повертає його суму

function countSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(`arr[${i}] :>> `, arr[i]);
    sum += arr[i];
  }
  return sum;
}

console.log('countSum(arr3) :>> ', countSum(arr3));

// Копіювання масивів ------------------------------------

const arr4 = arr3; // погано, бо копіюється посилання

const arr5 = Array.from(arr3); // ok

const arr6 = [...arr3]; // ok

// Методи масивів -----------------------------------------

arr3.push(6); // додає елемента у кінець масиву

// Task: ввести з консолі n елемнтів масиву

function inputArray(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Number(prompt('input item')));
  }
  return arr;
}

console.log('arr3.pop() :>> ', arr3.pop()); // повертає і видаляє останній елемент

arr3.unshift(10); // додає елемент на початок масива

console.log('arr3.shift(10) :>> ', arr3.shift()); // повертає і видаляє перший елемент

// shift i unshift використовувати в крайніх випадках!

// slice - копіювання вказаної частини масиву
const singleNumbers = arr3.slice(3);
console.log('singleNumbers :>> ', singleNumbers);

// Task: скопіювати однозначні числа
const arr10 = [10, 15, 2, 3, 5, 122, 155];
const singleNumbers2 = arr10.slice(2, -2);
console.log('singleNumbers2 :>> ', singleNumbers2);

// splice - видалення з масиву певних елементів

// Task: видалити з arr10 5-ку
arr10.splice(4, 1);
console.log('splice', arr10);

// Конкатенація масивів

const arr11 = [1, 2, 3];
const arr12 = [10, 11, 12];
const arr13 = arr11.concat(arr12);
console.log('arr11.concat(arr12) :>> ', arr13);

// Перебір масиву

// for..in - проходе по індексах (властивостях)
// зазвичай його для масивів не використовують

for (key in arr13) {
  console.log(`arr[${key}]`, arr13[key]);
}

// for..of - проходе по значеннях
for (item of arr13) {
  console.log('item :>> ', item);
}

// Task: перебрати за допомогою for..of масив
const users = [
  { id: 1, name: 'Test' },
  { id: 2, name: 'Ivo' },
];

for (const item of users) {
  console.log('user:', item);
}

// Методи перебору масивів ---------------------------------------

// Поняття колбеку
// Колбек - це функція, яка передається до іншої функції і виконується в ній

const myCb = function (x) {
  console.log('x :>> ', x);
};

function f(cb, a) {
  cb(a);
}

f(myCb, 5);

// forEach - виконує коллбек послідовно для всіх елементів масиву

const arr20 = [1, 3, 5, 7];

function printArray(currentValue, index, array) {
  console.log(
    `currentValue: ${currentValue}; 
     index: ${index}; 
     array: ${array}.`
  );
}

arr20.forEach(printArray);

// Task: додати до кожного елемента масиву властивість isLiked і проініціалізувати її значенням false

const users = [
  { id: 1, name: 'Test' },
  { id: 2, name: 'Ivo' },
];

users.forEach(function (user) {
  user.isLiked = false;
});

// Task: вивести users за допомогою forEach

function printUsers(currentValue) {
  console.log(currentValue);
}
users.forEach(printUsers);

// map => новий масив з елементами, які повертаються з колбеку для кожного елемента вихідного масиву

const arr21 = [10, 20, 30];

function mapArray(currentValue) {
  return currentValue ** 2;
}

const arr22 = arr21.map(mapArray);

// filter => новий масив з елеметами, які задовольняють умові в колбеку

const arr23 = [1, 2, 3, 4];

function isOdd(item) {
  return item % 2 === 1;
}

const arr24 = arr23.filter(isOdd);

// Task: відфільтрувати додатні, тобто [1,3]
const arr25 = [-5, -5, 3, -11, -55];

function isPositive(item) {
  return item > 0;
}
const arr26 = arr25.filter(isPositive);
console.log('arr26', arr26);

// findIndex => індекс знайденого елемента (для якого з колбека повертається true,
//              або -1, якщо його не знайдено (для кожного повернулося false))

function find3(item) {
  return item === -5;
}

const foundedIndex = arr25.findIndex(find3); // поверне індекс першого знайденого, або -1 якщо не знайшов
