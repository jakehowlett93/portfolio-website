import React from 'react';
import { Link } from 'react-router-dom';

const PokedexCard = () => {
    return (
        <Link to='/pokedex' className="card-link">
            <div className="card">
                <h3 className="card-title">PokeAPI Pokedex</h3>
                <p className="card-subtitle">JS HTML CSS</p>
                <img className="card-image" src={ require("../../../assets/pokedex-thumbnail.png") } alt="Pokedex project" />
            </div>
        </Link>
    );
};

export default PokedexCard;