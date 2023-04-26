import React from 'react';
import TaskForm from '../../components/forms/TaskForm';
import TaskList from '../../components/TaskList';
import styles from './TaskPage.module.scss';

function TaskPage () {
  const userId = 1;
  return (
    <section className={styles.Task}>
      <h2 className={styles.titleTask}>Task</h2>
      <div className={styles.sectionBody}>
        <TaskForm userId={userId} />
        <TaskList userId={userId} />
      </div>
    </section>
  );
}

export default TaskPage;
