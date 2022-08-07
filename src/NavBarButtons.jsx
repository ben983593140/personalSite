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
            About(text);
            break;
        case "GAMES":
            Games(text);
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

function About(text) {
    // Set title
    let title = document.getElementById("ContentTitle");
    title.textContent = text;
    console.log(text);

    // Set content
}

function Games(text) {
    // Set title
    let title = document.getElementById("ContentTitle");
    title.textContent = text;

    // Set content
}

export default NavBarButtons;