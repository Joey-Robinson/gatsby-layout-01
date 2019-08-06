import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="home">
      <Header />
      <h1>From Home</h1>
    </section>
  </Layout>
)

export default IndexPage
