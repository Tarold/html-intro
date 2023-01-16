import React, { useEffect, useState } from 'react';
import Slider from './Slide';

export default function SliderPanel({ count }) {
  const [countOld, setCountOld] = useState(0);
  const [slides, setSlides] = useState([
    { class: 'prevSlide', src: '' },
    { class: 'slide', src: '' },
    { class: 'nextSlide', src: '' },
  ]);

  const moveSlides = (way) => {
    const newSlide = { src: count + way };
    if (way > 0) {
      newSlide.class = slides[2].class;
      setSlides((slides) => [newSlide, slides[0], slides[1]]); //next slide
    } else if (way < 0) {
      newSlide.class = slides[0].class;
      setSlides((slides) => [slides[1], slides[2], newSlide]); //prev slide
    }
    console.log(slides);
  };
  useEffect(() => {
    moveSlides(count - countOld);
    setCountOld(count);
  }, [count]);

  return (
    <>
      <img className={slides[0]} src="" alt="" />
      <img className={slides[1]} src="" alt="" />
      <img className={slides[2]} src="" alt="" />
    </>
  );
}
