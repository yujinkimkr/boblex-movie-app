import React from "react";
import classes from "./Navbar.module.scss";
import menuBar from "../images/menu-bar.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const currentLink = pathname.slice(1);

  return (
    <div className={classes["navbar__list"]}>
      <div>
        <Link to="/">
          <div className={classes.logo}>Boblex</div>
        </Link>
        <img className={classes["menu-bar"]} src={menuBar} alt="menu-bar" />
      </div>
      <ul className={classes["menu__list"]}>
        <Link to="/TopRated">
          <li
            className={currentLink === "TopRated" ? classes["nav-effect"] : ""}
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
            className={currentLink === "Upcoming" ? classes["nav-effect"] : ""}
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
  );
};

export default Navbar;
