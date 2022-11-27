//Створіть колекцію Set із початковими значеннями 1, 2, 3.
const set = new Set([1, 2, 3]);

//Створіть колекцію Set із початковими значеннями 1, 2, 3.
console.log('set.has(3) :>> ', set.has(3));
console.log('set.has(4) :>> ', set.has(4));

//Додати ще кілька елементів.
set.add(5).add(6).add(8).add(7);

//За допомогою циклу for-of переберіть колекцію та виведіть у консоль
for (const key of set) {
  console.log('key :>> ', key);
}

//Знайдіть суму цих значень.
let sum = 0;
set.forEach((element) => {
  sum += element;
});

console.log('sum :>> ', sum);

//Видаліть елемент 2.
console.log('set :>> ', set);
set.delete(2);
console.log('set :>> ', set);

//Очистіть усю колекцію
set.clear();
console.log('set :>> ', set);

//З масиву [1,6,9,4,9,1,5,6] отримати масив унікальних значень.
const firstArr = [1, 6, 9, 4, 9, 1, 5, 6];

const clearArr = [...new Set(firstArr)];
console.log('clearArr :>> ', clearArr);

//З масивів [1,6,9,4,9,1,5,6] та [5, 10, 11] отримати один масив унікальних значень.
const secondArr = [5, 10, 11];

const secondClearArr = [...new Set([...firstArr, ...secondArr])];
console.log('secondClearArr :>> ', secondClearArr);

//З масиву
const messages = [
  { id: 1, name: 'Ivo', message: 'hello', date: new Date() },
  { id: 2, name: 'Ivo', message: 'how are you', date: new Date() },
  { id: 3, name: 'Wally', message: 'hi)', date: new Date() },
  { id: 4, name: 'Wally', message: 'fine)', date: new Date() },
];

/*
створити 
1) масив імен користувачів 
2) мапу вигляду
Map (2) {
  Ivo => [{message, date}, {message, date}],

  Wally => [{message, date}, {message, date}]
}
*/

const names = [...new Set(messages.map((element) => element.name))];

console.log('name :>> ', names);

const usersMessages = new Map();

messages.forEach(({ name, message, date }) => {
  const key = { message, date };
  usersMessages.has(name)
    ? usersMessages.get(name).push(key)
    : usersMessages.set(name, [key]);
});

console.log('usersMessages :>> ', usersMessages);
