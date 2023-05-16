import logo from "./logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Footer from "./footer";

import { InlineWidget } from "react-calendly";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Grise Consulting</h3>
        </header>
        <body>
          <p className="intro-text">
          Stephanie Grise has spent nearly 20 years developing a reputation as a critical thought partner with deep legal and business acumen, a commitment to people and community, and a love for laughing. The philosophy behind Stephanie's work is simple: listen radically; inquire deliberately; and center, care for, and celebrate others. And with this philosophy at the forefront, Stephanie counsels businesses on how to do meaningful work, equitably.
          </p>
          <div className="Calendly">
            Want to book a consultation? Schedule here:
            <InlineWidget url="https://calendly.com/stephaniegrise" styles={{minWidth:'320px',height:'785px'}}/>
          </div>
        </body>
      </div>
      <Footer />
    </div>
  );
}

export default App;
