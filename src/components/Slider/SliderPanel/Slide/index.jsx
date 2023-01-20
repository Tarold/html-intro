import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

export default function Slide({ slideStyle, slideData }) {
  return (
    <div className={slideStyle}>
      <div className={styles.slideContainer}>
        <span className={styles.caption}>{slideData[1]}</span>
        <img alt="dogPhoto" className={styles.img} src={slideData[0]} />
      </div>
    </div>
  );
}

Slide.propTypes = {
  slideStyle: PropTypes.string,
  slideData: PropTypes.arrayOf(PropTypes.string),
};
