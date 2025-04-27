import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NotFound from './pages/NotFound.jsx'
import MovieDetails from './pages/MovieDetails.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// I refered to this video to learn how to implement react router for this project
// video : https://www.youtube.com/watch?v=oTIJunBa6MA
const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path:"/:movieId",
    element: <MovieDetails />
  },
  {
    path:"/404",
    element: <NotFound />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
