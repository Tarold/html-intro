// var --------------------------------------------------------------

// + з'явився local scope
// - нема block scope
// - дозволяється підняття змінних (hoisting) - використання до оголошення

// Приклади:

console.log('a :>> ', a); // нема помилки - hoisting (для let/const нема hoisting)

var a = 5; // Зберігаються в window (Global Scope), let/const - в Script Scope

// Змінні, оголошені в функції:
function f() {
  var a = 10; // локальні працюють звично (Local Scope), як і let/const
}

f();

console.log('a :>> ', a); // => 5

// Змінні, оголошені в блоці:
if (true) {
  var a = 15; // сприймається як глобально оголошена a (не як Block Scope), а let/const - в Block Scope
}

console.log('a :>> ', a); // => 15
