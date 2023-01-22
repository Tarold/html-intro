import { Formik, Form } from 'formik';
import React from 'react';
import { CONTACT_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas';

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
        return <Form></Form>;
      }}
    </Formik>
  );
}

export default ContactForm;
