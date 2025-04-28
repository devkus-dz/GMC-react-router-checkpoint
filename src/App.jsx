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
    // Check if movies already exist in localStorage
    const storedMovies = JSON.parse(localStorage.getItem('movies'));

    if (storedMovies && storedMovies.length > 0) {
      // If there are movies in localStorage, use them
      setMoviesData(storedMovies);

      // Update idMovie to avoid duplicate IDs
      const maxId = Math.max(...storedMovies.map(movie => movie.id));
      setIdMovie(maxId + 1);
    } else {
      // If localStorage is empty, load from movies.js and save to localStorage
      setMoviesData(movies);
      localStorage.setItem('movies', JSON.stringify(movies));
    }
  }, []);

  // Update localStorage every time moviesData changes
  useEffect(() => {
    if (moviesData.length > 0) {
      localStorage.setItem('movies', JSON.stringify(moviesData));
    }
  }, [moviesData]);

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
