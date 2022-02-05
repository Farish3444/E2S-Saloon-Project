import React from "react";
import "./custom.css";
import ImageDummy from "../../assets/logo.png";

const CustomCard = () => {
  return (
    <div>
      <div className="fullwidth">
        <div className="col-md-3">
          <div className="card-view">
            <div className="bg">
              <img src={ImageDummy} alt="company image" />
            </div>
            <div className="container">
              <a href="#">
                <div className="tag_name red">Mens Cutting</div>
              </a>
              <div className="company">
                <div className="c_logo">
                  <a href="#">
                    {/* <img src={ImageDummy} alt="Focus Lab" /> */}
                  </a>
                </div>
                {/* <div className="c_info">
                    <a href="#" className="c_name">
                        Focus Lab
                    </a>
                    <br />
                    <span className="c_industry">Digital Media</span>
                    <br />
                    <span id="c_stars" data-star="3.5"></span>
                    <div className="c_num">3.5</div>
                    </div>
                    <div className="c_content">
                    <a href="#" className="title">
                        <p>The most briliant company that I’ve ever worked for</p>
                    </a>
                    <p className="review">
                        Amazing opportunities for any person. The projects we are
                        given always stress new and innovating ideas that constantly
                        challenge ourselves to improve our ...
                    </p>
                    </div> */}
              </div>

              <div className="user">
                <div className="user_avatar">
                  {/* <img
                    src="https://s4.postimg.org/la5lt1z6x/image.jpg"
                    alt="Bill Kenny"
                  /> */}
                </div>
                <div className="user_info">
                  <a href="#" className="user_name orange">
                    Bill Kenny
                  </a>{" "}
                  • May 30, 2015
                  <br />
                  Current Brand Director
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
