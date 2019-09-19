import React from "react"
import InternalLink from "../link.internal"

const Navigation = () => (
  <nav className="navigation header--navigation">
    <InternalLink title="Home" path="/" content="Home" />
    <InternalLink title="Portfolio" path="/portfolio/" content="Portfolio" />
    <InternalLink title="Blog" path="/blog/" content="Blog" />
    <InternalLink title="Contact" path="/contact/" content="Contact" />
    <InternalLink title="About" path="/about/" content="About" />
  </nav>
)

export default Navigation
