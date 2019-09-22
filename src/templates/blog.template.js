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
      <section className="blogs">
        <Header />
        <div className="blogs--top">
          <div
            aria-describedby="blogTitle"
            className="blogs--top__title blogs--title"
          >
            <h1 id="blogTitle" label={post.frontmatter.title}>
              {post.frontmatter.title}
            </h1>
            <p
              className="blogs--top__date blogs--date"
              label={`Posted On: ${post.frontmatter.date}`}
            >
              {post.frontmatter.date}
            </p>
            <div
              aria-describedby="backToBlogPage"
              className="blogs--top__back blogs--back"
            >
              <Link
                to="/blog/"
                title="Go Back"
                aria-label="Go Back"
                id="backToBlogPage"
              >
                &#8592; Go Back
              </Link>
            </div>
          </div>
        </div>
        <div
          className="blogs--content__main blogs--main"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </section>
    </Layout>
  )
}

export default BlogTemplate
