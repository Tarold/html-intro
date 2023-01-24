import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './NavElement.module.scss';

export default function NavElement () {
  const { pathname } = useLocation();
  return (
    <nav className={styles.navElement}>
      <Link to='/'>
        <img src='https://www.squadhelp.com/img/logo.png' alt='logo' />
      </Link>

      {pathname === '/login' && (
        <Link to='/singup' className={styles.SingUp}>
          Singup
        </Link>
      )}
      {pathname === '/singup' && (
        <Link to='/login' className={styles.Login}>
          Login
        </Link>
      )}
      {pathname === '/' && (
        <>
          <Link to='/login' className={styles.SingUp}>
            Login
          </Link>
          <Link to='/singup' className={styles.SingUp}>
            Singup
          </Link>
        </>
      )}
    </nav>
  );
}
