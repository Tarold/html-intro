import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

//Додати Components, Contacts
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/components">Components</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/Components">
          <Components />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

function Home() {
  return <div>Home</div>;
}

function Components() {
  return <div>Components</div>;
}

function About() {
  return <div>About</div>;
}

function Contacts() {
  return <div>Contacts</div>;
}
