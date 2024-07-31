import React from "react";
import "./index.scss";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Qaychi | Yaxında</title>
        <link rel="canonical" href="https://qaychi.az" />
      </Helmet>

      <h1 style={{ textAlign: "center", margin: "180px 0" }}>Yaxında</h1>
    </div>
  );
};

export default NotFound;
