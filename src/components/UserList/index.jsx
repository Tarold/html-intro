import { Component } from 'react';
import UsersListItem from './UsersListItem';

// Списки і ключі
// 1 Реакт вміє рендерити масиви
// 2 Кожен елемент, що повторюється, повинен мати проп key
//   (унікальний і однозначний для кожного елементу масиву, найчастіше id)

const usersData = [
  { id: 1, firstName: 'Test', lastName: 'Testovich' },
  { id: 2, firstName: 'John', lastName: 'Dou' },
  { id: 3, firstName: 'Jane', lastName: 'Dou' },
];

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersData.map((u) => ({ ...u, isSelected: false })),
    };
  }

  selectUser = (id) => {
    const { users } = this.state;
    const foundIndex = users.findIndex((u) => u.id === id);

    const newUsers = [...users];
    newUsers[foundIndex] = {
      ...newUsers[foundIndex],
      isSelected: !newUsers[foundIndex].isSelected,
    };

    this.setState({ users: newUsers });
  };

  mapUser = (u) => {
    return <UsersListItem key={u.id} user={u} selectUser={this.selectUser} />;
  };

  render() {
    const { users } = this.state;

    return <ul>{users.map(this.mapUser)}</ul>;
  }
}

export default UsersList;
