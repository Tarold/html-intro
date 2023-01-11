import { Component } from 'react';
import UserListItem from './UserListItem';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [...props.users],
      selectedUsers: [],
    };
  }

  componentDidMount() {}

  selectUser = (u) => {
    let list = this.state.selectedUsers;
    if (list.includes(u)) {
      list = list.filter(function (value) {
        return value !== u;
      });
    } else {
      list.push(u);
    }

    this.setState({ selectedUsers: list });
  };

  deleteItem = (e, u) => {
    e.stopPropagation();
    let userList = this.state.users;
    let list = this.state.selectedUsers;

    userList = userList.filter(function (value) {
      return value.name.first !== u;
    });
    if (list.includes(u)) {
      list = list.filter(function (value) {
        return value !== u;
      });
    }
    this.setState({
      users: userList,
      selectedUsers: list,
    });
  };

  mapUser = (u) => {
    const selected = this.state.selectedUsers.includes(u.name.first);

    return (
      <UserListItem
        key={u.name.first}
        photo={u.picture.medium}
        name={u.name}
        gender={u.gender}
        registered={u.registered}
        selected={selected}
        clickOnItem={this.selectUser}
        deleteItem={this.deleteItem}
      />
    );
  };

  render() {
    const { users } = this.state;
    return <>{users !== undefined && users.map(this.mapUser)}</>;
  }
}

export default UserList;
