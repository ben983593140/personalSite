import "./Style.css";

function NavBarButtons(props) {
    let array = ["ABOUT", "GAMES"]

    return array.map((text) => {
        return <button className="NavBarButton" id={text} onClick={() => NavBarButtonAction(props, text)}>{text}</button>
    })
}


function NavBarButtonAction(props) {
    props.updateTitle(props.text);
    props.updateContent("Updated");
    // Scroll to the top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



export default NavBarButtons;