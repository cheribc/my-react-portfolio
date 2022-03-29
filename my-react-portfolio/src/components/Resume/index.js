import React from 'react';

function Resume() {
    return (
        <section className="my-5">
            <div className="my-2">
            <p>
                You can download my resume here: <a href="https://www.myperfectresume.com/me/heather-cooper">resume</a>
            </p>
            <h3>Front-end Libraries</h3>
            <ul className="skills">
                <li>Bootstrap</li>
                <li>jQuery</li>
                <li>Handlebars</li>
                <li>EJS</li>
                <li>React</li>
            </ul>
            <h3>Responsive Web Design</h3>
            <ul className="skills">
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
            <h3>JavaScript Algorithms and Data Structures</h3>
            <ul className="skills">
                <li>ES6</li>
                <li>Object-Oriented-Programming</li>
                <li>Model View Container</li>
                <li>Single Page Applications</li>
            </ul>

            <h3>API/Microservices</h3>
            <ul className="skills">
                <li>Node.js</li>
                <li>AJAX</li>
                <li>Express.js</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    </section>
    );
}

export default Resume;