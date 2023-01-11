import { Component } from 'react';
import getUsers from '../../api';
import UserList from './UserList';
import HeaderList from './HeaderList';
import styles from './UsersLoader.module.scss';

//TODO додати стилі sass
class UsersLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isFetching: false,
      error: null,
      currentPage: 1,
      userCount: 5,
    };
  }

  loadUsers = () => {
    const { currentPage, userCount } = this.state;

    this.setState({ isFetching: true });
    getUsers({
      page: currentPage,
      results: userCount,
      inc: ['name', 'gender', 'picture', 'registered'], //Реалізувати можливість вибору, які саме дані треба запитати з сервера (наприклад, чи треба підвантажити phone, location).
    })
      .then((data) => this.setState({ users: data.results }))
      .catch((e) => this.setState({ error: e }))
      .finally(() => this.setState({ isFetching: false }));
  };

  componentDidMount() {
    this.loadUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;

    if (currentPage !== prevState.currentPage) {
      this.loadUsers();
    }
  }

  prevPage = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState({ currentPage: currentPage - 1 });
    }
  };

  nextPage = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage + 1 });
  };

  eventHandler = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  render() {
    const { users, isFetching, error, userCount, currentPage } = this.state;

    return (
      <>
        <HeaderList
          prevPage={this.prevPage}
          currentPage={currentPage}
          nextPage={this.nextPage}
          userCount={userCount}
          eventHandler={this.eventHandler}
          loadUsers={this.loadUsers}
        />
        <div className={styles.userList}>
          {error && <div>!!!ERROR!!! {JSON.stringify(error)}</div>}
          {isFetching && <div>Loading. Please waite...</div>}
          {!error && !isFetching && (
            <>
              <UserList users={users} />
            </>
          )}
        </div>
      </>
    );
  }
}

export default UsersLoader;
