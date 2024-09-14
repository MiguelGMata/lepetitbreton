import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok} from '@fortawesome/free-brands-svg-icons';

import './footer.css'; 

const Footer = () => {
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
          <p>Tel: +33 1 88 61 16 26</p>
        </div>
        <div className="footer-links">
          <h3>Liens Utiles</h3>
          <ul>
            <li><a href="/">Bienvenue</a></li>
            <li><a href="/notre-concept">Notre concept</a></li>
            <li><a href="/notre-carte">Notre carte</a></li>
            <li><a href="/nous-rencontrer">Nous rencontrer</a></li>
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
