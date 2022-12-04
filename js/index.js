'use strict';

// Родитель:
// element.parentElement – родитель-элемент.

// Соседи:
// element.previousElementSibling – предыдущий сосед-элемент.
// element.nextElementSibling – lastElementChildследующий сосед-элемент.

// Дети:
// element.children – коллекция детей, которые являются элементами.
// element.firstElementChild – первый дочерний элемент.
// element.lastElementChild – последний дочерний элемент.

// element.closest(selector) - найближчий батьківський елемент по селектору

const articleEl = document.querySelector('article.class1');
console.log('articleEl.parentElement :>> ', articleEl.parentElement);

const p1El = document.querySelector('p:first-of-type');
console.log('p1El.previousElementSibling :>> ', p1El.previousElementSibling);
console.log('p1El.nextElementSibling :>> ', p1El.nextElementSibling);
console.log('p1El.previouSibling :>> ', p1El.previousSibling);
console.log('p1El.nextSibling :>> ', p1El.nextSibling);

console.log('articleEl.children :>> ', articleEl.children);
console.log('articleEl.firstElementChild :>> ', articleEl.firstElementChild);
console.log('articleEl.lastElementChild :>> ', articleEl.lastElementChild);

// знайти h3 через ul
const ulEl = document.querySelector('ul');
console.log('findH3:>> ', ulEl.previousElementSibling.previousElementSibling);
console.log('ulEl :>> ', ulEl.parentElement.firstElementChild);

console.log('ulEl.closest(".class1") :>> ', ulEl.closest('.class1'));

// Повісити обробника подійн на всі елементи списку
// і законсолеложити іх textContent, маючи посилання на ul

const liClickHandler = function (e) {
  console.log('this.textContent :>> ', this.textContent);
  console.log('e.target.textContent :>> ', e.target.textContent);
  console.log('e.target.innerHTML :>> ', e.target.innerHTML);
};

for (const liEl of ulEl.children) {
  liEl.onclick = liClickHandler;
}

// [...ulEl.children].forEach(
//   liEl =>
//     (liEl.onclick = () => {
//       console.log('liEl.textContent :>> ', liEl.textContent);
//     })
// );
