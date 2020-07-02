import React from 'react';
import '../index.css';

const smallImage = require("../../../assets/movie-search-thumbnail.png")
const largeImage = require("../../../assets/movie-search.png")

const MovieSearch = () => {
    return (
        <main className="project-container">
                <h1 className="project-title">OMDb Searcher</h1>
                <p className="project-description">
                    This was a personal project made to practice using React, Redux and Redux-thunk. It is a webpage that allows the user to search the
                    Open Movie Database for movies, it then show the user up to 10 movies that match their search. The user can click on any of the movies
                    in this list to get more details.
                </p>
                <p className="project-description">
                    I built the page using React, its a fairly simple page consisting of just 4 components. The main focus of this project was using Redux along
                    with the Redux-thunk middleware. I enjoyed working with Redux and found using action creators and reducers to handle state felt quite intuitive.
                    I used Redux-thunk to give action creators the ability to return a function which made using async code within the actions much easier. To achieve 
                    the look i used CSS with the flex display, which also means the page is responsive and adjusts to different screen sizes.
                </p>
                <p className="project-description">
                    I havent fully completed the project yet as i still have some unit tests to write which I have been slowly doing between other projects.
                </p>
                <a className="project-link" href="https://jh-movie-search.netlify.app/">Visit the site</a>
                <a className="project-link" href="https://github.com/jakehowlett93/movie-search">Visit the repository.</a>
                <img 
                    className="project-image" 
                    src={smallImage} 
                    srcSet={`${smallImage} 424w, ${largeImage} 1149w`}
                    sizes="(max-width: 600px) 80vw"
                    alt=""
                />
        </main>
            
    )
}

export default MovieSearch;