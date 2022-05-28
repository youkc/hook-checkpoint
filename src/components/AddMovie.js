import React, { useState } from "react";

const AddMovie = ({ myMovie }) => {
  const [addMovie, setAddMovie] = useState({
    name: "",
    description: "",
    posterurl: "",
    rating: 0,
  });
  return (
    <div className="card p-4 mb-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="addMovie">
            <div className="mb-3">
              <label className="nameT"> Name</label>
              <input
                className="addTitle form-control"
                type="text"
                name="name"
                onChange={(e) => {
                  setAddMovie({ ...addMovie, name: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label className="desc"> Description</label>
              <input
                type="text"
                name="description"
                className="form-control"
                onChange={(e) => {
                  setAddMovie({ ...addMovie, description: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label className="url"> PosterURL</label>
              <input
                type="text"
                name="posterurl"
                className="form-control"
                onChange={(e) => {
                  setAddMovie({ ...addMovie, posterurl: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label className="rate"> Rating</label>
              <input
                type="text"
                name="rating"
                className="form-control"
                onChange={(e) => {
                  setAddMovie({ ...addMovie, rating: e.target.value });
                }}
              />
            </div>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              myMovie(addMovie);
            }}
          >
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
