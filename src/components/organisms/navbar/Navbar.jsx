import React, { useState } from 'react';
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
        <li><a href="/" onClick={closeMenu}>Bienvenue</a></li>
        <li><a href="/notre-concept" onClick={closeMenu}>Notre concept</a></li>
        <li><a href="#notre-carte" onClick={closeMenu}>Notre carte</a></li>
        <li><a href="#nous-rencontrer" onClick={closeMenu}>Nous rencontrer</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
