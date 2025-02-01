import React from 'react';

function NavLink({ href, active, children }) {

  const scrollToSection = () => {
    document.getElementById(href).scrollIntoView({ behavior: "smooth", block: "start" });
  };
  
  return (
    <li>
      <button onClick={scrollToSection} className={active ? 'active link-button' : 'link-button'}>{children}</button>
    </li>
  );
}

export default NavLink;