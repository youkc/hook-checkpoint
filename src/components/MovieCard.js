import "../App.css";
import React from "react";

const MovieCard = ({ element }) => {
  return (
    <div className="col-md-4">
      <div class="card mb-4">
        <img src={element.posterurl} className="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-title">{element.name}</h5>
          <p class="card-text">{element.description}</p>
          <p className="rating">Note: {element.rating} &#9733;</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
