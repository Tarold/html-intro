import React from 'react';
import { Formik, Form } from 'formik';
import { SINGUP_SCHEMA } from '../../../utils/validate/validationSchemas.js';
import { Link } from 'react-router-dom';
import Input from '../Input';
import Radio from '../Radio';
import styles from './SingupForm.module.scss';

export default function SingupForm () {
  const userInitialValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    joinAs: '',
    allowSquadhelp: false,
  };

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
      validationSchema={SINGUP_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => {
        return (
          <Form className={styles.form}>
            <div className={styles.inputSection}>
              <Input
                type='text'
                name='firstName'
                placeholder='First name'
                autoFocus
                classes={classes}
              />
              <Input
                type='text'
                name='lastName'
                placeholder='Last name'
                classes={classes}
              />
              <Input
                type='text'
                name='displayName'
                placeholder='Display name'
                classes={classes}
              />
              <Input
                type='email'
                name='email'
                placeholder='Email address'
                classes={classes}
              />
              <Input
                type='password'
                name='password'
                placeholder='Password'
                autoComplete='on'
                classes={classes}
              />
              <Input
                type='password'
                name='passwordConfirm'
                placeholder='Password Confirmation'
                autoComplete='on'
                classes={classes}
              />
            </div>
            <Radio
              type='radio'
              id='radio1'
              name='joinAs'
              value='AsBuyer'
              label='Join As a Buyer'
              caption='I am looking for a Name, Logo or Tagline for my business, brand or product.'
              classes={classes}
            />
            <Radio
              type='radio'
              id='radio2'
              name='joinAs'
              value='AsSeller'
              label='Join As a Creative or Marketplace Seller'
              caption='I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.'
              warning={false}
              classes={classes}
            />
            <Input
              label='Allow Squadhelp to send marketing/promotional offers from time to time'
              type='checkbox'
              name='allowSquadhelp'
              className={styles.checkbox}
              classes={classes}
            />
            <button
              type='submit'
              disabled={isSubmitting}
              className={styles.button}
            >
              Create account
            </button>
            <span className={styles.temps}>
              By clicking this button, you agree to our
              <Link to='/Terms&Conditions'>Terms&Conditions</Link>
            </span>
          </Form>
        );
      }}
    </Formik>
  );
}
