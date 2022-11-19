// Деструктуроване присвоєння

// Об'єктів
function f({
  name: userName = 'Anonymous',
  title = 'pan',
  phone = '+380123456789',
}) {
  // const name = params.name
  // const title = params.title;
  // const phone = params.phone;
  // або
  // диструктуроване просвоєння
  // const { name, title, phone } = params;
  // або в списку параметрів

  console.log('in f :>> ', userName);
  console.log('in f :>> ', title);
  console.log('in f :>> ', phone);
}

f({ title: 'pan' });

// імена змінних мають відповідати іменам властивостей об'єкта або вказані після :
const book = {
  author: {
    firstName: 'Test',
    lastName: 'Testovich',
  },
  price: 12,
};

const {
  author: { firstName, lastName },
  price,
} = book;

console.log('price :>> ', price);
console.log('firstName :>> ', firstName);
console.log('lastName :>> ', lastName);

// Масивів
// Оголошені змінні співставляються за порядком елементів
const [firstItem, , thirdItem] = [1, 2, 3];
console.log('firstItem :>> ', firstItem);
console.log('thirdItem :>> ', thirdItem);

const user1 = {
  name: 'Test',
  age: 23,
  emails: ['test1@test.com', 'test2@test.com'],
  isMale: true,
};

// Task: name, age, email (email1, email2)
// перейменувати name -> userName, age -> userAge

const {
  name: userName,
  age: userAge,
  emails: [firstMail, secondMail],
  isMale,
} = user1;
console.log('userName :>> ', userName);
console.log('userAge :>> ', userAge);
console.log('emails :>> ', secondMail);
