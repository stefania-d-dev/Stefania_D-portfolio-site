/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/member-delimiter-style */
import ReactLogo from "../../assets/Icons/react-icon.png";
import TypeScriptLogo from "../../assets/Icons/typescript32.png";
import JavaScriptLogo from "../../assets/Icons/javascriptt.png";
import BootsrapLogo from "../../assets/Icons/bootstrap-logo.svg";
import MUILogo from "../../assets/Icons/material-ui.svg";
import ViteLogo from "../../assets/Icons/vite.png";
import HTML from "../../assets/Icons/html.png";
import CSS from "../../assets/Icons/css.png";
import JavaScript from "../../assets/Icons/javascript.png";

import MyPortfolio from "../../assets/Projects/MyPortfolio.png";
import DuckList from "../../assets/Projects/DuckList.png";
import Tictactoe from "../../assets/Projects/Tic-tac-toe.png";
import ProjectWork from "../../assets/Projects/Project-Work.png";
import ComingSoon from "../../assets/Projects/comingsoon.png";
import MyBusinessCard from "../../assets/Projects/MyBusinessCard.png";

const ProjectCardData = [
  {
    imgSrc: MyPortfolio,
    title: "Personal Portfolio 👩🏻‍💻",
    tech: [
      { logo: ReactLogo, name: "React" },
      { logo: TypeScriptLogo, name: "TypeScript" },
      { logo: MUILogo, name: "MaterialUI" },
    ],
    text: "The Personal Portfolio showcases current and future projects, highlighting acquired skills. It also includes a contact form and a resume.",
    view: "https://github.com/Darkmindy/Stefania_D-portfolio-site.git",
    access: "", // Placeholder for access URL
  },
  {
    imgSrc: ComingSoon,
    title: "New Project - Work in Progress - 🚧",
    tech: [
      { logo: ReactLogo, name: "React" },
      { logo: TypeScriptLogo, name: "TypeScript" },
      { logo: ViteLogo, name: "Vite" },
    ],
    text: "This project is in progress.",
    view: "",
    access: "", // Placeholder for access URL
  },
  {
    imgSrc: MyBusinessCard,
    title: "Portable Business Card 👩🏻‍💻",
    tech: [
      { logo: HTML, name: "HTML" },
      { logo: CSS, name: "CSS" },
      { logo: JavaScript, name: "JavaScript" },
    ],
    text: "This business card is portable, as it's responsive on every screen device and showcases who I am. It includes a contact form and my resume.",
    view: "https://github.com/Darkmindy/SD-business-card",
    access: "", // Placeholder for access URL
    demo: "https://darkmindy.github.io/SD-business-card/",
  },
  {
    imgSrc: ProjectWork,
    title: "Project Work",
    tech: [
      { logo: ReactLogo, name: "React" },
      { logo: TypeScriptLogo, name: "TypeScript" },
      { logo: BootsrapLogo, name: "Bootstrap" },
    ],
    text: "It is an e-commerce platform that allows users to browse, shop, and purchase products.",
    view: "https://github.com/Darkmindy/Project-work-CODE",
    demo: "COMING SOON",
    access: "", // Placeholder for access URL
  },
  {
    imgSrc: DuckList,
    title: "Ducky To-Do-List 🦆",
    tech: [
      { logo: ReactLogo, name: "React" },
      { logo: TypeScriptLogo, name: "TypeScript" },
      { logo: BootsrapLogo, name: "Bootstrap" },
    ],
    text: "This project focuses on a React.js and hooks exercise. The app also allows users to add, edit, and delete tasks.",
    view: "https://github.com/Darkmindy/Ducky-To-Do-List.git",
    demo: "https://duckylist.netlify.app",
    access: "", // Placeholder for access URL
  },
  {
    imgSrc: Tictactoe,
    title: "Tic-Tac-Toe 🎮",
    tech: [
      { logo: ReactLogo, name: "React" },
      { logo: JavaScriptLogo, name: "JavaScript" },
    ],
    text: "This project involves creating a simple Tic-Tac-Toe game enriched with sounds and emojis.",
    view: "https://github.com/Darkmindy/TicTacToe-game.git",
    demo: "https://board-game-sd.netlify.app",
    access: "", // Placeholder for access URL
  },
];

export default ProjectCardData;
