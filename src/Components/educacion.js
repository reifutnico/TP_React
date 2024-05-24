import React from 'react';
import './educacion.css'; 


function Educacion() {
  return (
    <div className="container" id="Educacion">
    <div className="texto">
      <h2>Educacion</h2>
      <div className="cards">
        <div className="card">
          <p className="institucion">ORT Secundario</p>
          <p className="descripcion">
            Completo mi educación secundaria en ORT, donde adquirí conocimientos en programación y diseño.
          </p>
        </div>
        <div className="card">
          <p className="institucion">Primario Bialik Devoto</p>
          <p className="descripcion">
            Fui al colegio Bialik Devoto.
          </p>
        </div>
        <div className="card">
          <p className="institucion">Curso de lideres de macabi</p>
          <p className="descripcion">
            Participe del curso de lideres de Macabi, donde aprendi a planificar actividades, contenidos judaicos y como pararme frente un grupo a dar actividad.
          </p>
        </div>
      </div>
    </div>
  </div>
);
}

export default Educacion;
