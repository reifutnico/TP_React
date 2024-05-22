import './App.css';
import Header from './Components/Header';
import Acerca from './Components/Acerca';
import Conocimientos from './Components/conocimientos';
import Experiencia from './Components/experiencia';
import Educacion from './Components/educacion';
import Contacto from './Components/contacto';
import Olas from './Components/Olas';




function App() {
  return (
    <>
    <Header/>
    <Acerca/>
    <Olas color="#0099ff" fondo="blanco"/>
    <Conocimientos/>
    <Olas color="#fff" fondo="azul"/>
    <Experiencia/>
    <Olas color="#0099ff" fondo="blanco"/>
    <Educacion/>
    <Olas color="#fff" fondo="azul"/>
    <Contacto/>
    <Olas color="#fff" fondo="azul"/>





    </>
    
  );
}

export default App;
