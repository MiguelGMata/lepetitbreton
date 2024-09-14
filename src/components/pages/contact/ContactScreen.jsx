import React from 'react';
import Header from '../../organisms/header/Header';
import './contactScreen.css'; 

const ContactScreen = () => {
  return (
    <main className="contact-container">
      <Header />
      <section className="contact-info">
        {/* Información de contacto */}
      </section>
      <section className="contact-form">
        {/* Formulario de contacto */}
      </section>
    </main>
  );
};

export default ContactScreen;
