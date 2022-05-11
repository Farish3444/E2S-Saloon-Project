import React from "react";
import "./Aboutus.css";
import team from "../assets/teamwork.jpg";
import couple from '../assets/aboutcreate.webp';

const Aboutus = () => {
  return (
    <div className="mainabout">
      <h1 className="abouttitle">ABOUT THE CREATORS</h1>
      <p className="para">
        We E2S are Provide Quality Services and We have a Team of Experienced
        Professions in the Industry <br />
      </p>
      <br />
      <img src={couple} alt="team work Image" className="teamimg" />
    </div>
  );
};

export default Aboutus;
