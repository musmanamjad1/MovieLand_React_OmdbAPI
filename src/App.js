import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com?apikey=80fe294a";
function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    searchMovies("Batman");
  }, []);
  return (
    <div className="app">
      <h1> MOVIE LAND</h1>
      <div className="search">
        <input
          placeholder="Search Movie"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie}></MovieCard>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> NO MOVIES FOUND</h2>
        </div>
      )}
    </div>
  );
}

export default App;
