import React, { Component } from 'react';
import InputHead from './InputHead';
import Input from './Input';
import InputFood from './InputFoot';
import InputWarning from './InputWarning';
import styles from './SingUpForm.module.sass';

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
  isSecond: false,
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
      isSecond: Boolean(INITIAL_VALUES.isSecond),
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
        isSecond: Boolean(INITIAL_VALUES.isSecond),
      });
    } else {
      this.setState({ isSecond: true });
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

    return (
      <div className={styles.formContainer}>
        <InputHead
          img={
            'https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg'
          }
          title="Create your account"
        />
        <form className={styles.loginForm} onSubmit={this.handleSubmit}>
          <Input
            isValid={isNameValid}
            type="text"
            name="name"
            label="Name"
            value={name}
            placeholder="Name"
            onChange={this.handleChange}
          />
          {this.state.isSecond && !this.state.isValid.name && (
            <InputWarning text="Please enter a valid name" />
          )}
          <Input
            isValid={isEmailValid}
            type="email"
            name="email"
            label="Email"
            value={email}
            placeholder="your@email.com"
            onChange={this.handleChange}
          />
          {this.state.isSecond && !this.state.isValid.email && (
            <InputWarning text="Please enter a valid email" />
          )}
          <Input
            isValid={isPasswordValid}
            type="password"
            name="password"
            label="Password"
            value={password}
            showPass={showPass}
            toggleShowPass={() => {
              this.showPassword('password');
            }}
            placeholder="********"
            onChange={this.handleChange}
          />
          {this.state.isSecond && !this.state.isValid.password && (
            <InputWarning text="Please enter a valid password. Acceptable passwords are at least 8 characters long and contain at least one: capital letter, small letter, number, non-alphanumeric character." />
          )}
          <Input
            isValid={isPasswordConfirmValid}
            type="password"
            name="passwordConfirm"
            label="Password confirmation"
            value={passwordConfirm}
            showPass={showPassConf}
            toggleShowPass={() => {
              this.showPassword('passwordConfirm');
            }}
            placeholder="********"
            onChange={this.handleChange}
          />
          {this.state.isSecond && !this.state.isValid.passwordConfirm && (
            <InputWarning
              text="Please enter a valid password confirm. 
              Must be same as password"
            />
          )}
          <Input
            isValid={isRoolsAgree}
            type="checkbox"
            name="isRoolsAgree"
            label="I Agree All Statements in Terms of Service"
            checked={isRoolsAgree}
            onChange={this.handleChange}
          />
          {this.state.isSecond && !this.state.input.isRoolsAgree && (
            <InputWarning text="Please agree with All Statements in Terms of Service" />
          )}
          <button type="submit" className={styles.singUpButton}>
            SignUp
          </button>
          <InputFood />
        </form>
      </div>
    );
  }
}

export default LoginForm;
