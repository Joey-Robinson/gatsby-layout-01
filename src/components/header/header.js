import React from "react"
import ModeToggle from "./mode.toggle"
import Navigation from "./header.navigation"
import Footer from "../footer"

const Header = () => (
  <header className="header">
    <ModeToggle />
    <Navigation />
    <Footer />
  </header>
)

export default Header
