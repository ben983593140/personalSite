import './App.css';
import './index.css';
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar.jsx'
import NavBar from './NavBar.jsx';
import Background from "./Background.jsx";
import NavBarButtons from "./NavBarButtons.jsx";
import logo from './logo.png';

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
                <img className="Logo" src={logo} alt="Logo cannot be displayed" onClick={() => {window.location.reload(false)}}/>
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

// Scroll to the top
function ScrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function fadeOut(container) {
    var op = 1
        var timer = setInterval(() => {
            if (op <= 0) 
                clearInterval(timer);
            
            
            container.style.opacity = op;
            container.style.filter = 'alpha(opacity=' + op + ")";
            op -= FADE_SPEED
        }, 10);
}

function fadeIn(container) {
    var op = 0.1
    var timer = setInterval(() => {
        if (op >= 1)
            clearInterval(timer);

        container.style.opacity = op;
        container.style.filter = 'alpha(opacity=' + op + ")";
        op += FADE_SPEED
    }, 10);
}

function About() {
    return (
        <p className="Content">
            This is AboutDiv
            <a href="https://www.ucdavis.edu/">University of California, Davis</a>
        </p>
    );
}

function Projects() {
    return <p>Finally!</p>
}

function Links() {

}

function Resume() {

}

export default App;
