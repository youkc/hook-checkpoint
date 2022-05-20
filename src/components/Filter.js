import React from "react";

function Filter({ filterText }) {
  return (
    <>
      <div className="filterbox">
        <div className="text-center">
          <input
            type="text"
            placeholder="Chercher un film..."
            className="form-control mb-4"
            onChange={(e) => filterText(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default Filter;