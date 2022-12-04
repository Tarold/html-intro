'use strict';

const sectionEl = document.querySelector('section');

// append/prepend - додавання чайлдів
const newEl = document.createElement('article');
newEl.textContent = 'ARTICLE 2';

sectionEl.append(newEl); // додати останній чайлд

const h2El = document.createElement('h2');
h2El.textContent = 'Section title';
h2El.style.color = 'red';

sectionEl.prepend(h2El); //  додати перший чайлд

// before/after - додавання сіблінгів

const newSection = document.createElement('section');
newSection.textContent = 'SECTION 2';

sectionEl.after(newSection); // додає сіблінга

const asideEl = document.createElement('aside');
asideEl.textContent = 'ASIDE';

sectionEl.before(asideEl);

// remove

sectionEl.onclick = e => {
  e.currentTarget.remove();
};
