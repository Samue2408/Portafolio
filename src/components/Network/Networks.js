import React from 'react';
import './Network.css'
import github from '../../assets/img/github.png';
import linke from '../../assets/img/social.png';
import gmail from '../../assets/img/gmail.png';

function Networks() {
    return (
        <div className='networks'>
        <a target='blank' title='GitHub' href='https://github.com/Samue2408'><img src={github} alt="github"/></a>
        <a target='blank' title='Linkedln' href='https://github.com/Samue2408'><img src={linke} alt="linkedln"/></a>
        <a target='blank' title='Gmail' href='mailto:samuelmaldonadom@gmail.com'><img src={gmail} alt="gmail"/></a>
    </div>
    );
  }
export default Networks;