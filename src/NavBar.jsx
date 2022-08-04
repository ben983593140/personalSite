import "./Color.css";
import "./Style.css";
import NavBarButtons from "./NavBarButtons.jsx";
import logo from './logo.png';

function NavBar() {
    return (
        <div className="Logo">
          <img src={logo} alt="Logo cannot be displayed"/>
          <div className="NavBarButtonContainer">
            <NavBarButtons>
            </NavBarButtons>
          </div>
        </div>
    );
}


export default NavBar;