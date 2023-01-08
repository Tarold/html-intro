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
    const input = Object.assign({}, this.state.input);
    const valid = Object.assign({}, this.state.isValid);

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
    const isValid = Object.assign({}, this.state.isValid);

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
      alert('Sing Up');

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
    const isRoolsAgreeClassName = classNames(styles.ckeckbox, {
      [styles.checkboxValid]: isRoolsAgree,
      [styles.checkboxInvalid]: !isRoolsAgree,
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
        <h1 className={styles.siteHeader}>Sing Up #01</h1>
        <img
          className={styles.avatar}
          src="https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
          alt="avatar"
        />
        <h2 className={styles.formHeader}>Create your account</h2>
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
            <div className={styles.passwordSection}>
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
            </div>
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>Password confirmation</span>
            <div className={styles.passwordSection}>
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
            </div>
          </label>
          <label className={styles.checkboxLabel}>
            <input
              className={isRoolsAgreeClassName}
              type="checkbox"
              name="isRoolsAgree"
              checked={isRoolsAgree}
              onChange={this.handleChange}
            />
            <span className={styles.checkboxText}>
              I Agree All Statements in Terms of Service
            </span>
          </label>
          <button type="submit" className={styles.singUpButton}>
            SignUp
          </button>
          <span className={styles.singIn}>
            I`m already a member!
            <a
              href="https://youtu.be/dQw4w9WgXcQ"
              className={styles.singInLink}
            >
              Sing In
            </a>
          </span>
        </form>
      </div>
    );
  }
}

export default LoginForm;
