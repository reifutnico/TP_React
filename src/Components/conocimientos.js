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
          <div class="book">
            <p className="textoLibro">
              Estudie Figma en el secundario ORT, aprendiendo las bases del diseño UX/UI y el desarrollo de un producto.
            </p>
            <div class="cover">
              <p>Figma</p>
            </div>
          </div>
          <div class="book">
            <p className="textoLibro">
              Estudie React en el secundario ORT.
            </p>
            <div class="cover">
              <p>React</p>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFFFF" fill-opacity="1" d="M0,288L26.7,256C53.3,224,107,160,160,160C213.3,160,267,224,320,250.7C373.3,277,427,267,480,245.3C533.3,224,587,192,640,181.3C693.3,171,747,181,800,208C853.3,235,907,277,960,277.3C1013.3,277,1067,235,1120,224C1173.3,213,1227,235,1280,240C1333.3,245,1387,235,1413,229.3L1440,224L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
        </div>
      </div>
    </div>
  );
}

export default Conocimientos;