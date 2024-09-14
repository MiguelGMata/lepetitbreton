import React from 'react';
import Header from '../../organisms/header/Header';
import ContactForm from '../../molecules/formcontact/ContactForm'; 
import Branch from '../../molecules/branch/Branch';
import './contactScreen.css'; 

const ContactScreen = () => {
  return (
    <main className="contact-container">
      <Header />
      <section className="contact-form">
        <h1>RDV chez nous !</h1>
        <p>Pour toutes informations ou réservations nous sommes joignables 
          au 01.42.66.41.90 pour Le P'tit Breton Opéra,
          au 01.88.61.25.14 pour Le P'tit Breton Lorette,
          ou par mail sur leptitbreton75002@gmail.com et sur nos réseaux sociaux.  
        </p>
        <p>Merci d'éviter, si possible, les heures de services pour nous contacter. </p>
      </section>
      <Branch/>
      <ContactForm/>

    </main>
  );
};

export default ContactScreen;
