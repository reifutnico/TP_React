import React from 'react';

const link = (props) => {
  return (<div className='link'>{<a href={props.destino}>{props.texto}</a>}</div>
  );
}

export default link;

