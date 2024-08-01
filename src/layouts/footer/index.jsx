import React from "react";
import "./index.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="header">
          <div className="logo">
            <h2>Qaychi.az</h2>
          </div>

          <div className="socialMedia">
            <div>
              <FaFacebookF className="icon" />
            </div>

            <div>
              <FaInstagram className="icon" />
            </div>

            <div>
              <FaLinkedinIn className="icon" />
            </div>

            <div>
              <FaTiktok className="icon" />
            </div>

            <div>
              <FaYoutube className="icon" />
            </div>

            <div>
              <FaWhatsapp className="icon" />
            </div>
          </div>
        </div>

        <div className="contactInfo">
          <a href="tel:+994512322021" className="tel">
            <HiOutlinePhone className="icon" />

            <div>
              <p>Mobil/Whatsapp</p>
              <p className="bold">+994512322021</p>
            </div>
          </a>

          <a href="mailto:info@qaychi.az" className="mail">
            <HiOutlineMail className="icon" />

            <div>
              <p>E-Mail</p>
              <p className="bold">info@qaychi.az</p>
            </div>
          </a>

          <a
            href={
              "https://www.google.com/maps/place/Code+Academy/@40.377191,49.853945,15z/data=!4m6!3m5!1s0x40307d079efb5163:0xc20aa51a5f0b5e01!8m2!3d40.3771909!4d49.8539455!16s%2Fg%2F11c584m839?hl=tr-TR&entry=ttu"
            }
            className="location"
            target="_blank"
          >
            <HiOutlineLocationMarker className="icon" />

            <div>
              <p>Ünvan</p>
              <p className="bold">Bakı, Binə, Xəzər rayonu, ev 273, mənzil 2</p>
            </div>
          </a>
        </div>

        <nav>
          <div className="left">
            <div className="category">
              <div className="headText">
                <p>Haqqımızda</p>
              </div>

              <div className="links">
                <Link to={"/about"}>Biz kimik?</Link>
                <Link to={"/about"}>Missiyamız</Link>
                <Link to={"/about"}>Fəaliyyətlərimiz</Link>
              </div>
            </div>

            <div className="category">
              <div className="headText">
                <p>Partnyorlarımız</p>
              </div>

              <div className="links">
                <Link to={"/"}>Salonlar</Link>
                <Link to={"/"}>Bərbərxanalar</Link>
                <Link to={"/"}>Fitness zalları</Link>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="category">
              <div className="headText">
                <p>Bizə qoşul</p>
              </div>

              <div className="links">
                <Link to={"/"}>Qeydiyyat</Link>
                <Link to={"/"}>Daxil ol</Link>
                <Link to={"/"}>Partnyor ol</Link>
              </div>
            </div>

            <div className="category">
              <div className="headText">
                <p>Xəbərlər</p>
              </div>

              <div className="links">
                <Link to={"/"}>Blog</Link>
                <Link to={"/"}>Xəbərlər</Link>
                <Link to={"/"}>Yeni üzvlərimiz</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
