import classNames from 'classnames';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import { CONTACT_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas';
import styles from './ContactForm.module.sass';
// Name, Tel, Email, Birthday

function ContactForm() {
  const initialValues = { name: '', phone: '', email: '', birthday: '' };

  const handleSubmit = (values, formikBag) => {
    console.log('Submit form with values:', values);
    formikBag.resetForm();
  };

  return (
    // initialValues onSubmit - обов'язкові пропи для Formik
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={CONTACT_VALIDATION_SCHEMA}
    >
      {(formikProps) => {
        const nameClassNames = classNames(styles.input, {
          [styles.valid]: !formikProps.errors.name && formikProps.touched.name,
          [styles.invalid]: formikProps.errors.name && formikProps.touched.name,
        });

        const phoneClassNames = classNames(styles.input, {
          [styles.valid]:
            !formikProps.errors.phone && formikProps.touched.phone,
          [styles.invalid]:
            formikProps.errors.phone && formikProps.touched.phone,
        });

        // other Fiels classes

        return (
          <Form className={styles.form}>
            <label>
              <span>Name: </span>
              <Field
                className={nameClassNames}
                type="text"
                name="name"
                placeholder="Yourname"
                autoFocus
              />
              <ErrorMessage
                className={styles.error}
                name="name"
                component="span"
              />
            </label>
            <label>
              <span>Phone Number:</span>
              <Field
                className={phoneClassNames}
                type="tel"
                name="phone"
                placeholder="+380111111111"
              />
              <ErrorMessage
                className={styles.error}
                name="phone"
                component="span"
              />
            </label>
            <label>
              <span>Email:</span>
              <Field type="email" name="email" placeholder="your@mail.com" />
              <ErrorMessage
                className={styles.error}
                name="email"
                component="span"
              />
            </label>
            <label>
              <span>Birthday</span>
              <Field type="date" name="birthday" />
              <ErrorMessage
                className={styles.error}
                name="birthday"
                component="span"
              />
            </label>
            <button type="submit">Save</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ContactForm;
