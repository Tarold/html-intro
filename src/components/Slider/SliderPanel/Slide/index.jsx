import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

export default function Slide({ slideStyle, slideData }) {
  return (
    <div className={slideStyle}>
      <img className={styles.img} src={slideData[0]} alt="photo" />
      <span>{slideData[1]}</span>
    </div>
  );
}
