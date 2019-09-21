import React from "react"
import Layout from "../components/layout"
import Header from "../components/header/header"
import ResumeDownload from "../components/contact/contact.resume"
import ContactList from "../components/contact/contact.list"

const Contact = () => (
  <Layout>
    <section className="contact">
      <Header />
      <h1 className="animated--heading">Find Me On The Web</h1>
      <div className="contact--greeting">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vel quidem
          fugiat voluptas corrupti quam inventore numquam unde. Veritatis
          architecto officia fuga hic accusantium, nulla dolor inventore
          assumenda dolorum vel saepe alias aspernatur iusto corrupti, deserunt
          magnam, amet expedita ad temporibus molestias. Sunt, itaque
          reprehenderit.
        </p>
      </div>
      <ContactList />
      <ResumeDownload />
    </section>
  </Layout>
)

export default Contact
