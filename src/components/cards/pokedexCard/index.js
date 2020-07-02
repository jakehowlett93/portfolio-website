import React from 'react';
import { Link } from 'react-router-dom';

const PokedexCard = () => {
    return (
        <Link to='/pokedex' className="card-link">
            <div className="card">
                <div className="card-info">
                    <div className="card-circle">
                        <h3 className="card-title extra-padding" >PokeAPI <br/> Pokedex</h3>
                        <p className="card-subtitle">JS HTML CSS</p>
                    </div>
                </div>
                <img className="card-image" src={ require("../../../assets/pokedex-thumbnail.png") } alt="Pokedex project" />
            </div>
        </Link>
    );
};

export default PokedexCard;