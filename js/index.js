'use strict';

// Реалізація протоколу ітерованості

/**
 * Iterator
 */
// Протокол "Ітератор" визначає стандартний спосіб отримання послідовності значень (скінченної чи нескінченної).
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Iteration_protocols

class Range {
  constructor(from, to) {
    this._from = from;
    this._to = to;
  }
  // Метод Symbol.iterator() повинен повертати об'єкт із методом next(), який повертає об'єкт із двома властивостями {value: (поточне значення), done: (чи закінчено обхід)}
  [Symbol.iterator]() {
    // Замикання
    let currentValue = this._from;
    return {
      // Стрілка, щоб брати контекст із лексичного оточення місця оголошення, а не місця виклику
      next: () => {
        if (currentValue > this._to) {
          return {
            value: undefined,
            done: true,
          };
        }
        return {
          value: currentValue++,
          done: false,
        };
      },
    };
  }
}

const range1 = new Range(3, 5);

// Можна перебирати циклом for..of
for (const item of range1) {
  console.log('item :>> ', item);
}

// Можна створювати масив на основі об'єкта, що ітерується.
const arr008 = Array.from(range1);
// new Range(1, 5) => [1, 2, 3, 4, 5]
// new Range(10, 13) => [10, 11, 12, 13]
