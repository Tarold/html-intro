'use strict';

function eventHandler(e) {
  // console.log('e.target :>> ', e.target);
  console.log('e.currentTarget :>> ', e.currentTarget);
  // e.stopPropagation(); // вимикає подальше розповсюдження події
}

document.body.addEventListener('click', eventHandler, {
  capture: true,
  once: true, // спрацює 1 раз післі першого запуску скрипта
});
// document.body.removeEventListener('click', eventHandler, { capture: true });

document.body.firstElementChild.addEventListener('click', eventHandler, {
  capture: true,
});

document.body.firstElementChild.firstElementChild.addEventListener(
  'click',
  eventHandler,
  { capture: true }
);

// події  по дефолту спрацьовують на сплиття (bubbling)
document.body.firstElementChild.firstElementChild.addEventListener(
  'click',
  eventHandler
);
document.body.firstElementChild.addEventListener('click', eventHandler);
document.body.addEventListener('click', eventHandler);
