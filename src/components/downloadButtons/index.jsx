import React from "react";
import "./index.scss";
import playMarket from "../../assets/playmarket.png";
import apple from "../../assets/apple.png";

const DownloadButtons = () => {
  return (
    <div>
      <div className="downloadApp">
        <div className="button">
          <img src={playMarket} alt="google" />

          <div>
            <p>GET IT ON</p>
            <p className="name">Google Play</p>
          </div>
        </div>

        {/* app store */}
        <div className="button">
          <img src={apple} alt="apple" />

          <div>
            <p>DOWNLOAD ON THE</p>
            <p className="name">App Store</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadButtons;
