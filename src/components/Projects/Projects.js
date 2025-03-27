import React, { useEffect, useRef } from "react";
import './Projects.css'
import ImageContainer from './info_project/ImageContainer';
import ClassroomP from '../../assets/img/classroomProject.webp';
import VehicleC from '../../assets/img/VehicleCare.webp';
import rentago from '../../assets/img/rentago.webp';
import mym from '../../assets/img/mym-page.webp'




function Projects() {
    const description1 = 'Web application where the work plan of the teachers of the Universidad Libre is managed, which was a Classroom Project where the 2nd place was occupied in the entire university, Barranquilla section.';
    const description2 = 'Mobile application that provides preventive and corrective maintenance suggestions for users, offering care recommendations';
    const description3 = 'Car rental web application with security by hashing passwords and using authentication tokens';
    const description4 = 'Web application for a bakery where customers can view products and their most relevant information (in development)'
    const lenguajes1 = ['Python', 'JavaScript', 'HTML', 'MySQL'];
    const lenguajes2 = ['Flutter'];
    const lenguajes3 = ['Angular', 'NodeJS', 'MySQL'];
    const lenguajes4 = ['NextJS', 'Tailwind']

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

    return(
        <section id='projects' className='info'>
            <h1 ref={projectRef}>
                PROJECTS
            </h1>
            <ul className='two-column-list'>
                <ImageContainer title='Work Plan Managament' project={ClassroomP} description={description1} languages={lenguajes1} link='https://github.com/MauricioMolina12/ClassroomProject'></ImageContainer>
                <ImageContainer title='Vehicle maintenance' project={VehicleC} description={description2} languages={lenguajes2} link='https://github.com/Samue2408/VehicleCare'></ImageContainer>   
                <ImageContainer title='RENTA GO' project={rentago} description={description3} languages={lenguajes3} link='https://github.com/Samue2408/Reserva_Vehiculos' secondLink='https://github.com/MauricioMolina12/Node-JS-Proyect'></ImageContainer>     
                <ImageContainer title='M&M cake shop' project={mym} description={description4} languages={lenguajes4} linkPage='https://mym-page.vercel.app/'/>                           
            </ul>

        </section>  
    );
}

export default Projects