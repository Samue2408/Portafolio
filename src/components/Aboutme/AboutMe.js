import React, {useRef, useEffect} from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuBrainCircuit } from "react-icons/lu";
import './AboutMe.scss'
import cv from '../../assets/docs/hojadevida.pdf'

const technologies = ["Power BI", "Excel", "Word", "Power Point", "GIMP"];
const softskills = ["Teamwork", "Punctuality", "Commitment", "Dynamism", "Creativity"];

const FloatingText = ({ text, style }) => {
    return (
      <div className="floating-item" style={style}>
        {text}
      </div>
    );
  };

  export default function AboutMe () {

    const aboutRef = useRef(null);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
      (entries, observer) => {
          entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("animate");
              observer.unobserve(entry.target); // Dejar de observar después de la primera vez
          }
          });
      },
      { threshold: 0.6 } // Se activa cuando el 50% del elemento es visible
      );

      if (aboutRef.current) {
      observer.observe(aboutRef.current);
      }

      return () => observer.disconnect(); // Limpieza para evitar errores
    }, []);
    
    const positions = [
        { top: "10%", right: "10%" },
        { top: "27%", right: "50%" },
        { top: "40%", right: "15%" },
        { top: "50%", right: "60%" },
        { top: "70%", right: "30%" },
      ];
      
      const shuffledPositions = positions.sort(() => Math.random() - 0.5);
      const styledPositions = shuffledPositions.map((position) => ({
        ...position,
        animationDelay: `${Math.random() * 2}s`, // Delay entre 0 y 2 segundos
      }));

    return (
        <section ref={aboutRef} id="about-me" className="about-me">
        <div className="about-info">
            <h1>
                About Me
            </h1>
            <h4>
            Hi, I am Samuel. I'm a ninth-semester Systems Engineering student at Universidad Libre. 
            I lean more towards software development and advocate for the responsible use of technology. 
            My commitment is focused on creating secure solutions and ensuring ethical data handling.
            </h4>
            <div className="other-skills">
              <h3>Other technologies I use:</h3>
              <ul>
                {technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="other-skills soft-skills">
              <h3>Soft skills:</h3>
              <ul>
                {softskills.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <a className="dwl-cv" target="blank" href={cv}> <MdOutlineFileDownload/> <p>Download CV</p></a>
        </div>
        <div className="about-grafic">
            {/* <h1>Soft Skills:</h1> */}
            <div className="icon-skills">
            <LuBrainCircuit/>
            </div>
            <div className="floating-container">
                {softskills.map((text, index) => (
                    <FloatingText key={index} text={text} style={styledPositions[index]} />
                ))}
            </div>
        </div>
        </section>
    )
}

