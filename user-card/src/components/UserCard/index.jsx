import style from './card.module.css';
const {
  userCard,
  headCard,
  userName,
  userLink,
  plus,
  bottomCard,
  infoSection,
} = style;

function UserCard({ data }) {
  const { name, link, tweets, following, followers, gender, photo } = data;

  return (
    <div className={userCard}>
      <UserHeadCard name={name} link={link} gender={gender} photo={photo} />
      <UserBottomCard
        tweets={tweets}
        following={following}
        followers={followers}
      />
    </div>
  );
}

function UserHeadCard({ name, link, photo, gender }) {
  return (
    <div
      className={headCard}
      style={{
        backgroundImage: `url(${photo}`,
      }}
    >
      <UserName name={name} />
      <UserLink link={link} />
      <UserPlus gender={gender} />
    </div>
  );
}

function UserName({ name }) {
  return <h2 className={userName}>{name}</h2>;
}

function UserLink({ link }) {
  return (
    <a className={userLink} href={link}>
      {link}
    </a>
  );
}

function UserPlus({ gender }) {
  const genderColor =
    gender === 'male' ? { color: 'lightblue' } : { color: 'pink' };

  return (
    <div className={plus} style={genderColor}>
      +
    </div>
  );
}

function UserBottomCard({ tweets, following, followers }) {
  return (
    <div className={bottomCard}>
      <UserCardStats nameStat="Tweets" stat={tweets} />
      <UserCardStats nameStat="Following" stat={following} />
      <UserCardStats nameStat="Followers" stat={followers} />
    </div>
  );
}

function UserCardStats({ nameStat, stat }) {
  return (
    <div className={infoSection}>
      <p>{nameStat}</p>
      <p>{stat}</p>
    </div>
  );
}

export default UserCard;
