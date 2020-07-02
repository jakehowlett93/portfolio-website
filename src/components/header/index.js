import React from 'react'
import { Link } from 'react-router-dom'

import './index.css';
import Pdf from '../../assets/jake-howlett-CV.pdf'

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo">
                <div className="logo-text">
                    Jake <br/> Howlett
                </div>
            </div>
            <nav className="nav-span-container">
                <div className="nav-span">
                    <Link to="/" className="header-link">
                        Home
                    </Link>
                </div>
                <div className="nav-span">
                    <a className="header-link" href={Pdf}>CV</a>
                </div>
                <div className="nav-span">
                    <Link to="/contact" className="header-link">
                        Contact
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;