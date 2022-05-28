import React, { useState } from "react";
import Filter from "./Filter";
import MovieCard from "./MovieCard";

const MovieList = ({ movie }) => {
  const [text, settext] = useState("");
  const filterText = (txt) => {
    settext(txt);
  };

  return (
    <div>
    <h2>Liste des films</h2>
      <Filter filterText={filterText}  />
      <div className="row">
        {movie.filter(
            (movie) =>
              movie.name.toLowerCase().includes(text.toLowerCase())
          )
          .map((movie) => <MovieCard element={movie} key={movie.id} />)
          .reverse()}
      </div>
    </div>
  );
};

export default MovieList;
