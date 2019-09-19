import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// You need to put your resume inside of the project. I have mine listed in
// The static folder, to make it easier. But the below graphql query will
// Look for any file with pdf and return a download button for anything found
// I personally haven't tested it with multiple PDF files, though.
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
      <div className="contact--resume resume">
        {data.allFile.edges.map((file, index) => {
          return (
            <a key={`pdf-${index}`} href={file.node.publicURL} download>
              <button className="contact--download resume--download">
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
