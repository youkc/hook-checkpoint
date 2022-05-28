import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ element }) => {

  return (
    <div className="col-md-4 mb-5">
      <div className="movie-card">
        <img src={element.posterurl} alt="" className="card-img-top mb-3" />
        <p>{element.description}</p>
          <p className="rating">Note: {element.rating} &#9733;</p>
        <Link className="btn btn-primary" to={"/detail/"+element.id}>Read more</Link>
      </div>
    </div>
  );
};

export default MovieCard;
