import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
//import { faPhone, faEnvelope, faInstagram, faTwitter, faLinkedin } from 'react-icons/fa';
import React from "react";

const Footer = () => {
  return (
    <div className='main-footer'>
      <div className="footer">
        <div className="top-row">
          <div className="socials d-flex justify-content evenly">
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
        <hr />
        <div className="bottom-row">
          <div className="footer-row justify-content evenly">
            <div className="footer-info-left">
              <div>
              <FontAwesomeIcon icon={faPhone} />
              314.409.7564
            </div>
            </div>
            <div className="footer-info-right">
              <div>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:stephanie@griseconsulting.com">
                  <span>stephanie@griseconsulting.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;