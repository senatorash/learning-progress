import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description:
        "A thief who steals corporate secrets through dream-sharing technology.",
      posterURL: "https://imageurl.com/inception",
      rating: 8.8,
    },
    {
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      posterURL: "https://imageurl.com/interstellar",
      rating: 8.6,
    },
    // Add more movie objects here...
  ]);

  const [filter, setFilter] = useState({ title: "", rating: "" });

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      (filter.rating ? movie.rating >= parseFloat(filter.rating) : true)
    );
  });

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1>My Movie App</h1>
      <Filter setFilter={setFilter} />
      <MovieList movies={filteredMovies} />
      <AddMovie addMovie={addMovie} />
    </div>
  );
};

export default App;
