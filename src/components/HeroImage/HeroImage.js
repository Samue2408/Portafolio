import React from "react";
import './HeroImage.css'
import profile from '../../assets/img/profile.png';

function HeroImage() {
    return (
        <div id='home' className='home'>          
          <img loading="lazy" src={profile} alt="profile" id='picture__profile'/>
          <div className='home_name'>
            <h1>Samuel</h1> 
            <h2>Maldonado</h2>
            <h3 className='home_details'>Full stack <p>web</p> developer</h3>       
          </div>          
        </div>
    );
}

export default HeroImage;