import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LOGIN_SCHEMA } from './../../utils/validate/validationSchemas.js';
import styles from './LoginPage.module.scss';

export default function index () {
  const userInitialValues = { email: '', password: '' };

  const handleSubmit = (values, formikBag) => {
    console.log('values :>> ', values);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={userInitialValues}
      validationSchema={LOGIN_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.Form}>
          <h2>LOGIN TO YOUR ACCOUNT</h2>
          <Field type='email' name='email' placeholder='Email address' />
          <ErrorMessage name='email' component='div' />
          <Field type='password' name='password' placeholder='Password' />
          <ErrorMessage name='password' component='div' />
          <button type='submit' disabled={isSubmitting}>
            LOGIN
          </button>
        </Form>
      )}
    </Formik>
  );
}
