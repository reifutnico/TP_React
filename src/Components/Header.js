import React from 'react';
import TituloComponent from './titulo'; 
import LinkComponent from './link'; 
import './header.css'; 



const Header = () => {
  return (
    
    <header>

        <TituloComponent/> {}
        <LinkComponent texto="Acerca de Mi" destino="#AcercaDeMi" />
        <LinkComponent texto="Conocimientos" destino="#Conocimientos" />
        <LinkComponent texto="Experiencia" destino="#Experiencia" />
        <LinkComponent texto="Educación" destino="#Educación" />
        <LinkComponent texto="Contacto" destino="#Contacto" />

    </header>
  );
}

export default Header;
