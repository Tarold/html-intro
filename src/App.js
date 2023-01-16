import { useEffect } from 'react';
import Counter from './components/Counter';
import StopWatch from './components/StopWatch/index';
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';

// 1 Link змінює location
// 2 BrowserRouter підписано на зміни location
// 3 BrowserRouter в Routes шукає Route з path, як у location (тобто як у обраного Link) і
// 4 виводить компонент із пропа children або component

// Аналогічно можна обчислючати класи для активного пункту
const defineNavLinkStyle = (isActive) => ({
  color: isActive ? 'green' : 'blue',
});

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" style={defineNavLinkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/components" style={defineNavLinkStyle}>
              Components
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={defineNavLinkStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" style={defineNavLinkStyle}>
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/components">
          <Components />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

function Home() {
  return <div>Home</div>;
}

// /components/counter
// /components/stopwatsh
function Components() {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <ol>
        <li>
          <Link to={`${url}/counter`}>Counter</Link>
        </li>
        <li>
          <Link to={`${url}/stopwath`}>Stopwatch</Link>
        </li>
      </ol>
      <Switch>
        <Route path={`${path}/counter`}>
          <Counter />
        </Route>
        <Route path={`${path}/stopwath`}>
          <StopWatch />
        </Route>
        <Route path={`${path}/*`}>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

function About() {
  return <div>About</div>;
}

function Contacts() {
  return <div>Contacts</div>;
}

function NotFound() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => history.push('/'), 5000);
  });

  return <div>404 Not Found</div>;
}
