import React, { useState, useEffect, useMemo } from "react";

const Video = (props) => {
  const [videoInfo, setVideoInfo] = useState([]);

  const fetch = require("node-fetch");
  const url = `https://api.themoviedb.org/3/movie/${props.id}/videos?language=en-US`;

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
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
        setVideoInfo(json);
      } catch (error) {
        console.error("error:" + error);
      }
    };

    fetchData();
  }, [url, fetch, options]);

  return (
    <div style={{ display: "flex", width: "100%" }}>
      {videoInfo && videoInfo.results && (
        <iframe
          title={`video of ${videoInfo.title}(${videoInfo.id})`}
          key={videoInfo.id}
          width="100%"
          height="330"
          src={`https://www.youtube.com/embed/${videoInfo.results[0].key}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Video;

// https://api.themoviedb.org/3/movie/385687/videos?api_key=9e550adf8759e45fbff105734c32aaff
