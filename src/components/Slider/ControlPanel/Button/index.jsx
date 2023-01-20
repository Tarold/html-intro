import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CustomButton({ className, onClick, disabled, icon }) {
  return (
    <>
      <button className={className} onClick={onClick} disabled={disabled}>
        <FontAwesomeIcon icon={icon} />
      </button>
    </>
  );
}

CustomButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
};
