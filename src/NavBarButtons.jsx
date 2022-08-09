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
    content.textContent = "Testing about";
}

function Games() {
    // Set title
    let title = document.getElementById("Title");
    title.textContent = "Games I like";

    // Set content
    let content = document.getElementById("Content");
    content.textContent = "Testing games";
}

export default NavBarButtons;