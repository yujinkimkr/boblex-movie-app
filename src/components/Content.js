import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import classes from "./Content.module.scss";
import star from "../images/star.svg";
import play from "../images/play_white.svg";
import Video from "./Video";
import Actor from "./Actor";
import Similar from "./Similar";

const Content = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);

  const [menuShowState, setMenuShowState] = useState({
    overview: true,
    trailer: false,
    similarMovie: false,
    actors: false,
  });

  const menuShowHandler = (event) => {
    if (event.target.textContent === "OVERVIEW") {
      setMenuShowState((prevState) => ({
        overview: true,
        trailer: false,
        similarMovie: false,
        actors: false,
      }));
    } else if (event.target.textContent === "TRAILERS") {
      setMenuShowState((prevState) => ({
        overview: false,
        trailer: true,
        similarMovie: false,
        actors: false,
      }));
    } else if (event.target.textContent === "MOVIE LIKE THIS") {
      setMenuShowState((prevState) => ({
        overview: false,
        trailer: false,
        similarMovie: true,
        actors: false,
      }));
    } else if (event.target.textContent === "ACTORS") {
      setMenuShowState((prevState) => ({
        overview: false,
        trailer: false,
        similarMovie: false,
        actors: true,
      }));
    }
  };

  const fetch = require("node-fetch");

  const API_KEY = "9e550adf8759e45fbff105734c32aaff";
  const uri = `https://api.themoviedb.org/3/movie/${id}`;
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
        console.log("details", json);
        setMovieInfo(json);
      })
      .catch((err) => console.error("error:" + err));
  }, [fetch, options, url]);

  /* Crew Info */
  const [crewInfo, setCrewInfo] = useState({});

  const crewUrl = useMemo(
    () => `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`,
    [id]
  );
  useEffect(() => {
    fetch(crewUrl)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setCrewInfo(json);
      })
      .catch((err) => console.error("error:" + err));
  }, [crewUrl, fetch, options]);

  return (
    <div
      className={classes[`content-container`]}
      style={{
        backgroundImage: movieInfo.backdrop_path
          ? `url(https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path})`
          : "none",
      }}
    >
      <div className={classes["poster-container"]}>
        {movieInfo.poster_path && (
          <img
            className={classes.poster}
            src={`https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`}
            alt={`Movie Poster of ${movieInfo.title}`}
          />
        )}
      </div>
      <div className={classes["movieInfo-container"]}>
        <div className={classes["movieInfo-top"]}>
          <h2>{movieInfo.title}</h2>
          <div>
            {movieInfo.release_date &&
              movieInfo.release_date.replaceAll("-", ".")}{" "}
            &nbsp; | &nbsp; {movieInfo.runtime}min |
            {movieInfo.production_countries &&
              movieInfo.production_countries.map((country) => (
                <span key={country.iso_3166_1}>
                  &nbsp; {country.iso_3166_1}
                </span>
              ))}
            &nbsp; | &nbsp;{" "}
            <img src={star} alt="star" style={{ width: "12px" }} />{" "}
            {Math.round(movieInfo.vote_average * 10) / 10} &nbsp; | &nbsp;
            {movieInfo.genres &&
              movieInfo.genres.map((genre) => (
                <span className={classes.genre} key={genre.id}>
                  {genre.name}
                </span>
              ))}
          </div>
        </div>
        <div className={classes["movieInfo-menu"]}>
          <span onClick={menuShowHandler}>OVERVIEW</span>
          <span onClick={menuShowHandler}>TRAILERS</span>
          <span onClick={menuShowHandler}>MOVIE LIKE THIS</span>
          <span onClick={menuShowHandler}>ACTORS</span>
        </div>

        <div className={classes["content-menu"]}>
          {menuShowState.overview && (
            <div className={classes["content-menu__inner"]}>
              <span className={classes.overview}>{movieInfo.overview}</span>
              <div className={classes["overview-info"]}>
                {crewInfo &&
                  crewInfo.crew &&
                  crewInfo.crew
                    .filter(
                      (member) =>
                        member.job === "Director" || member.job === "Novel"
                    )
                    .map((member) => (
                      <ul className={classes.crew} key={member.name}>
                        <li key={member.name}>{member.name}</li>
                        <li key={member.job}>{member.job} </li>
                      </ul>
                    ))}
              </div>

              <a
                href={`${movieInfo.homepage}`}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <button className={classes["play-btn"]}>
                    <div>
                      <img src={play} alt="play" style={{ width: "15px" }} />
                    </div>
                    <p></p>
                  </button>
                </div>
              </a>
            </div>
          )}
          <div className={classes.content__other}>
            {menuShowState.trailer && <Video id={movieInfo.id} />}
            {menuShowState.similarMovie && <Similar id={id} />}

            {menuShowState.actors && <Actor id={id} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
