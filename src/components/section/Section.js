import React from 'react';
import arrow from "../../assets/images/arrow.png";
import "./section.css"

const Section = () => {
  return (
    <div className='secton d-flex m-5'>
        <div>
            <h1>Ready to dive into HABOT?</h1>
            <p>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
            <button>Sign up Today ! <span className='ms-5'><img src={arrow} alt='arrow'/></span></button>
        </div>
        <div className='sec d-flex'>
            <div>
                <button>Abu Dhabi</button>
                <button>Sharjah & Ajman</button>
                <button>Ras Al Khaimah</button>

            </div>
            <div>
                <button>Dubai</button>
                <button>Fujairah</button>
                <button>Umm Al Quwain</button>

            </div>
        </div>
    </div>
  )
}

export default Section