import React, { useState } from 'react';
import { toggleCompleted, removeTodo } from './../../../store/slices/todoSlice';
import { connect } from 'react-redux';
import EditForm from '../../forms/EditForm';
import styles from './TodoItem.module.scss';

export const TodoItem = ({ toggleCompleted, removeTodo, ...props }) => {
  const { item, index } = props;
  const [isEdit, setIsEdit] = useState(false);

  const toogleSetIsEdit = () => {
    setIsEdit(isEdit => !isEdit);
  };
  return (
    <li className={styles.todo}>
      <input
        type='checkbox'
        checked={item.completed}
        onChange={() => toggleCompleted(index)}
      />
      {!isEdit && (
        <>
          <span>{item.task}</span>
          <button onClick={toogleSetIsEdit}>Edit</button>
          <button onClick={() => removeTodo(index)}>Remove</button>
        </>
      )}
      {isEdit && (
        <>
          <EditForm
            styles={styles}
            task={item.task}
            index={index}
            closeEdit={toogleSetIsEdit}
          />
          <button onClick={toogleSetIsEdit}>Cancel</button>
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
