import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Cards from '../components/cards';
import Header from '../components/header';
import Contact from '../components/contact';
import CurrentProject from './projects/currentProject';
import MovieSearch from './projects/movieSearch';
import Pokedex from './projects/pokedex';
import SmashDown from './projects/smashDown';
import './app.css';

const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <nav className="header">
                    <Header />
                </nav>
                <main className="content">
                    <Route path="/" exact component={Cards} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/current-project" exact component={CurrentProject} />
                    <Route path="/movie-search" exact component={MovieSearch} />
                    <Route path="/pokedex" exact component={Pokedex} />
                    <Route path="/smash-down" exact component={SmashDown} />
                </main>  
            </BrowserRouter>
          
        </div>
    );
};

export default App;