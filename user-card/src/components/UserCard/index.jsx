import styles from './card.module.css';

function UserCard({ data }) {
  const { name, tag, tweets, following, followers, gender, photo } = data;

  return (
    <div className={styles.userCard}>
      <UserHeadCard name={name} tag={tag} gender={gender} photo={photo} />
      <UserBottomCard
        tweets={tweets}
        following={following}
        followers={followers}
      />
    </div>
  );
}

function UserHeadCard({ name, tag, gender, photo }) {
  const genderColor =
    gender === 'male' ? { color: 'lightblue' } : { color: 'pink' };

  return (
    <div
      className={styles.headCard}
      style={{
        backgroundImage: `url(${photo}`,
      }}
    >
      <h2 className={styles.userName}>{name}</h2>
      <a className={styles.userLink} href={tag}>
        {tag}
      </a>
      <div className={styles.plus} style={genderColor}>
        +
      </div>
    </div>
  );
}

function UserBottomCard({ tweets, following, followers }) {
  return (
    <div className={styles.bottomCard}>
      <UserCardStats nameStat="Tweets" stat={tweets} />
      <UserCardStats nameStat="Following" stat={following} />
      <UserCardStats nameStat="Followers" stat={followers} />
    </div>
  );
}

function UserCardStats({ nameStat, stat }) {
  return (
    <div className={styles.infoSection}>
      <p>{nameStat}</p>
      <p>{stat}</p>
    </div>
  );
}

export default UserCard;
