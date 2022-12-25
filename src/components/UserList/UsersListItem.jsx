function UsersListItem(props) {
  const {
    selectUser,
    user: { id, isSelected, firstName, lastName },
  } = props;

  const inlineStyle = {
    backgroundColor: isSelected ? 'yellow' : 'transparent',
  };

  return (
    <li style={inlineStyle} onClick={() => selectUser(id)}>
      {firstName} {lastName}
    </li>
  );
}

export default UsersListItem;
