import React from "react";
import List from "../components/List";

const Popular = () => {
  const uri = "https://api.themoviedb.org/3/movie/popular";
  return <List uri={uri} topic="Popular" />;
};

export default Popular;
