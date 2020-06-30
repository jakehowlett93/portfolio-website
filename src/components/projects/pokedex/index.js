import React from 'react';
import '../index.css';

const smallImage = require("../../../assets/pokedex-thumbnail.png")
const largeImage = require("../../../assets/pokedex.png")

const Pokedex = () => {
    return (
        <main className="project-container">
                <h1 className="project-title">Pokedex</h1>
                <p className="project-description">
                    This is a personal project that I completed to get some practice with making API requests using the async await syntax. I chose to use
                    the pokeAPI to practice as it is free to use and well documented.
                </p>
                <p className="project-description">
                    I built the page using plain HTML, CSS and JavaScript. Most of the work is done inside the handle submit function which calls a number of other
                    functions to make api requests and then display the information to the user.
                </p>    
                <p className="project-description">
                    I enjoyed the challenge of learning about asynchronous code and the concept of promises, aswell as testing such code with the jest library.
                </p>
                <a className="project-link" href="https://jake-pokedex.netlify.app/">Visit the site</a>
                <a className="project-link" href="https://github.com/jakehowlett93/pokedex-pokeapi">Visit the repository.</a>
                <img 
                    className="project-image" id="pokedex-image" 
                    src={smallImage} 
                    srcSet={`${smallImage} 323w, ${largeImage} 398w`}
                    sizes="(max-width: 800px) 80vw"
                    alt=""
                />
        </main>
            
    )
}

export default Pokedex;