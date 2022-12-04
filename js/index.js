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

// ------------------------------------------------------
// Task: Динамічно створити структуру, наведену в html.
// Заповнити контентом з об’єкту:
const newsItem = {
  sectionTitle: 'World news',
  title: 'Another news',
  body: 'Somewhere something happened.',
};

const rootDivEl = document.querySelector('#root');

// створити секшн і вбудувати в рут
const newsSectionEl = document.createElement('section');
rootDivEl.append(newsSectionEl);

// створити заголовок
const newsSectionH2El = document.createElement('h2');
newsSectionH2El.textContent = newsItem.sectionTitle;

// створити атікл
const newsArricleEl = document.createElement('article');

// вбудувати заголовок і атікл в секшн
newsSectionEl.append(newsSectionH2El, newsArricleEl);

// створити заголовок
const newsArticleH3El = document.createElement('h3');
newsArticleH3El.textContent = newsItem.title;

//створити абзац
const newsParagraphEl = document.createElement('p');
newsParagraphEl.textContent = newsItem.body;

// вбудувати заголовок і абзац в атікл
newsArricleEl.append(newsArticleH3El, newsParagraphEl);
