import './App.css'
import { useState, useEffect } from 'react';
import movies from './movies';
import MovieList from './components/MovieList'
import Filter from './components/Filter'

function App() {

  /*
  State variables:
  - moviesData: array to hold the list of movies
  - titleFilter: string to filter movies by title
  - ratingFilter: number to filter movies by minimum rating
  - idMovie: integer to assign unique id to new movie
  */

  const [moviesData, setMoviesData] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);
  const [idMovie, setIdMovie] = useState(10); 

  useEffect(() => {
    // Load the movies from movies.js when the component first mounts
    setMoviesData(movies);
  }, []);

  // Create a filtered list based on title and rating
  const filteredMovies = moviesData.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  // Function to add a new movie
  const addMovie = (movie) => {
    const newMovie = {
      id          : idMovie,
      ...movie,
    };
    setMoviesData([...moviesData, newMovie]);
    setIdMovie(idMovie + 1);
  };

  return (
    <>
      {/* Filter component to search movies and open the form to add a movie */}
      <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} addMovie={addMovie} />
      {/* MovieList component to display the filtered movies */}
      <MovieList movies={filteredMovies} />
    </>
  )
}

export default App
