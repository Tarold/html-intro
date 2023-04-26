import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import Input from '../Input';
import { updateTask } from '../../../store/slices/tasksSlice';
import { TASK_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas';
import styles from './../../../common/style/formStylesheet.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePickerField from '../DatePicker';

function TaskForm ({ updateTask, value, id, closeEdit, buttonStyle }) {
  const initialValues = value;
  console.log('initialValues :>> ', initialValues);
  const handleSubmit = (values, formikBag) => {
    updateTask(id, { ...values });
    formikBag.resetForm();
    closeEdit();
  };

  const classes = {
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={TASK_VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
        <Input
          type='text'
          name='body'
          placeholder='Enter task here'
          autoFocus
          classes={classes}
        />
        <DatePickerField name='deadline' />
        <button type='submit' className={buttonStyle}>
          <FontAwesomeIcon icon='check' size='2x' />
        </button>
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  updateTask: (id, values) => dispatch(updateTask({ id, values })),
});

export default connect(null, mapDispatchToProps)(TaskForm);
