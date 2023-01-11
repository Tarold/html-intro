import React from 'react';
import styles from './HeaderList.module.scss';

export default function index({
  prevPage,
  currentPage,
  nextPage,
  userCount,
  eventHandler,
  loadUsers,
}) {
  return (
    <div className={styles.headSection}>
      <div className={styles.numberUsers}>
        <label>
          number of users:{' '}
          <input
            type="number"
            name="userCount"
            min="1"
            max="20"
            value={userCount}
            onChange={eventHandler}
          />
        </label>
        <button onClick={loadUsers} className={styles.updateButton}>
          Update
        </button>
      </div>
      <div className={styles.pageButtons}>
        <button onClick={prevPage} className={styles.pageButton}>
          {'<'}
        </button>
        <span>{currentPage}</span>
        <button onClick={nextPage} className={styles.pageButton}>
          {'>'}
        </button>
      </div>
    </div>
  );
}
