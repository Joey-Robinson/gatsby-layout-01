import React from "react"
import { Link } from "gatsby"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active" } : null
}

const InternalLink = ({ path, content, props, title }) => (
  <Link to={path} {...props} getProps={isActive} title={title}>
    <span>{content}</span>
  </Link>
)

export default InternalLink
