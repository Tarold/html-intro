import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { USER_VALIDATION_SCHEME } from '../../utils/validate/validationSchemas';

export default function UserInfoForm() {
  const userInitialValues = { firstName: '' };

  const handleSubmit = (value, formikBag) => {
    console.log('value', value);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={userInitialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_VALIDATION_SCHEME}
    >
      {(formikProps) => (
        <Form>
          <label>
            <span>Name:</span>
            <Field type="text" name="firstName" placeholder="name" />
            <ErrorMessage name="firstName" component="span" />
          </label>
          <button type="submit">Save</button>
          <button type="reset" disabled={!formikProps.dirty}>
            Cancel
          </button>
        </Form>
      )}
    </Formik>
  );
}
