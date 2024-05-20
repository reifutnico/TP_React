import React from 'react';
import FotoComponent from './foto';
import MiFoto from '../vendor/saludando.png'; 
import './acerca.css'; 


function Acerca() {
  return (
    <div className='container' id="AcercaDeMi">
      <FotoComponent Foto={MiFoto} />

      <div className="texto">
        <h2>Acerca de mi</h2>
        <p>
          ...
        </p>

      </div>

    </div>
    
    
  );
}

export default Acerca;
