import React from 'react';
import './Projects.css'
import ImageContainer from './info_project/ImageContainer';
import ClassroomP from '../../assets/img/classroomProject.png';
import VehicleC from '../../assets/img/VehicleCare.png';
import rentago from '../../assets/img/rentago.png';

function Projects() {
    const description1 = 'Web application where the work plan of the teachers of the Universidad Libre is managed, which was a Classroom Project where the 2nd place was occupied in the entire university, Barranquilla section.';
    const description2 = 'Mobile application that provides preventive and corrective maintenance suggestions for users, offering care recommendations';
    const description3 = 'Car rental web application with security by hashing passwords and using authentication tokens';
    const lenguajes1 = ['Python', 'JavaScript', 'HTML', 'MySQL'];
    const lenguajes2 = ['Flutter'];
    const lenguajes3 = ['Angular', 'NodeJS', 'MySQL'];

    return(
        <section id='projects' className='info'>
            <h1>
                PROJECTS
            </h1>
            <ul className='two-column-list'>
                <ImageContainer title='Work Plan Managament' project={ClassroomP} description={description1} languages={lenguajes1} link='https://github.com/MauricioMolina12/ClassroomProject'></ImageContainer>
                <ImageContainer title='Vehicle maintenance' project={VehicleC} description={description2} languages={lenguajes2} link='https://github.com/Samue2408/VehicleCare'></ImageContainer>   
                <ImageContainer title='RENTA GO' project={rentago} description={description3} languages={lenguajes3} link='https://github.com/Samue2408/Reserva_Vehiculos' secondLink='https://github.com/MauricioMolina12/Node-JS-Proyect'></ImageContainer>                                
            </ul>

        </section>
    );
}

export default Projects