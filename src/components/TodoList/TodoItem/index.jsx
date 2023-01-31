import React, { useState } from 'react';
import { toggleCompleted, removeTodo } from './../../../store/slices/todoSlice';
import { connect } from 'react-redux';
import EditForm from '../../forms/EditForm';
import styles from './TodoItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TodoItem = ({ toggleCompleted, removeTodo, ...props }) => {
  const { item, index } = props;
  const [isEdit, setIsEdit] = useState(false);

  const toogleSetIsEdit = () => {
    setIsEdit(isEdit => !isEdit);
  };
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        checked={item.completed}
        onChange={() => toggleCompleted(index)}
      />
      {!isEdit && (
        <>
          <span className={styles.todoTask}>{item.task}</span>
          <button className={styles.greenButton} onClick={toogleSetIsEdit}>
            <FontAwesomeIcon icon='pencil' size='2x' />
          </button>
          <button
            className={styles.redButton}
            onClick={() => removeTodo(index)}
          >
            <FontAwesomeIcon icon='trash' size='2x' />
          </button>
        </>
      )}
      {isEdit && (
        <>
          <EditForm
            styles={styles}
            task={item.task}
            index={index}
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
  toggleCompleted: index => dispatch(toggleCompleted(index)),
  removeTodo: index => dispatch(removeTodo(index)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
