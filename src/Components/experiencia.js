import React from "react";
import "./experiencia.css";

function Experiencia() {
  return (
    <div className="container" id="Experiencia">
      <div className="textoBlanco">
        <h2>Experiencia</h2>
        <div className="cards">
          <div class="card red">
            <p class="tip">Proyecto final</p>
            <p class="second-text">En el proyecto final de ort, logre obtener experiencia en el desarrollo de un producto de cero.</p>
          </div>
          <div class="card blue">
            <p class="tip">Lider institucional en macabi</p>
            <p class="second-text">Ahora mismo los fines de semana trabajo cuidando niños en el club al que fui toda mi vida. Doy actividades frente a un grupo de niños.</p>
          </div>
          <div class="card green">
            <p class="tip">Trabajos practicos</p>
            <p class="second-text">Atraves de los trabajos practicos de la secundaria, pude ganar experiencia en hacer trabajos a contrareloj teniendo en cuenta una consigna.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiencia;
