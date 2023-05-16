import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-row">
        <div className="socials">
          <a href="https://www.instagram.com/steph.grise/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com/StephanieGrise">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/in/stephaniegrise/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className="bottom-row">
        <div className="column">
          <FontAwesomeIcon icon={faPhone} />
          314.409.7564
        </div>
        <div className="column-right">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:stephanie@griseconsulting.com">
            <span>stephanie@griseconsulting.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
