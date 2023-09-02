import './App.css';
import './index.css';
import {useState} from 'react';
import Sidebar from './Sidebar.jsx'
import NavBar from './NavBar.jsx';
import Background from "./Background.jsx";


function App() {

    return (
        <div>
            {/* <iframe className="SpotifyPlayer" src="https://open.spotify.com/embed/track/1y4vvMeQPkzMTqHpRpzaDb?utm_source=generator&theme=0" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> */}
            <Background></Background>
            <NavBar></NavBar>
            <div id="Container">
                <Sidebar></Sidebar>
                <div id="ContentContainer">
                    <h1 id="Title"></h1>
                    <div id="Content"></div>        
                </div>
            </div>
        </div>
);
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
