import "./FooterStyles.css";
import React from 'react';
import {FaHome,FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <div>
                    <p>A1,B-30/31,Freedom Fighter Enclave,Saket.</p>
                    <p>New Delhi,India.</p>
                </div>
                </div>
                <div className="phone">
                <h4>
                <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                8601794664

                </h4>
                </div>
                <div className="email">
                <h4>
                <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                aishwaryapathak48@gmail.com

                </h4>


                </div>
               
                

                
           

        </div>
        <div className="right">
            <h4>About the company</h4>
            <p>This is Aishwarya Pathak working as a Frontend Developer. I enjoy discussing new project and design challenges.</p>
            <div className="social">
            <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>
            <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}}/>
            <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Footer
