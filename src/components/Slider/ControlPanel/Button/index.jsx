import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ToggleButton({ className, onClick, icon }) {
  return (
    <>
      <button className={className} onClick={onClick}>
        <FontAwesomeIcon icon={icon} />
      </button>
    </>
  );
}
