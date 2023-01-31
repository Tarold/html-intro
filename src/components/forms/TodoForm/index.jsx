import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import Input from '../Input';
import { createTodo } from '../../../store/slices/todoSlice';
import { TODO_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas';
import styles from './TodoForm.module.scss';

function TodoForm ({ createNewTodo }) {
  const initialValues = { task: '' };

  const handleSubmit = (values, formikBag) => {
    createNewTodo(values);
    formikBag.resetForm();
  };

  const classes = {
    error: styles.error,
    input: styles.input,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={TODO_VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
        <Input
          type='text'
          name='task'
          placeholder='Enter todo here'
          autoFocus
          classes={classes}
        />
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  createNewTodo: v => dispatch(createTodo(v)), // => {payload: v}
});

export default connect(null, mapDispatchToProps)(TodoForm);
