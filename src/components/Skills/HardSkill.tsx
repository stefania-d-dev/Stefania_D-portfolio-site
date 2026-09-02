/* eslint-disable @typescript-eslint/semi */
import React from "react";
import docker from "../../assets/Icons/docker.png";
import node from "../../assets/Icons/node.png";
import git from "../../assets/Icons/git.png";
import github from "../../assets/Icons/github.png";
import powerP from "../../assets/Icons/power-point.png";
import mongoDb from "../../assets/Icons/mongo.png";
import excel from "../../assets/Icons/excel.png";
import gitlab from "../../assets/Icons/gitlab.png";
import javascript from "../../assets/Icons/javascript.png";
import word from "../../assets/Icons/word.png";
import netlify from "../../assets/Icons/netlify.png";
import typescript from "../../assets/Icons/typescript.png";
import reactIcon from "../../assets/Icons/react.png";
import boots from "../../assets/Icons/bootstrap.png";
import MUILogo from "../../assets/Icons/material-ui.svg";
import html from "../../assets/Icons/html.png";
import css from "../../assets/Icons/css.png";
import aws from "../../assets/Icons/aws.png";
import c from "../../assets/Icons/c.png";
import photoshop from "../../assets/Icons/photoshop.png";
import illustrator from "../../assets/Icons/illustrator.png";
import figma from "../../assets/Icons/figma.png";
import indesign from "../../assets/Icons/indesign.png";
import canva from "../../assets/Icons/canva.png";
import vscode from "../../assets/Icons/vscode.png";
import ViteLogo from "../../assets/Icons/vite.png";

import "./HardSkillStyle.css";

export default function HardSkill(): JSX.Element {
  return (
    <>
      <h1 className="title">My Skills</h1>
      <h3 className="level">Programming Languages</h3>
      <div className="img-grid">
        <img className="grid-img" src={c} />
        <img className="grid-img" src={javascript} />
        <img className="grid-img" src={typescript} />
      </div>

      <h3 className="level">Front-end</h3>
      <div className="img-grid">
        <img className="grid-img" src={html} />
        <img className="grid-img" src={css} />
        <img className="grid-img" src={reactIcon} />
        <img className="grid-img" src={boots} />
        <img className="grid-img" src={MUILogo} />
        <img className="grid-img" src={ViteLogo} />
      </div>

      <h3 className="level">Back-end (beginner)</h3>
      <div className="img-grid">
        <img className="grid-img" src={node} />
        <img className="grid-img" src={mongoDb} />
        <img className="grid-img" src={gitlab} />
        <img className="grid-img" src={aws} />
      </div>

      <h3 className="level">Design</h3>
      <div className="img-grid">
        <img className="grid-img" src={photoshop} />
        <img className="grid-img" src={illustrator} />
        <img className="grid-img" src={indesign} />
        <img className="grid-img" src={figma} />
        <img className="grid-img" src={canva} />
      </div>

      <h3 className="level">Other tools</h3>
      <div className="img-grid">
        <img className="grid-img" src={vscode} />
        <img className="grid-img" src={github} />
        <img className="grid-img" src={git} />
        <img className="grid-img" src={word} />
        <img className="grid-img" src={powerP} />
        <img className="grid-img" src={excel} />
        <img className="grid-img" src={netlify} />
        <img className="grid-img" src={docker} />
      </div>
    </>
  );
}
