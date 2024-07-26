import React from "react";
import "./index.scss";
import welcomepage_mobile from "../../assets/welcomepage_mobile.jpg";

const AboutPage = () => {
  return (
    <div id="aboutPage">
      <div className="heroImage">
        <div className="container">
          <h2>Haqqımızda</h2>
        </div>
      </div>

      <div className="container">
        <div className="description">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            sequi animi corporis omnis illum dolores libero tempore eius,
            temporibus hic quaerat deleniti cum repellendus quae consectetur
            nulla rerum dolor? Fugit.
          </p>

          <img src={welcomepage_mobile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
