// MovieCard Component with data from parent component MovieList
import {Link} from 'react-router-dom'

const MovieCard = ({
        id          = null,
        title       = "movie title",
        description = "movie description",
        posterURL   = "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg",
        rating      = 0,
        details= {
            fullDescription : "",
            trailer : ""
        }
}) => {
    return (
        // Getting data from parent component MovieList to generate a MovieCard for each movie
        <Link to={`/${id}`} className="card">
            <img className="object-cover rounded-t-lg md:h-full md:w-38 md:rounded-none md:rounded-s-lg" src={posterURL} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h2>{title}</h2>
                <p className="mb-3 font-normal text-gray-700">{description}</p>
                <p>rating : <span className="text-slate-50 bg-fuchsia-600 px-2 py-1 rounded-full">{rating}/5</span></p>
            </div>
        </Link>

    );
 }

 export default MovieCard; 