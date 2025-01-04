import React from 'react';
import './SkillSlides.scss'; // Estilos en SASS
import SlidesImage from './slide/slideImage';
import items from './skills';

const SkillSlides = () => {
    const itemslist = items.concat(items)
    return (
        <div className='slider'>
            <div className='slide-track'>
                {itemslist.map((item, index) => (
                    <SlidesImage url={item.url} name={item.name}></SlidesImage>
                ))}
            </div>
        </div>
    );
};

export default SkillSlides;