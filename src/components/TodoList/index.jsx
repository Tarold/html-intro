import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTodoses } from '../../store/slices/todosesSlice';
import TodoItem from './TodoItem';
import styles from './TodoList.module.scss';

export const TodoList = ({ todoses, get, isFetching, error }) => {
  useEffect(() => {
    get();
    // eslint-disable-next-line
  }, []);

  return (
    <ul className={styles.todoList}>
      {!error && todoses.map((item, index) => mapList(item, index))}
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

const mapList = item => <TodoItem item={item} key={item.id} />;

const mapStateToProps = ({ todosesData }) => todosesData;

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(getTodoses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
