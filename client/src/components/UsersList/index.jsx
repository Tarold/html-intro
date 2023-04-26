import { useEffect } from 'react';
import { connect } from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';
import styles from './UsersList.module.scss';
import defImage from './defaultPhoto.jpg';
import { deleteUserThunk, getUsersThunk } from '../../store/slices/usersSlice';

export const UsersList = ({ users, isFetching, error, get, remove }) => {
  useEffect(() => {
    get();
  }, []);

  return (
    <>
      <BeatLoader loading={isFetching} />
      {error && <div>!!!ERROR!!!</div>}
      <ul className={styles.userList}>
        {users.map(u => (
          <li key={u.id}>
            <img
              className={styles.userImage}
              src={u.image ? `http://localhost:5000/${u.image}` : defImage}
              alt={`${u.firstName} ${u.lastName}`}
            />
            <span>{u.id}</span>
            <span>{u.firstName}</span>
            <span>{u.lastName}</span>
            <span>{u.email}</span>
            <span>{u.birthday}</span>
            <span>{u.gender}</span>
            <a href={'/user/' + u.id}>Show Tasks</a>
            <button
              onClick={() => {
                remove(u.id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = ({ usersData }) => usersData;

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(getUsersThunk()),
  remove: id => dispatch(deleteUserThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
