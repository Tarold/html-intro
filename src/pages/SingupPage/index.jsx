import React from 'react';
import SingupForm from './../../components/forms/SingupForm';
import PricingQuestion from './../../components/forms/SingupForm/PricingQuestion';
import styles from './Singup.module.scss';

function ContactPage () {
  return (
    <>
      <section className={styles.inputSection}>
        <h2 className={styles.formTitle}>CREATE AN ACCOUNT</h2>
        <p className={styles.formCaption}>
          We always keep your name and email address private.
        </p>
        <SingupForm />
      </section>
      <section className={styles.pricingSection}>
        <PricingQuestion />
      </section>
    </>
  );
}

export default ContactPage;
