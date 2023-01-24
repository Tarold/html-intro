import classNames from 'classnames';
import { Field } from 'formik';
import React from 'react';

export default function Input (props) {
  const { name, label, classes, className, ...restProps } = props;

  return (
    <Field name={name}>
      {({ field, meta }) => {
        const inputClassNames = classNames(classes.input, {
          [classes.valid]: !meta.error && meta.touched,
          [classes.invalid]: meta.error && meta.touched,
        });
        return (
          <label className={!!className ? className : ''}>
            <input
              className={inputClassNames}
              checked={field.value}
              {...restProps}
              {...field}
            />
            <span>{label} </span>

            {meta.error && meta.touched && (
              <span className={classes.error}>{meta.error}</span>
            )}
          </label>
        );
      }}
    </Field>
  );
}
