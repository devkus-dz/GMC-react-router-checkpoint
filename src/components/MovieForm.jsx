import { useState } from "react";

const MovieForm = ({ open, addMovie }) => {

    // State to store new movie data typed by the user
    const [newMovie, setNewMovie] = useState({
        title       :   '',
        description :   '',
        posterURL   :   'https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg',
        rating      :   0,
        details     :   { trailer : "", fullDescription : "" }
    });

    // Function to handle input changes (text, textarea, number inputs)
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "trailer" || name === "fullDescription") {
            // Update inside the 'details' object
            setNewMovie((prev) => ({
                ...prev,
                details: {
                    ...prev.details,
                    [name]: value,
                },
            }));
        } else {
            // Update top-level fields
            setNewMovie((prev) => ({
                ...prev,
                [name]: name === "rating" ? parseFloat(value) : value,
            }));
        }
    };

  // Function triggered when submitting the form
    const handleSubmit = (e) => {
        e.preventDefault();
        // Send the newMovie object to parent component (Filter ➔ App)
        addMovie(newMovie);
        // clear the form fields after submission
        setNewMovie({
            title       : '',
            description : '',
            posterURL   : 'https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg',
            rating      : 0,
            details     :   { trailer : "", fullDescription : "" }
        });
    };

    return (
        // Render the form only if the props open === true
        open && (
        <div className="box">
            <h2 className="py-5 text-center text-2xl">New Movie</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:px-48">
                <label htmlFor="title" className="font-semibold">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={newMovie.title}
                    onChange={handleChange}
                    className="border p-2 rounded-md"
                    required
                />

                <label htmlFor="description" className="font-semibold">Short Description</label>
                <textarea
                    name="description"
                    id="description"
                    rows="3"
                    value={newMovie.description}
                    onChange={handleChange}
                    className="border p-2 rounded-md"
                    required
                />

                <label htmlFor="rating" className="font-semibold">Rating</label>
                <input
                    type="number"
                    name="rating"
                    id="rating"
                    min="0" max="5" step="0.1"
                    value={newMovie.rating}
                    onChange={handleChange}
                    className="border p-2 rounded-md"
                    required
                />

                <label htmlFor="posterURL" className="font-semibold">Image URL</label>
                <input
                    type="text"
                    name="posterURL"
                    id="posterURL"
                    value={newMovie.posterURL}
                    onChange={handleChange}
                    placeholder="URL of the movie image..."
                    className="border p-2 rounded-md"

                />

                <label htmlFor="fullDescription" className="font-semibold">Description</label>
                <textarea
                    name="fullDescription"
                    id="fullDescription"
                    rows="5"
                    value={newMovie.details.fullDescription}
                    onChange={handleChange}
                    className="border p-2 rounded-md"
                    required
                />

                <label htmlFor="trailer" className="font-semibold">Trailer URL (embed)</label>
                <input
                    type="text"
                    name="trailer"
                    id="trailer"
                    value={newMovie.details.trailer}
                    onChange={handleChange}
                    placeholder="URL of the movie trailer..."
                    className="border p-2 rounded-md"

                />

                <button type="submit" className="btn w-32">
                    Send
                </button>
            </form>
        </div>
        )
    );
};

export default MovieForm;