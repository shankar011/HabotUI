import React from 'react';
import person from "../../assets/images/person.png";
import list from "../../assets/images/list.png";
import search from "../../assets/images/search.png";
import hands from "../../assets/images/hands.png";
import plist from "../../assets/images/plist.png";
import clist from "../../assets/images/contactlist.png";



import "./card.css"

const Card = () => {
    return (
        <div>
            <div className='get'>
                <h1>Let Suppliers <span>Find You</span></h1>
                <button>Get Verified</button>
            </div>
            <div className='works'>
                <h2>How it works?</h2>
                <p>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
            </div>
            <div className='d-flex flex-wrap justify-content-center'>
                <div className='cards' id='card_1'>
                    <p><img src={person} alt='img' /></p>
                    <p>Select Your Role and Sign Up</p>
                </div>
                <div className='cards' id='card_2' >
                    <p><img src={hands} alt='img' /></p>
                    <p>Buyers Post Your Requirements</p>
                </div>
                <div className='cards' id='card_3'>
                    <p><img src={search} alt='img' /></p>
                    <p>Review, Select, and Contact the Best Suppliers</p>
                </div>
            </div>

            <div className='d-flex flex-wrap justify-content-center'>
                <div className='cards'>
                    <p><img src={plist} alt='img' /></p>
                    <p>Suppliers Complete your profile <br /> and get notified for opportunities</p>
                </div>
                <div className='cards'>
                    <p><img src={clist} alt='img' /></p>
                    <p>Contact to Buyers and Share  <br /> your Quote for the service</p>
                </div>
                <div className='cards'>
                    <p><img src={list} alt='img' /></p>
                    <p>Both the Parties can Connect <br /> and Make Business Leave a Feedback</p>
                </div>
            </div>



        </div>
    )
}

export default Card