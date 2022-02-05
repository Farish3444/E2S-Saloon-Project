import React from "react";
import "./Aboutus.css";
import team from "../assets/teamwork.jpg";

const Aboutus = () => {
  return (
    <div className="mainabout">
      <h1 className="abouttitle">ABOUT US</h1>
      <p className="para">
        We E2S are Provide Quality Services and We have a Team of Experienced
        Professions in the Industry <br />
      </p>
      <br />
      <img src={team} alt="team work Image" className="teamimg" />
    </div>
  );
};

export default Aboutus;
