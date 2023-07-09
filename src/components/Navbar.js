import React, { useState } from "react";
import classes from "./Navbar.module.scss";
import menuBar from "../images/menu-bar.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const currentLink = pathname.slice(1);

  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <React.Fragment>
      {menuVisible && (
        <div className={`${classes.responsive__navbar}`}>
          <ul>
            <Link to="/">
              <li onClick={toggleMenu}>Home</li>
            </Link>

            <Link to="/TopRated">
              <li onClick={toggleMenu}>Top Rated</li>
            </Link>
            <Link to="/NowPlaying">
              <li onClick={toggleMenu}>Now Playing</li>
            </Link>
            <Link to="/Upcoming">
              <li onClick={toggleMenu}>Upcoming</li>
            </Link>
            <Link to="/Popular">
              <li onClick={toggleMenu}>Popular</li>
            </Link>
          </ul>
        </div>
      )}
      <div className={classes["navbar__list"]}>
        <Link to="/">
          <div className={classes.logo}>Boblex</div>
        </Link>
        <img
          onClick={toggleMenu}
          className={classes["menu-bar"]}
          src={menuBar}
          alt="menu-bar"
        />
        <ul className={classes["menu__list"]}>
          <Link to="/TopRated">
            <li
              className={
                currentLink === "TopRated" ? classes["nav-effect"] : ""
              }
            >
              Top Rated
            </li>
          </Link>
          <Link to="/NowPlaying">
            <li
              className={
                currentLink === "NowPlaying" ? classes["nav-effect"] : ""
              }
            >
              Now Playing
            </li>
          </Link>
          <Link to="/Upcoming">
            <li
              className={
                currentLink === "Upcoming" ? classes["nav-effect"] : ""
              }
            >
              Upcoming
            </li>
          </Link>
          <Link to="/Popular">
            <li
              className={currentLink === "Popular" ? classes["nav-effect"] : ""}
            >
              Popular
            </li>
          </Link>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
