/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/comma-dangle */
import React from "react";
import "./BackgroundImgStyle.css";

const BackgroundImg = ({
  heading,
  text,
  page,
}: {
  heading: string;
  text: string;
  page: string;
}): JSX.Element => {
  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <div className={`hero-img ${page.length > 1 && page}`}>
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default BackgroundImg;
