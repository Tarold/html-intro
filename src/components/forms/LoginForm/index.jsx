import React from 'react';
import { Formik, Form } from 'formik';
import { LOGIN_SCHEMA } from '../../../utils/validate/validationSchemas.js';
import { Link } from 'react-router-dom';
import Input from '../Input';
import styles from './LoginForm.module.scss';

export default function LoginPage () {
  const userInitialValues = { email: '', password: '', rememberMe: false };

  const handleSubmit = (values, formikBag) => {
    console.log('values :>> ', values);
    formikBag.resetForm();
  };

  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
  };
  return (
    <Formik
      initialValues={userInitialValues}
      validationSchema={LOGIN_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => {
        return (
          <Form className={styles.form}>
            <Input
              label=''
              type='email'
              name='email'
              placeholder='Email address'
              autoFocus
              classes={classes}
            />
            <Input
              label=''
              type='password'
              name='password'
              placeholder='Password'
              autoComplete='on'
              classes={classes}
            />
            <div className={styles.oneLineDiv}>
              <Input
                label='Remember Me'
                type='checkbox'
                name='rememberMe'
                classes={classes}
                className={styles.checkbox}
              />
              <Link to='/forgot-password' className={styles.forgotPassword}>
                Forgot Password
              </Link>
            </div>
            <button
              type='submit'
              disabled={isSubmitting}
              className={styles.button}
            >
              LOGIN
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
