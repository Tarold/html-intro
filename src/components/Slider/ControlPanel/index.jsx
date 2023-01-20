import React from 'react';
import styles from './style.module.scss';
import ToggleButton from './ToggleButton';
export default function index({
  nextSlide,
  prevSlide,
  togglePlay,
  toggleFullScreen,
  eventHandler,
  delay,
}) {
  return (
    <div className={styles.controlPanel}>
      <button className={styles.slidePrevButton} onClick={() => prevSlide()}>
        prevSlide
      </button>
      <div className={styles.controlPlay}>
        <ToggleButton
          onClick={() => togglePlay()}
          firstIcon="play"
          secondIcon="pause"
        />
        <input
          type="number"
          min="1"
          onChange={(e) => eventHandler(e)}
          value={delay}
        />
      </div>
      <button className={styles.slideNextButton} onClick={() => nextSlide()}>
        nextSlide
      </button>
      <ToggleButton
        className={styles.fullscreenButton}
        onClick={() => toggleFullScreen()}
        firstIcon="minimize"
        secondIcon="maximize"
      />
    </div>
  );
}
