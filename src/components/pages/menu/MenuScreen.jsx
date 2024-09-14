import React from 'react';
import Header from '../../organisms/header/Header';
import CardFormula from '../../molecules/cardformula/CardFormula';
import './menuScreen.css'; 
import CardMenu from '../../molecules/cardmenu/CardMenu';


const MenuScreen = () => {
  return (
    <main className="menu-container">
      <Header />
      <CardMenu/>
      <section className="menu-info">
       
      </section>
      <CardFormula/>
      <section className="menu-form">
        {/* Formulario de contacto */}
      </section>
   
    </main>
  );
};

export default MenuScreen;