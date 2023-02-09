import React, { useState } from 'react';
import { connect } from 'react-redux';
import EditForm from '../../forms/EditForm';
import styles from './TodoItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  deletePurchase,
  updatePurchase,
} from '../../../store/slices/purchasesSlice';

export const TodoItem = ({ updateTodo, removeTodo, item }) => {
  const [isEdit, setIsEdit] = useState(false);

  const toogleSetIsEdit = () => {
    setIsEdit(isEdit => !isEdit);
  };
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        checked={item.isDone}
        onChange={() => updateTodo(item.id, { isDone: !item.isDone })}
      />
      {!isEdit && (
        <>
          <span className={styles.todoTask}>{item.value}</span>
          <button className={styles.greenButton} onClick={toogleSetIsEdit}>
            <FontAwesomeIcon icon='pencil' size='2x' />
          </button>
          <button
            className={styles.redButton}
            onClick={() => removeTodo(item.id)}
          >
            <FontAwesomeIcon icon='trash' size='2x' />
          </button>
        </>
      )}
      {isEdit && (
        <>
          <EditForm
            styles={styles}
            value={item.value}
            id={item.id}
            closeEdit={toogleSetIsEdit}
            buttonStyle={styles.greenButton}
          />
          <button onClick={toogleSetIsEdit} className={styles.redButton}>
            <FontAwesomeIcon icon='xmark' size='2x' />
          </button>
        </>
      )}
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  updateTodo: (id, values) => dispatch(updatePurchase({ id, values })),
  removeTodo: id => dispatch(deletePurchase(id)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
