import React from 'react';
import '../index.css';



const MovieSearch = () => {
    return (
        <main className="project-container">
                <h1 className="project-title">Draw Stuff</h1>
                <p className="project-description">
                    I have been working as part of a two person team to develop a web app, it will be an online game similar to Telestrations. 
                </p>
                <p className="project-description">
                    I have spent most of my time so far creating modular react components, writing functions that are used to control state and 
                    writing tests for all my code using Jest. I have also been using Flow for static type checking, GIT for version control, and NodeJS with Socket.io 
                    for the backend. I have done very little work on the back end so far but I did implement server side validation to ensure only the admin could
                    start the game.
                </p>
                <p className="project-description">
                    Throughout this project I have been responsible for deciding when i need to use external libraries, researching relevant libraries and then installing 
                    them using NPM. To manage the project we have been taking an agile approach and using a card system on the website trello to keep track of what needs 
                    to be done and whos working on what.
                </p>
                <p className="project-description">
                    The repository for this project is not owned by me and is set to private however I have taken out some of the components and actions ive worked
                    on and put them in a 
                    <a className="project-link" href="https://github.com/jakehowlett93/movie-search"> repository here.</a>
                </p>
                

        </main>
            
    )
}

export default MovieSearch;