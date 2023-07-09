import React from "react";
import { Link } from "react-router-dom";

import classes from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <div className={classes.welcome__container}>
      <h1>
        <p>
          Welcome to <span>Boblex</span>
        </p>
        <br />
        <p>
          Find your <span>Best of Best movie</span> here with us!
        </p>
      </h1>
      <Link to="/home">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default Welcome;
