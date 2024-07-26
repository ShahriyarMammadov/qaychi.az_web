import React from "react";
import "./index.scss";
import { FaScissors } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="left">
          <div className="logo">
            <FaScissors className="icon" />
            <h3>Qaychi.az</h3>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
            earum. eaurm, asurm, aib jjhwqi jsfh
          </p>
        </div>

        <div className="rightContainer">
          <nav>
            <Link>Haqqımızda</Link>
            <Link>Əlaqə</Link>
            <Link>Xidmətlər</Link>
            <Link>Rezervasiya</Link>
            <Link>Məxfilik şərtləri</Link>
          </nav>

          <div className="right">
            <h3>Əlaqə</h3>

            <div>
              <p>Ünvan: Azərbaycan, Bakı</p>
              <a href="mailto:info@qaychi.az">Mail adresi: info@qaychi.az</a>
              <a href="tel:+994512322021">Telefon: +994512322021</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
