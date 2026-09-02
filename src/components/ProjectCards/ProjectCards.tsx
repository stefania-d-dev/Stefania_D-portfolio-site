/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from "react";
import PropTypes from "prop-types";
import "./ProjectCardsStyle.css";

interface ProjectCardProps {
  imgSrc: string;
  title: string;
  text: string;
  access: string;
  view: string;
  demo?: string; // Aggiunta della prop demo
  tech: {
    logo: string;
    name: string;
  }[];
}

export default function ProjectCards(props: ProjectCardProps) {
  const { imgSrc, title, text, access, view, demo, tech } = props; // Aggiunta della prop demo

  return (
    <div className="project-card">
      <img src={imgSrc} alt="Project visualization" />
      <h2 className="project-title">{title}</h2>
      <div className="pro-details">
        <p>{text}</p>
        {tech && (
          <div className="tech-stack">
            {tech.map((technology, index) => (
              <img
                key={index}
                src={technology.logo}
                alt={technology.name}
                className="tech-logo logo"
              />
            ))}
          </div>
        )}
        <div className="pro-btns">
          {access && (
            <a
              href={access}
              target="_blank"
              rel="noreferrer"
              className="btn"
              aria-label="Access"
            >
              Access
            </a>
          )}
          {view && (
            <a
              href={view}
              target="_blank"
              rel="noreferrer"
              className="btn"
              aria-label="View"
            >
              View
            </a>
          )}
          {demo && ( // Blocco condizionale per il pulsante di prova dell'app
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="btn"
              aria-label="Demo"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

ProjectCards.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  access: PropTypes.string,
  view: PropTypes.string,
  demo: PropTypes.string, // Aggiunta della prop demo
  tech: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
    })
  ),
};

ProjectCards.defaultProps = {
  access: "",
  view: "",
};
