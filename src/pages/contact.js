import React from "react"
import Layout from "../components/layout"
import Header from "../components/header/header"
import ResumeDownload from "../components/contact/contact.resume"
import ContactList from "../components/contact/contact.list"
import ContactForm from "../components/contact/contact.form"

const Contact = () => (
  <Layout>
    <section className="contact">
      <Header />
      <h1 className="animated--heading">Contact Me</h1>
      <ContactList />
      <ResumeDownload />
      <ContactForm />
    </section>
  </Layout>
)

export default Contact
