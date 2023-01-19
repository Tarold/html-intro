import React from 'react';
import styles from './style.module.scss';

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
        <button onClick={() => togglePlay()}>togglePlay</button>
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
      <button
        className={styles.fullscreenButton}
        onClick={() => toggleFullScreen()}
      >
        toggleFullScreen
      </button>
    </div>
  );
}
