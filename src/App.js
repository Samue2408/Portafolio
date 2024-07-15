import './App.scss';
import NavBar from './components/NavBar/navBar.js';
import Networks from './components/Network/Networks.js'
import HeroImage from './components/HeroImage/HeroImage.js';
import Projects from './components/Projects/Projects.js'
import python from './assets/img/python.svg';
import img_JavaScript from './assets/img/javascript.svg';
import img_HTML from './assets/img/html-5.svg';
import img_flutter from './assets/img/flutter.svg';
import img_FireB from './assets/img/firebase-1.svg';
import img_MySQL from './assets/img/mysql-official.svg';

function App() {
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
                  <img src={python} alt=''/>
                  <h3>Python</h3>
                </div>
                <div className='language_skill'>
                  <img src={img_flutter} alt='xzc'/>
                  <h3>Flutter & Dart</h3>
                </div>
                <div className='language_skill'>
                  <img src={img_JavaScript} alt='xzc'/>
                  <h3>JavaScript</h3>
                </div>
                <div className='language_skill'>
                  <img src={img_JavaScript} alt='xzc'/>
                  <h3>JavaScript</h3>
                </div>
            </div>
        </section>
      </div>      
  );
}

export default App;
