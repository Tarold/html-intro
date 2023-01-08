import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './SingUpForm.module.css';
import { AiOutlineEye } from 'react-icons/ai';

const INITIAL_VALUES = {
  input: {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    isRoolsAgree: false,
  },
  isValid: {
    name: false,
    email: false,
    password: false,
    passwordConfirm: false,
  },
  showPassword: { password: false, passwordConfirm: false },
};

const LOGIN_FORM_REX_EXP = {
  name: /\w{1,}/,
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*.].*).{8,20}$/,
};

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: { ...INITIAL_VALUES.input },
      isValid: { ...INITIAL_VALUES.isValid },
      showPassword: { ...INITIAL_VALUES.showPassword },
    };
  }

  handleChange = ({ target: { value, name, checked } }) => {
    const input = this.state.input;
    const valid = this.state.isValid;

    input[name] = name === 'isRoolsAgree' ? checked : value;

    if (name === 'passwordConfirm') {
      valid[name] = LOGIN_FORM_REX_EXP['password'].test(value);
      valid[name] = valid[name] && value === this.state.input.password;
    } else if (name !== 'isRoolsAgree') {
      valid[name] = LOGIN_FORM_REX_EXP[name].test(value);
    }

    this.setState({
      input: input,
      isValid: valid,
    });
  };

  readyCheck = () => {
    const isValid = this.state.isValid;

    if (String(this.state.input.isRoolsAgree) === 'false') {
      return false;
    }

    for (const key in isValid) {
      if (!isValid[key]) {
        return false;
      }
    }
    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.readyCheck()) {
      // send request

      this.setState({
        input: { ...INITIAL_VALUES.input },
        isValid: { ...INITIAL_VALUES.isValid },
        showPassword: { ...INITIAL_VALUES.showPassword },
      });
    } else {
      alert('Not all inputs feel');
    }
  };

  showPassword = (i) => {
    const password = this.state.showPassword;
    password[i] = !password[i];

    this.setState({
      showPassword: password,
    });
  };

  render() {
    const {
      input: { name, email, password, passwordConfirm, isRoolsAgree },
      isValid: {
        name: isNameValid,
        email: isEmailValid,
        password: isPasswordValid,
        passwordConfirm: isPasswordConfirmValid,
      },
      showPassword: { password: showPass, passwordConfirm: showPassConf },
    } = this.state;

    const nameClassName = classNames(styles.input, {
      [styles.inputValid]: isNameValid,
      [styles.inputInvalid]: !isNameValid,
    });

    const emailClassName = classNames(styles.input, {
      [styles.inputValid]: isEmailValid,
      [styles.inputInvalid]: !isEmailValid,
    });

    const passwordClassName = classNames(styles.input, {
      [styles.inputValid]: isPasswordValid,
      [styles.inputInvalid]: !isPasswordValid,
    });
    const passwordConfirmClassName = classNames(styles.input, {
      [styles.inputValid]: isPasswordConfirmValid,
      [styles.inputInvalid]: !isPasswordConfirmValid,
    });
    const isRoolsAgreeClassName = classNames(styles.input, {
      [styles.inputValid]: isRoolsAgree,
      [styles.inputInvalid]: !isRoolsAgree,
    });

    const passwordType = classNames({
      text: showPass,
      password: !showPass,
    });
    const passwordConfirmType = classNames({
      text: showPassConf,
      password: !showPassConf,
    });

    return (
      <div className={styles.formContainer}>
        <h1 className={styles.formHeader}>LoginForm</h1>
        <form className={styles.loginForm} onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            <span className={styles.inputName}>Name</span>
            <input
              className={nameClassName}
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              autoFocus
            />
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>Email</span>
            <input
              className={emailClassName}
              type="email"
              name="email"
              placeholder="your@mail"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>Password</span>
            <input
              className={passwordClassName}
              type={passwordType}
              name="password"
              placeholder="********"
              value={password}
              onChange={this.handleChange}
            />
            <button
              type="button"
              className={styles.showButton}
              onClick={() => {
                this.showPassword('password');
              }}
            >
              <AiOutlineEye />
            </button>
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>Password confirmation</span>
            <input
              className={passwordConfirmClassName}
              type={passwordConfirmType}
              name="passwordConfirm"
              placeholder="********"
              value={passwordConfirm}
              onChange={this.handleChange}
            />
            <button
              type="button"
              className={styles.showButton}
              onClick={() => {
                this.showPassword('passwordConfirm');
              }}
            >
              <AiOutlineEye />
            </button>
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>I agree with rools</span>
            <input
              className={isRoolsAgreeClassName}
              type="checkbox"
              name="isRoolsAgree"
              checked={isRoolsAgree}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">SignUp</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
