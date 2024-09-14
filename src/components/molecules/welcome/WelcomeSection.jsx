import React from 'react';
import './welcomeSection.css'; // Importamos el archivo de estilos

// Rutas de las imágenes (asegúrate de que las imágenes estén en la ruta correcta)
import crepeImage1 from '../../../assets/images/crepe1.jpg';
import crepeImage2 from '../../../assets/images/crepe2.jpg';
import crepeImage3 from '../../../assets/images/crepe3.jpg';
import crepeImage4 from '../../../assets/images/crepe4.jpg';

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-content">
        <h1>Bienvenue à <span className="highlight">Le P'tit Breton</span></h1>
        <p>Découvrez nos délicieuses crêpes artisanales, préparées avec amour et des ingrédients frais.</p>
        <p>Venez savourer un moment inoubliable dans un cadre chaleureux et accueillant.</p>
      </div>
      <div className="welcome-images">
        <img src={crepeImage1} alt="Crêpe Savoureuse" className="welcome-image" />
        <img src={crepeImage2} alt="Crêpe Gourmande" className="welcome-image" />
        <img src={crepeImage3} alt="Crêpe Artisanale" className="welcome-image" />
        <img src={crepeImage4} alt="Crêpe Artisanale" className="welcome-image" />
      </div>
    </section>
  );
};

export default WelcomeSection;
