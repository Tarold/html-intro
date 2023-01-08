import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './LoginForm.module.css';
// state -> input
// state <- input
//        ^
//     onChange

const INITIAL_VALUES = { email: '', password: '' };

const LOGIN_FORM_REX_EXP = {
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*.].*).{8,20}$/,
};

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: INITIAL_VALUES.email,
      isEmailValid: false,
      password: INITIAL_VALUES.password,
      isPasswordValid: false,
    };
  }

  handleEmailChange = ({ target: { value } }) => {
    this.setState({
      email: value,
      isEmailValid: LOGIN_FORM_REX_EXP.email.test(value),
    });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      password: value,
      isPasswordValid: LOGIN_FORM_REX_EXP.password.test(value),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // send request
    this.setState(INITIAL_VALUES);
  };

  render() {
    const { email, password, isEmailValid, isPasswordValid } = this.state;

    const emailClassName = classNames(styles.input, {
      [styles.inputValid]: isEmailValid,
      [styles.inputInvalid]: !isEmailValid,
    });

    const passwordClassName = classNames(styles.input, {
      [styles.inputValid]: isPasswordValid,
      [styles.inputInvalid]: !isPasswordValid,
    });

    return (
      <div className={styles.formContainer}>
        <h1 className={styles.formHeader}>LoginForm</h1>
        <form className={styles.loginForm} onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            <span className={styles.inputName}>Email</span>
            <input
              className={emailClassName}
              type="email"
              name="email"
              placeholder="your@mail"
              value={email}
              onChange={this.handleEmailChange}
              autoFocus
            />
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>Password</span>
            <input
              className={passwordClassName}
              type="password"
              name="password"
              value={password}
              onChange={this.handlePasswordChange}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
