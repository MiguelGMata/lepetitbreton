import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok} from '@fortawesome/free-brands-svg-icons';

import './footer.css'; 

const Footer = () => {
  const handleTelClick = (e) => {
    e.preventDefault();
    window.location.href = e.target.href;
    window.scrollTo(0, 0); // Desplazar a la parte superior de la página
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h2>Le P'tit Breton</h2>
          <p>Une expérience culinaire unique avec nos crêpes artisanales!</p>
          <address>
            12 Rue de Port-Mahon,<br />
            5 Rue Notre Dame de Lorette,<br/>
            Paris, 75000<br />
            France
          </address>
          <p>Email: <a href="mailto:contact@leptitbreton.fr">eptitbreton75002@gmail.com</a></p>
          <p><a href="tel:+33188611626" onClick={handleTelClick}>Tel: +33 1 88 61 16 26</a></p>
        </div>
        <div className="footer-links">
          <h3>Liens Utiles</h3>
          <ul>
            <li><Link to="/">Bienvenue</Link></li>
            <li><Link to="/notre-concept">Notre concept</Link></li>
            <li><Link to="/notre-carte">Notre carte</Link></li>
            <li><Link to="/nous-rencontrer">Nous rencontrer</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/leptitbreton.paris/"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.instagram.com/lepetitbretoncreperie/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.tiktok.com/@leptitbreton.creperie"><FontAwesomeIcon icon={faTiktok} /></a>
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
