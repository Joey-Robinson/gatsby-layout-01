import React from "react"
import ModeToggle from "./mode.toggle"
import Footer from "./footer"
import "../styles/main.scss"

const Layout = ({ children }) => (
  <>
    <main className="primary primary--light primary--dark">
      <ModeToggle />
      {children}
      <Footer />
    </main>
  </>
)

export default Layout
