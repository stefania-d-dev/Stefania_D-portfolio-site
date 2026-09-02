import React from "react";
import creativity from "../../assets/Icons/Soft/brain.png";
import gamer from "../../assets/Icons/Soft/gamer.png";
import mum from "../../assets/Icons/Soft/motherhood.png";
import music from "../../assets/Icons/Soft/woman.png";
import teamwork from "../../assets/Icons/Soft/motivation.png";

import "./SoftSkillStyle.css";

export default function SoftSkill(): JSX.Element {
  return (
    <>
      <h1 className="title">Soft Skills and Hobbies</h1>
      <div className="img-grid">
        <div className="grid-item">
          <img className="grid-img" src={mum} alt="Motherhood" />
          <h3 className="level">Motherhood</h3>
          <p className="level">Balancing family responsibilities with personal and professional growth.</p>
        </div>
        <div className="grid-item">
          <img className="grid-img" src={teamwork} alt="Teamwork" />
          <h3 className="level">Teamwork</h3>
          <p className="level">Working collaboratively with others to achieve common goals.</p>
        </div>
        <div className="grid-item">
          <img className="grid-img" src={creativity} alt="Creativity" />
          <h3 className="level">Creativity</h3>
          <p className="level">Expressing creativity through various artistic mediums.</p>
        </div>
        <div className="grid-item">
          <img className="grid-img" src={gamer} alt="Gamer" />
          <h3 className="level">Gamer</h3>
          <p className="level">Playing video games, exploring new worlds and I learn from my defeats.</p>
        </div>
        <div className="grid-item">
          <img className="grid-img" src={music} alt="Music" />
          <h3 className="level">Listening to Music</h3>
          <p className="level">Enjoying and discovering new music to relax and inspire creativity.</p>
        </div>
      </div>
    </>
  );
}
