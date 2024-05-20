import React from 'react';
import FotoComponent from './foto';
import MiFoto from '../vendor/WhatsApp Image 2024-05-20 at 15.19.57.jpeg'; 
import './acerca.css'; 

function Acerca() {
  return (
    <div className='container-1' id="AcercaDeMi">
      <div className="contenido">
        <div className="foto">
          <FotoComponent Foto={MiFoto} />
        </div>
        <div className="texto">
          <h2>Acerca de mi</h2>
          <p>
            Soy estudiante de ort, me gusta programar y jugar al futbol con mis amigos. Los fines de semana voy al club y trabajo cuidando niños.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Acerca;

