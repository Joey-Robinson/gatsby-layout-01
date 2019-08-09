import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import ProjectPreview from "../components/portfolio/project.preview"
import SEO from "../components/seo"
import Header from "../components/header/header"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsYaml {
        edges {
          node {
            title
            id
            slug
            short_description
            url
            technology
            github
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const projects = data.allProjectsYaml.edges

  return (
    <Layout>
      <SEO
        title="Portfolio"
        description="?"
        keywords={[
          `Portfolio`,
          `Front-End`,
          `Front-End Development`,
          `React`,
          `GatsbyJS`,
        ]}
      />
      <section className="portfolio">
        <Header />
        {projects.map(({ node: project }) => {
          const title = project.title
          const short_description = project.short_description
          const slug = project.slug
          const imageData = project.image.childImageSharp.fluid
          const url = project.url
          const technology = project.technology
          const github = project.github
          const id = project.id

          return (
            <ProjectPreview
              title={title}
              short_description={short_description}
              slug={slug}
              imageData={imageData}
              url={url}
              technology={technology}
              github={github}
              key={id}
            />
          )
        })}
      </section>
    </Layout>
  )
}

export default Portfolio
