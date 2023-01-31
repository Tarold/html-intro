import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import Input from '../Input';
import { editTodo } from '../../../store/slices/todoSlice';
import { TODO_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas';

function TodoForm ({ editTodo, styles, task, index, closeEdit }) {
  const initialValues = { task: task };
  debugger;
  const handleSubmit = (values, formikBag) => {
    editTodo({ index: index, todo: values });
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
  editTodo: v => dispatch(editTodo(v)),
});

export default connect(null, mapDispatchToProps)(TodoForm);
