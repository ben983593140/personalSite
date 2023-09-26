import "./Style.css";
import React, { useState, useEffect } from 'react';
import AboutDiv from "./AboutDiv.jsx";
import {createRoot} from 'react-dom/client';

const FADE_SPEED = 0.04

function NavBarButtons() {
    const [activeButton, setActiveButton] = useState("About")
    var array = ["About", "Projects", "Resume", "Links"]

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
                    About();
                    break;
                case "Projects":
                    Projects();
                    break;
                case "Links":
                    Links();
                    break;
                case "Resume":
                    Resume();
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
    })

    return array.map((text) => {
        return <button className="NavBarButton" key={text} onClick={() => setActiveButton(text)}>{text}</button>
    })
}

// Scroll to the top
function ScrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function About() {
    // Set title
    var title = document.getElementById("Title");
    title.textContent = "About";

    // Set content
    var content = document.getElementById("Content");
    var contentContainer = content.parentNode;
    // contentContainer.replaceChild(<AboutDiv></AboutDiv>, content);

}

function Projects() {
    // Set title
    var title = document.getElementById("Title");
    title.textContent = "Projects";

    // Set content
    var content = document.getElementById("Content");
    content.textContent = "";
    
    var paragraphs = [];

    for (var i = 0; i < paragraphs.length; i++) {
        var p = document.createElement("p");
        p.textContent = paragraphs[i];
        content.appendChild(p);
    }
}

function Links() {
    
}

function Resume() {

}

export default NavBarButtons;