import CONSTANTS from '../../constants';
import ThemeContext from '../../contexts/themeContext';

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

export default ThemeSwitcher;
