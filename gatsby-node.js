exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allProjectsYaml {
        edges {
          node {
            slug
          }
        }
      }
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
              author
            }
          }
        }
      }
    }
  `)

  const projects = result.data.allProjectsYaml.edges
  const blogs = result.data.allMarkdownRemark.edges

  blogs.forEach(({ node }) => {
    const title = node.frontmatter.path
    actions.createPage({
      path: `${title}`,
      component: require.resolve("./src/templates/blog.template.js"),
    })
  })

  // posts.forEach(({ node: post }) => {
  //   const slug = post.slug
  //   actions.createPage({
  //     path: `/${slug}`,
  //     component: require.resolve("./src/templates/blog-template.js"),
  //     context: { slug },
  //   })
  // })

  projects.forEach(({ node: project }) => {
    const slug = project.slug
    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/project.template.js"),
      context: { slug },
    })
  })
}
