import React from 'react';
import logo_2 from "../../assets/images/logo2.png";
import insta from "../../assets/images/Instagram.png";
import fb from "../../assets/images/Facebook.png";
import twitter from "../../assets/images/Twitter.png";
import Linkedin from "../../assets/images/LinkedIn.png";

import"./footer.css";

const Footer = () => {
  return (
    <div className='footer '>
             <hr/> 
        <div className='d-flex justify-content-between'>
            
            <div className='d-flex'>
            <div className='logo_2'>
               <p> <img src={logo_2} alt='img'/></p>
                <p>© R Singhania</p>
            </div>
                <ul>
                    <li><b>Company</b></li>
                    <li>About</li>
                    <li>FAQ</li>
                </ul>
                <ul>
                    <li><b>Terms</b></li>
                    <li>Data privacy</li>
                    <li>Terms</li>
                    <li>Accessibility</li>
                </ul>
                <ul>
                <li>
                    <b>Related</b></li>
                    <li>Find Buyer</li>
                    <li>Feedback</li>
                </ul>
            </div>
            <div >
            <ul className='d-flex mt-4'>
                <li><a href='https://www.linkedin.com/in/shankar-suryavanshi/'> <img src={Linkedin} alt='img'/> </a> </li>
                <li><a href='https://x.com/?lang=en'> <img src={twitter} alt='img'/> </a> </li>
                <li><a href='https://www.facebook.com/'> <img src={fb} alt='img'/> </a> </li>
                <li className='me-2'><a href='#'> <img src={insta} alt='img'/> </a> </li>
            </ul>
        </div>
        </div>

        <hr/> 

    </div>
  )
}

export default Footer