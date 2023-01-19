import React, { useEffect, useState } from 'react';
import Slider from './Slide';
import classNames from 'classnames';
import GetData from './../../../api';
import styles from './style.module.scss';

export default function SliderPanel({ count, isFullScreen, ...ControlPanel }) {
  const [countOld, setCountOld] = useState(0);
  const [slidesStyles, setSlidesStyles] = useState([
    styles.prevSlide,
    styles.slide,
    styles.nextSlide,
  ]);
  const [slidesData, setSlidesData] = useState([{}, {}, {}]);

  const moveSlides = (way) => {
    if (way > 0) {
      //next slide
      setSlidesStyles((slidesStyles) => [
        slidesStyles[2],
        slidesStyles[0],
        slidesStyles[1],
      ]);
      slidesStyles.forEach((value, index) => {
        if (value.includes('prevSlide')) {
          GetData().then((data) => {
            const newData = [...slidesData];
            newData[index] = data;
            setSlidesData(newData);
          });
        }
      });
    } else if (way < 0) {
      //prev slide
      setSlidesStyles((slidesStyles) => [
        slidesStyles[1],
        slidesStyles[2],
        slidesStyles[0],
      ]);
      slidesStyles.forEach((value, index) => {
        if (value.includes('nextSlide')) {
          GetData().then((data) => {
            const newData = [...slidesData];
            newData[index] = data;
            setSlidesData(newData);
          });
        }
      });
    }
  };
  useEffect(() => {
    const getAllData = async () => {
      setSlidesData([await GetData(), await GetData(), await GetData()]);
    };
    getAllData();
  }, []);

  useEffect(() => {
    moveSlides(count - countOld);
    setCountOld(count);
  }, [count]);

  const setSlide = (data, index) => {
    const slideStyle = classNames(
      {
        [data + ' ' + styles.fullscreen]: isFullScreen,
      },
      {
        [data]: !isFullScreen,
      }
    );
    return (
      <Slider
        slideStyle={slideStyle}
        slideData={slidesData[index]}
        key={'dog' + index}
        isFullScreen={isFullScreen}
      />
    );
  };

  const sliderClass = classNames(
    {
      [styles.sliderPanel + ' ' + styles.fullscreen]: isFullScreen,
    },
    {
      [styles.sliderPanel]: !isFullScreen,
    }
  );

  return (
    <div className={sliderClass}>
      {slidesStyles.map(setSlide)}
      {ControlPanel.children}
    </div>
  );
}
