import UserCard from './components/UserCard';
import './App.css';

function App() {
  const userData = {
    name: 'Emma Watson',
    tag: '@EmmaWatson',
    gender: 'female',
    tweets: 1337,
    following: 561,
    followers: 718,
    photo:
      'https://cdn.britannica.com/29/215029-050-84AA8F39/British-actress-Emma-Watson-2017.jpg',
  };

  return (
    <div className="App">
      <UserCard data={userData} />
    </div>
  );
}

export default App;
