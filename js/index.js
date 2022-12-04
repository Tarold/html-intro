'user strict';

const buttons = document.querySelectorAll('button');

function clickHandler(e) {
  e.currentTarget.parentElement.style.backgroundColor =
    e.currentTarget.dataset.color;
}

for (const button of buttons) {
  button.onclick = clickHandler;
}
