import React from 'react';
import Image1 from '../../../assets/images/leparisien1.png'
import Image2 from '../../../assets/images/leparisien2.png';
import Image3 from '../../../assets/images/lebonbon1.png';
import Image4 from '../../../assets/images/lebonbon2.png';
import './journalist.css';


const Journalist = () => {
  return (
    <div className="journalist">
      <div className="blue-background"></div>
      <div className="journalist-content">
        <h2 className="title">Le P'tit Breton dans Le Parisien</h2>
        <div className="image-section">
          <div className="journalist-image-container">
            <img src={Image1} alt="Le Parisien article 1" className="journalist-image" />
            <p className="subtitle">
              Le P'tit Breton | Opéra avec Manu et Sam - 12 Rue de Port-Mahon, 75002 PARIS
            </p>
          </div>
          <div className="journalist-image-container">
            <img src={Image2} alt="Le Parisien article 2" className="journalist-image" />
            <p className="subtitle">
              Le P'tit Breton | Lorette avec Mélissa et Antoine - 5 Rue Notre Dame de Lorette, 75009 PARIS
            </p>
          </div>
        </div>

        <h2 className="title">Le P'tit Breton dans Le Bonbon</h2>
        <div className="image-section">
          <div className="journalist-image-container">
            <img src={Image3} alt="Le Bonbon article 1" className="journalist-image" />
            <p className="subtitle">
              Le P'tit Breton | Opéra avec Manu et Sam - 12 Rue de Port-Mahon, 75002 PARIS
            </p>
          </div>
          <div className="journalist-image-container">
            <img src={Image4} alt="Le Bonbon article 2" className="journalist-image" />
            <p className="subtitle">
              Le P'tit Breton | Lorette avec Mélissa et Antoine - 5 Rue Notre Dame de Lorette, 75009 PARIS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journalist;

