'use  strict';

// const regExp1 = new RegExp(шаблон, прапорці);
const regExp1 = new RegExp('qwerty', 'ig');

// const regExp2 = /шаблон/прапорці;
const regExp2 = /qwerty/g;

// прапор i - незалежність від регістру
// прапор g - пошук по всьому рядку

console.log(regExp2.test('44564qwerty84545qwerty'));

console.log('54515qwerty1256qwerty'.match(regExp2));

// Межі ------------------------------------------------------------
// ^ - початок рядка
// $ - кінець рядка
// \b - границя слова
// \B - не межа слова

// Перевірити, що qwerty э всим рядком
console.log('qwerty'.match(/^qwerty$/));

// Task: Перевірити, чи стоїть qwerty на початку рядка, ігноруючи регістр
// "qwerty"          +
// "qwertynjknkjnkl" +
// "QWerty513"       +
// "777qwerty"       -
console.log('qwerty'.match(/^qwerty/i));

// Перевірити, чи dog є окремим словом
console.log('My dog is cute'.match(/\bdog\b/i));

console.log('My hotdog is cute'.match(/\bdog\b/i));

// . - один будь-який символ ---------------------------------------------

// Перевірити, чи пароль починається на qw  і закінчується на ty,
// посередині має бути 2 символи
console.log('qwerty'.match(/^qw..ty$/));
console.log('qw55ty'.match(/^qw..ty$/));
console.log('qwfty'.match(/^qw..ty$/));

// Task: Перевірити, що рядок містить 7 символів і починається на 111
console.log('1114567'.match(/^111....$/));
console.log('1214567'.match(/^111....$/));
console.log('11145h67'.match(/^111....$/));
console.log('qw11145'.match(/^111....$/));

// Квантифікатори -----------------------------------------------------
// {8} - строго 8 символів
// {1,10} - від 1 до 10
// {1,} - від 1 до нескінченності
// + - {1,} - від 1 до нескінченності
// * - {0,} - від 0 до нескінченності
// ? - {0,1} - від 0 до 1

