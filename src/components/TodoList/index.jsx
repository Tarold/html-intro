import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPurchases } from '../../store/slices/purchasesSlice';
import TodoItem from './TodoItem';
import styles from './TodoList.module.scss';

export const TodoList = ({ purchases: tasks, get, isFetching, error }) => {
  useEffect(() => {
    get();
  }, []);

  return (
    <ul className={styles.todoList}>
      {!error && tasks.map((item, index) => mapList(item, index))}
      {isFetching && <div>Loading...</div>}
      {error && <div>!!!!ERROR!!!!</div>}
    </ul>
  );
};

const mapList = item => <TodoItem item={item} key={item.id} />;

const mapStateToProps = ({ purchasesData }) => purchasesData;

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(getPurchases()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
