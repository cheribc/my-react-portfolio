import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {


    const [projects] = useState([
    {
        name: 'community-page1',
        description: 'MERN Stack',
        link: "https://restful--fitness.herokuapp.com/login",
        repo: "https://github.com/Shadae96/Restful-Fitness"
    },
    {
        name: 'blackpanther_image',
        description: '3rd Party API',
        link: "https://nsoroma.github.io/Guardians-of-the-Code-Galaxy/",
        repo: "https://github.com/nsoroma/Guardians-of-the-Code-Galaxy"
    },
    {
        name: 'note-screenshot2',
        description: 'Node.js/Express.js',
        link: "https://expressjs-notes.herokuapp.com/",
        repo: "https://github.com/cheribc/Note-taker-expressjs"
    },
    {
        name: 'generated-password',
        description: 'JavaScript, HTML/CSS',
        link: "https://cheribc.github.io/JS-Password-Generator/",
        repo: "https://github.com/cheribc/JS-Password-Generator"
    },
    {
        name: 'question-demo',
        description: 'JavaScript, HTML/CSS',
        link: "https://cheribc.github.io/JS-Code-Quiz/",
        repo: "https://github.com/cheribc/JS-Code-Quiz"
    },
]);

    return (
    <div>
        <div className="flex-row">
            {projects.map((project, idx) => (
                <Project
                project={project}
                key={"project" + idx}
                />
            ))}
        </div>
    </div>
    );
};

export default Portfolio;