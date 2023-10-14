import './App.css';
import './index.css';
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar.jsx'
import Background from "./Background.jsx";
import logo from './logo.png';
import resume from './Zaojia Zhao Resume.jpg';
import dmc from './dmc3.jpg'
const FADE_SPEED = 0.04

class App extends React.Component{

    constructor(props) {
        super(props);

        this.state = {activeButton: "About"};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(buttonText) {
        var container = document.getElementById("Container");

        // Old content fade out
        const promise = new Promise((resolve, reject) => {
            var op = 1
            var timer = setInterval(() => {
                if (op <= 0) {
                    clearInterval(timer);
                    resolve();
                }
                
                container.style.opacity = op;
                container.style.filter = 'alpha(opacity=' + op + ")";
                op -= FADE_SPEED
            }, 10);
        });

        // Wait for fade out to finish
        promise
        .then(() => {
            this.setState({activeButton: buttonText});

            // New content fade in
            ScrollUp();

            var op = 0.1
            var timer = setInterval(() => {
                if (op >= 1)
                    clearInterval(timer);

                container.style.opacity = op;
                container.style.filter = 'alpha(opacity=' + op + ")";
                op += FADE_SPEED
            }, 10);
        });
    }

    renderContent() {
        switch (this.state.activeButton) {
            case "About":
                return <About></About>;
            case "Projects":
                return <Projects></Projects>;
            case "Resume":
                return <Resume></Resume>;
            case "Links":
                return <Links></Links>;
        }
    }

    render() {
    var array = ["About", "Projects", "Resume", "Links"];

    return (
        <div>
            {/* <iframe className="SpotifyPlayer" src="https://open.spotify.com/embed/track/1y4vvMeQPkzMTqHpRpzaDb?utm_source=generator&theme=0" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> */}
            <Background></Background>
            <div className="NavBar">
                <img className="Logo" src={logo} alt="Logo cannot be displayed" onClick={() => {window.location = '/'}}/>
                <div className="NavBarButtonContainer">
                    <div>
                        {array.map((buttonText) => { return <button className="NavBarButton" key={buttonText} onClick={() => this.handleClick(buttonText)}>{buttonText}</button>})}
                    </div>
                </div>
            </div>
            <div id="Container">
                <Sidebar></Sidebar>
                <div id="ContentContainer">
                    <h1 id="Title">
                        {this.state.activeButton}
                    </h1>
                    <div id="Content">
                        {this.renderContent()}
                    </div>        
                </div>
            </div>
        </div>
    );
    }
}

// Scroll to the top of the page
function ScrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function About() {
    return (
        <div id="AboutText">
            <p>
                I graduated from <a href="https://www.ucdavis.edu/">University of California, Davis</a> with Bachelor's Degree in 
                Computer Science in 2023. My enthusiasm in programming started from video games, I still remember the day that I was
                terrified by the name "Devil May Cry 3" and thought it was a horror game, but eventually amazed by the action and excitement
                that Capcom brought to a young kid as myself.
            </p>
            <br></br>
            <img src={dmc} ></img>
            <br></br>
            <p>
                Currently, I am pursuing a career as a software engineer. I like reading various guides on game development 
                and I am designing the game I want to create in one day. Although my passion was inspired by video games, I 
                see myself not limited to game development. Throughout my college years, I learned various concepts and 
                problems that computer scientists solved, and I am deeply attracted to software development and problem solving.
                I have written a couple programs to automate my personal streaming setup, and they work like a charm!
            </p>
        </div>

    );
}

function Projects() {
    return <p>Finally!</p>
}

function Resume() {
    return (
        <div >
            <p padding>
                <a href='Zaojia Zhao Resume.pdf' download="Zaojia Zhao Resume.pdf">Click Here</a> to download my resume in PDF.
            </p>
            <br></br>
            <br></br>
            <img src={resume}/>
        </div>
    );
}

function Links() {
    return (
        <div>
            <a href="https://www.linkedin.com/in/zaojia-ben-zhao-238499184/" target="_blank">LinkedIn</a>
            <br></br>
            <a href="https://github.com/ben983593140" target="_blank">GitHub</a>
            <br></br>
            <br></br>
            <p>
                UI design inspired by <a href="https://www.google.com/search?q=nier+automata" target='_blank'><b>NieR:Automata</b></a>
            </p>
        </div>

    );
}

export default App;
