import React from "react";
import List from "../components/List";

const NowPlaying = () => {
  const uri = "https://api.themoviedb.org/3/movie/now_playing";
  return <List uri={uri} topic="Now Playing" />;
};

export default NowPlaying;
