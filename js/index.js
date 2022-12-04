'use strict';

// приклад роботи з classList
// classlist - рядок, в якому класи роздылено пробылами (як в html)
const h1El = document.querySelector('h1');
h1El.classList.add('classH1');
h1El.classList.remove('classH1');

const burgerBtn = document.querySelector('.burgerMenuBtn');

burgerBtn.onclick = () => {
  h1El.classList.toggle('classH1');
};

// при кліку на кнопку змінювати клас на burgerMenuContainerActive

// при кліку на body знімювати на burgerMenuContainerHide
