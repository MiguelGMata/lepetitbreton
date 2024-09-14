import React from 'react';
import Images1 from '../../../assets/images/formula1.jpg'
import Images2 from '../../../assets/images/formula2.jpg'
import Images3 from '../../../assets/images/formula3.jpg'
import Images4 from '../../../assets/images/formula4.jpg'
import './cardFormula.css'; 

const formulas = [
  { title: "Formule à Volonté", price: "29,90€", imageUrl: Images1 },
  { title: "Formule à Midi", price: "15,90€", imageUrl: Images2},
  { title: "Formule Salée", price: "18,90€", imageUrl: Images3 },
  { title: "Formule P'tit Breton", price: "13,90€", imageUrl: Images4 },
]

const Card = () => {
    return (
      <section className="card-formula">
        <h2>Nos Formules Magiques</h2>
        <div className="formula-cards">
          {formulas.map((formula, index) => (
            <div className="formula-card" key={index}>
              <div className="card-image">
                <img src={formula.imageUrl} alt={formula.title} />
              </div>
              <div className="card-content">
                <h3>{formula.title}</h3>
                <p>{formula.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Card;