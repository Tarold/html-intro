// const firstName = 'Test';
// const lastName = 'Testovich';
// const email = 'test@gmail.com';

// // Оголошення об`єкту
// const obj1 = {}; // cинтаксичний цукор
// const obj2 = Object();
// const obj3 = new Object();

// // властивості: рядки, Symbol()
// const user = {
//   // key: value,
//   firstName: 'Test',
//   lastName: 'Testovich',
//   email: 'test@gmail.com',
//   password: 'qwerty',
// };

// console.log('user :>> ', user);
// // alert(user); // не вміє виводити об'єкти

// // Доступ до властивостей (. - операція доступу до властивості)
// // Читання властивості
// console.log('user.email :>> ', user.email);
// // Зміна значення властивостей
// user.email = 'anothetmail@gmail.com';

// // Додавання властивості
// user.age = 10;
// console.log('user :>> ', user);

// // Видалення властивості
// delete user.password;
// console.log('user :>> ', user);

// // Task: Створити об'єкт машини (марка, модель, рік випуску, номер, колір)
// // Переглянути об'єкт
// // змінити колір
// // видалити властивість рік випуску
// // додати властивість ім'я/прізвище власника
// // Переглянути об'єкт
// const car = {
//   mark: 'VW',
//   model: 'Jetta',
//   year: 1987,
//   number: '3642',
//   color: 'Red',
// };

// console.log('car before :>> ', car);
// car.color = 'Green';
// delete car.year;
// car.firstName = 'John';
// car.lastName = 'Malcovich';
// console.log('car after :>> ', car);

// const capibara = {
//   superPower: 'cute',
//   countOfLegs: 3,
//   countOfEyes: 2,
//   favoriteThing: 'sun and water',
// };

// capibara.type = 'rat';
// capibara.countOfLegs = 4;
// delete capibara.favoriteThing;
// console.log('capibara', capibara);

// // Типи-посилання (об'єкти) і типи-значення (примітиви) ---------
// const a = 5;
// const b = 5;
// console.log('a===b :>> ', a === b);

// const o1 = {};
// const o2 = {};
// console.log('o1===o2 :>> ', o1 === o2);

// const o3 = o1;
// console.log('o1===o3 :>> ', o1 === o3);
// o3.name = 'property';
// console.log('o1 :>> ', o1);

// function f() {
//   o3.lastName = 1;
// }

// f(o3);
// console.log('o3 :>> ', o3);

// // Копіювання ЗНАЧЕННЯ об'єктів, (а не посилань) ---------------
// const user1 = Object.assign({}, user);
// console.log('user1 :>> ', user1);
// console.log('user===user1 :>> ', user === user1);

// const user2 = { ...user };
// console.log('user2 :>> ', user2);
// console.log('user===user2 :>> ', user === user2);

// // Обчислювальні властивості / Вычисляемые свойства ---------------
// const prop = prompt('input property');
// const value = prompt('input value');

// const obj = {
//   [prop]: value,
// };
// console.log('obj :>> ', obj);
// console.log(`obj${prop} :>> `, obj[prop]);

// // Методи об'єктів -----------------------------------------------

// const user3 = {
//   // властивості
//   firstName: 'Test',
//   lastName: 'Testovich',
//   email: 'test@gmail.com',
//   password: 'qwerty',
//   // методи
//   // this - той, об'єкт, що стоїть перед крапкою при виклику метода
//   // повний синтаксис:
//   // getFullName: function () {
//   //   return `${this.firstName} ${this.lastName}`;
//   // },
//   // changeEmail: function (newEmail) {
//   //   this.email = newEmail;
//   // },
//   // короткий синтаксис
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   },
// };

// // Виклик методу
// console.log('user3.getFullName() :>> ', user3.getFullName());
// user3.changeEmail('newmail@gmail.com');

// console.log('user3 :>> ', user3);

// // Task: Написати метод для зміни кольору машини
// const car2 = {
//   mark: 'VW',
//   model: 'Jetta',
//   year: 1987,
//   number: '3642',
//   color: 'Red',
//   changeColor(newColor) {
//     this.color = newColor;
//   },
//   changeValue(valName, value) {
//     this[valName] = value;
//   },
// };

// car2.changeColor('yellow');
// console.log('car :>> ', car2);
// car2.changeValue('year', 2000);
// console.log('car :>> ', car2);

// // Перебор об'єкту за допомогою for..in --------------------------

// // В key послідовно поміщаються значення всіх властивостей
// for (const key in user3) {
//   console.log('key :>> ', user3[key]);
// }

// // Task: Використати for..in для car
// // car[ім'я властивості] = значення
// for (const key in car) {
//   console.log(`car.${key} = ${car[key]}`);
// }

// Функція-конструктор -------------------------------------

function User(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
User.prop = function () {
  console.log('not in prototype :>> ');
};
// В жс прототипне наслідування

// Наслідування дозволяє всю спільну логіку для об'єктів певного типу
// виносити в спільний батьківський елемент

// Спочатку метод шукаємо в об'єкті
// Якщо певний метод не знайдено в об'єкті, то він шукається в його прототипі
// Якщо не знайдено там, то в прототипі прототипа, ...

const userProto = {}; // або new User();

userProto.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

User.prototype = userProto;

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

const user4 = new User('Test', 'Testovich', 20);
console.log('user4 :>> ', user4);
const user5 = new User('User 2', 'Testovich 2', 21);
console.log('user5', user5);

// Написати функцію-конструктор для створення машини
// Додати в прототип метод для зміни кольору машини
// Створити за допомогою функції-конструктора 2 об'єкта

function Car(model, color) {
  this.model = model;
  this.color = color;
}

Car.prototype.changeColor = function (newColor) {
  this.color = newColor;
};

const car1 = new Car('Audi', 'black');
console.log('car1', car1);
const car2 = new Car('BMW', 'white');
console.log('car2', car2);
car1.changeColor('red');
console.log('car1', car1);
