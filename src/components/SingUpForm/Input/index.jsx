import styles from './style.module.sass';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ShowButton from './ShowButton';

function Input({
  isValid,
  type,
  name,
  value,
  label,
  placeholder,
  onChange,
  showPass,
  toggleShowPass,
  checked,
}) {
  const inputClassName =
    type !== 'checkbox'
      ? classNames(styles.input, {
          [styles.inputValid]: isValid,
          [styles.inputInvalid]: !isValid,
        })
      : classNames(styles.ckeckbox, {
          [styles.checkboxValid]: isValid,
          [styles.checkboxInvalid]: !isValid,
        });

  const inputType =
    type !== 'password'
      ? type
      : classNames({
          text: showPass,
          password: !showPass,
        });

  return (
    <label className={styles.label}>
      {type !== 'checkbox' && <span className={styles.inputName}>{label}</span>}
      <div className={styles.inputSection}>
        <input
          className={inputClassName}
          type={inputType}
          name={name}
          placeholder={placeholder}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        {type === 'password' && (
          <ShowButton
            className={styles.showButton}
            showPass={showPass}
            onClick={toggleShowPass}
          />
        )}
        {type === 'checkbox' && (
          <span className={styles.checkboxText}>{label}</span>
        )}
      </div>
    </label>
  );
}

Input.propTypes = {
  isValid: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'password', 'email', 'checkbox']),
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  toggleShowPass: PropTypes.func,
  showPass: PropTypes.bool,
  checked: PropTypes.bool,
};

export default Input;
