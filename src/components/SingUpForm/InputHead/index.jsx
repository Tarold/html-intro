import styles from './style.module.sass';
import PropTypes from 'prop-types';

function InputHead({ img, title }) {
  return (
    <>
      <img className={styles.avatar} src={img} alt="avatar" />
      <h2 className={styles.formHeader}>{title}</h2>
    </>
  );
}

InputHead.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};

export default InputHead;
