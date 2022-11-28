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

const [prevBtn, nextBtn] = document.querySelectorAll('button');
const sliderImg = document.querySelector('.sliderWrapper img');

let currentSlideIndex = 0;

updateSlider(currentSlideIndex);

prevBtn.onclick = prevBtnHandler;
nextBtn.onclick = nextBtnHandler;

function prevBtnHandler() {
  // if (currentSlideIndex > 0) {
  //   currentSlideIndex--;
  // } else {
  //   currentSlideIndex = slides.length - 1;
  // }
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateSlider(currentSlideIndex);
}

function nextBtnHandler() {
  // if (currentSlideIndex < slides.length - 1) {
  //   currentSlideIndex++;
  // } else {
  //   currentSlideIndex = 0;
  // }
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateSlider(currentSlideIndex);
}

function updateSlider(currentSlideIndex) {
  sliderImg.src = slides[currentSlideIndex].src;
  sliderImg.alt = slides[currentSlideIndex].alt;

  sliderImg.onerror = () => {
    sliderImg.src = './../images/defaultSlide.jpeg';
  };
}
