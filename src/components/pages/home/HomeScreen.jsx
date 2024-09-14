import React from 'react';
import Header from '../../organisms/header/Hearder';
import WelcomeSection from '../../molecules/welcome/WelcomeSection';
import CardFormula from '../../molecules/cardformula/CardFormula';
import Branch from '../../molecules/branch/Branch';
import './homeScreen.css'; 
import Journalist from '../../molecules/journalist/Journalist';




const HomeScreen = () => {
  return (
    <div className="homepage-container">
      <div className="content"> 
        <Header/>
        <WelcomeSection/>
        <CardFormula/>
        <Branch/>
        <Journalist/>
      </div>
    </div>
  );
};

export default HomeScreen;