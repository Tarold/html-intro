import React from 'react';
import { ThemeContext } from '../../contexts';
import CONSTANTS from '../../constants';

function UserPage() {
  return (
    <div>
      <Header />
      <main>Main Content</main>
      <Footer />
    </div>
  );
}

export default UserPage;

//TODO Move to components
function Header() {
  return (
    <header>
      <span>Header</span> <ThemeSwitcher />
    </header>
  );
}

const { LIGHT, DARK, PINK } = CONSTANTS.THEME;

function ThemeSwitcher() {
  return (
    <ThemeContext.Consumer>
      {/* // 3 */}
      {({ theme, setTheme }) => {
        // 4
        const changeTheme = ({ target: { value } }) => {
          setTheme(value);
        };

        return (
          <select value={theme} onChange={changeTheme}>
            <option value={LIGHT}>Light</option>
            <option value={DARK}>Dark</option>
            <option value={PINK}>Pink</option>
          </select>
        );
      }}
    </ThemeContext.Consumer>
  );
}

function Footer() {
  return <footer>Footer</footer>;
}
