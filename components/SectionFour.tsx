import React from "react";
import Style from "./SectionFour.module.css";
import Slider from "./Slider";

const SectionFour = () => {
  return (
    <>
      <div className={Style.userHeading}>
        <h1>Happy User</h1>
        <p>Our Happy User, do the steps easily and start feeling</p>
        <p>Your new experience</p>
        <Slider />
      </div>
    </>
  );
};

export default SectionFour;
