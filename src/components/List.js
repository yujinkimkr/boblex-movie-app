import React, { useState, useEffect } from "react";
// import loader from "../images/loading.gif";
import Movie from "./Movie";
import classes from "./List.module.scss";

const List = ({ uri, topic }) => {
  // const [loading, setLoading] = useState(true);
  const [playingMovies, setplayingMovies] = useState([]);

  const fetch = require("node-fetch");
  const API_KEY = "9e550adf8759e45fbff105734c32aaff";

  const url = `${uri}?api_key=${API_KEY}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTU1MGFkZjg3NTllNDVmYmZmMTA1NzM0YzMyYWFmZiIsInN1YiI6IjY0NzBhYWE5MzM2ZTAxMDE0YjYyN2Y3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LerSBHzskWc5ZTkzh1S_dQkgDGQZl-3nP5IVPraCtno",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setplayingMovies(json);
        // setLoading(false);
      })
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <React.Fragment>
      <h1>{topic}</h1>
      <div className={classes.list__inner}>
        <div className={classes.movie__list}>
          {playingMovies.results &&
            playingMovies.results.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
                releaseDate={movie.release_date}
                rate={movie.vote_average}
              />
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default List;
