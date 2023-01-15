import classNames from 'classnames';
import styles from './Footer.module.sass';
import ThemeContext from '../../contexts/themeContext';
import CONSTANTS from '../../constants';

const { LIGHT, DARK, PINK } = CONSTANTS.THEME;

function Footer() {
  return (
    <ThemeContext>
      {({ theme }) => {
        const footerClassName = classNames({
          [styles.lightTheme]: theme === LIGHT,
          [styles.darkTheme]: theme === DARK,
          [styles.pinkTheme]: theme === PINK,
        });

        return <footer className={footerClassName}>Footer</footer>;
      }}
    </ThemeContext>
  );
}

export default Footer;
