import React, { useState, useEffect, useMemo } from "react";
import Movie from "./Movie";
import classes from "./HomeList.module.scss";

const HomeList = ({ topic }) => {
  const [playingMovies, setplayingMovies] = useState([]);

  const fetch = require("node-fetch");
  const API_KEY = "9e550adf8759e45fbff105734c32aaff";
  let uri = "";
  if (topic === "Top Rated") {
    uri = "https://api.themoviedb.org/3/movie/top_rated";
  } else if (topic === "Now Playing") {
    uri = "https://api.themoviedb.org/3/movie/now_playing";
  } else if (topic === "Upcoming") {
    uri = "https://api.themoviedb.org/3/movie/upcoming";
  } else if (topic === "Popular") {
    uri = "https://api.themoviedb.org/3/movie/popular";
  }
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
    <div className={classes.list__inner}>
      <h1>{topic}</h1>
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
  );
};

export default HomeList;
