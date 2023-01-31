import { Field } from 'formik';
import React from 'react';

function Input (props) {
  const { name, classes, ...restProps } = props;
  return (
    <Field name={name}>
      {({
        field, // { name, value, onChange, onBlur }
        form: { errors, touched },
        meta,
      }) => {
        return (
          <label>
            <input className={classes.input} {...restProps} {...field} />

            {meta.error && meta.touched && (
              <span className={classes.error} data-hover={meta.error}>
                warning
              </span>
            )}
          </label>
        );
      }}
    </Field>
  );
}

export default Input;
