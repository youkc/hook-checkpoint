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
      <Filter filterText={filterText}  />
      <div className="row">
        {movie.filter(
            (movie) =>
              movie.name.toLowerCase().includes(text.toLowerCase())
          )
          .map((el) => <MovieCard element={el} />)
          .reverse()}
      </div>
    </div>
  );
};

export default MovieList;
