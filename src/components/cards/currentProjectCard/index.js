import React from 'react';
import { Link } from 'react-router-dom';

const CurrentProjectCard = () => {
    return (
        <Link to='/current-project' className="card-link">
            <div className="card">
                <h3 className="card-title">Current Project</h3>
                <p className="card-subtitle">placeholder text and image</p>
                <img className="card-image" src={ require("../../../assets/current-project-thumbnail.png") } alt="current Project" />
            </div>
        </Link>
    );
};

export default CurrentProjectCard;