import React, { useState, useEffect, useMemo } from "react";
import classes from "./Similar.module.scss";
import NoImg from "../images/img_width.png";

const Similar = ({ id }) => {
  const [similarMovies, setSimilarMovies] = useState([]);

  const fetch = require("node-fetch");

  const API_KEY = "9e550adf8759e45fbff105734c32aaff";
  const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`;

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
        console.log("Similar ... ", json);
        setSimilarMovies(json);
      })
      .catch((err) => console.error("error:" + err));
  }, [fetch, options, url]);

  return (
    <div className={classes.similar__container}>
      {similarMovies &&
        similarMovies.results &&
        similarMovies.results.map((movie) => (
          <div className={classes.similar__inner} key={movie.id}>
            {movie.backdrop_path ? (
              <img
                alt={`backdrop poster of ${movie.name}`}
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              />
            ) : (
              <img src={NoImg} alt="Undefined" />
            )}
            <span className={classes.title}>{movie.title}</span>
          </div>
        ))}
    </div>
  );
};

export default Similar;
