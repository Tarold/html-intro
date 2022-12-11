// Scope -----------------------------------------------------------------------

// Змінні, оголошені поза будь-яким блоком - глобальні, видно всім блокам (Scope - Script)
// Змінні, оголошені усередині блоку, тобто в {} - локальні, видно тільки всередині блоку (Scope - Block/Local)

const globalVar = 'global';

if (true) {
  const localVarIn1If = 'local in 1 if';

  if (true) {
    const localVarIn2If = 'local in 2 if';
    console.log('globalVar :>> ', globalVar);
    console.log('localVarIn1If :>> ', localVarIn1If);
    console.log('localVarIn2If :>> ', localVarIn2If);
  }
}

// Lexical Environment / Лексичне оточення / Лексическое окружение -------------

// Лексичне оточення - концепція, згідно з якою оточення ф-і формується
// згідно з місцем її оголошення в коді

const a = 'global';

function f1() {
  const a = 'local';

  f2();
}

function f2() {
  console.log('a :>> ', a);
}

f1();

// Замикання / Closure / Замыкание ---------------------------------------------------

// Замикання - це комбінація функції та лексичного оточення, в якому ця функція була визначена.
// У Closure в Scope - локальні змінні функції, всередині якої функція, що виконується, була створена.

const a = 'global';

f1();

function f1() {
  const a = 'local';

  return function f2() {
    console.log('a :>> ', a);
  };
}

const f2Returned = f1();
f2Returned();

// Task: використовуючи замикання, реалізувати лічильник

function counter() {
  let i = 0;

  return function () {
    return ++i;
  };
}

const counter1 = counter();
console.log('counter1() :>> ', counter1());
console.log('counter1() :>> ', counter1());
console.log('counter1() :>> ', counter1());
console.log('counter1() :>> ', counter1());

const counter2 = counter();
console.log('counter2() :>> ', counter2());
console.log('counter2() :>> ', counter2());

console.log('counter1() :>> ', counter1());
