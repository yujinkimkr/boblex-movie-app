import React from "react";
import List from "../components/List";

const UpComing = () => {
  const uri = "https://api.themoviedb.org/3/movie/upcoming";
  return <List uri={uri} topic="Upcoming" />;
};

export default UpComing;
