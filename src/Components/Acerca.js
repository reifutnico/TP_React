import React from 'react';
import FotoComponent from './foto';
import MiFoto from '../vendor/becherReifut.jpg'; 
import './acerca.css'; 


function Acerca() {
  return (
    <div className='container'>
      <FotoComponent Foto={MiFoto} />

      <div className="texto">
        <h2>Acerca de nosotros</h2>
        <p>
          ¡Hola! Somos Nicolas (Becherman y Reifut), apasionados de React y somos los mejores compañeros de trabajo. Nos encanta programar. 
          En nuestro tiempo libre, disfrutamos hacer actividades adicionales o pasatiempos. Siempre estamos buscando nuevas experiencias y aprendizajes.
        </p>
      </div>

    </div>
    
  );
}

export default Acerca;
