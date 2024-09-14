import React from 'react';
import './footer.css'; // Importa el archivo de estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h2>Le P'tit Breton</h2>
          <p>Une expérience culinaire unique avec nos crêpes artisanales!</p>
          <address>
            6 Rue Brézin, 75014 Paris,<br />
            Paris, 75000<br />
            France
          </address>
          <p>Email: <a href="mailto:contact@leptitbreton.fr">contact@leptitbreton.fr</a></p>
          <p>Tel: +33 1 88 61 16 26</p>
        </div>
        <div className="footer-links">
          <h3>Liens Utiles</h3>
          <ul>
            <li><a href="#bienvenue">Bienvenue</a></li>
            <li><a href="#notre-concept">Notre concept</a></li>
            <li><a href="#notre-carte">Notre carte</a></li>
            <li><a href="#nous-rencontrer">Nous rencontrer</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a href="https://facebook.com/leptitbreton" target="_blank" rel="noopener noreferrer" className="social-icon facebook"></a>
            <a href="https://instagram.com/leptitbreton" target="_blank" rel="noopener noreferrer" className="social-icon instagram"></a>
            <a href="https://twitter.com/leptitbreton" target="_blank" rel="noopener noreferrer" className="social-icon twitter"></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Le P'tit Breton. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
