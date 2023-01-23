import { Formik, Form } from 'formik';
import React from 'react';
import { CONTACT_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas';
import Input from '../Input';
import styles from './ContactForm.module.sass';
// Name, Tel, Email, Birthday

function ContactForm () {
  const initialValues = { name: '', phone: '', email: '', birthday: '' };

  const handleSubmit = (values, formikBag) => {
    console.log('Submit form with values:', values);
    formikBag.resetForm();
  };

  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
  };

  return (
    // initialValues onSubmit - обов'язкові пропи для Formik
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={CONTACT_VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
        <Input
          label='Name:'
          type='text'
          name='name'
          placeholder='Yourname'
          autoFocus
          classes={classes}
        />
        <Input
          label='Phone Number:'
          type='tel'
          name='phone'
          placeholder='+380111111111'
          classes={classes}
        />
        <Input
          label='Email:'
          type='email'
          name='email'
          placeholder='your@mail.com'
          classes={classes}
        />
        <Input
          label='Birthday:'
          type='date'
          name='birthday'
          classes={classes}
        />
        <button type='submit'>Save</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
