import "./App.css";
import { useState } from "react";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [movie, setMovie] = useState([
    {
      id: 1,
      name: "Star wars",
      posterurl: "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      rating: 5,
    },
    {
      id: 2,
      name: "Spiderman",
      posterurl: "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      rating: 4,
    },
    {
      id: 3,
      name: "Transformers",
      posterurl: "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      rating: 2,
    },
    {
      id: 4,
      name: "Captain america",
      posterurl: "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      rating: 3,
    },
    {
      id: 5,
      name: "Les mutants",
      posterurl: "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      rating: 5,
    },
    {
      id: 6,
      name: "Warcraft",
      posterurl: "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      rating: 1,
    },
  ]);
  let addNewMovie = (newMovie) => {
    setMovie([...movie, newMovie]);
  };

  return (
    <div className="container">
      <div className="row g-5 pt-5">
        <div className="col-md-4 mb-5">
          <h3>Ajouter un film</h3>
          <hr className="mb-4" />
          <div className="Card p-4 shadow">
            <AddMovie myMovie={addNewMovie} />
          </div>
        </div>
        <div className="col-md-8">
          <h3>Liste des films</h3>
          <hr className="mb-4" />
          <MovieList movie={movie} />
        </div>
      </div>
    </div>
  );
}

export default App;
