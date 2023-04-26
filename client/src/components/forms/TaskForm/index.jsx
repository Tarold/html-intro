import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import Input from '../Input';
import { createTask } from '../../../store/slices/tasksSlice';
import { TASK_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas';
import styles from './../../../common/style/formStylesheet.module.scss';
import formStyles from './TaskForm.module.scss';
import DatePickerField from '../DatePicker';

function TaskForm ({ createNewTask, userId }) {
  const initialValues = { body: '', deadline: '' };

  const handleSubmit = (values, formikBag) => {
    values.userId = userId;
    createNewTask(values);
    formikBag.resetForm();
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
          className={formStyles.inputTask}
        />
        <DatePickerField name='deadline' />
        <button className={formStyles.submitTask} type='submit'>
          Submit
        </button>
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  createNewTask: values => dispatch(createTask(values)),
});

export default connect(null, mapDispatchToProps)(TaskForm);
