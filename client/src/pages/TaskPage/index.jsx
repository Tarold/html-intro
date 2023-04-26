import React from 'react';
import TaskForm from '../../components/forms/TaskForm';
import TaskList from '../../components/TaskList';
import styles from './TaskPage.module.scss';

function ContactPage () {
  return (
    <section className={styles.Task}>
      <h2 className={styles.titleTask}>Task</h2>
      <div className={styles.sectionBody}>
        <TaskForm />
        <TaskList />
      </div>
    </section>
  );
}

export default ContactPage;
