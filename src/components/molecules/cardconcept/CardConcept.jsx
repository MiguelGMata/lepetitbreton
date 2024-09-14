import React from 'react';
import Image from '../../../assets/images/volonte.jpg'
import './cardConcept.css'; 

const CardConcept = () => {
  return (
    <div className="concept">
      <div className="concept-content">
        <div className="concept-column">
          <h1 className="concept-title">Une <span className="span-crepe">crêperie</span> à volonté !</h1>
        </div>
        <div className="concept-column">
          <p className="concept-text">
            Cette idée est née, non pas de nos méninges, ni totalement de nos cœurs mais surtout de nos estomacs ! Ce moment devant le menu à ne devoir choisir qu'une unique galette, qu'une seule crêpe, était devenu une véritable torture ! Il fallait mettre un terme à cette frustration et rendre l'impossible possible... C'est ainsi que notre Formule à Volonté à vu le jour !
            <br /><br />
            D'ailleurs on dit bien "Quand on aime on ne compte pas ! " et nous, on vous aime beaucoup ! Alors l'abondance, la profusion, l'opulence, la générosité, l'amour c'est un peu notre marque de fabrique et au final chez nous, ça devient comme chez vous. Avec vos amis, votre famille, vos collègues, venez partager un bon moment et repartez le cœur aussi rempli que le ventre !
          </p>
        </div>
      </div>
      <div className="concept-image">
        <img src={Image} alt="Concept" />
      </div>
    </div>
  );
};

export default CardConcept;