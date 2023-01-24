import classNames from 'classnames';
import { Field } from 'formik';
import React from 'react';
import styles from './Radio.module.scss';

export default function Input (props) {
  const { name, label, classes, caption, warning, ...restProps } = props;
  return (
    <Field name={name}>
      {({ field, meta }) => {
        const inputClassNames = classNames(classes.input, {
          [classes.valid]: !meta.error && meta.touched,
          [classes.invalid]: meta.error && meta.touched,
        });
        console.log(field, meta, restProps);
        return (
          <label className={styles.radio}>
            <input
              className={inputClassNames}
              name={name}
              checked={field.value === restProps.value}
              {...field}
              {...restProps}
            />
            <div className={styles.radioText}>
              <span className={styles.radioLabel}>{label} </span>
              <span className={styles.radioCaption}>{caption}</span>
            </div>

            {warning === false && meta.error && meta.touched && (
              <span className={classes.error}>{meta.error}</span>
            )}
          </label>
        );
      }}
    </Field>
  );
}
