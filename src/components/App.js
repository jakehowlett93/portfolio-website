import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Cards from '../components/cards';
import Header from '../components/header';
import './app.css'

const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <nav className="header">
                    <Header />
                </nav>
                <main className="content">
                    <Route path="/" exact component={Cards} />       
                </main>  
            </BrowserRouter>
          
        </div>
    );
};

export default App;