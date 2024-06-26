import React from 'react'
import './acerca.css'; 
import './olas.css';

const Olas = (props) => {
  return (
<div className={"olas " + props.fondo}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={props.color} fill-opacity="1" d="M0,0L30,37.3C60,75,120,149,180,176C240,203,300,181,360,149.3C420,117,480,75,540,96C600,117,660,203,720,202.7C780,203,840,117,900,85.3C960,53,1020,75,1080,106.7C1140,139,1200,181,1260,202.7C1320,224,1380,224,1410,224L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>      
    </div>  )
}

export default Olas