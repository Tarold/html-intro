// Map

// Колекція по ключу, яка може як ключ містити будь-який тип

// Властивості/методи:
// size
// set(key, value) => map
// get(key) => value
// has(key) => boolean
// delete(key) => boolean
// clear()

// keys() => MapKeyIterator
// values() => MapValueIterator
// enrties() => MapEntryIterator
// forEach()

// Створення
const m1 = new Map();
const m2 = new Map([
  ['name', 'tel1'],
  ['name2', 'tel2'],
]);

// m1.Test = '+380123456789'
m1.set('Test', '+380123456789')
  .set('Test2', '+380123456788')
  .set('Test3', '+380123456787');

// m1.Test
console.log('m1.get("Test") :>> ', m1.get('Test'));

// Test in m1
console.log('m1.has("Test") :>> ', m1.has('Test'));
console.log('m1.has("Test1") :>> ', m1.has('Test1'));

// delete m1.Test3
m1.delete('Test3');
console.log('m1 :>> ', m1);

// m1.clear();
// console.log('m1 :>> ', m1);

// Перебір мапи
for (const item of m1) {
  console.log('item :>> ', item);
}

const myArrKeys = [...m1.keys()];

// Task: Отримати масив значень з мапи (values()) - ['+380123456789', '+380123456789']
const myArrValues = [...m1.values()];

const myArrEntries = [...m1.entries()];

// Task: Отримати мапу з об'єкта
const o2 = {
  ivo1: 'tel1',
  ivo2: 'tel2',
};
const map = new Map(Object.entries(o2));

// Example: перекладач. Словник міститься в мапі
const vocabulary = new Map();
vocabulary.set('dog', 'собака');
vocabulary.set('cat', 'кіт');
vocabulary.set('run', 'бігти');

const engPhrase = 'dog run white cat';

// function translate(engPhrase) {
//   // розділити фразу на слова
//   const engWords = engPhrase.split(' ');

//   // якщо в словнику є слово, то перкласти його, якщо ні, то залишити як є
//   function engToUkr(e) {
//     if (vocabulary.has(e)) {
//       return vocabulary.get(e);
//     }
//     return e;
//   }
//   const ukrWords = engWords.map(engToUkr);

//   // з'єднати слова в один рядок
//   const ukrPhrase = ukrWords.join(' ');
//   return ukrPhrase;
// }
// або
function translate(engPhrase) {
  return engPhrase
    .split(' ')
    .map(e => (vocabulary.has(e) ? vocabulary.get(e) : e))
    .join(' ');
}
// або
// const translate = engPhrase =>
//   engPhrase
//     .split(' ')
//     .map(e => (vocabulary.has(e) ? vocabulary.get(e) : e))
//     .join(' ');

//---------------------------------------------------------------------
// Об'єкти як ключі

const user = { name: 'Test' };
const mes = {
  [user]: ['hello', ')))'],
};

const m10 = new Map();
m10.set(user, ['hello', ')))']);

console.log('m10.get(user) :>> ', m10.get(user));

//-----------------------------------------------------------------
const usersWithMessages2 = [
  { id: 1, name: 'Test1', message: 'hello', date: new Date() },
  { id: 1, name: 'Test1', message: 'how are you', date: new Date() },
  { id: 2, name: 'Test2', message: 'hi)', date: new Date() },
  { id: 2, name: 'Test2', message: 'fine)', date: new Date() },
];

const users2 = [];

usersWithMessages2.forEach(um => {
  if (!users2.find(u => um.id === u.id)) {
    users2.push({ id: um.id, name: um.name });
  }
});

const messages32 = usersWithMessages2.map(um => ({
  message: um.message,
  date: um.date,
}));

const uToM = new Map();

users2.forEach(u =>
  uToM.set(
    u,
    usersWithMessages2
      .filter(um => um.id === u.id)
      .map(um => ({ message: um.message, date: um.date }))
  )
);

users2.forEach(u => console.log('object32 :>> ', uToM.get(u)));
