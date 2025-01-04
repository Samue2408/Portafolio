import React from 'react';
import './SlidesImage.scss'; // Estilos en SASS

const SlidesImage = ({url, name}) => {

  return (
    <div className='slide'>
        <img src={url} title={name} alt={name}></img>
    </div>
  );
};

export default SlidesImage;