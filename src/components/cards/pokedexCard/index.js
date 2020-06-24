import React from 'react';

const PokedexCard = () => {
    return (
        <div className="card">
            <h3 className="card-title">PokeAPI Pokedex</h3>
            <p className="card-subtitle">JS HTML CSS</p>
            <img className="card-image" src={ require("../../../assets/pokedex-thumbnail.png") } alt="Pokedex project" />
        </div>
    );
};

export default PokedexCard;