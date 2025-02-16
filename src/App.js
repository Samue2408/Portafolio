import React, { useState, useEffect } from 'react';
import './App.scss';
import NavBar from './components/NavBar/navBar.js';
import Networks from './components/Network/Networks.js'
import HeroImage from './components/HeroImage/HeroImage.js';
import Projects from './components/Projects/Projects.js'
import SkillSlides from './components/skills-slides/skillsSlides.js';
import AboutMe from './components/Aboutme/AboutMe.js';
import ContactMe from './components/Contactme/ContactMe.js';
import LoadingScreen from './components/LoadingScreen/LoadingScreen.js';
import Footer from './components/Footer/Footer.js';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingScreen/>;
  }
  
  return (
      <div className='main'>
          <NavBar/>
          <Networks/>
        <section id='home-skills'>
          <HeroImage/>
          <SkillSlides></SkillSlides>
        </section>
        
        <Projects/>
        <AboutMe></AboutMe>
        <ContactMe></ContactMe>
        <Footer/>
      </div>      
  );
}

export default App;
