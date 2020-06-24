import React from 'react';
import { Link } from 'react-router-dom';

const MovieSearchCard = () => {
    return (
        <Link to='/movie-search' className="card-link">
            <div className="card">
                <h3 className="card-title">OMDb searcher</h3>
                <p className="card-subtitle">React Redux(thunk)</p>
                <img className="card-image" src={ require("../../../assets/movie-search-thumbnail.png") } alt="Movie search project" />
            </div>
        </Link>
    );
};

export default MovieSearchCard;