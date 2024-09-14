import React from 'react';
import Header from '../../organisms/header/Hearder';
import WelcomeSection from '../../molecules/welcome/WelcomeSection';
import CardFormula from '../../molecules/cardformula/CardFormula';
import './homeScreen.css'; 
import Branch from '../../molecules/branch/Branch';



const HomeScreen = () => {
  return (
    <div className="homepage-container">
      <div className="content"> 
        <Header/>
        <WelcomeSection/>
        <CardFormula/>
        <Branch/>
      </div>
    </div>
  );
};

export default HomeScreen;