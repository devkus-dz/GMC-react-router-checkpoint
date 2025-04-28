import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import movies from '../movies';

export default function MovieDetails() {

    const { movieId } = useParams(); // Get the dynamic movieId from the URL

    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(true); // state to control initial loading
    
    useEffect(() => {

        const storedMovies = JSON.parse(localStorage.getItem('movies')) || []; // Load movies from localStorage
        const selectedMovie = storedMovies.find((movie) => movie.id == movieId); // Find the movie by id

        setMovieData(selectedMovie || null); // update movieData
        setLoading(false); // Mark loading as finished
        
    }, [movieId]);

    // While loading, i will implement a spinner later
    if (loading) {
        return null;
    }

    // After loading, if movieData is still null => Not Found
    if (!movieData) {
        return <Navigate to="/404" replace />;
    }

    return (
        <div className="box">
            <h2 className="text-4xl">MOVIE DETAILS</h2>
            <hr className="border-fuchsia-600 mb-18 mt-8" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Trailer video */}
                <iframe
                    className="w-full h-96 max-w-full border border-gray-200 rounded-xl"
                    src={movieData.details.trailer}
                    title={movieData.title}
                    allowFullScreen
                >
                </iframe>

                {/* Movie Info */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl">{movieData.title}</h2>
                    <div>
                        <h2 className="font-semibold">Description</h2>
                        <p>{movieData.details.fullDescription}</p>
                    </div>

                    {/* Back to Home button */}
                    <Link to="/" className="btn-outline w-52 text-center">
                        Back to Movies
                    </Link>
                </div>
            </div>
        </div>
    );
}
