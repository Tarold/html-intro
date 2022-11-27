//JS. Set
console.group('JS. Set');
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

console.groupEnd();

//JS. Спадкування
console.group('JS. Спадкування');

/**Базовий клас Vehicle*/
class Vehicle {
  /**
   *@param {object}  dimensions - габарити (об'єкт із довжиною, шириною, висотою),
   *@param {string}  brand - марка,
   *@param {string}  model - модель,
   *@param {Date}  manufactureDate - дата виробництва,
   */
  constructor(dimensions, brand, model, manufactureDate) {
    this.dimensions = dimensions;
    this.brand = brand;
    this.model = model;
    this.manufactureDate = manufactureDate;
  }
  getFullInfo() {
    //повертає рядок з інформацією про транспортний засіб: бренд, модель, вік;
    return `info: ${this.brand}, ${this.model}, ${this.getAge()}`;
  }
  getAge() {
    //повертає кількість років із дня виробництва.
    return new Date().getYear() - this.manufactureDate.getYear();
  }
}

/**ПасажирськийТранспорт (PassengerTransport) =>ТранспортнийЗасіб (Vehicle)*/
class PassengerTransport extends Vehicle {
  /**
   *@param {object}  dimensions - габарити (об'єкт із довжиною, шириною, висотою),
   *@param {string}  brand - марка,
   *@param {string}  model - модель,
   *@param {Date}  manufactureDate - дата виробництва,
   *@param {integer}  passengerLimit - максимальна кількість пасажирських місць,,
   *@param {integer}  passengerCount - кількість зайнятих пасажирських місць,
   */
  constructor(
    dimensions,
    brand,
    model,
    manufactureDate,
    passengerLimit,
    passengerCount
  ) {
    super(dimensions, brand, model, manufactureDate);
    this.passengerLimit = passengerLimit;
    this.passengerCount = passengerCount;
  }

  addPassenger() {
    //методом  для додавання ще одного пасажира з перевіркою можливості додавання (чи ще незайняті місця) - повертає true (якщо пасажир доданий) або false (якщо не доданий).
    if (this.passengerCount < this.passengerLimit) {
      this.passengerCount += 1;
      return true;
    }
    return false;
  }

  getFullInfo() {
    // Перевизначити метод getFullInfo: повертає рядок з інформацією про транспортний засіб:
    // бренд, модель, вік, максимальна кількість пасажирських місць.
    return `info: ${this.brand}, ${this.model}, ${this.getAge()} , ${
      this.passengerLimit
    }`;
  }
}

class FreightTransport extends Vehicle {
  /**
   *@param {object}  dimensions - габарити (об'єкт із довжиною, шириною, висотою),
   *@param {string}  brand - марка,
   *@param {string}  model - модель,
   *@param {Date}  manufactureDate - дата виробництва,
   *@param {integer}  capacity  - вантажопідйомність,
   */
  constructor(dimensions, brand, model, manufactureDate, capacity) {
    super(dimensions, brand, model, manufactureDate);
    this.capacity = capacity; // вантажопідйомність
  }

  checkLoadingPossibility(weight) {
    //методом (weight) - для перевірки можливості завантаження маси weight. Повертає булеан.
    return weight <= this.capacity;
  }
  getFullInfo() {
    //Перевизначити метод : бренд,  модель,  вік, вантажопідйомність.
    return `info: ${this.brand}, ${this.model}, ${this.getAge()}, ${
      this.capacity
    }`;
  }
}

//Створити об'єкти всіх класів ієрархії, протестувати роботу методів.

const vehSimple = new Vehicle(
  { length: 3, width: 2, height: 1.2 },
  'Audi',
  '08',
  new Date('December 25, 2000 23:15:00')
);

console.group('Vehicle');
console.log('getAge :>> ', vehSimple.getAge());
console.log('getFullInfo :>> ', vehSimple.getFullInfo());
console.groupEnd();

const vehPassenger = new PassengerTransport(
  { length: 3, width: 2, height: 1.2 },
  'Audi',
  '08',
  new Date('December 1, 2020 23:15:00'),
  21,
  20
);

console.group('PassengerTransport');
console.log('getAge :>> ', vehPassenger.getAge());
console.log('addPassenger :>> ', vehPassenger.addPassenger());
console.log('addPassenger :>> ', vehPassenger.addPassenger());
console.log('getFullInfo :>> ', vehPassenger.getFullInfo());
console.groupEnd();

const vehFreight = new FreightTransport(
  { length: 3, width: 2, height: 1.2 },
  'Audi',
  '08',
  new Date('December 20, 1975 10:15:00'),
  200
);

console.group('FreightTransport');
console.log('getAge :>> ', vehFreight.getAge());
console.log(
  'checkLoadingPossibility(200) :>> ',
  vehFreight.checkLoadingPossibility(200)
);
console.log(
  'checkLoadingPossibility(220) :>> ',
  vehFreight.checkLoadingPossibility(220)
);
console.log('getFullInfo :>> ', vehFreight.getFullInfo());
console.groupEnd();

console.groupEnd();
