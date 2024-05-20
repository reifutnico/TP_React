import React from "react";
import "./conocimientos.css";

function Conocimientos() {
  return (
    <div className="container libros" id="Conocimientos">
      <div className="texto">
        <h2>Conocimientos</h2>
        <div className="libros">
          <div class="book">
            <p className="textoLibro">
              Estudie c# en el secundario ORT, aprendiendo atraves de este
              lenguaje las bases de la programacion.
            </p>
            <div class="cover">
              <p>c#</p>
            </div>
          </div>
          <div class="book">
            <p className="textoLibro">Estudie javaScript en el secundario.</p>
            <div class="cover">
              <p>javaScript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conocimientos;
