const doc = document;
console.dir(doc);

const docHead = document.head;
console.dir(docHead);

const docBody = document.body;
console.dir(docBody);

const divRoot = document.getElementById('root');
const divs = document.getElementsByTagName('div');
const contentClassDivs = document.getElementsByClassName('content');

// for (const el of divs) {
//   console.dir(el);
// }

// const [div1, div2, div3] = document.getElementsByTagName('div');

const divRoot2 = document.querySelector('#root');
const divs2 = document.querySelectorAll('div');
// Отримати список елементів з класом content
const contentClassDivs2 = document.querySelectorAll('body > .content');
