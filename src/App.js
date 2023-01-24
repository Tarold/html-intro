import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SingupPage from './pages/SingupPage';
import NavElement from './components/forms/NavElement';
import styles from './App.module.scss';

function App () {
  return (
    <div className={styles.page}>
      <Router>
        <NavElement />
        <Switch>
          <Route exact path='/'>
            <h1>Home</h1>
          </Route>
          <Route path='/login' component={LoginPage} />
          <Route path='/singup' component={SingupPage} />
          <Route path='/forgot_password'>
            <h1>Reset Password</h1>
          </Route>
          <Route path='/Terms&Conditions'>
            <h1>/Terms&Conditions</h1>
          </Route>
          <Route path='*'>
            <h1>Error 404</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
