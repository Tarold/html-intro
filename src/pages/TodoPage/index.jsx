import React from 'react';
import TodoForm from '../../components/forms/TodoForm';
import TodoList from '../../components/TodoList';

function ContactPage () {
  return (
    <section>
      <h2>Todos</h2>
      <TodoForm />
      <TodoList />
    </section>
  );
}

export default ContactPage;
