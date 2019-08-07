import React from "react"
import { Link } from "gatsby"

const InternalLink = ({ path, content, className }) => (
  <div className={className}>
    <Link to={path}>{content}</Link>
  </div>
)

export default InternalLink
