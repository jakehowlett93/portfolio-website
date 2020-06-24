import React from 'react'
import { Link } from 'react-router-dom'

import './index.css';

const Header = () => {
    return (
        <div className="header-container">
            <img className="logo" src={ require("../../assets/logo.png") } alt="Jake Howlett" />
            <nav className="nav-span-container">
                <div className="nav-span">
                    <Link to="/" className="header-link">
                        Home
                    </Link>
                </div>
                <div className="nav-span">
                    <Link to="/cv" className="header-link">
                        CV
                    </Link>
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