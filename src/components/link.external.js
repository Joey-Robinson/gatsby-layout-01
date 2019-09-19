import React from "react"

const ExternalLink = ({ path, content, className, title, place }) => (
  <div className={className}>
    <span>{place}:</span>
    <a href={path} target="_blank" rel="noopener noreferrer" title={title}>
      {content}
    </a>
  </div>
)

export default ExternalLink
