import './App.css';
import './index.css';
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar.jsx'
import NavBar from './NavBar.jsx';
import Background from "./Background.jsx";
import NavBarButtons from "./NavBarButtons.jsx";
import logo from './logo.png';

const FADE_SPEED = 0.04

function App() {
    // State hook for button
    const [activeButton, setActiveButton] = useState("About");
    var array = ["About", "Projects", "Resume", "Links"];
    var contentText = "";

    useEffect(() => {
        // Old content fade out
        var container = document.getElementById("Container");
        
        const promise = new Promise((resolve, reject) => {
            // Fade out
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
            // Switch to new content
            switch (activeButton) {
                case "About":
                    contentText = <About></About>;
                    break;
                case "Projects":
                    contentText = Projects();
                    break;
                case "Links":
                    contentText = Links();
                    break;
                case "Resume":
                    contentText = Resume();
                default:
                    break;
            }

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
    });

    return (
        <div>
            {/* <iframe className="SpotifyPlayer" src="https://open.spotify.com/embed/track/1y4vvMeQPkzMTqHpRpzaDb?utm_source=generator&theme=0" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> */}
            <Background></Background>
            <div className="NavBar">
                <img className="Logo" src={logo} alt="Logo cannot be displayed" onClick={() => {window.location.reload(false)}}/>
                <div className="NavBarButtonContainer">
                    <div>
                        {array.map((buttonText) => { return <button className="NavBarButton" key={buttonText} onClick={() => setActiveButton(buttonText)}>{buttonText}</button>})}
                    </div>
                </div>
            </div>
            <div id="Container">
                <Sidebar></Sidebar>
                <div id="ContentContainer">
                    <h1 id="Title">
                        {activeButton}
                    </h1>
                    <div id="Content">
                        {() => {
                            switch (activeButton) {
                                case 'About':
                                    <About></About>;
                                    break;
                            }
                        }}
                        
                    </div>        
                </div>
            </div>
        </div>
    );
}

// Scroll to the top
function ScrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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

}

function Links() {

}

function Resume() {

}

export default App;
