import "./Style.css";
import NavBarButtons from "./NavBarButtons.jsx";
import logo from './logo.png';

function NavBar(props) {
    return (
        <div className="NavBar">
          <img className="Logo" src={logo} alt="Logo cannot be displayed" onClick={() => {window.location.reload(false)}}/>
          <div className="NavBarButtonContainer">
            <NavBarButtons props={props}>
            </NavBarButtons>
          </div>
        </div>
    );
}


export default NavBar;