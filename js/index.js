/*const set1 = new Set();

set1.add(3).add(2).add(1);

for (let a in set1) {
  console.log('a :>> ', a);
}

const set1Keys = [...set1.keys()];
console.log('set1Keys :>> ', set1Keys);
const set1Values = [...set1.values()];
console.log('set1Values :>> ', set1Values);

set1.forEach((a, b, c) => {
  console.log('a :>> ', a);
  console.log('b :>> ', b);
  console.log('c :>> ', c);
});
const arr = [1, 1, 1, 2, 2, 3, 4, 4, 4, 4];
const arr3 = [4, 4, 4, 5, 6, 55, 8];

const set2 = new Set(arr);
console.log('set2 :>> ', set2);

const arr2 = new Array(...set2);
console.log('arr2 :>> ', arr2);
*/
const users = [
  { name: 'Test0', brand: 'IPhone' },
  { name: 'Test1', brand: 'Samsung' },
  { name: 'Test2', brand: 'IPhone' },
  { name: 'Test3', brand: 'Xiaomi' },
  { name: 'Test4', brand: 'Samsung' },
  { name: 'Test5', brand: 'Xiaomi' },
  { name: 'Test6', brand: 'IPhone' },
];
const usersWithPhones = {};
users.forEach((item) => {
  usersWithPhones[item.brand] === undefined
    ? (usersWithPhones[item.brand] = [item.name])
    : usersWithPhones[item.brand].push(item.name);
});
console.log('usersWithPhones :>> ', usersWithPhones);
