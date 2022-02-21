import React from "react";
import "./footer.css";
import Icon from "@mui/material/Icon";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";


const Footer = () => {
  return (
    <div className="footercontainer">
      <hr style={{ color: "white" }} />

      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="single-cta">
                <MailIcon fontSize="large" style={{ color: "white" }} />
                <div className="cta-text">
                  <h4>REACH-OUT US</h4>
                  <span> KK NAGAR </span>
                </div>
              </div>

              <div className="single-cta">
                <CallIcon fontSize="large" style={{ color: "white" }} />
                <div className="cta-text">
                  <h4>Call and Book Your Appointment</h4>
                  <span>98765432100</span>
                </div>
              </div>

              <div className="single-cta">
                <MailIcon fontSize="large" style={{ color: "white" }} />
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>mail@info.com</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
