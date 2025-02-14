import '../NavBar/navBar.css';
import React, { useState, useEffect } from 'react';
import NavLink from './NavLink';/* 
import { IoLanguage } from "react-icons/io5"; */


function NavBar() {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach(section => {
        const top = section.offsetTop - 50;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveLink(section.id);
        }
      });
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []); 

 /*  // Estado para controlar la visibilidad del menú
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar la visibilidad
  const toggleMenu = (e) => {
    e.stopPropagation(); // Evitar que el clic se propague
    setIsOpen((prev) => !prev);
  };

  // Función para cerrar el menú al hacer clic fuera
  const closeMenu = () => {
    setIsOpen(false);
  }; */

 /*  // Añadir el evento para cerrar el menú al hacer clic fuera
  React.useEffect(() => {
    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []); */

  return (
    <nav>
      <ul className='sections'>
        <NavLink href="home-skills" active={activeLink === '' || activeLink === 'home-skills' ? true: false}>Home</NavLink>
        <NavLink href="projects" active={activeLink === 'projects'}>Projects</NavLink>
        <NavLink href="about-me" active={activeLink === 'about-me'}>About</NavLink>
        <NavLink href="contact" active={activeLink === 'contact'}>Contact</NavLink>
      </ul>
      {/* <div class="dropdown">
        <button class="dropdown-button" onClick={toggleMenu}>
          <IoLanguage/>
          <p>▼</p>
        </button>
          <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
            <li><a href="#option1">Español</a></li>
            <li><a href="#option2">Ingles</a></li>
          </ul>        
      </div> */}
    </nav>
  );
}

export default NavBar;