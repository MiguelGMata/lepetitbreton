import React from 'react';
import Image1 from '../../../assets/images/crepe2.jpg';
import Image2 from '../../../assets/images/crepe3.jpg';
import Image3 from '../../../assets/images/boison.jpg';
import Image4 from '../../../assets/images/salade.jpeg';
import Image5 from '../../../assets/images/glace.jpg';
import './cardMenu.css';

const cardMenus = [
  {
    title: 'Nos Galettes à la farine de sarrasin',
    items: [
      'Premier amour (œuf, emmental français, jambon) - 8.90€,',
      'La vie en vert (légumes crus : salade, tomates fraîches, champignons frais, asperges) - 8.90€',
      'Crème de la crème (œuf, jambon, emmental français, champignons frais, crème fraîche) - 9.90€',
      "Thon sur thon (thon, œuf, tomates fraîches, olives, emmental français) - 9.90€",
      "Chaud patate (pommes de terre, reblochon, lardons) - 9.90€",
      "Tout un fromage (roquefort, noix, emmental français, jambon) - 9.90€",
      "Bras de fer (épinards, crème fraîche, jambon) - 9.90€",
      "Jam Bon 007 (œuf, jambon, tomates fraîches, emmental français, champignons frais) - 9.90€",
   ],
    image: Image1,
  },
  {
    title: 'Nos Crêpes à la farine de froment',
    items: [
        'Crêpe beurre et sucre - 5.90€',
        'Crêpe citron pressé et sucre - 6.00€',
        "Crêpe beurre et sucre - 5.90€",
        "Crêpe citron pressé et sucre - 6.00€",
        "Crêpe compote de pomme - 6.00€",
        "Crêpe confiture - 6.00€",
        "Crêpe chocolat maison - 6.90€",
        "Crêpe crème de marrons - 6.90€",
        "Crêpe Nutella - 6.90€",
        "Crêpe miel - 7.00€",
        "Crêpe caramel beurre salé maison - 8.90€",  
        "Les flambées - 9.00€ (Calvados, Grand Marnier, Cointreau)"    
    ],
    image: Image2,
  },
  {
    title: 'Nos Boissons',
    items: [
        "CIDRE LE BRUN & BIERES :",
        "Bolée de cidre (20cl) - 4.00€",
        "Carafe de cidre (37,5cl) - 7.00€",
        "Bouteille de Cidre (75cl) - 12.00€",
        "Bière Bretonne Artisanale Bio du moment (33cl) - 6.00€",
        "VINS :",
        "Verre de vin (12 cl) - 6.00€",
        "Bouteille de Côtes de Provences (Rosé 75cl) - 19.00€",
        "Bouteille de Bordeaux (Rouge 75cl) - 22.00€",
        "Bouteille de St Emilion (Rouge 75cl) - 28.00€",
    ],
    image: Image3,
  },
  {
    title: 'Nos Salades',
    items: [
        "La salade verte - 5.50€",
        "La salade Mixte - 10.00€  (jambon, mozzarella, tomate fraîche, œuf, olive)",        
        "La salade Cocorico - 10.00€ (poulet, mozzarella, tomate fraîche, œuf, olive)",  
        "La salade Maraîchère - 10.00€ (thon, tomate fraîche, œuf, asperge, olive)",
        "La salade Chèvre - 11.90€ (tomate, chèvre, œuf, olive, noix)",
    ],
    image: Image4,
  },
  {
    title: 'Nos Glaces',
    items: [
        "2 boules de glace - 4.50€  ou 3 boules - 6.00€  (Vanille, Chocolat, Coco, Framboise)",
        "Coupe Lagon - 8.00€ (Coco, Framboise, Vanille, Crème fouettée, Chocolat maison)",
        "Coupe Noir et Blanc - 8.00€ (Chocolat, Vanille, Crème fouettée, Chocolat maison)",
        "Banana split- 8.90€ (Vanille, Coco, Chocolat, Chocolat maison, Banane, Crème fouettée)",
    ],
    image: Image5,
  },
  // Añade más Card Menus aquí
];

const CardMenu = () => {
  return (
    <section className="card-menu">
      <h1>Notre Menu</h1>
      <h2>Faites vous plaisir.</h2>
      <p>Toutes nos préparations sont cuisinées maison</p>
      <div className="card-menu-container">
            {cardMenus.map((cardMenu, index) => (
            <div key={index} className="card-menu-card">
                    <div className="card-menu-card-inner">
                        <div className="card-menu-card-front">
                            <img src={cardMenu.image} alt={cardMenu.title} />
                        </div>
                        <div className="card-menu-card-back">
                            <h3>{cardMenu.title}</h3>
                            <ul>
                            {cardMenu.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                            </ul>
                        </div>
                    </div>
            </div>
            ))}
      </div>
    </section>
  );
};

export default CardMenu;
