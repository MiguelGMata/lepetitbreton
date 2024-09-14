import React from 'react';
import Header from '../../organisms/header/Header';
import CardFormula from '../../molecules/cardformula/CardFormula';
import './menuScreen.css'; 
import CardMenu from '../../molecules/cardmenu/CardMenu';
import AllergenSeparator from '../../molecules/separator/AllergenSeparator';


const MenuScreen = () => {
  return (
    <main className="menu-container">
      <Header />
      <CardMenu/>      
      <CardFormula/>
      <AllergenSeparator/>

    </main>
  );
};

export default MenuScreen;