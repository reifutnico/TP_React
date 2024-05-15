import React from 'react';
import TituloComponent from './titulo'; 
import LinkComponent from './link'; 
import './header.css'; 



const Header = () => {
  return (
    <header>
        <TituloComponent/> {}
        <LinkComponent texto="Acerca de nosotros" destino="#AcercaDeMi" />
        <LinkComponent texto="Becherman" destino="#Becher" />
        <LinkComponent texto="Reifut" destino="#Reifut" />
    </header>
  );
}

export default Header;
