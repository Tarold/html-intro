import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import styles from './TodoList.module.scss';

export const TodoList = ({ tasks }) => {
  return (
    <ul className={styles.todoList}>
      {tasks.map((item, index) => mapList(item, index))}
    </ul>
  );
};

const mapList = (item, index) => (
  <TodoItem item={item} index={index} key={item.key} />
);

const mapStateToProps = state => state.todo;

export default connect(mapStateToProps)(TodoList);
