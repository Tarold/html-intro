import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import React from 'react';

const USER_VALIDATION_SCHEME = yup.object({
  firstName: yup.string().trim().min(2).max(64).required(),
});

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
        <form
          onSubmit={formikProps.handleSubmit}
          onReset={formikProps.handleReset}
        >
          <input
            type="text"
            name="firstName"
            value={formikProps.values.firstName}
            onChange={formikProps.handleChange}
            placeholder="name"
          />
          {formikProps.errors.firstName && (
            <div>{formikProps.errors.firstName}</div>
          )}
          <button type="submit">Save</button>
          <button type="reset" disabled={!formikProps.dirty}>
            Cancel
          </button>
        </form>
      )}
    </Formik>
  );
}
