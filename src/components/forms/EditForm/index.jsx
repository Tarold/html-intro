import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import Input from '../Input';
import { editTodo } from '../../../store/slices/todoSlice';
import { TODO_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas';
import styles from './../../../common/style/formStylesheet.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TodoForm ({ editTodo, task, index, closeEdit, buttonStyle }) {
  const initialValues = { task: task };

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
        <button type='submit' className={buttonStyle}>
          <FontAwesomeIcon icon='check' size='2x' />
        </button>
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  editTodo: v => dispatch(editTodo(v)),
});

export default connect(null, mapDispatchToProps)(TodoForm);
