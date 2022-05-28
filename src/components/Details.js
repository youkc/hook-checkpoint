import { React } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Details(props) {

  const navigate = useNavigate();
  let idm = useParams().id;

  //let mov = props.movie.find((f) => f.id === idm);
  let movie = props.movie.find(movie => movie.id === idm);

  return (
    <div>
      <div>
        <h1>{movie.id}</h1>
        <p>{movie.description}</p>
      </div>

      <button className="btn btn-primary" onClick={() => navigate('/')}>Go back</button>
    </div>
  );
};

export default Details;
