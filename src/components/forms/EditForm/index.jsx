import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import Input from '../Input';
import { updateTodos } from '../../../store/slices/todosesSlice';
import { TODO_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas';
import styles from './../../../common/style/formStylesheet.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TodoForm ({ updateTodo, value, id, closeEdit, buttonStyle }) {
  const initialValues = { value: value };

  const handleSubmit = (values, formikBag) => {
    updateTodo(id, { ...values });
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
          name='value'
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
  updateTodo: (id, values) => dispatch(updateTodos({ id, values })),
});

export default connect(null, mapDispatchToProps)(TodoForm);
