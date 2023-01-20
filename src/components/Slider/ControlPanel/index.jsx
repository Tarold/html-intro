import React from 'react';
import ToggleButton from './ToggleButton';
import Button from './Button';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

export default function ControlPanel({
  nextSlide,
  prevSlide,
  togglePlay,
  toggleFullScreen,
  eventHandler,
  isFlipThrough,
  delay,
}) {
  return (
    <div className={styles.controlPanel}>
      <Button
        className={styles.slidePrevButton}
        icon="arrow-left"
        disabled={isFlipThrough}
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
        disabled={isFlipThrough}
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
ControlPanel.propTypes = {
  nextSlide: PropTypes.func,
  prevSlide: PropTypes.func,
  togglePlay: PropTypes.func,
  toggleFullScreen: PropTypes.func,
  eventHandler: PropTypes.func,
  isFlipThroug: PropTypes.bool,
  delay: PropTypes.number,
};
