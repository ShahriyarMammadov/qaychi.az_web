import React from "react";
import "./index.scss";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <div id="contactPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Qaychi | Əlaqə</title>
        <link rel="canonical" href="https://qaychi.az" />
      </Helmet>

      <div className="container">
        <div className="headText">
          <h1>
            <span>Bizimlə</span> əlaqə
          </h1>
        </div>

        <div className="formComponent" onSubmit={(e) => e.preventDefault()}>
          <form>
            <div className="nameAndSurname">
              <input type="text" placeholder="Ad" title="Adınız" />
              <input type="text" placeholder="Soyad" title="Soyadınız" />
            </div>

            <input
              type="number"
              placeholder="Telefon nömrəsi"
              className="phoneNumber"
              title="Telefon nömrəniz"
            />

            <input type="email" placeholder="Elektron mail" className="email" />

            <div className="button">
              <button type="submit">Müraciət et</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
