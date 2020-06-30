import React from 'react';
import { Link } from 'react-router-dom';

const MovieSearchCard = () => {
    return (
        <Link to='/movie-search' className="card-link">
            <div className="card">
                <div className="card-info">
                    <div className="card-circle">
                        <h3 className="card-title">OMDb <br/> searcher</h3>
                        <p className="card-subtitle">React Redux(thunk)</p>
                    </div>
                </div>
                <img className="card-image" src={ require("../../../assets/movie-search-thumbnail.png") } alt="Movie search project" />
            </div>
        </Link>
    );
};

export default MovieSearchCard;