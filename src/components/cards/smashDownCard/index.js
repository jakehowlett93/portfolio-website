import React from 'react';
import { Link } from 'react-router-dom';

const SmashdownCard = () => {
    return (
        <Link to='/smashdown' className="card-link">
            <div className="card">
                <h3 className="card-title">Smashdown tracker</h3>
                <p className="card-subtitle">JS jQuery CSS HTML</p>
                <img className="card-image" src={ require("../../../assets/smashdown-thumbnail.png") } alt="Smashdown project" />
            </div>
        </Link>
    );
};

export default SmashdownCard;