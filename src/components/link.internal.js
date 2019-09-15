import React from "react"
import { Link } from "gatsby"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active" } : null
}

const InternalLink = ({ path, content, props }) => (
  <Link to={path} {...props} getProps={isActive}>
    <span>{content}</span>
  </Link>
)

export default InternalLink
