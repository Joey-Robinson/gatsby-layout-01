import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import Header from "../header/header"

const Project = ({
  title,
  long_description,
  technology,
  url,
  github,
  imageData,
  image,
}) => (
  <section className="project">
    <Header />
    <div className="project--main">
      <h1 aria-describedby="projectsTitle" className="project--title">
        <span id="projectsTitle" label={title} className="projects__span">
          Name:
        </span>
        &nbsp;
        {title}
      </h1>
      <p className="project--technology">
        <span className="projects__span">Tech:</span> {technology}
      </p>
    </div>
    <a
      href={image}
      target="_blank"
      rel="noopener noreferrer"
      className="project--container"
      role="img"
    >
      <Image
        id="projectsImage"
        className="project--image image"
        fluid={imageData}
        alt={title}
      />
    </a>
    <p
      label={long_description}
      className="project--long project__long__description"
    >
      {long_description}
    </p>
    <div className="project--links">
      <p className="project--back">
        <Link to="/portfolio/">
          &larr; <span>Back to all projects</span>
        </Link>
      </p>
      <p className="project--github">
        {!github ? (
          "Private Repo"
        ) : (
          <a href={github} target="_blank" rel="noopener noreferrer">
            View The GitHub
          </a>
        )}
      </p>
      <p className="project--live">
        {!url ? (
          "Currently Not Hosted"
        ) : (
          <a
            title="View Live"
            aria-label="View Live"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View this project online &rarr;
          </a>
        )}
      </p>
    </div>
  </section>
)

export default Project
