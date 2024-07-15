import '../NavBar/navBar.css';
import React, { useState, useEffect } from 'react';
import NavLink from './NavLink';

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

  return (
    <nav>
      <ul>
        <NavLink href="#home" active={activeLink === '' || activeLink === 'home' ? true: false}>Home</NavLink>
        <NavLink href="#projects" active={activeLink === 'projects'}>Projects</NavLink>
        <NavLink href="#skills" active={activeLink === 'skills'}>Skills</NavLink>
        <NavLink href="#contact" active={activeLink === 'contact'}>Contact me</NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;