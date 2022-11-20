//JS. Classes
class Telephone {
  constructor(mark, model, color, price, year) {
    this.mark = mark;
    this.model = model;
    this.color = color;
    this.price = price;
    this.year = year;
  }
  set year(value) {
    if (typeof value !== 'number') {
      throw new TypeError('year must be number');
    }
    if (value < 1876 || value > 2020 || !Number.isInteger(value)) {
      throw new RangeError('year must be 1876-2020 integer');
    }
    this._year = value;
  }
  get year() {
    return this._year;
  }
  getAge() {
    return 2022 - this._year;
  }
}

const telephone1 = new Telephone(
  'Sumsung',
  'Galaxy Note 10',
  'black',
  9999,
  2019
);
console.log(telephone1.getAge());

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  set from(value) {
    if (value >= this._to) {
      throw new RangeError('value must be < to');
    }
    this._from = value;
  }
  set to(value) {
    if (value <= this._from) {
      throw new RangeError('value must be > from');
    }
    this._to = value;
  }
  get from() {
    return this._from;
  }
  get to() {
    return this._to;
  }
  get range() {
    return [this._from, this._to];
  }
  isValid(value) {
    if (value >= this._from && value <= this._to) {
      return true;
    }
    return false;
  }
}

try {
  // Конструктор (+сеттери)
  const range1 = new RangeValidator(1, 5.5); // Відпрацьовує
  const range2 = new RangeValidator(10, 5.5); // ПОМИЛКА! (оскільки має бути from <= to)
  // Робота сетерів
  range1.from = 5; // Відпрацьовує
  range1.from = 200; // ПОМИЛКА! (оскільки не має бути більше заданого вище в конструкторі to: 5.5)

  range1.to = 80; // Відпрацьовує
  range1.to = -55; // ПОМИЛКА! (оскільки не має бути менше заданого вище from

  // Робота гетерів
  console.log(range1.from); // => 5
  console.log(range1.to); // => 80

  // Робота геттера range
  console.log(range1.range); // => [5, 80]

  // Робота validate
  console.log(range1.isValid(10)); // => true (оскільки належить діапазону [5, 80])
  console.log(range1.isValid(100)); // => false (оскільки не належить діапазону [5, 80])
} catch (err) {
  console.log('err :>>', err);
}
//JS. Error handling
function pow(base, exponent) {
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    throw new TypeError('argument must be number value'); // на catch
  }
  if (
    base < 0 ||
    !Number.isSafeInteger(base) ||
    exponent < 0 ||
    !Number.isSafeInteger(exponent)
  ) {
    throw new RangeError('argument must be positive integer value'); // на catch
  }
  if (exponent === 1) return base;
  return base * pow(base, exponent - 1);
}

try {
  console.log(pow(-5, 3));
} catch (err) {
  if (err instanceof TypeError) {
    console.log('Input incorrect type');
  } else if (err instanceof RangeError) {
    console.log('Value must be pisitive integer');
  } else {
    console.log('Something went wrong');
  }
}
