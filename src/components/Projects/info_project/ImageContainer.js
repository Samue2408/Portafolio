import React from "react";
import './ImageContainer.css'
import img_Python from '../../../assets/img/python.svg';
import img_JavaScript from '../../../assets/img/javascript.svg';
import img_HTML from '../../../assets/img/html-5.svg';
import img_flutter from '../../../assets/img/flutter.svg';
import img_FireB from '../../../assets/img/firebase-1.svg';
import img_MySQL from '../../../assets/img/mysql-official.svg';
import img_angular from '../../../assets/img/angular.svg';
import img_node from '../../../assets/img/node-js.svg';

const LANGUAGES ={
    'Python': img_Python,
    'JavaScript': img_JavaScript,
    'HTML': img_HTML,
    'Flutter': img_flutter,
    'FireBase': img_FireB,
    'MySQL': img_MySQL,
    'Angular': img_angular,
    'NodeJS': img_node
}


export default function ImageContainer({title, project, description, languages, link, secondLink}) {
    return (
        <li className="image-container">
                    <h2>{title}</h2>
                    <img src={project} alt={title}/>
                    <div className="overlay">
                        <p>
                            {description}
                        </p>
                        <div className='lenguajes'>
                            {languages.map((language, index) => (
                                <img title={language} src={LANGUAGES[language]} alt={index}/>
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