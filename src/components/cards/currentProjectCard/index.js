import React from 'react';

const CurrentProjectCard = () => {
    return (
        <div className="card">
            <h3 className="card-title">React-redux course</h3>
            <p className="card-subtitle">React Redux</p>
            <img className="card-image" src={ require("../../../assets/current-project-thumbnail.png") } alt="current Project" />
        </div>
    );
};

export default CurrentProjectCard;