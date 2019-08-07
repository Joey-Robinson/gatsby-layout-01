import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
            author
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => (
  <Layout>
    <section className="blog">
      <ul className="blog--list">
        {data.allMarkdownRemark.edges.map(post => (
          <li className="blog--display blog--list__display" key={post.node.id}>
            <Link
              className="blog--display__title blog--list__title"
              to={post.node.frontmatter.path}
            >
              <h1>{post.node.frontmatter.title} &rarr;</h1>
            </Link>
            <div className="blog--display__date blog--list__date">
              {post.node.frontmatter.date}
            </div>
            <br />
            <p className="blog--display__excerpt blog--list__excerpt">
              {post.node.excerpt}
            </p>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export default Blog
