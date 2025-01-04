import React from 'react';
import './App.scss';
import NavBar from './components/NavBar/navBar.js';
import Networks from './components/Network/Networks.js'
import HeroImage from './components/HeroImage/HeroImage.js';
import Projects from './components/Projects/Projects.js'
import SkillSlides from './components/skills-slides/skillsSlides.js';
import AboutMe from './components/Aboutme/AboutMe.js';
/* import ScrollToDiscover from './components/ScrollArrow/scrollToDiscover.js'; */
/* import python from './assets/img/python.svg';
import img_tailwind from './assets/img/tailwind_css.svg';
import img_mysql from './assets/img/mysql-official.svg';
import img_typescript from './assets/img/Typescript.svg';
import img_nextjs from './assets/img/nextjs.svg';
import img_flutter from './assets/img/flutter.svg'; */






function App() {
  
  return (
      <div className='main'>
        <NavBar/>
        <Networks/>
        <HeroImage/>
        <SkillSlides></SkillSlides>
        {/* <ScrollToDiscover /> */}
        <Projects/>
        {/* <section id='skills'>
            <h1>
              SKILLS
            </h1>
            <div className='languages-container'>
                <div className='language_skill'>
                  <img src={python} alt='Python'/>
                  <h3>Python</h3>
                </div>
                <div className='language_skill'>
                  <img src={img_flutter} alt='Flutter'/>
                  <h3>Flutter & Dart</h3>
                </div>
                <div className='language_skill'>
                  <img src={img_nextjs} alt='NextJs'/>
                  <h3>NextJs</h3>
                </div>
                <div className='language_skill'>
                  <img src={img_typescript} alt='TypeScript'/>
                  <h3>TypeScript</h3>
                </div>
                <div className='language_skill'>
                  <img src={img_tailwind} alt='TailwindCSS'/>
                  <h3>TailwindCSS</h3>
                </div>
                <div className='language_skill'>
                  <img src={img_mysql} alt='MySQL'/>
                  <h3>MySQL</h3>
                </div>                
            </div>
        </section> */}

        <AboutMe></AboutMe>

        <section id='contact'>        
        </section>

      </div>      
  );
}

export default App;
