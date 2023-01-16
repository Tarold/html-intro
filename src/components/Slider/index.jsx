import React, { useEffect, useState } from 'react';
import SliderPanel from './SliderPanel';
import ControlPanel from './ControlPanel';

//TODO Функционал:
// - кнопка: nextSlide,
// - кнопка: prevSlide,
// - * play/pause,
// - * input для задания задержки (by default 5s) для смены слайдов
// - * fullscreen
export default function Slider() {
  const [delay, setDelay] = useState(5000);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlay, setIsPlay] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((currentSlide) => currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide) => currentSlide - 1);
  };

  const togglePlay = () => {
    setIsPlay((isPLay) => !isPLay);
  };

  const toggleFullScreen = () => {
    setIsFullScreen((isFullScreen) => !isFullScreen);
  };

  const eventHandler = (e) => {
    setDelay(e.target.value);
  };
  return (
    <>
      <SliderPanel count={currentSlide} />
      <ControlPanel
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        togglePlay={togglePlay}
        toggleFullScreen={toggleFullScreen}
        delay={delay}
        eventHandler={eventHandler}
      />
    </>
  );
}
