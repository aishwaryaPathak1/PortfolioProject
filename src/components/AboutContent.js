import './AboutContentStyles.css';

import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import react1 from '../assets/project1.jpg';
import react2 from '../assets/project3.jpg';

const AboutContent = () => {
    const[data,setData] = useState([]);
    useEffect(()=>{
      fakestore();
    },[]);
    const fakestore = async()=>{
        const response = await fetch("https://fakestoreapi.com/products/category/jewelery");
        const jsondata = await response.json();
        setData(jsondata);
        console.log(jsondata);
      
      }
  return (
    <div className='about'>
    <div className='left'>
    <h1>Fake API data...</h1>
    {data.map((val)=>{
        return(
            <div>
            
            <p>Title:{val.title}</p>
            <h4>Price:{val.price}</h4>
            </div>
        )
    })}
        {/* <h1>Who Am I?</h1>
        <p>I am a react developer. I create responsive, secure websites for my client.</p> */}
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
