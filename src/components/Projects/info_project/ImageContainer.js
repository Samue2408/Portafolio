import React, { useEffect, useRef } from "react";
import './ImageContainer.css'
import { LuMousePointerClick } from "react-icons/lu";
import img_Python from '../../../assets/img/python.svg';
import img_JavaScript from '../../../assets/img/javascript.svg';
import img_HTML from '../../../assets/img/html-5.svg';
import img_flutter from '../../../assets/img/flutter.svg';
import img_FireB from '../../../assets/img/firebase-1.svg';
import img_MySQL from '../../../assets/img/mysql-official.svg';
import img_angular from '../../../assets/img/angular.svg';
import img_node from '../../../assets/img/node-js.svg';
import img_next from '../../../assets/img/nextjs.svg';
import img_tailwind from '../../../assets/img/tailwind_css.svg'

const LANGUAGES ={
    'Python': img_Python,
    'JavaScript': img_JavaScript,
    'HTML': img_HTML,
    'Flutter': img_flutter,
    'FireBase': img_FireB,
    'MySQL': img_MySQL,
    'Angular': img_angular,
    'NodeJS': img_node,
    'NextJS': img_next,
    'Tailwind': img_tailwind
}


export default function ImageContainer({title, project, description, languages, link, secondLink}) {

    const projectRef = useRef(null);

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
        { threshold: 0.5 } // Se activa cuando el 50% del elemento es visible
        );

        if (projectRef.current) {
        observer.observe(projectRef.current);
        }

        return () => observer.disconnect(); // Limpieza para evitar errores
    }, []);

    return (
        <li ref={projectRef} className="image-container">            
            <h2>{title}</h2>
            <LuMousePointerClick className='icon'/>            
            <img src={project} alt={title}/>
            <div className="overlay">
                <p>
                    {description}
                </p>
                <div className='lenguajes'>
                    {languages.map((language, index) => (
                        <img key={index} title={language} src={LANGUAGES[language]} alt={index}/>
                    ))}                        
                </div>
                <div className="buttoms">
                    <a target="_blank"
                        rel="noopener noreferrer" 
                        href={link}>
                        Go to code
                    </a>
                    {secondLink && (
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={secondLink}
                        >
                            Go to backend
                        </a>
                    )}
                </div>
            </div>
        </li>
    );
}