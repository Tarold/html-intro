import styles from './style.module.sass';
import PropTypes from 'prop-types';

function InputWarning({ text }) {
  return <span className={styles.warning}>{text}</span>;
}

InputWarning.default = {
  text: 'Please enter value',
};

InputWarning.propTypes = {
  text: PropTypes.string,
};

export default InputWarning;
