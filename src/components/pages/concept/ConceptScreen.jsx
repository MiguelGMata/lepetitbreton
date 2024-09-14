import React from 'react';
import CardConcept from '../../molecules/cardconcept/CardConcept';
import Header from '../../organisms/header/Header';
import './conceptScreen.css'; 


const ConceptScreen = () => {
  return (
    <main className="concept-container">
        <Header/>
        <CardConcept/>
      <div className="concept-content"> 

      </div>
    </main>
  );
};

export default ConceptScreen;
