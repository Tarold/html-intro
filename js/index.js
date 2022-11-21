const arr = [
  [1, 'first'],
  [3, 'third'],
];

//Створіть колекцію Map з цього масиву.
const m1 = new Map(arr);
console.log('m3 :>> ', m1);

const m2 = new Map();
for (let item of arr) {
  m2.set(...item);
}
console.log('m2 :>> ', m2);

//Отримайте список ключів та значень окремо.
const arrKeys = [...m1.keys()];
const arrValues = [...m1.values()];

console.log('arrKeys :>> ', arrKeys);
console.log('arrValues :>> ', arrValues);

//Отримайте кількість елементів.
console.log('m1.size :>> ', m1.size);

//Додати та видалити елемент
m1.set(2, 'second');
console.log('m1.has(2) :>> ', m1.has(2));

m1.delete(2);
console.log('m1.has(2) :>> ', m1.has(2));

//Здійсніть пошук за ключом
console.log('m1.has(3) :>> ', m1.has(3));
console.log('m1.get(3) :>> ', m1.get(3));
