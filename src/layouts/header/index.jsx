import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaRegPaperPlane,
  FaBarsStaggered,
} from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const Header = () => {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to={"/"}>
            <h4>Qaychi.az</h4>
          </Link>
        </div>

        <nav>
          <NavLink to={"/"}>Ana Səhifə</NavLink>
          <NavLink to={"/about"}>Haqqımızda</NavLink>
          <NavLink to={"/partners"}>Partnyorlar</NavLink>
          <NavLink to={"/contact"}>Əlaqə</NavLink>
        </nav>

        <div className="menu">
          <button>
            <FaRegPaperPlane className="icon" /> <span>Bizə qoşul</span>
          </button>

          <div className="menuBar" onClick={() => setOpen(true)}>
            <FaBarsStaggered />
          </div>
        </div>
      </div>

      <div id="drawer" className={open ? "open" : "closed"} ref={drawerRef}>
        <div className={open ? "drawerContent  open" : "drawerContent closed"}>
          <div className="head">
            <h4>MENU</h4>
            <div className="closeIcon" onClick={() => setOpen(false)}>
              x
            </div>
          </div>

          <nav>
            <Link to={"/about"} onClick={() => setOpen(false)}>
              Haqqımızda
            </Link>

            <Link to={"/rezervation"} onClick={() => setOpen(false)}>
              Rezervasiya
            </Link>

            <Link to={"/services"} onClick={() => setOpen(false)}>
              Xidmətlər
            </Link>

            <Link to={"/contact"} onClick={() => setOpen(false)}>
              Əlaqə
            </Link>
          </nav>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            alias nam voluptate accusamus vitae at vero mollitia cumque ducimus
            assumenda.
          </p>

          <div className="socialMediaIcons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="socialIcons" />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram className="socialIcons" />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="socialIcons" />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="socialIcons" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
