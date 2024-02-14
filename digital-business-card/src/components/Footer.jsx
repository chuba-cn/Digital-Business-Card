// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
      <div className="footer">
        <a
          href="https://github.com/chuba-cn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithubSquare} className="footer--icon" />
        </a>
        <a
          href="https://www.linkedin.com/chinemelumchubanwene/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="footer--icon" />
        </a>
      </div>
    );
}