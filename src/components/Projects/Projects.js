import React from 'react';
import './Projects.css'
import ImageContainer from './info_project/ImageContainer';
import ClassroomP from '../../assets/img/classroomProject.png';
import VehicleC from '../../assets/img/VehicleCare.png';

function Projects() {
    const description1 = 'Aplicación web donde se gestiona el plan de trabajo de los docentes de la Universidad Libre, el cual fue un Proyecto de Aula donde se ocupó el 2do puesto en toda la universidad, seccional Barranquilla'
    const description2 = 'Aplicación movil que proporciona sugerencias de mantenimiento preventivo y correctivo para los usuarios, ofreciendo recomendaciones de cuidado'
    const lenguajes1 = ['Python', 'JavaScript', 'HTML', 'MySQL']
    const lenguajes2 = ['Python', 'Flutter', 'FireBase']
    return(
        <section id='projects'>
            <h1>
                PROJECTS
            </h1>
            <ul className='two-column-list'>
                <ImageContainer title='Work Plan Managament' project={ClassroomP} description={description1} languages={lenguajes1} link='https://github.com/MauricioMolina12/ClassroomProject'></ImageContainer>
                <ImageContainer title='Vehicle maintenance' project={VehicleC} description={description2} languages={lenguajes2} link='https://github.com/Samue2408/VehicleCare'></ImageContainer>                
            </ul>

        </section>
    );
}

export default Projects