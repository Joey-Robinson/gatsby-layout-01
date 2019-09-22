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
    <h1 aria-describedby="projectsTitle" className="project--title">
      <span id="projectsTitle" label={title} className="projects__span">
        Name:
      </span>
      &nbsp;
      {title}
    </h1>
    <a
      href={image}
      target="_blank"
      rel="noopener noreferrer"
      className="project--container"
      aria-describedby="projectsImage"
      label={title}
    >
      <Image
        id="projectsImage"
        className="project--image image"
        fluid={imageData}
        alt={title}
      />
    </a>
    <p label={long_description} className="project__long__description">
      {long_description}
    </p>
    <h4 className="project--technology">
      <span className="projects__span">Tech:</span> {technology}
    </h4>
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
        "Due to recent events coming to light with GoDaddy, I'm no longer using their serivces. I'll either rehost this or remove it completely."
      ) : (
        <a href={url} target="_blank" rel="noopener noreferrer">
          View this project online &rarr;
        </a>
      )}
    </p>
    <p className="project--back">
      <Link to="/portfolio/">
        &larr; <span>Back to all projects</span>
      </Link>
    </p>
  </section>
)

export default Project
