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

// Обробка подій -------------------------------------------------------------------------

const [btn1, btn2] = document.querySelectorAll('button');

btn1.onclick = function () {
  console.log('The btn1 was clicked');
};

// btn1.onclick = null;

const btn2ClickHandler = () => {
  console.log('The btn2 was clicked');
};

btn2.addEventListener('click', btn2ClickHandler);

btn2.removeEventListener('click', btn2ClickHandler);

// при натисканні на <div id="root">Привіт</div> вивести алертом привітання

divRoot.onclick = function () {
  alert('Hello');
};

// divRoot.onmouseover = function () {
//   alert('Hello');
// };

divRoot.addEventListener(
  'click',
  (div1ClickHandler = () => {
    alert('Привіт');
  })
);

// Атрибути ------------------------------------------------------------

console.log('divRoot.title :>> ', divRoot.title);
divRoot.title = 'new title';
divRoot.style.color = 'green';
divRoot.style.backgroundColor = 'red';
// divRoot.hidden = true;

console.log(
  'divRoot.getAttribute("title") :>> ',
  divRoot.getAttribute('title')
);
divRoot.setAttribute('title', 'new title 2');
divRoot.setAttribute('style', 'color: blue; font-size: 20px;');
divRoot.setAttribute('hidden', 'hidden');
