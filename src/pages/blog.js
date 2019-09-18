import React from "react"
import Layout from "../components/layout"
// import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Header from "../components/header/header"

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
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
      <Header />
      <ul className="blog--list">
        {data.allMarkdownRemark.edges.map(post => (
          <div className="container">
            <h1 className="container--title">
              <Link to={post.node.frontmatter.path}>
                {post.node.frontmatter.title} &rarr;
              </Link>
            </h1>
            <p className="container--date">{post.node.frontmatter.date}</p>
            <p className="container--excerpt">{post.node.excerpt}</p>
            <hr className="container--hr" />
          </div>
        ))}
      </ul>
    </section>
  </Layout>
)

export default Blog
