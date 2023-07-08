import { Link } from "react-router-dom";
import { useState } from "react";
import classes from "./Movie.module.scss";
import loading from "../images/loading.gif";
import star from "../images/star.svg";

function Movie(props) {
  const [isLoading, setIsLoading] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Link to={`/content/${props.id}`}>
      <div className={classes.movie}>
        {isLoading ? (
          <img
            className={classes["movie-poster"]}
            src={loading}
            alt="Loading"
          />
        ) : (
          <img
            className={classes["movie-poster"]}
            alt={`Poster of ${props.title}`}
            src={`https://image.tmdb.org/t/p/original${props.posterPath}`}
            onLoad={handleImageLoad}
          />
        )}
        <div className={classes["movie-box"]}>
          <h3 title={`${props.title}`}>{props.title}</h3>
          <p>
            {props.releaseDate && props.releaseDate.slice(0, 4)}
            <img src={star} alt="star" />
            {props.rate}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Movie;
