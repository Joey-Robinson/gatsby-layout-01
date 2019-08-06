import React from "react"
import ModeToggle from "./mode.toggle"
import Footer from "./footer"
import "../styles/main.scss"
const Layout = ({ children }) => (
  <>
    <main className="primary">
      <ModeToggle />
      {children}
      <Footer />
    </main>
  </>
)

export default Layout
