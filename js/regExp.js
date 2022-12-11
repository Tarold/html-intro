'use  strict';

// const regExp1 = new RegExp(шаблон, прапорці);
const regExp1 = new RegExp('qwerty', 'ig');

// const regExp2 = /шаблон/прапорці;
const regExp2 = /qwerty/g;
// прапор i - незалежність від регістру
// прапор g - пошук по всьому рядку

// console.log(
//   'regExp2.test("sfsfdqwertysfsdf") :>> ',
//   regExp2.test('44564qwerty84545qwerty')
// );

// console.log(
//   '"54515qwerty1256qwerty".match(regExp2) :>> ',
//   '54515qwerty1256qwerty'.match(regExp2)
// );

// Межі
// ^ - початок рядка
// $ - кінець рядка
// \b - границя слова
// \B - не межа слова

// Перевірити, що qwerty э всим рядком
// console.log('"qwerty".match(/^qwerty$/) :>> ', 'qwerty'.match(/^qwerty$/));

// Перевірити, чи стоїть qwerty на початку рядка, ігноруючи регістр
// "qwerty"+
// "qwertynjknkjnkl"+
// "QWerty513"+
// "777qwerty"-
// console.log('"qwerty".match(/^qwerty/i) :>> ', 'qwerty'.match(/^qwerty/i));

// Перевірити, чи dog є окремим словом
// console.log(
//   '"My dog is cute".match(/\bdog\b/i) :>> ',
//   'My dog is cute'.match(/\bdog\b/i)
// );

// console.log(
//   '"My hotdog is cute".match(/\bdog\b/i) :>> ',
//   'My hotdog is cute'.match(/\bdog\b/i)
// );

// . - один будь-який символ
// Перевірити, чи пароль починається на qw  і закінчується на ty,
// посередині має бути 2 символи
// console.log('"qwerty".match(/^qw..ty$/) :>> ', 'qwerty'.match(/^qw..ty$/));
// console.log('"qw55ty".match(/^qw..ty$/) :>> ', 'qw55ty'.match(/^qw..ty$/));
// console.log('"qwfty".match(/^qw..ty$/) :>> ', 'qwfty'.match(/^qw..ty$/));

// Task: Перевірити, що рядок містить 7 символів і починається на 111
// console.log('"111.match(//) :>> ', '1114567'.match(/^111....$/));
// console.log('"111.match(//) :>> ', '1214567'.match(/^111....$/));
// console.log('"111.match(//) :>> ', '11145h67'.match(/^111....$/));
// console.log('"111.match(//) :>> ', 'qw11145'.match(/^111....$/));

// Квантификаторы
// {8} - строго 8 символів
// {1,10} - від 1 до 10
// + - {1,} - від 1 до нескінченності
// * - {0,}
// ? - {0,1}

// Перевірити, що рядок містить 7 символів і починається на 111
// console.log('"111.match(/^1{3}.{4}$/) :>> ', '1115647'.match(/^1{3}.{4}$/));
// console.log('"111.match(/^1{3}.{4}$/) :>> ', '{1115647'.match(/^\{1{3}.{4}$/));

// Перевірити чи відповідає рядок имейлу 1-10@1-10
// fff@fff   +
// @lkljl    -
// hjghjhj@  -
// 12345678901234@sdfsdf -
// console.log('email.match(//) :>> ', '11@qq'.match(/^.{1,10}@.{1,10}$/));
// console.log(
//   'email.match(//) :>> ',
//   '11111111111@qrwrewrewrewrq'.match(/^.{1,10}@.{1,10}$/)
// );
// console.log('email.match(//) :>> ', '@qq'.match(/^.{1,10}@.{1,10}$/));
// console.log('email.match(//) :>> ', '11@'.match(/^.{1,10}@.{1,10}$/));
// console.log('email.match(//) :>> ', '11%qq'.match(/^.{1,10}@.{1,10}$/));

// Альтернативні символи / один з групи символів

