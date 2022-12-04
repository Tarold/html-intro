// Task: При натисканні на кнопку:

// Отримати заголовок першого рівня і встановити для нього інший колір тла.
// * Виставити для заголовків другого рівня розмір шрифта 20px і їх колір.

// Встановити src i alt, розміри для головного зображення.
// * Встановити src i alt, розміри для зображень в кожному атіклі.

// 1

const [button] = document.querySelectorAll('button');

button.onclick = function () {
  const h1Style = document.querySelector('h1');
  h1Style.style.backgroundColor = 'red';

  const imgStyle = document.querySelector('img');
  imgStyle.setAttribute('alt', 'new alt');
  imgStyle.setAttribute(
    'src',
    'https://ecooboi.com.ua/files/cache/b1/ec/44/ecooboi-abstrakciya-listjya-1559645107.jpg'
  );
  imgStyle.setAttribute('style', 'width: 20px; height: 35px;');
};

// 2

const btnCklick = document.querySelector('button');
const h1 = document.querySelector('h1');
const h2All = document.querySelectorAll('h2');
const mainImg = document.querySelector('h1+img');
const primaryMainImg = document.querySelectorAll('h2+img');

btnCklick.addEventListener('click', btnClickHandler);

function btnClickHandler() {
  h1.style.backgroundColor = 'green';
  h2All.forEach(el => {
    el.style.fontSize = '20px';
    el.style.color = 'red';
  });
  mainImg.src =
    'https://ecooboi.com.ua/files/cache/b1/ec/44/ecooboi-abstrakciya-listjya-1559645107.jpg';
  mainImg.alt = '#';
  mainImg.style.width = mainImg.style.hight = '200px';
  primaryMainImg.forEach(el => {
    el.src =
      'https://ecooboi.com.ua/files/cache/b1/ec/44/ecooboi-abstrakciya-listjya-1559645107.jpg';
    el.alt = '#';
    el.style.width = el.style.hight = '200px';
  });
}
