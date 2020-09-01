import React from 'react';
import '../index.css';



const CurrentProject = () => {
    return (
        <main className="project-container">
                <h1 className="project-title">Draw Stuff / CS50</h1>
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
                    Alongside this project I have been working my way through harvards introduction to computer science class (CS50) online and i'm about half way through. 
                    I started the course as I believe knowing some computer science and what is happening at a lower level in my code will make me a better programmer, it's
                    also fascinating to learn about.
                </p>
                

        </main>
            
    )
}

export default CurrentProject;