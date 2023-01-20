import React, { useEffect, useState } from 'react';
import SliderPanel from './SliderPanel';
import ControlPanel from './ControlPanel';
import styles from './style.module.scss';
import classNames from 'classnames';

//TODO сделать типо карточки
export default function Slider() {
  const [delay, setDelay] = useState(5);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlay, setIsPlay] = useState(true);
  const [isFlipThrough, setIsFlipThrough] = useState(false);

  const [isFullScreen, setIsFullScreen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((currentSlide) => currentSlide + 1);
    setIsFlipThrough(true);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide) => currentSlide - 1);
    setIsFlipThrough(true);
  };

  const togglePlay = () => {
    setIsPlay((isPLay) => !isPLay);
  };

  useEffect(() => {
    let id;
    let idFlip;
    if (isPlay) {
      id = setTimeout(nextSlide, delay * 1000);
    }
    if (isFlipThrough) {
      idFlip = setTimeout(() => {
        setIsFlipThrough(false);
      }, 500);
    }
    return () => {
      clearTimeout(id);
      clearTimeout(idFlip);
    };
  });

  const toggleFullScreen = () => {
    setIsFullScreen((isFullScreen) => !isFullScreen);
  };

  const eventHandler = (e) => {
    const value = e.target.value >= 1 ? e.target.value : 1;
    setDelay(value);
  };

  const sliderContainerClass = classNames(
    {
      [styles.sliderContainer + ' ' + styles.fullscreen]: isFullScreen,
    },
    {
      [styles.sliderContainer]: !isFullScreen,
    }
  );
  return (
    <div className={styles.siteSection}>
      <h1>Cool Slider</h1>
      <p>with cool dogs</p>
      <div className={sliderContainerClass}>
        <SliderPanel count={currentSlide} isFullScreen={isFullScreen}>
          <ControlPanel
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            togglePlay={togglePlay}
            toggleFullScreen={toggleFullScreen}
            isFlipThrough={isFlipThrough}
            delay={delay}
            eventHandler={eventHandler}
          />
        </SliderPanel>
      </div>
    </div>
  );
}
