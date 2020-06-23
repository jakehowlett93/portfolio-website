import React from 'react';

import CurrentProjectCard from './currentProjectCard';
import './index.css'

const Cards = () => {
    return (
        <main className="card-container">
            <CurrentProjectCard />
            <CurrentProjectCard />
            <CurrentProjectCard />
            <CurrentProjectCard />
        </main>
    )
}

export default Cards;