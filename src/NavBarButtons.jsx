import "./Style.css";

function NavBarButtons() {
    let array = ["ABOUT", "GAMES"]

    return array.map((text) => {
        return <button className="NavBarButton" id={text} onClick={() => NavBarButtonAction(text)}>{text}</button>
    })
}


function NavBarButtonAction(text) {
    switch (text) {
        case "ABOUT":
            About();
            break;
        case "GAMES":
            Games();
            break;
        default:
            break;
    }

    ScrollUp();
}

// Scroll to the top
function ScrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function About() {
    // Set title
    let title = document.getElementById("Title");
    title.textContent = "ABOUT";

    // Set content
    let content = document.getElementById("Content");
    content.textContent = "";
    
    let paragraphs = ["My name is Zaojia Zhao, usually I go by Ben so people don't have to stare at my name and try to figure out how it should be pronounced.",
    "I am currently pursuing B.S. of Computer Science at University of California, Davis. I lived a more \"artistic\" life than a guy sitting in front of the computer all the time when I was young. My parents blame my deviation of interest from music to computers on games. But I like them, I really do!",
    "I enjoy graphics, drama, music and overall experience throughout the course. Compared to movies, games allow me to interact and get feedbacks for my behavior within the design and guidelines of game designers",
    ""];

    for (let i = 0; i < paragraphs.length; i++) {
        var p = document.createElement("p");
        p.textContent = paragraphs[i];
        content.appendChild(p);
    }
}

function Games() {
    // Set title
    let title = document.getElementById("Title");
    title.textContent = "Games I like";

    // Set content
    let content = document.getElementById("Content");
    content.textContent = "";
    
    let paragraphs = [];

    for (let i = 0; i < paragraphs.length; i++) {
        var p = document.createElement("p");
        p.textContent = paragraphs[i];
        content.appendChild(p);
    }
}

export default NavBarButtons;