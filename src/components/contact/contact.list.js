import React from "react"
import ExternalLink from "../link.external"

// You can add more details here. You can add CodePen, SO, JSFiddle, anything
// You want, really. Just follow the layout here. If the layout reaches too
// Far down, you can add more columns to the UL element in the _contact.scss
// File

const ContactList = () => (
  <ul className="contact--list">
    <li>
      <ExternalLink
        place="Email"
        path="mailto:joeyrobinsondev@gmail.com"
        title="Email"
        content="joeyrobinsondev@gmail.com"
      />
    </li>
    <li>
      <ExternalLink
        place="Twitter"
        path="https://twitter.com/joeyrobinsondev"
        title="Twitter"
        content="@joeyrobinsondev"
      />
    </li>
    <li>
      <ExternalLink
        place="GitHub"
        path="https://github.com/Joey-Robinson"
        title="GitHub"
        content="Joey-Robinson"
      />
    </li>
    <li>
      <ExternalLink
        place="LinkedIn"
        path="https://www.linkedin.com/in/joey-robinson/"
        title="LinkedIn"
        content="Joey-Robinson"
      />
    </li>
    <li>
      <ExternalLink
        place="CodePen"
        path=""
        title="CodePen"
        content="Joey-Robinson"
      />
    </li>
  </ul>
)

export default ContactList
