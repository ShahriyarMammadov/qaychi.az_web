import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import {
  FaMagnifyingGlass,
  FaBarsStaggered,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
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
          <Link>
            <h2>Qaychi.az</h2>
          </Link>
        </div>

        <nav>
          <NavLink to={"/"}>Ana Səhifə</NavLink>
          <NavLink to={"/haqqimizda"}>Haqqımızda</NavLink>
          <NavLink to={"/services"}>Xidmətlər</NavLink>
          <NavLink to={"/contact"}>Əlaqə</NavLink>

          <div className="searchContainer">
            <FaMagnifyingGlass className="searchIcon" />
          </div>

          <div className="menuBar" onClick={() => setOpen(true)}>
            <FaBarsStaggered />
          </div>
        </nav>
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
            <div
              onClick={() => {
                setSubMenu(subMenu === 1 ? 0 : 1);
              }}
            >
              <Link to={"/haqqimizda"}>Haqqımızda</Link>
            </div>

            <Link to={"/rezervation"} onClick={() => setOpen(false)}>
              Rezervasiya
            </Link>

            <div
              onClick={() => {
                setSubMenu(subMenu === 2 ? 0 : 2);
              }}
            >
              <Link to={"/services"}>Xidmətlər</Link>
            </div>

            <div
              onClick={() => {
                setSubMenu(subMenu === 2 ? 0 : 2);
              }}
            >
              <Link to={"/contact"}>Əlaqə</Link>
            </div>
          </nav>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            alias nam voluptate accusamus vitae at vero mollitia cumque ducimus
            assumenda.
          </p>

          <div className="socialMediaIcons">
            <a
              href="https://www.facebook.com/NatureFriends"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="socialIcons" />
            </a>

            <a
              href="https://www.instagram.com/naturefriendsaz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram className="socialIcons" />
            </a>

            <a
              href="https://www.facebook.com/NatureFriends"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="socialIcons" />
            </a>

            <a
              href="https://www.facebook.com/NatureFriends"
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
