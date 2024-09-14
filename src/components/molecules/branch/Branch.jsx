import React, { useEffect, useRef } from 'react';
import Imagen1 from '../../../assets/images/local1.jpg';
import Imagen2 from '../../../assets/images/local2.jpg';
import './branch.css'; 

// Datos de las sucursales
const branches = [
  {
    name: "Le P'tit Breton | Opéra",
    phone: "01.42.66.41.90",
    address: "12 Rue de Port-Mahon, 75002 PARIS",
    hours: "Du Lundi au Samedi Midi\n1er service 11h30/13h15 et 2ème service 13h15/15h00\nDu Lundi au Dimanche Soir",
    imageUrl: Imagen1 
  },
  {
    name: "Le P'tit Breton | Lorette",
    phone: "01.88.61.25.14",
    address: "5 Rue Notre Dame de Lorette, 75009 PARIS",
    hours: "Du Mardi au Samedi Midi\n1er service 11h30/13h15 et 2ème service 13h15/15h00\nDu Mardi au Dimanche Soir\n1er service de 19h00/21h00 et 2ème service 21h00/23h30",
    imageUrl: Imagen2  
  }
];
const Branch = () => {
    const branchRefs = useRef([]);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      }, { threshold: 0.1 });
  
      branchRefs.current.forEach(ref => observer.observe(ref));
  
      return () => {
        branchRefs.current.forEach(ref => observer.unobserve(ref));
      };
    }, []);
  
    return (
      <section className="branch">
        {branches.map((branch, index) => (
          <div
            className={`branch-card ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}
            key={index}
            ref={el => branchRefs.current[index] = el}
          >
            <div className="branch-image">
              <img src={branch.imageUrl} alt={branch.name} />
            </div>
            <div className="branch-info">
              <h3>{branch.name}</h3>
              <p>{branch.phone}</p>
              <p>{branch.address}</p>
              <p>{branch.hours}</p>
            </div>
          </div>
        ))}
      </section>
    );
  };
  
  export default Branch;