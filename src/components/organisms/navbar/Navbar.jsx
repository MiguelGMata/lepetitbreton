import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../assets/images/logo.png';
import './navbar.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Image} alt="Logo" />
      </div>
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {/* Ícono de hamburguesa que cambia a "X" cuando el menú está abierto */}
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Bienvenue</Link></li>
        <li><Link to="/notre-concept" onClick={closeMenu}>Notre concept</Link></li>
        <li><Link to="/notre-carte" onClick={closeMenu}>Notre carte</Link></li>
        <li><Link to="nous-rencontrer" onClick={closeMenu}>Nous rencontrer</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
