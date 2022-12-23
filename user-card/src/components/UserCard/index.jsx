import './card.css';

function UserCard() {
  return (
    <div className="userCard">
      <div className="headCard">
        <h2>Emma Watson</h2>
        <a href="@EmmaWatson">@Emma Watson</a>
      </div>
      <div className="bottomCard">
        <div className="infoSection">
          <p>Views</p>
          <p>1.1337</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
