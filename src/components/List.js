import React, { useState, useEffect, useMemo } from "react";
import Movie from "./Movie";
import classes from "./List.module.scss";

const List = ({ uri, topic }) => {
  const [playingMovies, setplayingMovies] = useState([]);

  const fetch = require("node-fetch");
  const API_KEY = "9e550adf8759e45fbff105734c32aaff";

  const url = `${uri}?api_key=${API_KEY}`;

  const options = useMemo(
    () => ({
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTU1MGFkZjg3NTllNDVmYmZmMTA1NzM0YzMyYWFmZiIsInN1YiI6IjY0NzBhYWE5MzM2ZTAxMDE0YjYyN2Y3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LerSBHzskWc5ZTkzh1S_dQkgDGQZl-3nP5IVPraCtno",
      },
    }),
    []
  );

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setplayingMovies(json);
      })
      .catch((err) => console.error("error:" + err));
  }, [url, options, fetch]);

  return (
    <React.Fragment>
      <div className={classes.list__inner}>
        <h1 classsName={classes["list-title"]}>{topic}</h1>
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
