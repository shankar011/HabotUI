import React from 'react';
import logo from '../../assets/images/logo.png';
import "./navbar.css";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between w-100">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt='Logo' className="navbar-logo" />
                    </a>
                    <div className="find d-flex align-items-center">
                        <li className="nav-item d-flex me-5 dropdown list-unstyled">
                            <a className='me-5'>Find Suppliers</a>
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <button type="button" className="btn btn-outline-success ms-3">Login / Sign Up</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
