import React from 'react';
import Header from '../../organisms/header/Header';
import WelcomeSection from '../../molecules/welcome/WelcomeSection';
import CardFormula from '../../molecules/cardformula/CardFormula';
import Branch from '../../molecules/branch/Branch';
import Journalist from '../../molecules/journalist/Journalist';
import CardConcept from '../../molecules/cardconcept/CardConcept';

import './homeScreen.css'; 


const HomeScreen = () => {
  return (
    <main className="homepage-container">
      <div className="content"> 
        <Header/>
        <WelcomeSection/>
        <CardConcept/>
        <CardFormula/>
        <Branch/>
        <Journalist/>
      </div>
    </main>
  );
};

export default HomeScreen;