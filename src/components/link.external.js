import React from "react"

const ExternalLink = ({ path, content, className }) => (
  <div className={className}>
    <a href={path} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  </div>
)

export default ExternalLink
