import { Component } from 'react';
import UserListItem from './UserListItem';
import './style.css';
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUsers: [],
    };
  }

  getData = () => {
    fetch(
      `https://randomuser.me/api/?results=10&exc=dob,location,email,phone,login,cell,id,nat&seed=0458a254c596df4b&noinfo`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ users: data.results }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getData();
  }

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

  deleteItem = (e) => {
    let userList = this.state.users;
    let list = this.state.selectedUsers;

    userList = userList.filter(function (value) {
      return value.name.first !== e;
    });
    if (list.includes(e)) {
      list = list.filter(function (value) {
        return value !== e;
      });
    }
    this.setState({
      users: userList,
      selectedUsers: list,
    });
  };

  mapUser = (u) => {
    const selected = this.state.selectedUsers.includes(u.name.first);
    const inlineStyle = {
      backgroundColor: selected
        ? u.gender === 'male'
          ? '#aebee485'
          : '#ffd3e385'
        : u.gender === 'male'
        ? '#aebee435'
        : '#ffd3e335',
    };
    return (
      <UserListItem
        key={u.name.first}
        photo={u.picture.medium}
        name={u.name}
        registered={u.registered}
        inlineStyle={inlineStyle}
        clickOnItem={this.selectUser}
        deleteItem={this.deleteItem}
      />
    );
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <div className="userList">{users.map(this.mapUser)} </div>
      </>
    );
  }
}

export default UserList;
