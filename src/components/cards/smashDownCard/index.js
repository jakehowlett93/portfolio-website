import React from 'react';
import { Link } from 'react-router-dom';

const SmashdownCard = () => {
    return (
        <Link to='/smash-down' className="card-link">
            <div className="card">
                <div className="card-info">
                    <div className="card-circle">
                        <h3 className="card-title extra-padding">Smashdown <br/> tracker</h3>
                        <p className="card-subtitle">JS jQuery CSS HTML</p>
                    </div>
                </div>
                <img className="card-image" src={ require("../../../assets/smashdown-thumbnail.png") } alt="Smashdown project" />
            </div>
        </Link>
    );
};

export default SmashdownCard;