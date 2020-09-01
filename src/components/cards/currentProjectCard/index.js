import React from 'react';
import { Link } from 'react-router-dom';

const CurrentProjectCard = () => { //gotta change card-title to project-title in the h3
    return (
        <Link to='/current-project' className="card-link">
            <div className="card">
                <div className="card-info">
                    <div className="card-circle">
                        <h3 className="card-title extra-padding">Current <br/> Project</h3>
                        <p className="card-subtitle">React Computer science</p>
                    </div>
                </div>
                <img className="card-image" src={ require("../../../assets/current-project-thumbnail.png") } alt="current Project" />
            </div>
        </Link>
    );
};

export default CurrentProjectCard;