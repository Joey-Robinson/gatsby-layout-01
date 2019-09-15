import React from "react"
import InternalLink from "../link.internal"

const Navigation = () => (
  <nav className="navigation header--navigation">
    <InternalLink path="/" content="Home" />
    <InternalLink path="/portfolio/" content="Portfolio" />
    <InternalLink path="/blog/" content="Blog" />
    <InternalLink path="/contact/" content="Contact" />
    <InternalLink path="/about/" content="About" />
  </nav>
)

export default Navigation
