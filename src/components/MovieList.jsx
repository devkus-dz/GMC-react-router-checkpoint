import MovieCard from "./MovieCard";

// MovieList component as grid to display movies cards
const MovieList = ({ movies }) => {
    return (
        <>
            <div className="box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {movies.map((movie) => 
                    // Passing movies data to child component MovieCard
                    <MovieCard 
                        key         =  {movie.id}
                        id          =  {movie.id}
                        title       =  {movie.title}
                        description =  {movie.description}
                        posterURL   =  {movie.posterURL}
                        rating      =  {movie.rating}
                    /> 
                )}
            </div>
        </>
    );
 }

 export default MovieList;