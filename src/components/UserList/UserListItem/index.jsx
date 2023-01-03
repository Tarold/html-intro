import styles from './style.module.css';
import { BsFillTrashFill } from 'react-icons/bs';

const UserListItem = (props) => {
  const { name, registered, photo, inlineStyle, clickOnItem, deleteItem } =
    props;

  return (
    <li
      className={styles.user}
      style={inlineStyle}
      onClick={() => clickOnItem(name.first)}
    >
      <img className={styles.userImg} src={photo} alt="AvatarUser" />
      <div className={styles.userContent}>
        <p className={styles.userName}>
          {name.title} {name.first} {name.last}
        </p>
        <p className={styles.userAgeOnForum}>Years on site: {registered.age}</p>
      </div>
      <button
        className={styles.deleteButton}
        onClick={(e) => deleteItem(e, name.first)}
      >
        <BsFillTrashFill />
      </button>
    </li>
  );
};

export default UserListItem;
