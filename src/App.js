import { useEffect } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com?apikey=80fe294a";
function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  const movie1 = {
    Title: "Batman Begins",
    Year: "2005",
    imdbID: "tt0372784",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  };
  useEffect(() => {
    searchMovies("Batman");
  }, []);
  return (
    <div className="app">
      <h1> MOVIE LAND</h1>
      <div className="search">
        <input placeholder="Search Movie" onChange={() => {}} />
        <img src="{SearchIcon}" alt="Search" onChange={() => {}} />
      </div>
      <div className="container">
        <MovieCard movie1={movie1}></MovieCard>
      </div>
    </div>
  );
}

export default App;
