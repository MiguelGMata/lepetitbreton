import React from 'react';
import Image from '../../../assets/images/lepetitbreton.png'
import './header.css'; 


const VibrantHeader = () => {
  return (
    <header className="vibrant-header">
      <div className="header-content">
        <img src={Image}alt="Creperie Logo" className="logo-heartbeat" />
      </div>
      <h1>"Crêpes Gourmandes à Volonté !"</h1>
      <h2>- La Qualité à Chaque Morceau -</h2>
    </header>
  );
};

export default VibrantHeader;