// \d = [0123456789] = [0-9]
// \D = ^\d
// [a-z]
// [A-Z]
// [a-zA-Z]
// \w [a-zA-Z0-9_] - символи слова
// \W = ^\w
// \s - space
// \S

// В рядку тільки цифри
// console.log(
//   '"1234560".match(/[0123456789]+/) :>> ',
//   '1234560'.match(/[0123456789]+/)
// );
// // or
// console.log(
//   '"1234560".match(/[0123456789]+/) :>> ',
//   '1234560'.match(/^[0-9]+$/)
// );
// //or
// console.log('"1234560".match(/[0123456789]+/) :>> ', '1234560'.match(/^\d+$/));

// console.log(
//   '"123g4560".match(/^[0123456789]+$/) :>> ',
//   '123g4560'.match(/^[0123456789]+$/)
// );

// Task: Перевірити, що вказано номер телефона у форматі: +380-2цифри-3цифри-4цифри
// console.log(
//   'number.match(//) :>> ',
//   '+380-88-444-5555'.match(/^\+380-[0-9]{2}-[0-9]{3}-[0-9]{4}$/)
// );
// console.log(
//   'number.match(//) :>> ',
//   '+38088-444-5555'.match(/^\+380-[0-9]{2}-[0-9]{3}-[0-9]{4}$/)
// );

// console.log(
//   'number.match(//) :>> ',
//   '380-88-444-5555'.match(/^\+380-[0-9]{2}-[0-9]{3}-[0-9]{4}$/)
// );
// console.log(
//   'number.match(//) :>> ',
//   '+380-88-444-5555eeee'.match(/^\+380-[0-9]{2}-[0-9]{3}-[0-9]{4}$/)
// );
// console.log(
//   '"+380-11-111-1111".match(/^+380-d{2}-d{3}-d{4}$/) :>> ',
//   '+380-11-111-1111'.match(/^\+380-\d{2}-\d{3}-\d{4}$/)
// );

// Перевірити на ім'я (Aqeqewqewqe)2-20
// console.log(
//   '"Anna".match(/[A-Z][a-z]{1,19}/) :>> ',
//   'Anna'.match(/^[A-Z][a-z]{1,19}$/)
// );

// // Перевірити, що число
// 11111.55555;
// -11111.55555;
// console.log('"111.555".match(/-/) :>> ', '111.555'.match(/^-?\d+\.\d+$/));
// console.log('"-111.555".match(/-/) :>> ', '-111.555'.match(/^-?\d+\.\d+$/));
// console.log('"-111.f55".match(/-/) :>> ', '-11f.555'.match(/^-?\d+\.\d+$/));
// console.log('"-11155".match(/-/) :>> ', '-11555'.match(/^-?\d+\.\d+$/));

// // Альтернативні слова
// // [123] = (1|2|3)
// // (cat|dog)
// console.log(
//   '"A like cat".match(/\b(cat|dog)\b/) :>> ',
//   'A like cat'.match(/\b(cat|dog)\b/)
// );
// console.log(
//   '"A like cat".match(/\b(cat|dog)s?\b/) :>> ',
//   'A like cats'.match(/\b(cat|dog)s?\b/)
// );

// Перевірка складного імені Aaaa(-Aaaaa)?
console.log(
  '"Anna-Maria".match(/[A-Z][a-z]{1,19}(-)?/) :>> ',
  'Anna-Maria'.match(/^[A-Z][a-z]{1,19}(-[A-Z][a-z]{1,19})?$/)
);
console.log('+380-11-111-11-11'.match(/^\+380-\d{2}-\d{3}(-\d{2}){2}$/));

// +380-99-123-45-45 (99,98,97,96,95,73,50,67,68,63,93)
console.log(
  '+380-98-111-11-11'.match(
    /^\+380-(99|98|97|96|95|73|50|67|68|63|93)-\d{3}(-\d{2}){2}$/
  )
);
