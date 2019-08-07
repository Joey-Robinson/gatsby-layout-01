import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ResumeDownload = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
  return (
    <>
      <div className="contact--resume">
        {data.allFile.edges.map((file, index) => {
          return (
            <a
              key={`pdf-${index}`}
              href={file.node.publicURL}
              download
              style={{ background: "black", fontSize: "10rem" }}
            >
              <button className="contact--download">
                Download: {file.node.name}
              </button>
            </a>
          )
        })}
      </div>
    </>
  )
}
export default ResumeDownload
