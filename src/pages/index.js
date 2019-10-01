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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          facere neque. Sapiente praesentium commodi ullam nemo necessitatibus
          culpa soluta totam repellendus explicabo, libero doloremque,
          blanditiis, minima dolor laboriosam voluptate quasi.
        </p>
      </div>
      <div className="home--image">
        <HomeImage />
      </div>
    </section>
  </Layout>
)

export default IndexPage
