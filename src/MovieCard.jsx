import React from "react";

const MovieCard = ({ movie1 }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie1.Title}</p>
      </div>
      <div>
        <img
          src={
            movie1.Poster !== "N/A"
              ? movie1.Poster
              : "https://via.placeholer.com/400"
          }
          alt=""
        ></img>
      </div>
      <div>
        <span>{movie1.Type}</span>
        <h3>{movie1.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;