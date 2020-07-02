import React from 'react';

import CurrentProjectCard from './currentProjectCard';
import MovieSearchCard from './movieSearchCard';
import PokedexCard from './pokedexCard';
import SmashdownCard from './smashDownCard';
import './index.css'

const Cards = () => {
    return (
        <main className="card-container">
            <CurrentProjectCard />
            <MovieSearchCard />
            <PokedexCard />
            <SmashdownCard />
        </main>
    );
};

export default Cards;