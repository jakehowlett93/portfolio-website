import React from 'react';
import '../index.css';

const smallImage = require("../../../assets/smashdown-thumbnail.png")
const largeImage = require("../../../assets/smashdown.png")

const CurrentProject = () => {
    return (
        <main className="project-container">

                <h1 className="project-title">Current Project</h1>
                <p className="project-description">some description about ddlkjs lksjd flskjflskjd flksd jflskj flsdj flsj flskdjf sl;djf;slfj ;lsj fl'asjflajks flaj fl;sjd flsdjf lskdjfspdfj pow jf;wljf w;elkf p;sodkpf oskf ;lsekf </p>
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

export default CurrentProject;