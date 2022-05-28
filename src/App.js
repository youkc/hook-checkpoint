import "./App.css";
import { useState, Fragment } from "react";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import Details from "./components/Details";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [movie, setMovie] = useState([
    {
      id: 1,
      name: "Star wars",
      posterurl:
        "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      rating: 5,
    },
    {
      id: 2,
      name: "Spiderman",
      posterurl:
        "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      rating: 4,
    },
    {
      id: 3,
      name: "Transformers",
      posterurl:
        "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      rating: 2,
    },
    {
      id: 4,
      name: "Captain america",
      posterurl:
        "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      rating: 3,
    },
    {
      id: 5,
      name: "Les mutants",
      posterurl:
        "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      rating: 5,
    },
    {
      id: 6,
      name: "Warcraft",
      posterurl:
        "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      rating: 1,
    },
  ]);
  let addNewMovie = (newMovie) => {
    setMovie([...movie, newMovie]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
              <>
                <AddMovie myMovie={addNewMovie} />
                <MovieList movie={movie} />
              </>
            }
          />
        <Route path='detail/:id' element={<Details  movie={movie}  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
