import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import Input from '../Input';
import { createPurchase } from '../../../store/slices/purchasesSlice';
import { TODO_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas';
import styles from './../../../common/style/formStylesheet.module.scss';
import formStyles from './TodoForm.module.scss';

function TodoForm ({ createNewTodo }) {
  const initialValues = { value: '' };

  const handleSubmit = (values, formikBag) => {
    createNewTodo(values);
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
      validationSchema={TODO_VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
        <Input
          type='text'
          name='value'
          placeholder='Enter todo here'
          autoFocus
          classes={classes}
          className={formStyles.inputTodo}
        />
        <button className={formStyles.submitTodo} type='submit'>
          Submit
        </button>
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  createNewTodo: values => dispatch(createPurchase(values)),
});

export default connect(null, mapDispatchToProps)(TodoForm);
