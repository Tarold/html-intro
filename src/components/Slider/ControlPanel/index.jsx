import React from 'react';
import styles from './style.module.scss';
import ToggleButton from './ToggleButton';
import Button from './Button';

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
      <Button
        className={styles.slidePrevButton}
        icon="arrow-left"
        onClick={() => prevSlide()}
      />
      <div className={styles.controlPlay}>
        <ToggleButton
          onClick={() => togglePlay()}
          firstIcon="play"
          secondIcon="pause"
        />
        <input
          type="number"
          min="1"
          max="60"
          onChange={(e) => eventHandler(e)}
          value={delay}
        />
      </div>
      <Button
        className={styles.slideNextButton}
        icon="arrow-right"
        onClick={() => nextSlide()}
      />
      <ToggleButton
        className={styles.fullscreenButton}
        onClick={() => toggleFullScreen()}
        firstIcon="minimize"
        secondIcon="maximize"
      />
    </div>
  );
}
