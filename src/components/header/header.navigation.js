import React from "react"
import InternalLink from "../link.internal"

const Navigation = () => (
  <nav className="navigation header--navigation">
    <InternalLink path="/" className="navigation--home" content="Home" />
    <InternalLink
      path="/portfolio/"
      className="navigation--portfolio"
      content="Portfolio"
    />
    <InternalLink path="/blog/" className="navigation--blog" content="Blog" />
    <InternalLink
      path="/contact/"
      className="navigation--contact"
      content="Contact"
    />
    <InternalLink path="/misc/" className="navigation--misc" content="Misc" />
  </nav>
)

export default Navigation
