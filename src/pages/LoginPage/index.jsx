import React from 'react';
import LoginForm from './../../components/forms/LoginForm';
import styles from './LoginPage.module.scss';

function ContactPage () {
  return (
    <section className={styles.pageSection}>
      <h2 className={styles.formTitle}>LOGIN TO YOUR ACCOUNT</h2>
      <LoginForm />
    </section>
  );
}

export default ContactPage;
