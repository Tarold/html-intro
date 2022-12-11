// symbol

const symbolVar = Symbol();

console.log('symbolVar :>> ', symbolVar);

// symbol як ключ в об'єкті
const privatKey = Symbol();

const user = {
  age: 15,
  [privatKey]: '1234123412341234',
};

console.log('user[Symbol()] :>> ', user[privatKey]);

// symbol для генерації унікальних значень
const THEMES = {
  LIGHT: Symbol('light'),
  DARK: Symbol('dark'),
};

const theme = THEMES.DARK;

switch (theme) {
  case THEMES.DARK:
    console.log('THEMES.DARK :>> ', THEMES.DARK);
    break;
  case THEMES.LIGHT:
    console.log('THEMES.LIGHT :>> ', THEMES.LIGHT);
    break;
  default:
    console.log(' unexpected value ');
}

// Symbol.iterator

// 1 for..of

// 2 деструктуризація колекцій
const [first, second] = [1, 2];

// 3 spread operator
// створення копії колекції
// конкатенація колекцій

// для масивів:
const arr1 = [1, 2, 3];

// копіювання масивів
const arr2 = [...arr1];

function f() {
  const args = [...arguments];
}
f(1, 2, 3);

// конкатенація масивів
const arr3 = [9, 8, 7];
const arr13 = [...arr1, ...arr3];

// розширення масиву в аргументи функції
const arr10 = [1, 2, 7];

// f1(arr10[0], arr10[1], arr10[2]);
// або
f1(...arr10);

function f1(a, b, c) {
  console.log('a,b,c :>> ', a, b, c);
}

// для об'єктів (не через Symbol.iterator)
const user1 = { name: 'Test', age: 30 };

// копіювання
const user2 = { ...user1 };

// злиття об'єктів в один
const user3 = { isMale: true, isSubscribed: false };
const user13 = { ...user1, ...user3 };

// Ex. отримання набору опцій з користувацьких та дефолтних
sendRequest({ url: 'http://google.com' });

function sendRequest(options) {
  const defaultOptions = {
    url: 'http://localhost',
    port: 3000,
  };
  const resultOptions = { ...defaultOptions, ...options };
  // ...
}

// 4 Array.from() - створює масив з псевдомасива або ітерованої колекції
