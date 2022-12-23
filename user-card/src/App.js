import UserCard from './components/UserCard';
import './components/reset.css';
import './App.css';

function App() {
  const userData = [
    {
      name: 'Emma Watson',
      link: '@EmWatson',
      gender: 'female',
      tweets: 1337,
      following: 561,
      followers: 718,
      photo:
        'https://i.pinimg.com/564x/0f/09/3c/0f093cd8a02455686db481ff8b138c4c.jpg',
    },
    {
      name: 'Daniel Radcliffetson',
      link: '@DanRad',
      gender: 'male',
      tweets: 900,
      following: 301,
      followers: 1218,
      photo:
        'https://i.pinimg.com/564x/0d/b2/ed/0db2ed4cb8e8415d3de3a678d04bbeac.jpg',
    },
  ];

  return (
    <div className="App">
      <div className="UserList">
        <UserCard data={userData[0]} />
        <UserCard data={userData[1]} />
      </div>
    </div>
  );
}

export default App;
