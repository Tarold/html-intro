import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ToggleButton({
  className,
  onClick,
  firstIcon,
  secondIcon,
}) {
  const [isOn, setIsOn] = useState(false);
  const icon = isOn ? firstIcon : secondIcon;

  const toggleIsOn = (e) => {
    setIsOn((isOn) => !isOn);
    onClick(e);
  };

  return (
    <>
      <button className={className} onClick={toggleIsOn}>
        <FontAwesomeIcon icon={icon} />
      </button>
    </>
  );
}

ToggleButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  firstIcon: PropTypes.string,
  secondIcon: PropTypes.string,
};
