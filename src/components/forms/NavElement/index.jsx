import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavElement.module.scss';

export default function NavElement () {
  return (
    <nav className={styles.navElement}>
      <Link to='/'>Home</Link>
      <Link to='/login'>login</Link>
      <Link to='/singup'>singup</Link>
    </nav>
  );
}
