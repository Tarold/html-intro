import React from 'react';
import ContactForm from '../../components/forms/ContactForm';
import ContactsList from './../../components/ContactsList';

function ContactPage () {
  return (
    <section>
      <h2>Contact Form</h2>
      <ContactForm />
      <ContactsList />
    </section>
  );
}

export default ContactPage;
