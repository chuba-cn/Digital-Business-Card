// eslint-disable-next-line no-unused-vars
import React from 'react';
import Profile from '../images/Profile.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Biodata() {
    return (
        <div className="bio">
            <img src={Profile} alt="Picture of Chuba smiling"className='bio--image' />
            <h1 className="bio--title">Chuba-Nwene. C</h1>
            <h5 className='bio--role'>Junior Front End Developer</h5>
            <p className="bio--website">
              <a
                href="https://www.chuba.dev.ng"
                className='bio--website-link'
                target='blank'
                rel='noopener noreferrer'
              >
                chuba.dev.ng
              </a>  
            </p>

            <div className="bio--buttons">
                <address>
                    <a href="mailto:chimzy57@gmail.com">
                        {" "}
                        <button className="button button--email">
                        <FontAwesomeIcon icon={faEnvelope} className="bio--icon" />
                        Email
                        </button>
                    </a>
                </address>
                <a
                  href="https://www.linkedin.com/chinemelumchubanwene/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <button className='button button--linkedin'>
                    <FontAwesomeIcon icon={faLinkedin} className='bio--icon' />
                    LinkedIn
                  </button>
                </a>
            </div>
        </div>
    )
}