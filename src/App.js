import { Component } from 'react';
import UserList from './components/UserList';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);
  }
  render() {
    return (
      <>
        <UserList />
      </>
    );
  }
}

export default App;

// new Counter().render();
