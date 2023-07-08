import React, { useEffect, useState } from "react";
import classes from "./Actor.module.scss";
import NoImg from "../images/noimg.png";
const Actor = (props) => {
  const [actorInfo, setActorInfo] = useState({});

  const API_KEY = "9e550adf8759e45fbff105734c32aaff";
  // const url = `https://api.themoviedb.org/3/movie/${props.id}/credits?api_key=9e550adf8759e45fbff105734c32aaff`;
  const url = `https://api.themoviedb.org/3/movie/${props.id}/credits?api_key=${API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setActorInfo(json);
      })
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <div className={classes.actors}>
      {actorInfo.cast &&
        actorInfo.cast.map((cast, index) => (
          <div className={classes.actor__card} key={cast.id}>
            {cast.profile_path ? (
              <img
                alt={`profile of ${cast.name}`}
                src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
              />
            ) : (
              <img
                src={NoImg}
                alt="Undefined"
                style={{ width: "120px", height: "180px" }}
              />
            )}
            <p>
              <span>{cast.name}</span> <br />
              <span>{cast.character}</span>
            </p>
          </div>
        ))}
    </div>
  );
};

export default Actor;
