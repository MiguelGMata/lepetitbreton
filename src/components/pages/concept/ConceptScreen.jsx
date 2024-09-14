import React from 'react';
import CardConcept from '../../molecules/cardconcept/CardConcept';
import Header from '../../organisms/header/Header';
import Journalist from '../../molecules/journalist/Journalist';
import './conceptScreen.css'; 


const ConceptScreen = () => {
  return (
    <main className="concept-container">
        <Header/>
        <CardConcept/>
        <Journalist/>
    </main>
  );
};

export default ConceptScreen;
