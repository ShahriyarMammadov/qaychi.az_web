import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { FaMagnifyingGlass, FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
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

          <div className="menuBar">
            <FaBarsStaggered />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
