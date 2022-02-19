import React, { useState } from "react";
import "./navbar.css";
// import { useHistory } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
      <div className="main">
        <div className="sidebody">
          <ul className="navhead">
            <li>
              <a href="#" className="underline-hover-effect">
                SERVICES
              </a>
            </li>
            <li>
              <a href="#" className="underline-hover-effect">
                GALLERY
              </a>
            </li>
            <li>
              <a href="#" className="underline-hover-effect">
                CONTACT
              </a>
            </li>
            <li>
              <a href="#" className="underline-hover-effect">
                ABOUT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
