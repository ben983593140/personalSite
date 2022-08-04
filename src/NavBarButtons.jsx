import "./Color.css";
import React from "react";
import "./Style.css";

function NavBarButtons() {
    let array = ["ABOUT", "GAMES"]

    return array.map((text) => {
        return <button className="NavBarButton" id={text} onClick={() => NavBarButtonAction(text)}>{text}</button>
    })
}


function NavBarButtonAction(id) {
    let button = document.getElementById(id);
}


export default NavBarButtons;