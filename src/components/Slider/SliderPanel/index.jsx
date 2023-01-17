import React, { useEffect, useState } from 'react';
import Slider from './Slide';
import GetData from './../../../api';
import styles from './style.module.scss';

export default function SliderPanel({ count }) {
  const [countOld, setCountOld] = useState(0);
  const [slidesStyles, setSlidesStyles] = useState([
    styles.prevSlide,
    styles.slide,
    styles.nextSlide,
  ]);
  const [slidesData, setSlidesData] = useState([{}, {}, {}]);

  const moveSlides = (way) => {
    //TODO двигать не стили. а двигать переменньіе для стилей
    if (way > 0) {
      GetData().then((slideData) =>
        setSlidesData((data) => [slideData, data[0], data[1]])
      );
      setSlidesStyles((slides) => [slides[2], slides[0], slides[1]]); //next slide
    } else if (way < 0) {
      GetData().then((slideData) =>
        setSlidesData((data) => [slideData, data[1], data[2]])
      );
      setSlidesStyles((slides) => [slides[1], slides[2], slides[0]]); //prev slide
    }
  };
  useEffect(() => {
    async function fetchData() {
      setSlidesData([await GetData(), await GetData(), await GetData()]);
    }
    fetchData();
  }, []);

  useEffect(() => {
    moveSlides(count - countOld);
    setCountOld(count);
  }, [count]);

  return (
    <div className={styles.sliderPanel}>
      <Slider slideStyle={slidesStyles[0]} slideData={slidesData[0]} />
      <Slider slideStyle={slidesStyles[1]} slideData={slidesData[1]} />
      <Slider slideStyle={slidesStyles[2]} slideData={slidesData[2]} />
    </div>
  );
}
