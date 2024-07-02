import React from 'react';
import social from "../../assets/images/social.png";
import check from "../../assets/images/check.png";

import "./main.css"

const Main = () => {
    return (
        <div className='main d-flex flex-wrap justify-content-evenly'>
            <div className='mt-5'>
                <img src={social} alt='img' />
            </div>
            <div className='ck'>
                <a id='buyer' href='#'>Buyer</a>
                <a id="supply" href='#'>Supplier</a>
            
                <p className='text-white mt-5'><span><img src={check} alt='img' /></span>  Post your requirements.</p>
                <p className='text-white'><span><img src={check} alt='img' /></span> Sit back for multiple suppliers to contact you.</p>
                <p className='text-white'><span><img src={check} alt='img' /></span> Choose among the suppliers based on the ratings and reviews</p>
            </div>
        </div>
    )
}

export default Main