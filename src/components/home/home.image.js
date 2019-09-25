import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

export const HomeImage = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "home.image.jpg" }) {
          childImageSharp {
            fluid {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <a
          href={data.image.childImageSharp.fluid.src}
          target="_blank"
          rel="noopener noreferrer"
          role="img"
          aria-label="Cat."
        >
          <Img
            fluid={data.image.childImageSharp.fluid}
            alt="A cute cat being cute."
          />
        </a>
      </>
    )}
  />
)

export default HomeImage
