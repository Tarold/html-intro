import React, { useState } from 'react';
import { toggleCompleted, removeTodo } from './../../store/slices/todoSlice';
import { connect } from 'react-redux';

export const TodoList = ({ tasks, toggleCompleted, removeTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const eventHandler = index => {
    toggleCompleted(index);
  };

  const toogleSetIsEdit = () => {
    setIsEdit(isEdit => !isEdit);
  };
  const editDone = () => {
    toogleSetIsEdit();
  };
  const editCancel = () => {
    toogleSetIsEdit();
  };
  const mapList = (item, index) => {
    return (
      <div key={item.key}>
        <input
          type='checkbox'
          checked={item.completed}
          onChange={() => eventHandler(index)}
        />
        {!isEdit && (
          <>
            <span>{item.text}</span>
            <button onClick={toogleSetIsEdit}>Edit</button>
            <button onClick={() => removeTodo(index)}>Remove</button>
          </>
        )}
        {isEdit && (
          <>
            <input type='text' value={item.text} />
            <button onClick={editDone}>Done</button>
            <button onClick={editCancel}>Cancel</button>
          </>
        )}
      </div>
    );
  };
  return <div>{tasks.map(mapList)}</div>;
};

const mapStateToProps = state => state.todo;

const mapDispatchToProps = dispatch => ({
  toggleCompleted: index => dispatch(toggleCompleted(index)),
  removeTodo: index => dispatch(removeTodo(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
