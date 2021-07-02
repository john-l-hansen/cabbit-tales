// import logo from './logo.svg';
import './App.css';

import facebook from './img/facebook.svg';
import instagram from './img/instagram.svg';
import twitter from './img/twitter.svg';
import youtube from './img/youtube.svg';
import logo from './img/logo.png';

import Button from './Components/Button.js';

function App() {
  return (
    <div className="App">





      {/* Working on top nav */}
      <div className="Top-nav">
        <a
        href="https://google.com" alt="cabbit facebook">
          <img src={facebook} />
        </a>
        <a
        href="https://google.com" alt="cabbit instagram">
          <img src={instagram} />
        </a>
        <a
        href="https://google.com" alt="cabbit twitter">
          <img src={twitter} />
        </a>
        <a
        href="https://google.com" alt="cabbit youtube">
          <img src={youtube} />
        </a>
      </div>
      {/* End top nav */}







      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
        Welcome to the wonderful world of Cabbit Tales! An interactive story app!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Download on the App Store free today!</Button>
        </a>
      </header>
    </div>
  );
}

export default App;
