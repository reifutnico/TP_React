import React from 'react';

function Foto( props ) {
  return (
    <div className='foto'>
      <img src={props.Foto} alt="Mi foto" />
    </div>
  );
}

export default Foto;
