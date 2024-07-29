import React from "react";
import "./index.scss";
import google from "../../assets/google.webp";
import amazon from "../../assets/aws.webp";
import kb from "../../assets/kb.webp";
import bolt from "../../assets/bolt.webp";

const Partners = () => {
  const data = [
    {
      name: "google",
      imageURL: google,
    },
    {
      name: "amazon",
      imageURL: amazon,
    },
    {
      name: "Kapital Bank",
      imageURL: kb,
    },
    {
      name: "Bolt",
      imageURL: bolt,
    },
    {
      name: "Bolt",
      imageURL: bolt,
    },
    {
      name: "Bolt",
      imageURL: bolt,
    },
    {
      name: "Bolt",
      imageURL: bolt,
    },
    {
      name: "Bolt",
      imageURL: bolt,
    },
  ];

  return (
    <div id="partners">
      <div className="headText">
        <h3>Partnyorlarımız</h3>
      </div>

      <div className="allPartners">
        {data?.map((e, i) => {
          return (
            <a className="partner" href={"/"} title={e?.name} key={i}>
              <div className="image">
                <img src={e?.imageURL} alt={e?.name} />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
