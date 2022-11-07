/*
1.
Створити об'єкт customer, що містить такі властивості:
ім'я, 
прізвище, 
електронна адреса, 
password,
номер телефона,
адреса (є рядком або *об'єктом з властивостями місто, вулиця, дім, квартира) ; 
*/
let customer = {
  name: 'Alex',
  surname: 'Testonuk',
  emailAddress: 'test@gmail.com',
  password: 'q!wq1245',
  phoneNumber: '+380958786887',
  address: {
    city: 'Zaporizhzhya',
    street: 'Pobed',
    house: '12',
    apartment: '24',
  },

  addressOutput() {
    //виведення адреси,
    let PrintMessage = 'Adress customer: ';
    for (const property in this.address) {
      PrintMessage += `${property}: ${this.address[property]}; `;
    }
    alert(PrintMessage);
    console.log('address', this.address);
  },

  setNumber(number) {
    //зміна номера телефону
    this.phoneNumber = number;
  },
};

customer.addressOutput();
customer.setNumber('+380958986427');

customer.isMale = true; //Додати об'єкту властивість isMale

delete customer.address; //Видалити у об'єкта властивість адреса.

console.log('customer', customer);

const customer1 = Object.assign({}, customer); //Зробити копії об'єкту customer двома різними способами.
console.log('customer1 :>> ', customer1);
console.log('customer===customer1 :>> ', customer === customer1);

const customer2 = { ...customer };
console.log('customer2 :>> ', customer2);
console.log('customer===customer2 :>> ', customer === customer2);

/*
2. Перебрати і вивести властивості об'єкту cat
{    name: 'Murka',
    color: 'black',
    isMale: false,
    isFurnitureDemage: true,
}
циклом for..in.
*/
const cat = {
  name: 'Murka',
  color: 'black',
  isMale: false,
  isFurnitureDemage: true,
};

for (const property in cat) {
  if (Object.hasOwnProperty.call(cat, property)) {
    console.log(`cat[${property}]`, cat[property]);
  }
}

/*
3. Створити функцію-конструктор для створення об'єктів книг з властивостями:
автор, 
назва, 
рік видання, 
видавництво (рядок або *об'єкт з властивостями місто, назва), 
ціна.
   передбачити методи:
для обчислення віку книги (у роках),
для зміни ціни книги.
*/
/**
 * Constructor function for creating book objects with properties
 * @param {string} author book author; strings
 * @param {string} name book title; strings
 * @param {number} year year of publication of the book; number
 * @param {object} publisher book publisher:
 *  country of origin, headquarters location, headquarters  location;
 *  object{string, string, string}
 * @param {number} price the price of the book; number
 */
function Book(author, name, year, publisher, price) {
  this.author = author;
  this.name = name;
  this.yearOfPublication = year;
  this.publisher = publisher;
  this.price = price;
  this.calculationOfBookAge = function () {
    return 2022 - this.yearOfPublication + ' years';
  };
  this.changePrice = function (price) {
    this.price = price;
  };
}

const book1 = new Book(
  'George Orwell',
  'Nineteen Eighty-Four',
  1949,
  {
    countryOfOrigin: 'United Kingdom',
    headquartersLocation: 'London',
    headquartersLocation: 'book',
  },
  2300
);
console.log('book1 :>> ', book1);
console.log('book1.calculationOfBookAge()', book1.calculationOfBookAge());
book1.changePrice(3000);
console.log('book1.price', book1.price);
