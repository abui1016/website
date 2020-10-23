import React from 'react';
import './AboutMe.css';

const AboutMe = props => (

    <div className="container">
        <div className="photo"><img src={require("./pictures/AndyBui1.jpg")}  alt="N/A"/></div>
        <div className="bib">
            <span>Nice to meet you!</span>
            <p>
                I'm Andy and I currently study Computer Science and Engineering at UC Merced.
                Welcome to my website! This is my first coding project I have ever made with React and 
                I am very excited to create more amazing apps as I continue my journey as a web developer. 
                This website is currently a work in progress and I hope to continually develop it as I learn more
                about React, thanks for checking it out!
            </p>
        </div>
    </div>   
);

export default AboutMe;