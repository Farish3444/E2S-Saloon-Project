import React from "react";
import "./servicecard.css";

const ServiceCards = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="card">
          <div className="card_header">
            <img
              src={"https://source.unsplash.com/600x400/?computer"}
              alt="card pic"
              className="card_image"
            />
            <div className="card_body">
              <span className="tag tag-red">UNISEX HAIRCUTS</span>
              <h3>How we make you Feel Stylish</h3>
              <p>
                First things First, We make you choose your own style you want,
                Then we Suggest some more styles which Suits you the best,Our
                Highly trained Professions make your style as you wish.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card_header">
            <img
              src={"https://source.unsplash.com/600x400/?computer"}
              alt="card pic"
              className="card_image"
            />
            <div className="card_body">
              <span className="tag tag-blue">FACIALS</span>
              <h3>How we make you Feel Stylish</h3>
              <p>
                First things First, We make you choose your own style you want,
                Then we Suggest some more styles which Suits you the best,Our
                Highly trained Professions make your style as you wish.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card_header">
            <img
              src={"https://source.unsplash.com/600x400/?computer"}
              alt="card pic"
              className="card_image"
            />
            <div className="card_body">
              <span className="tag tag-red">FACIALS</span>
              <h3>How we make you Feel Stylish</h3>
              <p>
                First things First, We make you choose your own style you want,
                Then we Suggest some more styles which Suits you the best,Our
                Highly trained Professions make your style as you wish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServiceCards;
