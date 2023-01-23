import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SingupPage from './pages/SingupPage';
//import ContactPage from './pages/ContactPage';

function App () {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>login</Link>
        <Link to='/singup'>singup</Link>
      </nav>
      <Switch>
        <Route exact path='/'>
          <h1>Home</h1>
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/singup'>
          <SingupPage />
        </Route>
        <Route path='*'>
          <h1>Error 404</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
