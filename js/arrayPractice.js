function Phone(id, brand, model, makeYear, color, isNfc, price) {
  this.id = id;
  this.brand = brand;
  this.model = model;
  this.makeYear = makeYear;
  this.color = color;
  this.isNfc = isNfc;
  this.price = price;
}

const phonesCount = 100;

const phones = [];

for (let i = 0; i < phonesCount; i++) {
  const phone = new Phone(
    i,
    Math.random() > 0.5 ? 'Sumsung' : 'IPhone',
    `Series ${Math.trunc(Math.random() * 20)}`,
    2015 + Math.trunc(Math.random() * 8),
    Math.random() > 0.5 ? 'white' : 'black',
    Math.random() > 0.5,
    5000 + Math.trunc(Math.random() * 7000)
  );
  phones.push(phone);
}

console.dir(phones);

// forEach виконує колббек послідовно для всіх елементів масиву
// filter => новий масив з елеметами, які задовольняють умові в колбеку
// map => новий масив з елементами, які повернуті з колбеку для кожного елемента вихідного масиву
// findIndex => індекс знайденого елемента (для якого з колбека повертається true,
//              або -1, якщо його не знайдено (для кожного повернулося false))
// every => true (виконується всім) / false
// some => true (виконується хоча б для одного) / false

//! 1 Відібрати телефони дорожче 8000

// function filter8000Phone(currentValue) {
//   return currentValue.price > 8000;
// }
// const priceBigger8000Phones = phones.filter(filter8000Phone);

const priceBigger8000Phones = phones.filter(p => p.price > 8000);

//! 2 Відібрати телефони 2018 року випуску (filter)
function filter2018Phone(currentValue) {
  return currentValue.makeYear === 2018;
}
const year2018Phones = phones.filter(filter2018Phone);

// const makeYear2018Phones = phones.filter(p => p.makeYear === 2018);
// console.dir(makeYear2018Phones);

//! 3 Вивести 'brand: model year' кожного телефону (forEach)
function printPhone(phone) {
  console.log(`${phone.brand}: ${phone.model} ${phone.makeYear}`);
}

phones.forEach(printPhone);

//! 4 Видалати телефон з id 10 (findIndex + splice)

function findPhoneIndex(phone) {
  return phone.id === 10;
}

const foundedPhoneIndex = phones.findIndex(findPhoneIndex);

phones.splice(foundedPhoneIndex, 1);
// phones.splice(
//   phones.findIndex(p => p.id === 10),
//   1
// );
console.log('phones :>> ', phones);

//! 5 Отримати масив з телефонами, ціна яких нижча на 5% від вихідної
console.log('phones[0].price :>> ', phones[0].price);
function mapPhones(phone) {
  const p = { ...phone };
  p.price = p.price * 0.95;

  return p;
}

const salePhones = phones.map(mapPhones);
console.log('salePhones[0].price :>> ', salePhones[0].price);
console.log('phones[0].price :>> ', phones[0].price);
//! 6 Вивести бренд+модель телефонів із nfc.

function filterNfsPhone(phone) {
  return phone.isNfc;
}

const nfcPhones = phones.filter(filterNfsPhone);

function printBrandModel(phone) {
  console.log(`${phone.brand} ${phone.model}`);
}

nfcPhones.forEach(printBrandModel);
console.log('nfcPhones.length :>> ', nfcPhones.length);

// phones
//   .filter(p => p.isNfc)
//   .forEach(p => console.log(`${phone.brand} ${phone.model}`));

//! 7 Вивести дані про моделі apple 2016 року

const arrApple2016 = phones.filter(
  item => item.makeYear === 2016 && item.brand === 'IPhone'
);
console.dir(arrApple2016);

// (+ every, some)
// *8 Перевірити, чи є золоті телефони
// *9 Перевірити, чи всі телефони пізніше 2013 випуску
// *10 Дізнатися, чи всі білі айфони з нфc
