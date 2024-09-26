import './App.scss';
import NavBar from './components/NavBar/navBar.js';
import Networks from './components/Network/Networks.js'
import HeroImage from './components/HeroImage/HeroImage.js';
import Projects from './components/Projects/Projects.js'
import python from './assets/img/python.svg';
import img_tailwind from './assets/img/tailwind_css.svg';
import img_mysql from './assets/img/mysql-official.svg';
import img_typescript from './assets/img/Typescript.svg';
import img_nextjs from './assets/img/nextjs.svg';
import img_flutter from './assets/img/flutter.svg';

import React, { useState } from 'react';



function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    alert(`Nombre: ${formData.name}\nEmail: ${formData.email}\nMensaje: ${formData.message}`);
  };
  return (
      <div>
        <NavBar/>
        <Networks/>
        <HeroImage/>
        <Projects/>
        <section id='skills'>
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
        </section>

        <section id='contact'>
        <div className="contact-container">
          <h2>Contáctame</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email">Correo electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message">Mensaje:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit">Enviar</button>
          </form>
        </div>
        </section>

      </div>      
  );
}

export default App;
