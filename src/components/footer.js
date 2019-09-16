import React from "react"
import { FaGithubSquare } from "react-icons/fa/index.esm"
import { FaTwitterSquare } from "react-icons/fa/index.esm"
import { FaLinkedin } from "react-icons/fa/index.esm"

// You can import any icons that react-icons use by following the above
// Syntax (Doing this to tree-shake the icons so we're not loading useless things).
// https://react-icons.netlify.com/#/ [Note: The FA represents Font Awesome, to use another
// Icon set, just replace fa with w/e you want from the above link.]

const Footer = () => (
  // Input your name here.
  <footer className="footer">
    <span role="heading" className="footer--heading">
      © YeetMaster {new Date().getFullYear()}
    </span>
    <div className="footer--github">
      <a
        href="https://github.com/Joey-Robinson"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare />
      </a>
    </div>
    <div className="footer--twitter">
      <a
        href="https://twitter.com/joeyrobinsondev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitterSquare />
      </a>
    </div>
    <div className="footer--linkedin">
      <a
        href="https://www.linkedin.com/in/joey-robinson/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
  </footer>
)

export default Footer
