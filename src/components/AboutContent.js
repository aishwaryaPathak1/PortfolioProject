import './AboutContentStyles.css';

import React from 'react';
import {Link} from 'react-router-dom';
import react1 from '../assets/project1.jpg';
import react2 from '../assets/project3.jpg';

const AboutContent = () => {
  return (
    <div className='about'>
    <div className='left'>
        <h1>Who Am I?</h1>
        <p>I am a react developer. I create responsive, secure websites for my client.</p>
        <Link to="/contact">
            <button className='btn'>CONTACT</button>
        </Link>
    </div>
    <div className='right'>
        <div className='img-container'>
            <div className='img-stack top'>
                <img src={react1} className='image' alt="true" width="400px" height="300px"  />
            </div>
           
            <div className='img-stack bottom'>
                <img src={react2} className='image' alt="true" width="400px" height="300px"/>
            </div>
        </div>
        
        
    </div>
      
    </div>
  )
}

export default AboutContent
