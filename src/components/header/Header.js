import React from 'react';
import bg from '../../assets/images/bg.png';
import bag from '../../assets/images/bag.png';
import location from '../../assets/images/location.png';
import "./header.css"


// import './header.css';

const Header = () => {
    return (
        <div  className='header'
            style={{
                backgroundImage: `url(${bg})`,
                // width: '100%',
                height: '500px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <h1 className='supply'>Are You a Supplier?</h1>
            <h5 className='explore'>Explore Matching Opportunities.</h5>
            <div className='group d-flex'>
                <div className="input-group flex-nowrap w-25 ">
                    <span className="input-group-text" id="addon-wrapping">
                        <img src={bag} alt="img" style={{ height: '20px' }} />
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search your required service here"
                        aria-label="Search"
                        aria-describedby="addon-wrapping"
                    />

                </div>
                <div className="input-group flex-nowrap w-25  ms-5">
                    <span className="input-group-text" id="addon-wrapping">
                        <img src={location} alt="img" style={{ height: '20px' }} />
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search your required service here"
                        aria-label="Search"
                        aria-describedby="addon-wrapping"
                    />

                </div>
                <button>
                    Search
                </button>
            </div>
            <p><b>Are you a buyer?</b>Click here if you are looking to post a requirements</p>
        </div>
    );
};

export default Header;
