import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"
import HomeImage from "../components/home/home.image"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="home">
      <Header />
      <h1 className="animated--heading">From Home</h1>
      <div className="home--writing">
        <p>
          Put stuff here. You can change the source of the image in its
          component file.
        </p>
      </div>
      <div className="home--image">
        <HomeImage />
      </div>
    </section>
  </Layout>
)

export default IndexPage
