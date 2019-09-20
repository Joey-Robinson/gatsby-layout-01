import React from "react"

const ContactForm = () => (
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    className="contact--form"
  >
    <label className="contact--form__name">
      <input type="text" name="name" placeholder="Your Name..." />
    </label>
    <label className="contact--form__email">
      <input type="email" name="email" placeholder="Your Email..." />
    </label>
    <label className="contact--form__message">
      <textarea name="message" placeholder="Your Message..." />
    </label>
    <br />
  </form>
)

export default ContactForm
