/* eslint-disable @typescript-eslint/semi */
import React from "react";
import { Link } from "react-router-dom";
import "./HomeBackgroundImgStyle.css";
// import mainImg from "../../../assets/Background/home-background.jpg";

const resume =
  "Hello! I’m a front-end developer from Catania, passionate about crafting visually delightful and user-friendly interfaces. Check out my projects and skills, and feel free to reach out if you have any questions or want to collaborate!";

const BackgroundImgHome = (): JSX.Element => {
  return (
    <div className="main">
      <div className="mask">
        {/* <img
          className="background-img"
          src={mainImg}
          alt="Stunning background"
        /> */}
      </div>
      <div className="content">
        <p>{"HI I'M STEFANIA DELISO"}</p>
        <h1>Front-end Developer </h1>
        <div className="resume">
          <p>{resume}</p>
          <p>More about me:</p>
        </div>
        <div>
          <Link to="/projects" className="btn">
            Projects
          </Link>
          <a
            href="https://drive.google.com/file/d/1cxDTR6DlQrU64nTDkGBIhwZXtNjoBLRQ/view?usp=sharing"
            className="btn btn-light"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImgHome;
