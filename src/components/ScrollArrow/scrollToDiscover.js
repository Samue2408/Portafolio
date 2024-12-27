import React from 'react';
import './ScrollToDiscover.scss'; // Estilos en SASS

const ScrollToDiscover = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight, // Baja hasta la siguiente sección
      behavior: 'smooth', // Desplazamiento suave
    });
  };

  return (
    <div className="scroll-to-discover" onClick={scrollToNextSection}>
      <span className="text">Scroll to Discover</span>
      <div className="arrow">
        <span>&#8595;</span> {/* Flecha hacia abajo */}
      </div>
    </div>
  );
};

export default ScrollToDiscover;
