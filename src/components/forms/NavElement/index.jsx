import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavElement.module.scss';

export default function NavElement () {
  //<Link to='/login'>login</Link>
  return (
    <nav className={styles.navElement}>
      <Link to='/'>
        <img src='https://www.squadhelp.com/img/logo.png' alt='logo' />
      </Link>

      <Link to='/singup' className={styles.SingUp}>
        Singup
      </Link>
    </nav>
  );
}
