import React, { useState } from "react";
import "./services.css";
import Shaving from "../assets/shaving.jpeg";
import RateCards from "../Cards/RateCards";
import StylingImg from "../assets/styling.jpeg";
import Womenhair from "../assets/womenhair.jpeg";
import Makeup from "../assets/makeup.jpeg";
import Aboutus from "../Aboutus/Aboutus";

const Services = () => {
  return (
    <>
      <h1 className="title"> OUR SERVICES </h1>
      <div className="service">
        <RateCards
          heading={"MENS HAIR CUT"}
          image={StylingImg}
          className="muicard"
        />
        <RateCards
          heading={"MENS SHAVING"}
          image={Shaving}
          className="muicard"
        />
        <br />
      </div>
      <div className="service2">
        <RateCards
          heading={"WOMENS HAIR STYLING"}
          image={Womenhair}
          className="muicard"
        />
        <RateCards
          heading={"MAKEUP & BRIDAL"}
          image={Makeup}
          className="muicard"
        />
      </div>
    </>
  );
};

export default Services;
