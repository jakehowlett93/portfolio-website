import React from 'react';

const SmashdownCard = () => {
    return (
        <div className="card">
            <h3 className="card-title">Smashdown tracker</h3>
            <p className="card-subtitle">JS jQuery CSS HTML</p>
            <img className="card-image" src={ require("../../../assets/smashdown-thumbnail.png") } alt="Smashdown project" />
        </div>
    );
};

export default SmashdownCard;