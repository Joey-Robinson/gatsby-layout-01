import React from "react"
import ModeToggle from "./mode.toggle"
import Navigation from "./header.navigation"

const Header = () => (
  <header className="header">
    <ModeToggle />
    <Navigation />
  </header>
)

export default Header
