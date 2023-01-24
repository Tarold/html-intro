import React from 'react';
import { Formik, Form, Field } from 'formik';
import { LOGIN_SCHEMA } from './../../utils/validate/validationSchemas.js';
import styles from './LoginPage.module.scss';
import { Link } from 'react-router-dom';
import Input from './../../components/forms/Input';

export default function LoginPage () {
  const userInitialValues = { email: '', password: '' };

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
            <h2 className={styles.formTitle}>LOGIN TO YOUR ACCOUNT</h2>
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
              <label className={styles.checkbox}>
                <Field type='checkbox' name='rememberMe' />
                Remember Me
              </label>
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
