import React from "react";
import classes from "./Home.module.scss";
import HomeList from "../components/HomeList";

function Home() {
  return (
    <div className={classes.home}>
      <HomeList topic="Top Rated" />
      <HomeList topic="Now Playing" />
      <HomeList topic="Upcoming" />
      <HomeList topic="Popular" />

      <div className={classes.topRated}></div>
      <div className={classes.nowPlaying}></div>
      <div className={classes.upcoming}></div>
      <div className={classes.popular}></div>
    </div>
  );
}

export default Home;
