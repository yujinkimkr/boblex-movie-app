import React from "react";
import classes from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <ul>
        <Link to="/">
          <li>Boblex</li>
        </Link>
      </ul>
      <ul>
        <li>Company</li>
        <li>About</li>
        <li>Jobs</li>
        <li>For the Record</li>
      </ul>
      <ul>
        <li>Community</li>
        <li>Boblex Blog</li>
        <li>Boblex Marketplace</li>
      </ul>
      <ul>
        <li>Useful Links</li>
        <li>FAQ</li>
        <li>Customer Service</li>
        <li>Site map</li>
      </ul>
    </div>
  );
};

export default Footer;
