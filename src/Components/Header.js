import React from 'react';
import TituloComponent from './titulo'; 
import LinkComponent from './link'; 
import './header.css'; 



const Header = () => {
  return (
    <header>
        <TituloComponent/> {}
        <LinkComponent texto="Acerca de mí" destino="href/#AcercaDeMi" />
        <LinkComponent texto="No tengo mas miedo de ocultarlo" destino="href/#AcercaDeMi" />
        <LinkComponent texto="Mi fin" destino="href/#AcercaDeMi" />
    </header>
  );
}

export default Header;
