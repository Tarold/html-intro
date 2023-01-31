import classNames from 'classnames';
import { Field } from 'formik';
import React from 'react';
function Input (props) {
  const { name, label, classes, className, ...restProps } = props;
  return (
    <Field name={name}>
      {({
        field, // { name, value, onChange, onBlur }
        form: { errors, touched },
        meta,
      }) => {
        const inputClassNames = classNames(className, classes.input, {
          [classes.valid]: !meta.error && meta.touched,
          [classes.invalid]: meta.error && meta.touched,
        });
        restProps['data-hover'] = meta.error;
        return (
          <label>
            <input className={inputClassNames} {...restProps} {...field} />
          </label>
        );
      }}
    </Field>
  );
}

export default Input;
