import React from "react"
import Footer from "./footer"
import "../styles/main.scss"

const Layout = ({ children }) => (
  <>
    <main className="primary">{children}</main>
  </>
)

export default Layout
