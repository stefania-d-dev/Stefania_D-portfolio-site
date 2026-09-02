/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable @typescript-eslint/member-delimiter-style */
import React from "react";
import ProjectCards from "./ProjectCards";
import ProjectCardData from "./ProjectData";
import "./ProjectCardsStyle.css";

interface ProjectData {
  imgSrc: string;
  title: string;
  text: string;
  view: string;
  demo?: string;
  access: string;
  tech: {
    logo: string;
    name: string;
  }[];
}

export default function Card(): JSX.Element {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container load-animation">
        {ProjectCardData.map((val: ProjectData, ind: number) => {
          return (
            <ProjectCards
              key={ind}
              imgSrc={val.imgSrc}
              title={val.title}
              text={val.text}
              tech={val.tech}
              view={val.view}
              demo={val.demo}
              access={val.access}
            />
          );
        })}
      </div>
    </div>
  );
}
