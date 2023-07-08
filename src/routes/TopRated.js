import React from "react";
import List from "../components/List";

const TopRated = () => {
  const uri = "https://api.themoviedb.org/3/movie/top_rated";
  return <List uri={uri} topic="Top Rated" />;
};

export default TopRated;
