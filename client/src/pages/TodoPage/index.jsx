import React from 'react';
import TodoForm from '../../components/forms/TodoForm';
import TodoList from '../../components/TodoList';
import styles from './TodoPage.module.scss';

function ContactPage () {
  return (
    <section className={styles.Todos}>
      <h2 className={styles.titleTodos}>Todos</h2>
      <div className={styles.sectionBody}>
        <TodoForm />
        <TodoList />
      </div>
    </section>
  );
}

export default ContactPage;
