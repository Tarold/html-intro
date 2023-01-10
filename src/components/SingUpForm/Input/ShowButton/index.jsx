import PropTypes from 'prop-types';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function showButton({ className, showPass, onClick }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {showPass && <AiOutlineEyeInvisible />}
      {!showPass && <AiOutlineEye />}
    </button>
  );
}

showButton.propTypes = {
  className: PropTypes.string,
  showPass: PropTypes.bool,
  onClick: PropTypes.func,
};

export default showButton;
