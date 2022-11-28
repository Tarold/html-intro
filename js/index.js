'use strict';

const slides = [
  {
    src: 'https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'landscape1',
  },
  {
    src: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'landscape2',
  },
  {
    src: 'https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'landscape3',
  },
  {
    src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'landscape4',
  },
];

const [testBtn, prevBtn, nextBtn] = document.querySelectorAll('button');
const sliderImgBehind = document.querySelector('#behind');
const sliderImg = document.querySelector('#now');
const sliderImgNext = document.querySelector('#next');
const geaderImg = document.querySelector('header img');

let currentSlideIndex = 0;

updateSlider(currentSlideIndex);

prevBtn.onclick = prevBtnHandler;
nextBtn.onclick = nextBtnHandler;
testBtn.onclick = () => {
  const text = document.querySelector('h1');
  text.style.color = 'blue';
  testBtn.style.color = 'white';
  testBtn.style.backgroundColor = 'blue';
};
geaderImg.onmouseover = () => {
  geaderImg.src = slides[0].src;
};
function prevBtnHandler() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateSlider(currentSlideIndex);
}

function nextBtnHandler() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateSlider(currentSlideIndex);
}

function updateSlider(currentSlideIndex) {
  sliderImg.style.opacity = '0';
  sliderImgBehind.style.opacity = '0';
  sliderImgNext.style.opacity = '0';
  setTimeout(function () {
    sliderImg.src = slides[currentSlideIndex].src;
    sliderImg.alt = slides[currentSlideIndex].alt;

    sliderImgBehind.src =
      slides[(currentSlideIndex - 1 + slides.length) % slides.length].src;
    sliderImgBehind.alt =
      slides[(currentSlideIndex - 1 + slides.length) % slides.length].alt;

    sliderImgNext.src = slides[(currentSlideIndex + 1) % slides.length].src;
    sliderImgNext.alt = slides[(currentSlideIndex + 1) % slides.length].alt;

    sliderImg.style.opacity = '1';
    sliderImgBehind.style.opacity = '1';
    sliderImgNext.style.opacity = '1';
  }, 400);

  sliderImg.onerror = () => {
    sliderImg.src = './../images/defaultSlide.jpeg';
  };
}
