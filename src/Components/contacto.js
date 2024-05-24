import React from "react";
import "./contacto.css";

function Contacto() {
  return (
    <div className="containerContacto" id="Contacto">
      <div className="textoContacto">
        <h2>Contacto</h2>
        <form className="contactForm">
          <div className="formGroup">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="formGroup">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="submitButton">Enviar</button>
        </form>
      </div>
    </div>

  );
}

export default Contacto;