// Перевірити, що рядок містить 7 символів і починається на 111
console.log('1115647'.match(/^1{3}.{4}$/));
console.log('{1115647'.match(/^\{1{3}.{4}$/));

// Task: Перевірити чи відповідає рядок имейлу 1-10@1-10
// fff@fff   +
// @lkljl    -
// hjghjhj@  -
// 12345678901234@sdfsdf -
console.log('11@qq'.match(/^.{1,10}@.{1,10}$/));
console.log('11111111111@qrwrewrewrewrq'.match(/^.{1,10}@.{1,10}$/));
console.log('@qq'.match(/^.{1,10}@.{1,10}$/));
console.log('11@'.match(/^.{1,10}@.{1,10}$/));
console.log('11%qq'.match(/^.{1,10}@.{1,10}$/));

// Альтернативні символи / один з групи символів ---------------------

// \d = [0123456789] = [0-9]
// \D = ^\d
// [a-z]
// [A-Z]
// [a-zA-Z]
// \w [a-zA-Z0-9_] - символи слова
// \W = ^\w
// \s - space
// \S

// Перевірити, чи в рядку тільки цифри
console.log('1234560'.match(/^[0123456789]+$/));
// or
console.log('1234560'.match(/^[0-9]+$/));
// or
console.log('1234560'.match(/^\d+$/));

// Task: Перевірити, що вказано номер телефона у форматі: +380-2цифри-3цифри-4цифри
console.log('+380-88-444-5555'.match(/^\+380-[0-9]{2}-[0-9]{3}-[0-9]{4}$/));
console.log('+38088-444-5555'.match(/^\+380-[0-9]{2}-[0-9]{3}-[0-9]{4}$/));

console.log('380-88-444-5555'.match(/^\+380-[0-9]{2}-[0-9]{3}-[0-9]{4}$/));
console.log('+380-88-444-5555eeee'.match(/^\+380-[0-9]{2}-[0-9]{3}-[0-9]{4}$/));
console.log('+380-11-111-1111'.match(/^\+380-\d{2}-\d{3}-\d{4}$/));

// Перевірити на ім'я (Aqeqewqewqe)2-20
console.log('Anna'.match(/^[A-Z][a-z]{1,19}$/));

// Перевірити, що число
// 11111.55555;
// -11111.55555;
console.log('"111.555".match(/-/) :>> ', '111.555'.match(/^-?\d+\.\d+$/));
console.log('"-111.555".match(/-/) :>> ', '-111.555'.match(/^-?\d+\.\d+$/));
console.log('"-111.f55".match(/-/) :>> ', '-11f.555'.match(/^-?\d+\.\d+$/));
console.log('"-11155".match(/-/) :>> ', '-11555'.match(/^-?\d+\.\d+$/));

// Альтернативні слова --------------------------------------------------
// [123] = (1|2|3)
// (cat|dog)
// Перевірити, чи є в рядку cat чи dog
console.log('A like cat'.match(/\b(cat|dog)\b/));
// Перевірити, чи є в рядку cat, cats чи dog, dogs
console.log('A like cats'.match(/\b(cat|dog)s?\b/));

// Перевірка складного імені Aaaa(-Aaaaa)?
console.log('Anna-Maria'.match(/^[A-Z][a-z]{1,19}(-[A-Z][a-z]{1,19})?$/));

// Task: переписати
console.log('+380-11-111-11-11'.match(/^\+380-\d{2}-\d{3}(-\d{2}){2}$/));
// щоб в номері були тільки існуючі коди (99,98,97,96,95,73,50,67,68,63,93)
console.log(
  '+380-98-111-11-11'.match(
    /^\+380-(99|98|97|96|95|73|50|67|68|63|93)-\d{3}(-\d{2}){2}$/
  )
);

// ? переводе квантифікатор з жадного режима в лінивий --------------------------
// Знайти цитати
console.log("I say 'yes', but think and say 'no'".match(/'.*?'/g));

// Виокремити речення
console.log(
  'Adsnfdsfjdsk sdfsdf sdfdsf. Fkjfkdsfsd sdfdsf fdd. Hlkjslf: dfkjdsk kl.'.match(
    /[A-Z].*?\./g
  )
);

// Позитивна випереджаюча перевірка / positive lookahead
console.log('I bought 10 apple by 1$'.match(/\d+(?=\$)/g));

// Є також:
// Негативна випереджаюча перевірка / positive lookahead
// Позитивна ретроспективна перевірка / positive lookbehind
// Негативна ретроспективна перевірка / positive lookbehind

// Для перевырки пароля
// довжина: 8-16, мають бути букви верхнього і нижнього регістру, цифри, спец. символи
// Qq1.gggg
console.log(
  'Aq1g.qqy'.match(
    /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&.].*).{8,16}$/
  )
);

// Методи з використанням регулярок

// replace - замінити частину рядка за критерієм
const str1 = 'Fkjhjk       jsdjfs dsfsdf   dsfsfd    sdfsdfsf';
const srt1Result = str1.replace(/\s{2,}/g, ' ');

// Task: Прибрати ненормативну лексику з повідомлень (fuck, ass, asshole)
const str2 = 'Fuck you. )))) You are asshole';
const str2Result = str2.replace(/(fuck|ass|asshole)\b/gi, '!@#$');

const str3 =
  'Fuck you dude! AAAAAASSHOLE!! FuCCCKKK Fuck Fuck Fuck Fuck Fuck!!!';
const str3Result = str3.replace(/(f+u+c+k+|a+s{2,}h+o+l+e+)/gi, '####');

// split - розділення на масив за вказаним роздільником
// Отримати масив слів з рядка
const str4 = 'Fkjhjk       jsdjfs dsfsdf   dsfsfd    sdfsdfsf';
const str4Result = str4.split(/\s{1,}/g);

// Task: Отримати масив з рядка дати з роком, місяцем, датою
// '1999-01-01' => ['1999', '01', '01']
// '1999/01/01' => ['1999', '01', '01']
// '1999.01.01' => ['1999', '01', '01']

const str5 = '1999.01.01';
const str5Result = str5.split(/-|\/|\./g);
// const str5Result = str5.split(/\!|@|#|\$|%|\^|-|\.|:/g);
