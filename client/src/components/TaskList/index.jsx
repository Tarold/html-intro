import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTasks } from '../../store/slices/tasksSlice';
import TaskItem from './TaskItem';
import styles from './TaskList.module.scss';

export const TaskList = ({ tasks, get, isFetching, error }) => {
  useEffect(() => {
    get(1);
    // eslint-disable-next-line
  }, []);

  return (
    <ul className={styles.taskList}>
      {!error && tasks.map((item, index) => mapList(item, index))}
      {isFetching && (
        <li className={styles.info}>
          <span>Loading...</span>
        </li>
      )}
      {error && (
        <li className={styles.info}>
          <span>!!!!ERROR!!!!</span>
        </li>
      )}
    </ul>
  );
};

const mapList = item => <TaskItem item={item} key={item.id} />;

const mapStateToProps = ({ tasksData }) => tasksData;

const mapDispatchToProps = dispatch => ({
  get: userId => dispatch(getTasks(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
