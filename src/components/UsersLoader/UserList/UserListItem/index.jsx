import { BsFillTrashFill } from 'react-icons/bs';
import classNames from 'classnames';
import styles from './UserListItem.module.scss';

const UserListItem = (props) => {
  const { name, registered, photo, clickOnItem, deleteItem, selected, gender } =
    props;
  const userImg = classNames(styles.userImg, [styles[gender]]);
  const userCard = classNames(styles.user, { [styles.selected]: selected });

  return (
    <li className={userCard} onClick={() => clickOnItem(name.first)}>
      <img className={userImg} src={photo} alt="AvatarUser" />
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
