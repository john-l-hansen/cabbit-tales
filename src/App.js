// import logo from './logo.svg';
import './App.css';

import facebook from './img/facebook.svg';
import instagram from './img/instagram.svg';
import twitter from './img/twitter.svg';
import youtube from './img/youtube.svg';
import logo from './img/logo.png';
import squiggle from './img/squiggle.svg';

import Button from './Components/Button.js';

function App() {
  return (
    <div className="App">

      {/* Working on top nav */}

{/*       
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
      </div> */}
      {/* End top nav */}

      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <img src={squiggle} className="Squiggle" alt="squiggle" />
        <p>
        The wonderful world of Cabbit Tales are coming soon! For kids, by kids!
        </p>

        <p>

        <p>
      <h2>Virid Digital, LLC</h2>
      <h3>Privacy Policy</h3>

      <em>Last updated: 5/16/21</em> 
      <br />
      VIRID DIGITAL, LLC is the owner and operator of Cabbits. This document informs you of the privacy policies  regarding the collection, use and disclosure of Personal Information and Log Data VIRID DIGITAL, LLC.  receive from users of the application. <br/>

      Virid Digital, LLC does NOT use or store your Personal Information. By using Cabbit Tales, you agree to the collection and use of information in accordance with this policy. <br/>

      <h3>Information Collection And Use</h3>

      While using our Application, you will NOT be asked to provide personally identifiable information. Personally identifiable information include, but is not limited to your name, email, and address ("Personal Information").

      Log Data

      VIRID DIGITAL, LCC does collect non-personal information that Cabbits sends whenever the application is used ("Log Data").

      This Log Data includes information the following: Time on View, Retention Rate, Churn Rate
      Daily Active Users (DAU), Monthly Active Users (MAU), Daily Sessions Per DAU, and Stickiness (DAU/MAU)


      Changes To This Privacy Policy

      This Privacy Policy is effective as of 5/16/21 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.

      We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of Cabbits after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.

      If we make any material changes to this Privacy Policy, we may or maynot notify you either through the email address you have provided us, or by placing a prominent notice on our website.

      Contact Us

      If you have any questions about this Privacy Policy, please contact us at help@virid.co

      </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Download on the App Store free today!</Button>
        </a> */}
        </p>
      </header>
    </div>
  );
}

export default App;