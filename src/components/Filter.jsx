import MovieForm from "./MovieForm";
import { useState } from "react";

const Filter = ({ setTitleFilter, setRatingFilter, addMovie }) => {
    // Local state to control if the MovieForm is open or closed
    const [openForm, setOpenForm] = useState(false);

    // Toggle function to open/close the MovieForm modal
    const displayForm = () => { setOpenForm(!openForm) }

    return (
        <>
            <div className="box flex flex-col md:flex-row gap-6 justify-between">
                {/* Input to filter movies by title */}
                <input
                    type="text"
                    placeholder="Filter by title..."
                    onChange={(e) => setTitleFilter(e.target.value)}
                />

                {/* Input to filter movies by minimum rating */}
                <input
                    type="number"
                    placeholder="Minimum rating..."
                    onChange={(e) => setRatingFilter(parseFloat(e.target.value))}
                    min="0" max="5" step="0.1"
                />

                {/* Button to open the New Movie form */}
                <button onClick={displayForm} className="btn">{openForm ? "Hide Form" : "New Movie"}</button>
            </div>

            {/* Display the MovieForm modal if openForm is true */}
            <MovieForm open={openForm} addMovie={addMovie} />
            
        </>
    );
 }

 export default Filter;