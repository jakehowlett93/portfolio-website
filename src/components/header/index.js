import React from 'react'
import { Link } from 'react-router-dom'

import './index.css';

const Header = () => {
    return (
        <div>
            <img className="logo" src={ require("../../assets/logo.png") } alt="Jake Howlett" />
            <nav className="nav-span-container">
                <span className="nav-span">
                    <Link to="/" className="link">
                        Home
                    </Link>
                </span>
                <span className="nav-span">
                    <Link to="/cv" className="link">
                        CV
                    </Link>
                </span>
                <span className="nav-span">
                    <Link to="/contact" className="link">
                        Contact
                    </Link>
                </span>
            </nav>
        </div>
    );
};

export default Header;