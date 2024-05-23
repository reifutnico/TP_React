import React from "react";
import "./experiencia.css";

function Experiencia() {
  return (
    <div className="container" id="Experiencia">
      <div className="textoBlanco">
        <h2>Experiencia</h2>
        <div className="cards">
          <div class="card red">
            <p class="tip">Hover Me</p>
            <p class="second-text">Lorem Ipsum</p>
          </div>
          <div class="card blue">
            <p class="tip">Hover Me</p>
            <p class="second-text">Lorem Ipsum</p>
          </div>
          <div class="card green">
            <p class="tip">Hover Me</p>
            <p class="second-text">Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiencia;
