import React, { useState } from "react";
import "./services.css";
import StylingImg from "../assets/styling.jpeg";
import Womenhair from "../assets/womenhair.jpeg";
import Makeup from "../assets/makeup.jpeg";
import Aboutus from "../Aboutus/Aboutus";
import ServiceCards from "../Cards/ServiceCards/ServiceCards";

const Services = () => {
  return (
    <>
      <h1 className="title"> OUR SERVICES </h1>
      <div className="allcards">
        <ServiceCards />
      </div>
    </>
  );
};

export default Services;
