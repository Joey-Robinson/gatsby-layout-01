import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header/header"

export const postQuery = graphql`
  query BlogPostByPath($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date(formatString: "MMMM DD, YYYY")
      }
      excerpt
    }
  }
`

const BlogTemplate = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="blogs">
        <Header />
        <div className="blogs--content__back">
          <Link to="/blog/">&#8592; Go Back</Link>
        </div>
        <p className="blogs--content__maker">{post.frontmatter.date}</p>
        <div className="blogs--content__title">
          <h1>{post.frontmatter.title}</h1>
        </div>
        <div
          className="blogs--content__main"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export default BlogTemplate
