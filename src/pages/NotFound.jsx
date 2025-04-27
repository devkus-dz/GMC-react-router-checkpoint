import {Link} from 'react-router-dom'

export default function NotFound(){
    return (
        // Display a message and a link to home page
        <div className="box  flex flex-col items-center justify-center gap-5">
            <h2 className="text-center">Page not found</h2>
            <Link to="/" className="btn-outline">Return to Home Page</Link>
        </div>
    );
}