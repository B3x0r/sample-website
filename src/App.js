import logo from "./logo.png";
import "./App.css";
import React, {Container, Heading, Link} from "react";
import { InlineWidget } from "react-calendly";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <h3>Welcome to Grise Consulting!</h3>
        <p className="intro-text">
          Toffee topping danish brownie ice cream jujubes tootsie roll wafer
          liquorice. Lemon drops bear claw chupa chups jelly carrot cake candy.
          Sweet roll cupcake donut bear claw jelly-o tootsie roll. Gummi bears
          liquorice gummi bears cheesecake biscuit powder sugar plum ice cream.
          Candy canes topping bonbon jelly beans wafer. Caramels cupcake bear
          claw sugar plum lollipop marzipan sugar plum cotton candy. Sweet roll
          brownie sesame snaps gummi bears marzipan shortbread jujubes bonbon
          tiramisu. Gingerbread jujubes biscuit gummi bears liquorice bonbon
          donut.
        </p>
        <div className="Calendly">
          Ready to schedule?
          <InlineWidget url="https://calendly.com/stephaniegrise" />
        </div>
      </body>
    </div>
  );
}

export default App;
