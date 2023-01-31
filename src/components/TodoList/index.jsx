import React, { useState } from 'react';
import { toggleCompleted, removeTodo } from './../../store/slices/todoSlice';
import { connect } from 'react-redux';
import EditForm from '../forms/EditForm';
import styles from './TodoList.module.scss';

export const TodoList = ({ tasks, toggleCompleted, removeTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const eventHandler = index => {
    toggleCompleted(index);
  };

  const toogleSetIsEdit = () => {
    setIsEdit(isEdit => !isEdit);
  };
  const mapList = (item, index) => {
    return (
      <li key={item.key} className={styles.todo}>
        <input
          type='checkbox'
          checked={item.completed}
          onChange={() => eventHandler(index)}
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
  return <ul>{tasks.map(mapList)}</ul>;
};

const mapStateToProps = state => state.todo;

const mapDispatchToProps = dispatch => ({
  toggleCompleted: index => dispatch(toggleCompleted(index)),
  removeTodo: index => dispatch(removeTodo(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
