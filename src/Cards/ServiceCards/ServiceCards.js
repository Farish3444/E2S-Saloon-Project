import React from "react";
import "./servicecard.css";
import styler from "../../assets/hairStyler.jpg";
import womenhair from "../../assets/womenhair.jpeg";
import bridal from "../../assets/bridal.jpg";
import bridal2 from "../../assets/bridal2.jpg";



const ServiceCards = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="card">
          <div className="card_header">
            <img
              //   src={"https://source.unsplash.com/600x400/?computer"}
              src={styler}
              alt="card pic"
              className="card_image"
            />
            <div className="card_body">
              <span className="tag tag-red">UNISEX HAIRCUTS</span>
              <h3>ADDITIONAL THINGS WE DO</h3>
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
              //   src={"https://source.unsplash.com/600x400/?computer"}
              src={womenhair}
              alt="card pic"
              className="card_image"
            />
            <div className="card_body">
              <span className="tag tag-blue">SKIN FACIALS</span>
              <h3>FACIAL PROCESS WE DO</h3>
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
              style={{ width: "350px", height: "400px" }}
              //   src={"https://source.unsplash.com/600x400/?computer"}
              src={bridal2}
              alt="card pic"
              className="card_image"
            />
            <div className="card_body">
              <span className="tag tag-blue">BRIDAL MAKEUPS</span>
              <h3>BRIDAL METHODS WE FOLLOW</h3>
              <ul>
                <li>Medicore</li>
                <li>Pedicore</li>
                <li>DressAlignments</li>
              </ul>
              {/* <p>
                First things First, We make you choose your own style you want,
                Then we Suggest some more styles which Suits you the best,Our
                Highly trained Professions make your style as you wish.
              </p>  */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServiceCards;
