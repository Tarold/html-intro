import React, { useState } from 'react';
import { connect } from 'react-redux';
import EditForm from '../../forms/EditForm';

import styles from './TaskItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteTask, updateTask } from '../../../store/slices/tasksSlice';

export const TaskItem = ({ updateTask, removeTask, item }) => {
  const [isEdit, setIsEdit] = useState(false);

  const toogleSetIsEdit = () => {
    setIsEdit(isEdit => !isEdit);
  };
  return (
    <li className={styles.task}>
      <input
        className={styles.checkbox}
        type='checkbox'
        checked={item.isDone}
        onChange={() => updateTask(item.id, { isDone: !item.isDone })}
      />
      {!isEdit && (
        <>
          <span className={styles.taskBody}>{item.body}</span>
          <span className={styles.taskDeadline}>{item.deadline}</span>
          <button className={styles.greenButton} onClick={toogleSetIsEdit}>
            <FontAwesomeIcon icon='pencil' size='2x' />
          </button>
          <button
            className={styles.redButton}
            onClick={() => removeTask(item.id)}
          >
            <FontAwesomeIcon icon='trash' size='2x' />
          </button>
        </>
      )}
      {isEdit && (
        <>
          <EditForm
            styles={styles}
            value={{ body: item.body, deadline: item.deadline }}
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
  updateTask: (id, values) => dispatch(updateTask({ id, values })),
  removeTask: id => dispatch(deleteTask(id)),
});

export default connect(null, mapDispatchToProps)(TaskItem);
